//loops and iteration
var tip_calculate= {
  bill: Array(124,48,268,180,42),
  calculate: function(){
    this.tips = new Array();
    this.total = new Array();
    for (var i = 0; i < this.bill.length; i++) {
        var cal_tip = function(bill){
          if(bill<0)
            return 0;
          else if (bill<50&&bill>0)
            return bill*0.2;
          else if (bill>=50&&bill<=200)
            return bill*0.15;
          else if (bill>200)
            return bill*0.1;
        }
        var cal_total = function(bill){
          return bill + cal_tip(bill);
        }
        this.tips.push(cal_tip(this.bill[i]));
        this.total.push(cal_total(this.bill[i]));
    }
  }
};
var tip_calculate_mark= {
  bill: Array(77,375,110,45),
  calculate: function(){
    this.tips = new Array();
    this.total = new Array();
    for (var i = 0; i < this.bill.length; i++) {
        var cal_tip = function(bill){
          if(bill<0)
            return 0;
          else if (bill<100&&bill>0)
            return bill*0.2;
          else if (bill>=100&&bill<=300)
            return bill*0.1;
          else if (bill>300)
            return bill*0.25;
        }
        var cal_total = function(bill){
          return bill + cal_tip(bill);
        }
        this.tips.push(cal_tip(this.bill[i]));
        this.total.push(cal_total(this.bill[i]));
    }
  }
};
tip_calculate.calculate();
tip_calculate_mark.calculate();
for (var i = 0; i < tip_calculate.bill.length; i++) {
    console.log('the bill is: '+tip_calculate.bill[i]+' the tips is: '+tip_calculate.tips[i]+' the total is '+ tip_calculate.total[i]);
}

for (var i = 0; i < tip_calculate_mark.bill.length; i++) {
    console.log('the bill is: '+tip_calculate_mark.bill[i]+' the tips is: '+tip_calculate_mark.tips[i]+' the total is '+ tip_calculate_mark.total[i]);
}
var avarage_tips = function(array_tips){
  var sum=0;
  for (var i = 0; i < array_tips.length; i++) {
      sum = sum + array_tips[i];
  }
  return sum/array_tips.length;
}

avarage_tips(tip_calculate.tips)>avarage_tips(tip_calculate_mark.tips)?console.log('johns family paid the highest tips'):console.log('marks family paid the highest tips');
