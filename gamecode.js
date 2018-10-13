

//feilbeskjed
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}


//Lager et tilfeldig nummer mellom 0 og 10

function randgen(){
var minste=0;
var meste=11;
randnummer =Math.floor(Math.random() * (+meste - +minste)) + +minste;
return randnummer;
}




//Henter to tilfeldige tall og setter dem i en variabel
function randmove(){
var posx = randgen();
var posy = randgen();
document.getElementById("posmarker").innerHTML = "x = " + posx + ", y = " + posy ;
}
