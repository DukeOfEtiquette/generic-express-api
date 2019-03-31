'use strict';

require('dotenv').config();
const request = require('supertest');
const app = require('../../server/app.js').expressApp;

describe('404', () => {
  it('should return 404 with error object', (done) => {
    request(app)
      .get('/foo')
      .expect(404)
      .expect({error: 'Resource Not Found'}, done);
  });
});
