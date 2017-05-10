var Park = require('park.js');
var Dinosaur = require('dinosaur.js');
var assert = require('assert');

describe('Park', function () {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur({ name: 'deinonychus', offspring: 4});
    dinosaur2 = new Dinosaur({ name: 'tricerotops', offspring: 1});
    dinosaur3 = new Dinosaur({ name: 'tyrannosaurus', offspring: 2});
  });

  it('should start empty', function () {
    assert.strictEqual(0, park.dinosaur.length);
  });

  it('should be able to add an item', function () {
    park.addDinosaur(dinosaur1);
    assert.Equal(1, park.dinosaur.length);
  });

  it('should be able to remove a dinosaur of type', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur('deinonychus');
    assert.strictEqual(0, park.dinosaur.length);
  });

  it('should get all dinosaurs with offspring over 2', function () {
    park.addDinosaur(dinosaur1);
  });