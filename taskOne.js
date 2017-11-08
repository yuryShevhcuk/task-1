function printNumbers(maxOutpNumber) {
  
  var printCount = 0, num = 0, result = "";
  //checking if input is correct and deleting all nonnumbers from string
  maxOutpNumber = maxOutpNumber.replace(/[^0-9]/g,"");
  if (+maxOutpNumber <= 0 || maxOutpNumber == "") {
    return "Wrong input!!! Nothing to show.";
  }
  // figuring out is number under condition and making a result string  
  while (printCount < maxOutpNumber) {
    if( num % String(num).length == 0){
      result += num + ", ";
      printCount++;
    }
    num++;
  }
  return result.substring(0,result.length - 2) + '.';
}
//хоть использование prompt(), alert() является плохим тоном, я их использую для простоты демонстрации
var maxNum = prompt('Enter max numbers to be shown!', 'Put it here');
alert(printNumbers(maxNum));
