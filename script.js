
let targetTime = new Date("Jan 1, 2026 00:00:00").getTime();


let countDownTime = setInterval(function (){
    
    let currentTime = Date.now();
    let diff = targetTime - currentTime;

    let days = Math.floor(diff/(1000 * 60 * 60 * 24));
    let hrs = Math.floor(diff/(1000 * 60 * 60 ) % 24);
    let mins = Math.floor(diff/(1000 * 60) % 60);
    let secs = Math.floor(diff/(1000) % 60);

    document.querySelector(".days").innerText = (days < 10 ? "0" : "") + days + ":";
    document.querySelector(".hour").innerText = (hrs < 10 ? "0" : "") + hrs + ":";
    document.querySelector(".min").innerText = (mins < 10 ? "0" : "") + mins + ":";
    document.querySelector(".sec").innerText = (secs < 10 ? "0" : "") + secs;


    if(diff < 0){
        clearInterval(countDownTime);
        document.querySelector(".days").innerText = "00";
        document.querySelector(".hour").innerText = "00";
        document.querySelector(".min").innerText = "00";
        document.querySelector("sec").innerText = "00";
    }

},1000);




