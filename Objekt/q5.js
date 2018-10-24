let elevator = {
    plan: 1,

    goTo: function(lvl){
        this.plan = lvl;
        console.log("Hissen åker till plan " + lvl);
    },
    where: function(){
        console.log(`Hissen är på plan ${this.plan} just nu`);
        return this.plan;
    }
};

function HissKnapp(elevator, lvl){
    this.hiss = elevator;
    this.plan = lvl;
    this.goHere = function(){
        this.hiss.goTo(this.plan);
    }
}
let hissknapp = new HissKnapp(elevator, 5);

hissknapp.goHere();