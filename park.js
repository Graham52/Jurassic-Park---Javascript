const Park = function () {
  this.enclosure = [];
}

Park.prototype.countDinosaurs = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaursByType = function (type) {
  for(var dino of this.enclosure) {
    if (dino.type === type) {
      var index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index, 1);
    }
  }
}

Park.prototype.dinoByOffspringCountGreaterThanTwo = function () {
  var dinoList = [];
  for(var dino of this.enclosure) {
    if (dino.numberOfOffspring > 2) {
      dinoList.push(dino);
    }
  }
  return dinoList;
}

Park.prototype.numberOfDinosaursAfterTwoYears = function(year) {
  count = 0;
  for (dinosaur of this.enclosure) {
    if (dinosaur.numberOfOffspring > 0){
      count += (dinosaur.numberOfOffspring * year);
      count += 1;
    }
  }
  return count;
}


module.exports = Park;
