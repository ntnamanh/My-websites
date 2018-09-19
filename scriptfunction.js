//function
// console.log(calculateAge(2));
// function calculateAge(birthyear){
//   var a = function(age){
//     return age +2;
//   }
//   var b = a(birthyear)+2;
//   return b;
// }
//fucntion statement and expression

//function declaration
//function whatdoyoudo(job,firstname){}

//function expression
var whatdoyoudo = function(job,firstname){
  switch(job){
    case'cave':return firstname+ ' cave fucks man';
    case'bitch':return firstname+ ' bitch fucks dog';
    case'horse':return firstname+ ' horse fucks horse'
    default:return firstname+ ' slut fucks all';
  }
}
console.log(whatdoyoudo('cave','john'));
