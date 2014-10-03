var myArray = ['a', 'b','c', 'd'];

var myReverse = function(){
  var aNow = myArray[0]
  var bNow = myArray[1]
  var cNow = myArray[2]
  var dNow = myArray[3]
  var newArray = [dNow, cNow, bNow, aNow,];
  console.log(newArray);
};

myReverse();
