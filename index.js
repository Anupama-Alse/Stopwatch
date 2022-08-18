let start=document.querySelector(".start");
let pause=document.querySelector(".pause");

let reset=document.querySelector(".reset");
let hour=document.querySelector(".hr");
let mins=document.querySelector(".min");
let seconds=document.querySelector(".sec");
let hr=0;
let min=0;
let sec=0;
let interval;
start.addEventListener("click",function(){
  interval=setInterval(function(){
    if(sec<59){
      sec+=1;
      seconds.innerHTML=sec<10? "0"+sec:sec;
    }
    else{
      sec=0;
      seconds.innerHTML=sec<10? "0"+sec:sec;

    if(min<59){
      min+=1;
      mins.innerHTML=min<10? "0"+min+":":min+":";
    }
    else{
      hr+=1;
      hour.innerHTML=hr<10? "0"+hr+":":hr+":";
    }
  }
  },1000);
  start.style.pointerEvents="none"; //allows for control over how HTML elements respond to mouse/touch events
});

pause.addEventListener("click",function(){
  clearInterval(interval);
  start.style.pointerEvents="visible";
})

reset.addEventListener("click",function(){
  location.reload();
})
