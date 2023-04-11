/*
1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/

var num = 5;
function mySum(myNum)
{
    return num + myNum;   
}

/*
2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/

function search(arr,value)
{
  if(arr.length > 0)
  {
    if(arr.pop() == value)
    {
	return true
    }
    else if(arr.length > 0)
    {
    search(arr,value)
    }
    else
    { 
	return false;
    }
}