'use strict';

require('dotenv').config();
const request = require('supertest');
const app = require('../../server/app.js').expressApp;

describe('/api/v1', () => {
  describe('#root', () => {
    describe('#GET', () => {
      it('should return status 200 with body "Hello world v1"', (done) => {
        request(app)
          .get('/')
          .expect(200)
          .expect('Hello world v1', done);
      });
    });
  });
});
