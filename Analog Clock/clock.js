const deg = 6;
const hr = document.querySelectorAll('#hr');
const mn = document.querySelectorAll('#mn');
const sc = document.querySelectorAll('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr[0].style.transform = `rotateZ(${(hh * 30) + (mm / 12)}deg)`;
    mn[0].style.transform = `rotateZ(${mm}deg)`;
    sc[0].style.transform = `rotateZ(${ss}deg)`;
    hr[1].style.transform = `rotateZ(${(hh * 30) + (mm / 12)}deg)`;
    mn[1].style.transform = `rotateZ(${mm}deg)`;
    sc[1].style.transform = `rotateZ(${ss}deg)`;

    hr[2].style.transform = `rotateZ(${((hh + 1) * 30) + (mm / 12)}deg)`;
    mn[2].style.transform = `rotateZ(${mm}deg)`;
    sc[2].style.transform = `rotateZ(${ss}deg)`;

    hr[3].style.transform = `rotateZ(${((hh + 8) * 30) + (mm / 12)}deg)`;
    mn[3].style.transform = `rotateZ(${mm}deg)`;
    sc[3].style.transform = `rotateZ(${ss}deg)`;
},1000);