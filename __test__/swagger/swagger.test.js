'use strict';

require('dotenv').config();
const request = require('supertest');
const app = require('../../server/app.js').expressApp;
const swaggerSpec = require('../../server/swagger/swagger.js').swaggerSpec;

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
  });

  describe('swaggerSpec', () => {
    describe('/helloworld', () => {
      it('should exist', () => {
        expect(swaggerSpec.paths['/helloworld']).toBeDefined();
      });

      describe('GET', () => {
        it('should exist', () => {
          var helloworld = swaggerSpec.paths['/helloworld'];
          expect(helloworld.get).toBeDefined();
          expect(helloworld.get.description).toBeDefined();
          expect(helloworld.get.responses).toBeDefined();
        });

        it('should have a 200 response', () => {
          var helloworld = swaggerSpec.paths['/helloworld'];
          expect(helloworld.get.responses['200']).toBeDefined();
        });
      });
    });
  });
});
