function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}!`;
};

Cat.prototype.meow = function() {
  return "meow!";
};

let victor = new Cat('victor', 'tu');
victor.meow = function() {
  return "mew!";
};


let tu = new Cat('tu', 'victor');
console.log(tu.meow());
console.log(victor.meow());
