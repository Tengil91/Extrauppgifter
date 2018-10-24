let tablelamp ={
    lightbulb: 1,
    on: false
}

function LightSwitch(lampa){
    this.lamp = lampa;
}
let knapp = new LightSwitch(tablelamp);
console.log(knapp.lamp.lightbulb);