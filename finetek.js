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
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  
}



function increase(){
 const expand = document.querySelector('#innovate');
    if (expand.className ="open"){
   expand.className="";
    expand.style.height = "125px";
    document.getElementById('sentence').style.visibility = "visible";
}
else{
    expand.className = "open";
    expand.style.height = "64px";
    document.getElementById('sentence').style.visibility = "hidden";  
}
}



function add(){
    const innovate = document.querySelector('#experience');
    innovate.style.height = "125px";

}

function lengthen(){
    const  decisive = document.querySelector('#decisiveness');
    decisive.style.height = "125px";
}

function increment(){
    const beyond = document.querySelector('#beyond');
    beyond.style.height = "125px";
}





function toggle(){
var blur = document.getElementById('#wrapper');
blur.classList.toggle('active');

const popup= document.getElementById('#popup');
popup.classList.toggle('active');

}