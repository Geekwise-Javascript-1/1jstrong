
/*
var fruitColors = [];
var apples = ['apples', 'red'];
var bananas = ['bananas', 'yellow'];
var oranges = ['oranges', 'orange']

fruitColors.push(apples);
fruitColors.push(bananas);
fruitColors.push(oranges);

var fruits = ['apples', 'bananas', 'oranges', 'peaches', 'pineapples'];
//fruits.push('strawberries');

fruits.splice(1,2, 'grape' ) // creates new array including new item


var lastFruit = fruitColors.pop(); //remove el from end of array
var firstFruit = fruitColors.shift(); //remove el from front of array

//console.log(firstFruit );
//console.log( fruitColors );
//console.log(fruitColors[0][1]);
//console.log(fruitColors[1][1]);


//var selectedFruit = fruits.slice(1, 4); creates new array with selected indexes
//console.log(selectedFruit);



var fruit = [];
function userResp () {
  var user = prompt("Do you want to enter a fruit?");
  fruit.push(user);
  var ques = prompt("Do you want to enter another?");
  if (quest === 'yes') {
    return user
  } else {
    console.log(fruit);
  }

}



var fruits = [];

function getFruit() {
  var fruit = prompt('enter a fruit');
  fruits.push(fruit);
  moreFruit();
}

function moreFruit(){
  var addMore = confirm('add more?');
  if (addMore) {
      getFruit();
  } else {
    console.log(fruits);
    removeFruit();

function removeFruit() {
  var num = prompt("Which number index to remove?");
  fruits.splice(num, 1)
  fruits.sort();
  outputFruits(fruits);
}

  }
}

function outputFruits(array) {
//  for (var i = 0; i < array.length; i ++)
  //  console.log(array[i])
//  var i = 0;
//while (i<array.length){
//console.log(array[i]);
//  }
}
//var i = 0;
//  console.log (array[i]);
  i++;
//

}

getFruit();

*/

//var i = 0;

//while (i < 10) {
//  if (i === 5 || i === 7) {
//    i++;
//    continue;


for (i = 0; i < 11; i ++) {
  if (i === 5 || i === 7){
    continue
  }

//console.log(i);
}

for (i = 1; i< 11; i ++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}
