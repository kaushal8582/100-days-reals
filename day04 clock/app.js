let second=0;
let minute =0;
let hour =0;

var d = new Date();

setInterval(() => {
  
  d = new Date();
  second =d.getSeconds();
  minute = (d.getMinutes());
  hour = d.getHours();


  console.log(hour,":",minute,":",second);

  let secondDeg = second * 6; 
  let minuteDeg = (minute + second / 60) * 6; 
  let hourDeg = (hour % 12 + minute / 60 + second / 3600) * 30; 



  minuteDeg-=7;

  console.log(hourDeg,":",minuteDeg,":",secondDeg);

  document.querySelector("#second").style.transform = `translate(-50%,-50%) rotate( ${secondDeg}deg)`;

  document.querySelector("#hour").style.transform = `translate(-50%,-50%) rotate( ${hourDeg}deg)`;

  document.querySelector("#minute").style.transform = `translate(-50%,-50%) rotate( ${minuteDeg}deg)`;




}, 1000);