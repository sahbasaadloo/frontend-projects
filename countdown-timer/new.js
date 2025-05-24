const starting=10;
let time=starting*60;
const countdown=document.getElementById('countdown');
setInterval(action,1000);
function action(){
    const minute=Math.floor(time / 60);
    let second=Math.floor(time % 60);
    if(second < 10){
        second= '0' + second;
    }
    countdown.innerHTML=`${minute}:${second}`;
    time--;
}