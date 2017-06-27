var names = ['Andres','Julie','Jen'];

names.forEach(function(name) {
  console.log('forEach',name);
});

names.forEach((name) => {
  console.log('arrorFunc', name);
})

names.forEach(name => console.log(name));

var returnMe = name => name + '!';

console.log(returnMe('Hey'));

var person = {
  name: 'Andres',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
