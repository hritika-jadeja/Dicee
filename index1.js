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

var ran3=Math.floor(Math.random()*6)+1;
var dimg3= "dice" + ran3 + ".png";
var rsrc3= "images/" + dimg3;
var img3= document.querySelectorAll("img")[2];

img3.setAttribute("src",rsrc3);

if(ran1>ran2){
    if(ran1>ran3){
        document.querySelector("h1").innerHTML="Player 1 wins!🚩 ";
    }
   else if(ran1<ran3){
        document.querySelector("h1").innerHTML="Player 3 wins!🚩 ";
    }
    else if(ran1=ran3){
        document.querySelector("h1").innerHTML="Tie between Player 1 and Player 3 ";
    }
}
else if(ran1<ran2){
    if(ran2>ran3){
        document.querySelector("h1").innerHTML="Player 2 wins!🚩 ";
    }
    else if(ran2<ran3){
        document.querySelector("h1").innerHTML="Player 3 wins!🚩 ";
    }
    else if(ran2==ran3){
        document.querySelector("h1").innerHTML="Tie between Player 2 and Player 3 ";
    }
}
else if(ran1==ran2==ran3){
    document.querySelector("h1").innerHTML="Tie between all players! ";
}
else if(ran1==ran2){
    if(ran3>ran2){
        document.querySelector("h1").innerHTML="Player 3 wins!🚩 ";
    }
    else{
        document.querySelector("h1").innerHTML="Tie between Player 1 and Player 2 "; 
    }
    
}

    
