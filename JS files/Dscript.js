let selector = document.getElementById('scheme');
selector.value = localStorage.getItem('theme') || 'auto';
selector.addEventListener('click', event => window.setTheme(selector.value));

// window.onload=displaytime()
// function displaytime(){
//     const viweekdays = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
//     const enweekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const vimonths= ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];
//     const enmonths= ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     const d = new Date();
//     let enweekday = enweekdays[d.getDay()];
//     let enmonth = enmonths[d.getMonth()];
//     let viweekday = viweekdays[d.getDay()];
//     let vimonth = vimonths[d.getMonth()];
//     let year = d.getFullYear();
//     let day = d.getDate();
//     const cb = document.querySelector('#checktime');
//     let selector = document.getElementById('time/clock').value;
//     console.log(selector)
//     let Currentlang=localStorage.getItem("Lang");
//     if( Currentlang==="vi"|| Currentlang==="vi-VN"){
//         if(cb.checked){
//             if(selector==="date&time")
//                 document.getElementById("time").innerHTML = new Date().toLocaleString();
//             else if(selector==="currentdate"){
//                 document.getElementById("time").innerHTML = new Date().toLocaleDateString();
//             }
//             else if(selector==="currenttime"){
//                 document.getElementById("time").innerHTML= new Date().toLocaleTimeString();
//             }
//             else if(selector==="default"){
//                 document.getElementById("time").innerHTML= new Date();
//             }
//         }
//         else{
//             if(selector==="date&time")
//                 document.getElementById("time").innerHTML = `${new Date().toLocaleTimeString()} ${viweekday} Ngày ${day} ${vimonth} Năm ${year}`;
//             else if(selector==="currentdate"){
//                 document.getElementById("time").innerHTML = new Date().toLocaleDateString();
//             }
//             else if(selector==="currenttime"){
//                 document.getElementById("time").innerHTML= new Date().toLocaleTimeString();
//             }
//             else if(selector==="default"){
//                 document.getElementById("time").innerHTML= new Date();
//             }
//         }
//     }            
//     setTimeout(displaytime, 1000); 
// }