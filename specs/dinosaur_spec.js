const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {

  let dinosaur;

  beforeEach('Dinosaur', function () {
    dinosaur = new Dinosaur("Velociraptor", 2);
  });

  it('should have a type', function () {
    const result = dinosaur.type;
    assert.strictEqual(result, "Velociraptor");
  });

  it('has numberOfOffspring', function () {
    assert.strictEqual(dinosaur.numberOfOffspring, 2);
  });
});
