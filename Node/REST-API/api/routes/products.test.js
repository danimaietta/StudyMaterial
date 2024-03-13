const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Product = require('../models/product');

describe('Products API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Product.deleteMany({});
  });

  describe('GET /products', () => {
    test('should return all products', async () => {
      await Product.create({ name: 'Product 1', price: 10 });
      await Product.create({ name: 'Product 2', price: 20 });

      const response = await request(app).get('/products');

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe('Product 1');
      expect(response.body[1].name).toBe('Product 2');
    });

    test('should return 404 if no products found', async () => {
      const response = await request(app).get('/products');

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('No entries found');
    });
  });

  describe('GET /products/:productId', () => {
    test('should return a product by ID', async () => {
      const product = await Product.create({ name: 'Product 1', price: 10 });

      const response = await request(app).get(`/products/${product._id}`);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Product 1');
      expect(response.body.price).toBe(10);
    });

    test('should return 404 if product not found', async () => {
      const response = await request(app).get('/products/nonexistent');

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('No valid entry found for provided ID');
    });
  });

  describe('POST /products', () => {
    test('should create a new product', async () => {
      const response = await request(app)
        .post('/products')
        .send({ name: 'New Product', price: 15 });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Handling POST request to /products');
      expect(response.body.createdProduct.name).toBe('New Product');
      expect(response.body.createdProduct.price).toBe(15);
    });

    test('should return 500 if error occurs during product creation', async () => {
      // Simulate an error by not providing required fields
      const response = await request(app).post('/products').send({});

      expect(response.status).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('PUT /products/:id', () => {
    test('should update a product if price is less than or equal to 1000', async () => {
      const product = await Product.create({ name: 'Product 1', price: 10 });

      const response = await request(app)
        .put(`/products/${product._id}`)
        .send({ name: 'Updated Product', price: 20 });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Product updated successfully');
      expect(response.body.product.name).toBe('Updated Product');
      expect(response.body.product.price).toBe(20);
    });

    test('should not update a product if price is greater than 1000', async () => {
      const product = await Product.create({ name: 'Product 1', price: 2000 });

      const response = await request(app)
        .put(`/products/${product._id}`)
        .send({ name: 'Updated Product', price: 3000 });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Product not found');
    });
  });

  describe('PATCH /products/:productId', () => {
    test('should update a product by ID', async () => {
      const product = await Product.create({ name: 'Product 1', price: 10 });

      const response = await request(app)
        .patch(`/products/${product._id}`)
        .send([{ propName: 'name', value: 'Updated Product' }]);

      expect(response.status).toBe(200);
      expect(response.body.nModified).toBe(1);
    });

    test('should return 500 if error occurs during product update', async () => {
      const response = await request(app)
        .patch('/products/nonexistent')
        .send([{ propName: 'name', value: 'Updated Product' }]);

      expect(response.status).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('PATCH /products/:productId/:name', () => {
    test('should update a product name by ID', async () => {
      const product = await Product.create({ name: 'Product 1', price: 10 });

      const response = await request(app).patch(`/products/${product._id}/Updated%20Product`);

      expect(response.status).toBe(200);
      expect(response.body.nModified).toBe(1);
    });

    test('should return 500 if error occurs during product name update', async () => {
      const response = await request(app).patch('/products/nonexistent/Updated%20Product');

      expect(response.status).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });
});