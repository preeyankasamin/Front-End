// console.log(new Date().toLocaleTimeString());
// document.getElementById('clock').innerText= Date().toLocaleTimeString();
// document.addEventListener('DOMContentLoaded', () => {
// });

// console.log(Date());

// setIntervial----> do something again and again after a time Interval(when we deal with time, date etc)
// setTimeout--->after sometime

setInterval(Time_running, 1000)
// here Time_running( is the function name it can be anything, 1000 is 1sec =1000MediaElementAudioSourceNode,
// can vary on different time interval
function Time_running(){
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();

}