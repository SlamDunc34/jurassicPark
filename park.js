var Park = function () {
  this.dinosaurs = [];
}

Park.prototype = {
  empty: function () {
    this.dinosaurs = [];
  },

  addDinosaur: function (dinosaur) {
    this.dinosaurs.push(dinosaur);
  },

  removeDinosaur: function (name) {
    for (var dinosaur of this.dinosaurs) {
      if (dinosaur.name === name) {
        var index = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(index, 1);
      }
    }
  },

  offspringOver2: function (offspringOver) {
    var offspring = this.offspring();

    if (offspring > offspringOver) {
      

};

module.exports = Park;