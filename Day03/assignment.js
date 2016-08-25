var userResp = prompt("Please enter your string.");
function capFirst(name) {
  return capFirst = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}
console.log( capFirst(userResp) );
