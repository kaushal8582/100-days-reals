const allIncDecBtn = document.querySelectorAll(".bk")
const value = document.querySelector(".value")
const showTime = document.querySelector(".clock h2")
const allBtn = document.querySelectorAll(".btn");

let minute =1;
let second =0;
let intervalId =null;

allIncDecBtn.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    if(e.target.innerText=="+"){
      minute+=1;
      value.innerText = minute
    }else if(e.target.innerText=="-" && minute>0){
      minute-=1;
      value.innerText = minute
    }
  })
})

function restart(){
  minute=0;
  second=0;
  clearInterval(intervalId)
  intervalId=null;
  
  updateTime()
}

function start(){

  if(intervalId) return;

 intervalId = setInterval(() => {
  if(second===0){
    if(minute===0){

    clearInterval(intervalId);
    intervalId =null;   

    }else{
      minute-=1;
      second=59;
    }

  }else{
    second-=1;
  }

  updateTime()

 }, 1000);

}

function updateTime(){
  let minuteForm = minute<10?`0${minute}`:minute;
  let secondForm = second<10?`0${second}`:second;
  showTime.innerText = `${minuteForm}:${secondForm}`
}



function stop(){
  clearInterval(intervalId)
  intervalId=null;
}


allBtn.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    if(e.target.innerText=="Start"){
      start();
    }else if(e.target.innerText=="Restart"){
      restart();
    }else{
      stop();
    }
  })
})