var slidenumber=1;
slideshow(slidenumber)
var x=document.getElementsByClassName("img")
var n=x.length
function plusSlides(){
  var x=document.getElementsByClassName("img")
  var n=x.length
  if(slidenumber==n){
    slidenumber=1
  }
  else{slidenumber+=1;}
  slideshow(slidenumber)
}
function minusSlides(){

  var x=document.getElementsByClassName("img")
  var n=x.length
  if(slidenumber==1){
    slidenumber=n
  }
  else{slidenumber-=1;}
  slideshow(slidenumber);
}
function dotclick(a){
  slidenumber=a;
  slideshow(a);
}
function slideshow(slidenumber){
  var x=document.getElementsByClassName("img");
  var dots=document.getElementsByClassName("dot")
  var n=x.length
  for(var i=1;i<=n;i++){
    x[i-1].style.display="none";
  }
  for(var j=1;j<=dots.length;j++){
    dots[j-1].className=dots[j-1].className.replace(" active","")
  }
  x[slidenumber-1].style.display="block";
  dots[slidenumber-1].className+=" active";
}
