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
}

/*
3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/

function addPara(myText)
{
const para = document.createElement("P");
const node = document.createTextNode(myText);

para.appendChild(node);
document.body.appendChild(para);
}

/*
4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.
*/

function addListItem(myText) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(myText));
  }

  /*
  5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color
  */

function changeBackground(eId,color) {
    document.getElementById(eId).style.background = color;
 }