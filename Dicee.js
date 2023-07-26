var randomVar1=Math.floor(Math.random()*6)+1;
var randomVarSource1="images/dice"+randomVar1+".png";
var randomVar2=Math.floor(Math.random()*6)+1;
var randomVarSource2="images/dice"+randomVar2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomVarSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomVarSource2);
if(randomVar1>randomVar2)
document.querySelector("h1").innerHTML="Player1 wins!🚩";
else if(randomVar1<randomVar2)
document.querySelector("h1").innerHTML="Player2 wins!🚩";
else
document.querySelector("h1").innerHTML="Draw!";