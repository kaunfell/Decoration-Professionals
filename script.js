

// Sidenavigation, open and close
function openNav()  {
    document.getElementById("sidenav").style.width = "230px";
}

function closeNav()  {
    document.getElementById("sidenav").style.width = "0";

}




// Servicesbox, open and close
function showServices() {
    if(window.innerWidth > 320){ //adding if-statement prevents the servicesbox from collapsing when clicked @mediaquery max-width: 320px;
    document.getElementById('servicesbox').style.display = 'flex';
    }
}

function closeServices()  {
    document.getElementById("servicesbox").style.display = "none";
}  



// Projectpictures, zoom
function zoomImg(element) {
    if(window.innerWidth > 320){
    element.classList.toggle('zoomed');
    }
}



