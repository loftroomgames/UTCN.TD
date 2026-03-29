function areValidNumbers(number1, number2)
{
  if (isNaN(number1) || typeof n === "boolean")
  {
    console.log("number1 invalid!");
    return false;
  }

  if (isNaN(number2) || typeof n === "boolean")
  {
    console.log("number2 invalid!");
    return false;
  }

  return true;
}


function aduna()
{

  var firstNumberText = $("#firstNumber").val();
  var secondNumberText = $("#secondNumber").val();
  
  var firstNumber = parseInt(firstNumberText);
  var secondNumber = parseInt(secondNumberText);

  if(areValidNumbers(firstNumber, secondNumber))
  {
    $("#result").html(firstNumber + secondNumber);
  } else {
    $("#result").html(" :( ");
  }

}


function scade()
{
  
  var firstNumberText = $("#firstNumber").val();
  var secondNumberText = $("#secondNumber").val();
  
  var firstNumber = parseInt(firstNumberText);
  var secondNumber = parseInt(secondNumberText);

  if(areValidNumbers(firstNumber, secondNumber))
  {
    $("#result").html(firstNumber - secondNumber);
  } else {
    $("#result").html(" :( ");
  }

}


function inmulteste()
{
  
  var firstNumberText = $("#firstNumber").val();
  var secondNumberText = $("#secondNumber").val();
  
  var firstNumber = parseInt(firstNumberText);
  var secondNumber = parseInt(secondNumberText);

  if(areValidNumbers(firstNumber, secondNumber))
  {
    $("#result").html(firstNumber * secondNumber);
  } else {
    $("#result").html(" :( ");
  }

}


function imparteste()
{
  
  var firstNumberText = $("#firstNumber").val();
  var secondNumberText = $("#secondNumber").val();
  
  var firstNumber = parseInt(firstNumberText);
  var secondNumber = parseInt(secondNumberText);

  if(areValidNumbers(firstNumber, secondNumber))
  {
    $("#result").html(firstNumber / secondNumber);
  } else {
    $("#result").html(" :( ");
  }

}
