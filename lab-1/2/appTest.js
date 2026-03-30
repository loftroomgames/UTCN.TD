function test()
{
  console.log(sum(0) == 0 ? ' Passed ' : ' Failed ');
  console.log(sum(2) == 3 ? ' Passed ' : ' Failed ');
  console.log(sum(4) == 10 ? ' Passed ' : ' Failed ');
  console.log(sum(5) == 15 ? ' Passed ' : ' Failed ');
  console.log(sum() == 'not a number' ? ' Passed ' : ' Failed ');
  console.log(sum("asdf") == 'not a number' ? ' Passed ' : ' Failed ');
  console.log(sum(true) == 'not a number' ? ' Passed ' : ' Failed ');
}

test();
