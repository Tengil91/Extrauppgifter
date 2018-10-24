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

let knappar = [new HissKnapp(elevator, 1), new HissKnapp(elevator, 2), new HissKnapp(elevator, 3), new HissKnapp(elevator, 4), new HissKnapp(elevator, 5)];
knappar[0].goHere();
knappar[4].goHere();
knappar[2].goHere();