var markteam = average_score(89,120,103);
var johnteam = average_score(116,94,123);
var maryteam = average_score(97,134,105);
if(markteam==johnteam && markteam==maryteam)
  console.log('draw');
else {
  let thewinner = markteam>johnteam?'markteam':'johnteam';
  if(thewinner === 'markteam'){
    let thewinner = markteam>maryteam?'markteam':'maryteam';
    thewinner==='markteam'?console.log('the winner is '+thewinner+' with '+markteam+' scores'):console.log('the winner is mary with '+ maryteam+' scores');
  }
  else{
    let thewinner = johnteam>maryteam?'johnteam':'maryteam';
    thewinner==='johnteam'?console.log('the winner is '+thewinner+' with '+johnteam+' scores'):console.log('the winner is maryteam with '+ maryteam+' scores');
  }
}
 function average_score(score1,score2,score3){
   return (score1+score2+score3)/3;
}
