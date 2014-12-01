'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

require('../server');

describe('server tests', function() {
  it('should test get help', function (done) {
    chai.request('localhost:3000')
    .get('/getHelp')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.text).to.be.eql('getting help...');
      done();
    });
  });
});
