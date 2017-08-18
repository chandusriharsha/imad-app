console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text'
);
element.innerHTML='Hi this is Harsha from St.peters Engineering College';
//move the image
var img=document.getElementById('madi');
var marginLeft=0;
 function moveRight(){
     moveLeft=moveLeft+10;
     img.style.marginLeft=marginLeft+'px';
 }
 
 
 img.onclick=function(){
     var interval=setInterval(moveRight,50);
     img.style.marginLeft='100px';
 };