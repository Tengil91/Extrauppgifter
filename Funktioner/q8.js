function sum(num1,num2){
    console.log(num1 + "+" + num2 + "=" + (num1+num2));
    // parantesen runt num1+num2 skrivs för att pluset mellan dem inte ska räknas som en konkatinering.
}

function matteGrej(num1,num2){
    console.log(num1 + "^" + num2 + "=" + Math.pow(num1,num2));
}

function r(){
    return Math.ceil((Math.random()*10));
}
sum(r(),r());

matteGrej(r(),r());