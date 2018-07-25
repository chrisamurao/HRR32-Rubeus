const sum = require('./sum');
const sampleApi = require('../lib/sampleGoogleApiData.js')
const app = require('../server/index.js');
const request = require('supertest')

//Hello World! equivalent
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//Testing out the API data
test('sample data should have a divisions property', () => {
  expect(typeof sampleApi.response.data.divisions).toEqual('object')
})

//Testing the server
describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').expect(404);
  });
  test('It should response the GET method', () => {
    return request(app).get('/').expect(200);
  })
});