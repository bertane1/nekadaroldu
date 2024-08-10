const instaText = document.getElementById('instaText');
const robloxText = document.getElementById('robloxText');

let instaDate = new Date('2024-08-02T00:00:00');
let robloxDate = new Date('2024-08-07T00:00:00');


//CountUp function
function countUp(){
    let now = new Date();
    let elapsedTimeInsta = now - instaDate;
    let elapsedTimeRoblox = now - robloxDate;

    let daysInsta = Math.floor(elapsedTimeInsta / (1000 * 60 * 60 * 24));
    let hoursInsta = Math.floor((elapsedTimeInsta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesInsta = Math.floor((elapsedTimeInsta % (1000 * 60 * 60)) / (1000 * 60));
    let secondsInsta = Math.floor((elapsedTimeInsta % (1000 * 60)) / 1000);

    let daysRoblox = Math.floor(elapsedTimeRoblox / (1000 * 60 * 60 * 24));
    let hoursRoblox = Math.floor((elapsedTimeRoblox % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesRoblox = Math.floor((elapsedTimeRoblox % (1000 * 60 * 60)) / (1000 * 60));
    let secondsRoblox = Math.floor((elapsedTimeRoblox % (1000 * 60)) / 1000);

    robloxText.innerHTML = `${daysRoblox} Gün ${hoursRoblox} Saat ${minutesRoblox} Dakika ${secondsRoblox} Saniye`;
    instaText.innerHTML = `${daysInsta} Gün ${hoursInsta} Saat ${minutesInsta} Dakika ${secondsInsta} Saniye`;
}



function init(){
    countUp();
    setInterval(countUp, 1000);
}
init()