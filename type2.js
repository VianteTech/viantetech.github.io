var r = document.querySelector(':root');
let change=0;
let save;
window.onload = displaytime();
function displaytime(){
  var time = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
  setTimeout(displaytime, 1000); 
}
function changecolor(){
    if (change==0 || save==0){
        r.style.setProperty('--color', 'black');
        r.style.setProperty('--background', 'white');
        change++;
        save=change;
    }
    else{
        r.style.setProperty('--color', 'white');
        r.style.setProperty('--background', 'black');
        change--;
        save=change;
    }
}
let i=0;
function myFunction() {
    if(i==0){
    document.getElementById("change").src = "pictures/light mode.png";
    i=1;
    }
    else{
    document.getElementById("change").src = "pictures/dark mode.png";
    i=0;
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