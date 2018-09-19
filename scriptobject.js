//object and properties
//object literal
var john = {
  firstname: 'john',
  lastname: 'smith',
  birthyear:1990,
  family:['cave','slut','bitch','kiki'],
  job: 'teacher',
  ismarried: false,
  calcAge: function(){
      this.age= 2018- this.birthyear;
  }
};
var arrayobjet = new Array(john);
john.calcAge();
arrayobjet[0].firstname = 'cac';
console.log(arrayobjet[0]);
//object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthyear = 1939;
// jane['lastname']='bitch';
// console.log(jane);
