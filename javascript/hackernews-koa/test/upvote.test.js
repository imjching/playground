// testing the upvote function

// require all test modules
require('co-mocha');
var expect = require('chai').expect;
var request = require('supertest');
var thunkify = require('thunkify');
var corequest = require('co-supertest');

// we need an object to pass to request() for supertest, hence we call callback() for koa
var app = require('../src/app').callback();
var Link = require('../src/models/link');
var linkIds = []; // ids for link so we can test upvotes later

// todo: load the test db instead of dev db

describe('Upvote links', function() {

  // let's clear the database first
  before(function(done) {
    Link.remove({}, function(err) {
      done();
    });
  });

  it('should successfully submit a link', function(done) {
    request(app)
      .post('/links')
      .send({ title: 'google', URL: 'https://google.com' })
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should successfully submit a second link', function(done) {
    request(app)
      .post('/links')
      .send({ title: 'yahoo', URL: 'https://yahoo.com' })
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should successfully submit a third link', function(done) {
    request(app)
      .post('/links')
      .send({ title: 'gmail', URL: 'https://gmail.com' })
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should list all links', function(done) {
    request(app)
      .get('/links')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var body = res.body;
        expect(body).to.have.length(3); // since body returns an array

        // store the links for next test
        for(var i = 0; i < body.length; i++) {
          linkIds.push(body[i]._id);
        }
        done(); // next test
      });
  });

  // note the use of generator function here since we will use yield
  it('should upvote all links in parallel', function* () {
    // notice that we are yielding an array
    var res = yield linkIds.map(function(id) {
      return corequest(app)
              .put('/links/' + id + '/upvote')
              .set('Accept', 'application/json')
              .end();
    });

    // res is now an array of corequest response objects
    // make sure that all links are upvoted
    // alternative to async.parallel
    for(var i = 0; i < res.length; i++) {
      expect(res[i].body.upvotes).to.equal(1);
    }
  });
});
