console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text'
);
element.innerHTML='Hi this is Harsha from St.peters Engineering College';
//move the image
var img=document.getElementById('SRIHARSHA');
var marginLeft=0;
 function moveRight(){
     marginLeft=marginLeft+1;
     img.style.marginLeft=marginLeft+'px';
 }
 
 
 img.onclick=function(){
     var interval=setInterval(moveRight,50);
     img.style.marginLeft='50px';
 };