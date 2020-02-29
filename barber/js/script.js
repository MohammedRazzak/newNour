/*const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const sectionOneOptions = {
   rootMargin: "-200px 0px 0px 0px" 
};
const sectionOneObserver = new IntersectionObserver(function(enteries ,sectionOneOptions){
    enteries.forEach(entery=>{
     if(!entery.isIntersecting){
         header.classList.add("nav-scrolled");
     }  
     else{
         header.classList.remove("nav-scrolled");
     } 
    });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);*/


 /*Responsive Menue*/
function showMenu() {
    var x = document.getElementById("no");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 520) {
          $(".black").css("background" , "black");
        }
  
        else{
            $(".black").css("background" , "transparent");  	
        }
    })
  })