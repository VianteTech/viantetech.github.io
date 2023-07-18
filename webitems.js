window.onload=LoadLang()
function LoadLang(){
  let userLang = navigator.language || navigator.userLanguage; 
  if(userLang=="vi"){
      localStorage.setItem("Lang","vi")
  }
  else{
      localStorage.setItem("Lang",userLang)
  }
}
window.onload=LoadDevice()
function LoadDevice(){
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  if (isMobileDevice) {
      localStorage.setItem("Device","Mobile")
      console.log("You're using a Mobile Device now.")
  } 
  else {
      localStorage.setItem('Device',"Desktop")
      console.log("You're using a Desktop/Laptop/PC now.")
  }
}
export function type (txt='') {
  let i = 0
  const typeEffect = () => {
    document.getElementById('type').innerHTML += txt.charAt(i)
    i++
    if (i >= txt.length) {
      return
    }
    setTimeout(typeEffect, 120)
  }
  setTimeout(typeEffect, 120)
}
var col = document.getElementsByClassName("collapsible");
for (let i = 0; i < col.length; i++) {
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
}
var Tags = document.querySelectorAll('span[hide-href]');
for(let j = 0; j < Tags.length; j++){
    var Tag = Tags[j];
    Tag.addEventListener('click', function(go){
        var targs = go.target;
        window.open(targs.getAttribute('hide-href'), "_blank");
  });
}