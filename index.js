var ran1=Math.floor(Math.random()*6)+1;
var dimg= "dice" + ran1 + ".png";
var rsrc= "images/" + dimg;
var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src",rsrc);

var ran2=Math.floor(Math.random()*6)+1;
var dimg2= "dice" + ran2 + ".png";
var rsrc2= "images/" + dimg2;
var img2= document.querySelectorAll("img")[1];

img2.setAttribute("src",rsrc2);


if(ran1>ran2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(ran1<ran2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a tie!";
}
