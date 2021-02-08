//boton de ir arriba
document.getElementById("up").addEventListener("click", scrollup);

function scrollup(){
    var currentScroll= document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0, currentScroll - (currentScroll));
        
    }
    
}

boton = document.getElementById("boton-scroll");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 3600){
        boton.style.transform="scale(1)";
    }else if(scroll<1500){
        boton.style.transform ="scale(0)";
    }
    
    
}