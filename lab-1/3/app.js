document.getElementById('inc').addEventListener('click', increment);
document.getElementById('dec').addEventListener('click', decrement);
printValue('counter', 0);

let counter = 0;


function printValue(divId, value)
{
  document.getElementById(divId).innerHTML = value;
}


function increment()
{
  if(counter < 10)
  {
    counter++;
  } else {
    console.log("limita superioara!");
  }
  
  printValue('counter', counter);
}


function decrement()
{
  if(counter > 0)
  {
    counter--;
  } else {
    console.log("limita joasa!");
  }

  printValue('counter', counter);
}
