window.onload=LoadLang()//While the browser is on, it will call a function named LoadLang().
function LoadLang(){
  let userLang = navigator.language || navigator.userLanguage; 
  //Get the current language from the user devices.
  //Mobile: vi-VN.
  //Desktop: vi.
  if(userLang=="vi"){//Check if the current language is equal to "vi".
      localStorage.setItem("Lang","vi")
      //If it satisfies the condition, we will set the item "Lang" in the local storage as "vi".
      //I will use it later in HTML.
  }
  else{
      localStorage.setItem("Lang",userLang)
      //If it doesn't satisfy the condition, we will set the item "Lang" in the local storage as userLang.
  }
}
window.onload=LoadDevice()//While the browser is on, it will call a function named LoadDevice().
function LoadDevice(){
  let details = navigator.userAgent;//Get the current device the user is using.
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  //Check if the current device match one of the above devices.
  //if it matches, return true else false.
  if (isMobileDevice) {
      localStorage.setItem("Device","Mobile")//Set the item "Device" of The Local Storage as "Mobile". 
      console.log("You're using a Mobile Device now.")
  } 
  else {
      localStorage.setItem('Device',"Desktop")//Same as well but as "Desktop".
      console.log("You're using a Desktop/Laptop/PC now.")
  }
}
export function type (txt='') { //Exports a function, you can use module.exports=function but it's node.js :D.
  let i = 0
  const typeEffect = () => {
    document.getElementById('type').innerHTML += txt.charAt(i)//Adding up every each of the characters.
    i++//Adding up i by 1.
    if (i >= txt.length) {
      return//if i is larger than the length of text, return nothing.
    }
    setTimeout(typeEffect, 120)
  }
  setTimeout(typeEffect, 120)
  //Finally the function has done the work of the typing effects :).
}
var col = document.getElementsByClassName("collapsible");//<- This is a list to be honest.
for (let i = 0; i < col.length; i++) {//<- For Loop :D.
  col[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
  //This is just about changing CSS properties.
}
var Tags = document.querySelectorAll('span[hide-href]');
for(let j = 0; j < Tags.length; j++){
    var Tag = Tags[j];
    Tag.addEventListener('click', function(go){
        var targs = go.target;
        window.open(targs.getAttribute('hide-href'), "_blank");
  });
}
//Don't show the real link on the left side of the computer screen, apply for harshcore and rickrolls.