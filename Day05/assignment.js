var btn = document.getElementByID('btn');

function btnClick(){
  alert('user clicked on the button');
};

btn.click = btnClick(); 
