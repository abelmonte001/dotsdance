var GreenDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="gdancer"></span>');
  Dancer.apply(this, arguments);


};
GreenDancer.prototype = Object.create(Dancer.prototype);
GreenDancer.prototype.constructor = GreenDancer;