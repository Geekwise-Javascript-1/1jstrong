var userResp = prompt("Please enter your string.");
function capFirst(name) {
  var capFirst = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  return capFirst;
}
console.log( capFirst(userResp) );
