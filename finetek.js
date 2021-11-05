var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
   // var dots = document.getElementsByClassName("dot");
  //  dots[slideIndex-1].className += " active";   
}

function currentSlide1(){
        slideIndex = 0 ;     
   }
function currentSlide2(){
    slideIndex = 1 ;        
}
function currentSlide3(){
    slideIndex = 2 ;
}
function currentSlide4(){
    slideIndex = 3 ;
}

function currentSlide5(){
     slideIndex = 4 ;
}

function prev(){
    slideIndex -= 1 ;
}
function next(){
    slideIndex += 1 ;
}

function increase(){
 const expand = document.querySelector('#innovate');
  const sentence =  document.querySelector('#sentence');
  const innovate = document.querySelector('#experience');
  const experience =  document.querySelector('.experience');
  const  decisive = document.querySelector('#decisiveness');
  const  decisiveness =  document.querySelector('.decisiveness');
  const beyond = document.querySelector('#beyond');
  const bey =  document.querySelector('.beyond');


     if(expand.classList == ""){
        expand.classList = "open"; 
        sentence.style.visibility = "visible";
        innovate.classList = ""; 
        experience.style.visibility = "hidden"; 
        decisiveness.style.visibility = "hidden"; 
        decisive.classList = ""; 
        bey.style.visibility = "hidden"; 
        beyond.classList = ""; 
     }
     else{
        sentence.style.visibility = "hidden"; 
        expand.classList = ""; 
     }
}



function add(){
    const expand = document.querySelector('#innovate');
    const sentence =  document.querySelector('#sentence');
    const innovate = document.querySelector('#experience');
    const experience =  document.querySelector('.experience');
    const  decisive = document.querySelector('#decisiveness');
    const  decisiveness=  document.querySelector('.decisiveness');
    const beyond = document.querySelector('#beyond');
    const bey =  document.querySelector('.beyond');
    if(innovate.classList == ""){
        innovate.classList = "open"; 
        experience.style.visibility = "visible";
          sentence.style.visibility = "hidden"; 
        expand.classList = ""; 
        decisiveness.style.visibility = "hidden"; 
        decisive.classList = ""; 
        bey.style.visibility = "hidden"; 
        beyond.classList = ""; 
     }
     else{
        experience.style.visibility = "hidden"; 
       innovate.classList = ""; 
     }

}

function lengthen(){
    const expand = document.querySelector('#innovate');
    const sentence =  document.querySelector('#sentence');
    const innovate = document.querySelector('#experience');
    const experience =  document.querySelector('.experience');
    const  decisive = document.querySelector('#decisiveness');
    const  decisiveness=  document.querySelector('.decisiveness');
    const beyond = document.querySelector('#beyond');
    const bey =  document.querySelector('.beyond');
    if(decisive.classList == ""){
        decisive.classList = "open"; 
         decisiveness.style.visibility = "visible";
         sentence.style.visibility = "hidden"; 
         expand.classList = ""; 
         experience.style.visibility = "hidden"; 
         innovate.classList = ""; 
         bey.style.visibility = "hidden"; 
         beyond.classList = ""; 
     }
     else{
        decisiveness.style.visibility = "hidden"; 
       decisive.classList = ""; 
     }
   
}

function increment(){
    const expand = document.querySelector('#innovate');
    const sentence =  document.querySelector('#sentence');
    const innovate = document.querySelector('#experience');
    const experience =  document.querySelector('.experience');
    const  decisive = document.querySelector('#decisiveness');
    const  decisiveness=  document.querySelector('.decisiveness');
    const beyond = document.querySelector('#beyond');
    const bey =  document.querySelector('.beyond');
    if(beyond.classList == ""){
        beyond.classList = "open"; 
        bey.style.visibility = "visible";
        sentence.style.visibility = "hidden"; 
        expand.classList = ""; 
        experience.style.visibility = "hidden"; 
        innovate.classList = ""; 
        decisiveness.style.visibility = "hidden"; 
        decisive.classList = ""; 
     }
     else{
        bey.style.visibility = "hidden"; 
        beyond.classList = ""; 
     }
   
}


function toggle(){
const body= document.querySelector('#responsive');
body.classList.toggle('active');

const popup= document.getElementById('popup');
popup.classList.toggle('active');

const form = document.getElementById('form');
form.reset();

}




function typing(){
    const input = document.querySelector('.validate');
    const services = document.querySelector('#services');
    

    if(services.classList == ""){
        services.classList = "selected";
    }else{
        services.classList == ""; 
    }

if(input.value === ""){
    services.classList == "error"; 
}
}

function typing2(){
    const input = document.querySelector('.validate');
    const companies = document.querySelector('#comps');
    

    if(companies.classList == ""){
        companies.classList = "selected";
    }else{
        services.classList == ""; 
    }
}

function typing3(){
    const input = document.querySelector('.validate');
    const companies = document.querySelector('#comps');
    

    if(companies.classList == ""){
        companies.classList = "selected";
    }else{
        services.classList == ""; 
    }
}

function typing4(){
    const input = document.querySelector('.validate');
    const companies = document.querySelector('#comps');
    

    if(companies.classList == ""){
        companies.classList = "selected";
    }else{
        services.classList == ""; 
    }
}
/* if( slideIndex = 0){
            selected.style.background = "red";
                   }
               else{
                   selected.style.background = "grey";  
               }*/