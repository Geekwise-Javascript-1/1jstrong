/*var userResp = prompt("Please enter your string.");
function capFirst(name) {
  return capFirst = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}
console.log( capFirst(userResp) );
*/

/*
function hello(){
  var msg = "hello";
  world(msg);
};

function world(message) {
  alert(messsage + "world");
};

hello();
*/

function getUserName() {
  var user = prompt("What is your User Name?");
  checkUserName(user);

}

function craftMsg(u) {
  var msg = 'Welcome ';
  msg +=  formatUserName(u);
  msg += ' to my site';
  alertUser(msg);
}

function formatUserName(user) {
  return user.charAt(0).toUpperCase + user.substr(1).toLowerCase();
}


function alertUser(m) {
  alert(m);

}
console.log(user);
console.log(preparsed);

// getUserName();


function checkUserName(user) {
  user = parseInt(user);

//  if( isNaN(user) ){
//    return  alert('That is not a proper username');
  }
  alert("Thank You" + user);

}
