

var mark = new Object();
var john = new Object();
mark.fullname = prompt('please name the first person');
mark.mass = prompt('person 1 mass');
mark.height= prompt('person 1 height');
john.fullname =prompt('please name the second person');
john.mass = prompt('person 2 mass');
john.height= prompt('person 2 height');

mark.calculateBMIs = function(){
  mark.BMIs = mark.mass / (mark.height*mark.height);
}
john.calculateBMIs = function(){
  john.BMIs = john.mass / (john.height*john.height);
}
mark.calculateBMIs();
john.calculateBMIs();
mark.BMIs>john.BMIs?alert(mark.fullname+' BMIs '+mark.BMIs +' is higher than '+john.fullname+' '+john.BMIs):alert(john.fullname+' BMIs '+john.BMIs +' is higher than '+mark.fullname+' '+mark.BMIs);
