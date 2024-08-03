const drkbtn=document.getElementsByClassName('dark')[0];
// console.log(drkbtn);
drkbtn.addEventListener('click', Darkfn);
const litbtn=document.getElementsByClassName('light')[0];
// console.log(litbtn);
litbtn.addEventListener('click', Lightfn);


function Darkfn(){
   console.log("Dark button is working ");
   document.body.classList.add('bg-color');
// if the onclick is working then in console how may times we click wil be counted can be shown to students 

}
function Lightfn(){
   console.log("light button is working ");
   document.body.classList.remove('bg-color');

// if the onclick is working then in console how may times we click wil be counted can be shown to students 
// the above coe is for button and below code is for the image toggle
}

function toggleMode() {
   var body = document.body;
   var image = document.getElementById("toggleImage");
   
   if (body.classList.contains('light-mode')) {
       body.classList.remove('light-mode');
       body.classList.add('dark-mode');
       image.src = "night 1.png";  
   } else {
       body.classList.remove('dark-mode');
       body.classList.add('light-mode');
       image.src = "day 1.png";  
   }
}
