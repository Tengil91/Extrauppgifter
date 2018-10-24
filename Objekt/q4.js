let tablelamp ={
    lightbulb: 1,
    on: false
}

function LightSwitch(lampa){
    this.lamp = lampa;
    this.toggle = function(){
        if(this.lamp.on){
            this.lamp.on = false;
        } else {
            this.lamp.on = true;
        }
    }
}
let knapp = new LightSwitch(tablelamp);
knapp.toggle();
console.log(knapp.lamp.on);
knapp.toggle();
console.log(knapp.lamp.on);