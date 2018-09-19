var money = new Array(124,48,268);
var tips = new Array();
var final_paid_amount = new Array();

var calculatetips = function(money){
  if(money<0)
    return 0;
  else if(money<50)
    return money*20/100;
  else if(money>=50&&money<=200)
    return money*15/100;
  else if(money>200)
    return money*10/100;
}
var calculatefinal = function(money){
  return money + calculatetips(money);
}

for (var i = 0; i < money.length; i++) {
  tips.push(calculatetips(money[i]));
  final_paid_amount.push(calculatefinal(money[i]));
}


for (var i = 0; i < 3; i++) {
    console.log('with the money: '+money[i]+'$ John have to spend '+tips[i]+' $ for the waiter and the total of amount john have to paid is '+final_paid_amount[i]+'$');
}
