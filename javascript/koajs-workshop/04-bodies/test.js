
require('co-mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var request = require('supertest');

var app = require('./index.js');
var stat = require('../01-co/index').stat;

describe('Bodies', function () {
  it('GET /stream should return a stream with size', function* (done) {
    var body = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');
    var size = (yield stat(path.join(__dirname, 'index.js'))).size;

    request(app.listen())
    .get('/stream')
    .expect('Content-Type', /application\/javascript/)
    .expect('Content-Length', size)
    .expect(body, done);
  })

  it('GET /json should return a JSON body', function (done) {
    request(app.listen())
    .get('/json')
    .expect('Content-Type', /application\/json/)
    .end(function (err, res) {
      if (err) return done(err);

      assert.equal(res.body.message, 'hello world');
      done();
    })
  })
})
