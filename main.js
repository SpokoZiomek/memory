var cards = ["1.jpg", "2.jpg", "1.jpg", "6.jpg", "3.jpg", "5.jpg", "2.jpg", "4.png", "6.jpg", "4.png", "3.jpg", "5.jpg", "3.jpg"];
var oneVisible = false;
var nrKarty;
var licznik = 0;
var blokada=false;
var koniec=6;

document.onselectatart = function(){return false;};

function odkryj(nr){
    var opacityValue=$("#c"+nr).css('opacity');
    if(opacityValue!=0 && blokada==false){
        blokada=true;
        var obraz = "url("+cards[nr]+")"
$("#c"+ nr).css("background-image",obraz);

if(oneVisible==false){
    oneVisible=true;
    nrKarty=nr
    blokada=false;
}
else{
    if(cards[nrKarty]==cards[nr]){
        //alert("TAK");
        setTimeout(function(){para(nr, nrKarty)},250);
    }
    else{
        //alert("NIE");
        setTimeout(function(){pudlo(nr, nrKarty)},1000);
    }
    oneVisible=false;
    licznik ++;
    $(".score").html("Licznik: "+licznik)
}
    }




}
function para(nr1, nr2){
    if(nr != nr2){
    $("#c"+nr1).css('opacity', '0');
    $("#c"+nr2).css('opacity', '0');
    koniec--;
    if (koniec==0){
        $("#board").html("<h1> Wygrałeś <br> w "+ licznik + "rundach </h1>");
    }
    }
    else{
        $("#c"+nr1).css("background-image","url(kwadrat.png)");
    }
    blokada=false;
}

function pudlo(nr1,nr2){
    $("#c"+nr1).css("background-image","url(kwadrat.png)");
    $("#c"+nr2).css("background-image","url(kwadrat.png)");
    blokada=false;
}
