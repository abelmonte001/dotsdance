var MovingDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="mdancer"></span>');
  Dancer.apply(this, arguments);


};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.height = Math.random() * 1000;
  this.left = Math.random() * 1000;
  this.$node.css({top: this.height, left: this.left, position: 'absolute'});
};