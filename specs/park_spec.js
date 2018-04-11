const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

const assert = require('assert');


describe('Park', function () {

  let park;

  // beforeEach('Park', function () {
  beforeEach( function () {
    park = new Park;
  });

  it('Enclosure Starts Empty', function () {
    assert.strictEqual(park.countDinosaurs(), 0);
  });

  it('Enclosure Can Add Dinosaur', function () {
    dinosaur = new Dinosaur("Velociraptor", 2);
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.countDinosaurs(), 1);
  });

  it('Enclosure Can Remove Dinosaur by Type', function () {
    dinosaur1 = new Dinosaur("Velociraptor", 2);
    dinosaur2 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur3 = new Dinosaur("Tricerotops", 6);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.countDinosaurs(), 3);
    park.removeDinosaursByType("Tricerotops")
    assert.strictEqual(park.countDinosaurs(), 2);
  });

  it('Should get Dinosaurs with Offspring more than 2', function () {
    dinosaur1 = new Dinosaur("Velociraptor", 2);
    dinosaur2 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur3 = new Dinosaur("Tricerotops", 6);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    result = park.dinoByOffspringCountGreaterThanTwo();
    assert.strictEqual(result.length, 2);
  });

  it ("Should calculate total Dinosaurs given the year", function() {
     const park = new Park();
     const dinosaur1 = new Dinosaur('Velociraptor', 1, 1);
     const dinosaur2 = new Dinosaur('Tyrannosaurus', 2, 1);
     const dinosaur3 = new Dinosaur('Triceratops', 3, 1);
     const dinosaur4 = new Dinosaur('Tyrannosaurus', 4, 1);
     park.addDinosaur(dinosaur1);
     park.addDinosaur(dinosaur2);
     park.addDinosaur(dinosaur3);
     park.addDinosaur(dinosaur4);
     assert.strictEqual(park.numberOfDinosaursAfterTwoYears(2), 24)
   });


});
