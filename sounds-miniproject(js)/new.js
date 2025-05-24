function action(e){
const key=document.querySelector(`.key[data-key='${e.keyCode}']`);
const sound=document.querySelector(`audio[data-key='${e.keyCode}']`);
if(sound){
  sound.currentTime=0;
  sound.play();
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 400);
}
}
window.addEventListener('keydown',action);
