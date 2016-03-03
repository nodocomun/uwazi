import instance_api from '../instance_api.js'
import backend from 'fetch-mock'
import {APIURL} from '../../config.js'

describe('Login', () => {

  let fetch_mock;
  let api;

  beforeEach(() => {

    api = instance_api();

    backend.restore();
    backend
    .mock(APIURL+'test_get', 'GET', JSON.stringify({method: 'GET'}))
    .mock(APIURL+'test_post', 'POST', JSON.stringify({method: 'POST'}))
    .mock(APIURL+'test_delete', 'DELETE',JSON.stringify({method: 'DELETE'}));
  });


  describe("GET", () => {
    it("should prefix url with config api url", (done) => {
      api.get('test_get', {data:'get'})
      .then((response) => {
        expect(backend.calls().matched[0][1].body).toBe(JSON.stringify({data: 'get'}));
        expect(response.json.method).toBe('GET');
        done();
      })
      .catch(done.fail);
    });

    describe('when passing a cookie', () => {
      it('send the Cookie in the headers', (done) => {

        api = instance_api('cookie');
        api.get('test_get', {data:'get'})
        .then((response) => {

          let headers = backend.calls().matched[0][1].headers;
          expect(headers.Cookie).toBe('cookie');

          done();
        })
        .catch(done.fail);

      });
    });

  });

  describe("POST", () => {
    it("should prefix url with config api url", (done) => {
      api.post('test_post', {data:'post'})
      .then((response) => {
        expect(backend.calls().matched[0][1].body).toBe(JSON.stringify({data: 'post'}));
        expect(response.json.method).toBe('POST');
        done();
      })
      .catch(done.fail);
    });
  });

  describe("DELETE", () => {
    it("should prefix url with config api url", (done) => {
      api.delete('test_delete', {data:'delete'})
      .then((response) => {
        expect(backend.calls().matched[0][1].body).toBe(JSON.stringify({data: 'delete'}));
        expect(response.json.method).toBe('DELETE');
        done();
      })
      .catch(done.fail);
    });
  });

});