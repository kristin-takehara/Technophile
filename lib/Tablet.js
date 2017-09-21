var Tablet = function(){
  this.touch = function(x, y) {
    return {x : x , y : y};
  };
};

module.exports = Tablet;