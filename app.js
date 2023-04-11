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