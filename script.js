const ligar = document.getElementById('liga');
const desliga = document.getElementById('desl');
const lamp = document.getElementById('lamp');

function isLampBreak(){
  return lamp.src.indexOf ('quebrada') > -1
}
function lampOn(){
  if ( !isLampBreak()){
    lamp.src = 'img/ligada.svg';
  }
}
function lampOff(){
  if ( !isLampBreak()){
    lamp.src = 'img/desligada.svg';
  }
}
function lampBreak(){
  if ( !isLampBreak()){
    lamp.src = 'img/quebrada.svg';
  }
}

desliga.addEventListener ('click', lampOff);
ligar.addEventListener ('click', lampOn);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBreak);