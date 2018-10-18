function Person (name, ePost, mobil, adress){
    
    this.name   = name;
    this.ePost  = ePost;
    this.mobil  = mobil;

    this.adress = adress;
    this.print = function(){
        console.log(name);
        console.log(adress.gataAdress );
        console.log(adress.postNummer +" " + this.adress.ort);
    }
}

function Adress(gataAdress, postNummer, ort){
    this.gataAdress = gataAdress;
    this.postNummer = postNummer;
    this.ort = ort;
}

let mahmudAdress = new Adress("Hemfridsvägen 17", "192 67", "Sollentuna");
let mahmud = new Person ("Mahmud Al Hakim", "mahmud.alhakim@alhakim.se", "072123123", mahmudAdress);

mahmud.print();