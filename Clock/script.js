let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hours = document.getElementById('hours');

let i;
let j;
let x;

window.onload = function(){whenLoad()};
function whenLoad(){
  let date = new Date();
i = 6*date.getSeconds();
j = 6*date.getMinutes();
x = 30*date.getHours();
toChange('all');
}
let b =0;
let c =0;
setInterval(function(){
  toChange('second');
    i= i+6;
    b=b+1;
if(b==60){
  toChange('minute');
   j= j+6;
  c=c+1;
  b=0;
}
if(c==10){
  toChange('hours');
   x= x+1;
   c=0;
}
}, 1000);
// so i want to do that when these three interval inone interval so waht to do 
// so something went wrong 

function toChange(harsh){
  switch(harsh){
    case 'second':
      second.style.transform= 'rotate('+i+'deg)';
      second.style.transformOrigin = 'bottom';
      break;
    case 'minute' :
      minute.style.transform= 'rotate('+j+'deg)';
      minute.style.transformOrigin = 'bottom'; 
      break;
    case 'hours' :
        hours.style.transform= 'rotate('+x+'deg)';
        hours.style.transformOrigin = 'bottom';
        break;
    case 'all' : 
    second.style.transform= 'rotate('+i+'deg)';
    second.style.transformOrigin = 'bottom';
    minute.style.transform= 'rotate('+j+'deg)';
    minute.style.transformOrigin = 'bottom';
    hours.style.transform= 'rotate('+x+'deg)';
    hours.style.transformOrigin = 'bottom';
    break;
  }
}