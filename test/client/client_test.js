'use strict';
var expect = require('chai').expect;
var testFunction = require('./../../app/js/testFunction');

describe('some test', function() {
  it('should do some test propertly', function() {
    expect(testFunction()).to.eql(true);
  });
});
