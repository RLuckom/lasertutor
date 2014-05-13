var Boy, doo;

doo = function(g) {
  return "zumba!";
};

Boy = (function() {
  function Boy(dork, age) {
    this.dork = dork;
    this.age = age;
  }

  Boy.prototype.semi = function(x) {
    return x / 2 + this.age;
  };

  return Boy;

})();
