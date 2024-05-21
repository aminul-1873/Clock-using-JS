// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;
//     getElementsByClassName('hour').style.transform = `rotate(${hrotation}deg)`
//     getElementsByClassName('minute').style.transform = `rotate(${mrotation}deg)`
//     getElementsByClassName('second').style.transform = `rotate(${srotation}deg)`
// },1000);

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    document.getElementsByClassName('hour')[0].style.transform = `rotate(${hrotation}deg)`
    document.getElementsByClassName('minute')[0].style.transform = `rotate(${mrotation}deg)`
    document.getElementsByClassName('second')[0].style.transform = `rotate(${srotation}deg)`
},1000);
