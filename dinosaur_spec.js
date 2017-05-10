var assert = require('assert');
var Item = require('dinosaur.js');

describe('Dinosaur', function () {

  var dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur({ name: 'deinonychus', offspring: 4});
  });

  it('should have a name', function () {
    assert.Equal('deinonychus', dinosaur.name);
  });

  it('should have offspring', function () {
    assert.Equal(4, dinosaur.offspring);
  });