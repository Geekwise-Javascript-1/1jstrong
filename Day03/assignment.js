var userResp = prompt('What would you like to do?');
if (userResp == null){
  console.log(userResp);
  alert("You typed nothing");
} else if (userResp == "" ){
  alert('Please type something');
  console.log(userResp);
} else {
  alert("You typed " + userResp);
  console.log(userResp);
}
