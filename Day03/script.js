/*
var str = "   Jason   ";
// console.log(str.trim());
var newStr = str.trim();
console.log(newStr);
*/

/*Math Objects
var ranNum = Math.floor(Math.random() * 10) + 1;
console.log(ranNum);
*/

//Date Object

/* //var toDay = new Date;
//console.log(toDay.getMonth());
locale = 'en-us';
var toDay = new Date;
console.log(toDay);
console.log(toDay.toLocaleString(locale,{month:"long"})+' '+toDay.getDate()+', '+toDay.getFullYear());
*/

var firstName = prompt("What is your First Name?");
var lastName = prompt("What is your Last Name?");
var userColor = prompt("What is your favorite color?");
var birthDay = prompt("what is your Birthday?");

function setBday(fN, lN, uC, bD){
  var bdayArr = bD.split(' ');
  console.log(bdayArr);
  

  /*console.log(
    fN
    + ' '
    + lN
    + ' '
    + bD
    + ' '
    + '. Your color is '
    + uC
  */
 );

}
setBday(firstName, lastName, userColor, birthDay);
