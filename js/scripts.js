var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
alert(newstr);
