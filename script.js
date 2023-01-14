
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');
let borderLine = document.querySelector('.animation-line');
let animationWith = 0;
rightButton.addEventListener('click', ()=>{
    
       if(animationWith >= 100){
        animationWith = 100;
    }else{
        animationWith += 10;
    };
    
    borderLine.style.width = animationWith + '%' ;
   
});

leftButton.addEventListener('click', ()=>{
    if(animationWith >= 10){
        animationWith -= 10;
    }else{
        animationWith = 0;      
    };
    borderLine.style.width = animationWith + '%' ;
  
});
