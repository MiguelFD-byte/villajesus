function aparece(){
    var html = document.getElementsByTagName("html")[0];
    var elemento = document.getElementsByClassName("galeria");
    
    document.addEventListener("wheel" , function(){
        var top = html.scrollTop;
        for(i=0; i< elemento.length; i++){
            var topelemento = elemento[i].offsetTop;
            if(top > topelemento - 500){
               elemento[i].style.opacity=1;
              
            }//fin if
        }//fin for
    })//fin addeventlistener
}//fin

aparece();

//header animacion
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY >0);
})




