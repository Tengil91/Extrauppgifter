function maxar(arr){
    console.log(Math.max(arr[0],arr[1]));
}

//Snyggare lösning:
function maxaaar(arr){
    console.log(Math.max(...arr));
}

maxar([5,8]);