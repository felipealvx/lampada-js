const ligaDesl = document.getElementById('ligaDesl');
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
function lampLigDesl() {
  if (ligaDesl.textContent == 'Ligar'){
    lampOn();
    ligaDesl.textContent = 'Desligar';
  } else {
    ligaDesl.textContent = 'Ligar'
    lampOff();
  }
}


ligaDesl.addEventListener ('click', lampLigDesl);
//lamp.addEventListener ('mouseover', lampOn);
//lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBreak);