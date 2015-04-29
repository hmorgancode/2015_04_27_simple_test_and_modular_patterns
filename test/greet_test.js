'use strict';

var Greet = require('../lib/greet.js');
var expect = require('chai').expect;

describe('Greet', function() {

  var greet;

  before(function() {
    greet = new Greet();
  });

  it('should print out a greeting', function() {
    expect(greet.greet('Arthur')).to.equal('hello Arthur');
  });

});
