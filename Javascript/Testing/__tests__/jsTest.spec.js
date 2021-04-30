import { cleanup, waitFor } from '@testing-library/react'
import { getAllMovies } from '../app/utils/api'

const input = [
  { id: 4, url: 'https://www.url1.dev' },
  { id: 2, url: 'https://www.url2.dev' },
  { id: 3, url: 'https://www.link3.dev' }
]

jest.mock('../app/utils/api')

describe('Filter function', () => {
  /*afterEach(cleanup) // To cleanup every render

    test("it should filter by a search term (link)", () => {
      expect(filterByTerm(input, "link"), 'this should be equal to [{ id: 3, url: "https://www.link3.dev" }]').toEqual( [{ id: 3, url: "https://www.link3.dev" }] );
    });

    test("it should filter by a search term (url2)", () => {
      expect(filterByTerm(input, "url2"), 'this should be equal to [{ id: 2, url: "https://www.url2.dev" }]').toEqual( [{ id: 2, url: "https://www.url2.dev" }] ); // New test
    });*/

  test('clicking button brings data', () => {
    //getAllMovies.mockReturnValueOnce({})
    getAllMovies.mockResolvedValue({ page: 1 })
    getAllMovies().then(movies => console.log(movies))
    expect(getAllMovies()).toBeDefined()
  })

  /*
      test("clicking button brings data", async () => {
        //getAllMovies.mockReturnValueOnce({})
        getAllMovies.mockResolvedValue({})
        const movies = await getAllMovies()
        expect(movies).toBeDefined()
      })
    */
})

/*function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}*/
