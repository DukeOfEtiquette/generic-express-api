'use strict';

require('dotenv').config();
const request = require('supertest');
const app = require('../../server/app.js').expressApp;

describe('/api-docs.json', () => {
  describe('GET', () => {
    it('should return status 200 with JSON Swagger doc object', (done) => {
      request(app)
        .get('/api-docs.json')
        .expect('Content-Type', /json/)
        .expect(function(res){
          var body = res.body;
          if(body.info.title !== 'Hello World') throw new Error('incorrect Swagger title');
          if(body.basePath !== '/') throw new Error('bad basePath');
        })
        .expect(200, done);
    });

    it('should return status 200 with helloworld path', (done) => {
      request(app)
        .get('/api-docs.json')
        .expect(function(res){
          var paths = Object.keys(res.body.paths);
          if(!paths.includes('/helloworld')) throw new Error('/helloworld path missing');
        })
        .expect(200, done);
    });
  });
});