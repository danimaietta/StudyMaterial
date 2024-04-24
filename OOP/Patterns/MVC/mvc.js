class Model {
    constructor() {
        this.data = null;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}

class View {
    render(data) {
        console.log("Rendering view with data:", data);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    handleInput(input) {
        this.model.setData(input);
        const data = this.model.getData();
        this.view.render(data);
    }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.handleInput("Hello, MVC!"); // Output: Rendering view with data: Hello, MVC!