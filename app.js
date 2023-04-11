// Qestion 2
//Write a recursive function that searches an array for a specific value. 
//The function should return true if the value is found, and false if it is not. 
//You can assume that the array is not nested.

let arr = ["Apple", "Orange", "Mango"];

function searchValueInArry (searchValue) {

    searchValue = searchValue;

    arr.forEach(function(val, index) {
        
        if(val == searchValue) {
            console.log("true");
        } else {
            console.log("false");
        }
     });

 }

 searchValueInArry ("apple");
 

 // Qestion 3
//Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element



function addNewPara (contentText, htmlElement) {

    document.getElementById("body").innerHTML = "<"+htmlElement+">"+contentText+"</"+htmlElement+">";

}

addNewPara ("This is new paragraph text", "b")
 

// Qestion 4
//Write a function that adds a new list item to an unordered list in an HTML
//document. The function should take a string argument that will be used as
//the text content of the new list item.



function addNewList (newListItem) {
    let list = document.getElementById("list");
    listItem = document.createElement("li");
    listItem.innerText = newListItem;
    list.appendChild(listItem);

}

addNewList ( "New List Item"); 


// Qestion 5
///Write a function that changes the background color of an HTML element.
//The function should take two arguments: the first argument is a reference
//to the HTML element, and the second argument is a string representing
//the new background color.



function changeBg (htmlElement, bgColor) {
    let selectElement = document.getElementsByTagName ("div");
   
    selectElement[0].style.backgroundColor = "green";

}

changeBg ("h1", "green"); 
