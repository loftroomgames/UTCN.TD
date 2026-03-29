function calculeaza()
{
  inputSum();
}


function inputSum()
{
  let inputNumber = parseInt(document.getElementById('n').value);

  sum(inputNumber);
  getFibonacci(inputNumber);
}


function sum(n) 
{
  if (isNaN(n) || typeof n === "boolean") {
    console.log("not a number");
    return 'not a number';
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log("Suma este: ", sum);

  return sum;
}


function getFibonacci(n)
{
    if(typeof n !== "number" || typeof n === "undefined" || typeof n === "boolean")
      {
        console.log("Fib: Not Allowed");
        return "not allowed";
      }

    if(n < 1 || n > 10)
      {
        console.log("Fib: Not Allowed");
        return "not allowed";
      } 

    if (n === 1) return [1];
    if (n === 2) return [1, 1];

    let fib = [1, 1];
    for (let i = 2; i < n; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log("Sirul fib: ", fib);
    return fib;
}