//first player dice
var randomNumber1= Math.floor(Math.random()*6+1);//random number is selected btw 1-6
var randomImage1="dice"+randomNumber1+".png";
var randomImageSource = "images/" +randomImage1;
var Image= document.querySelectorAll("img")[0];
Image.setAttribute("src" , randomImageSource);
//secound player dice
var randomNumber2= Math.floor(Math.random()*6+1);//random number is selected btw 1-6
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource = "images/" +randomImage2;
var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src" , randomImageSource);
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player-1 is Winner";

} else {
  document.querySelector("h1").innerHTML="Player-2 is Winner";
}
