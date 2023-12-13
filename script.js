

// Sidenavigation, open and close
function openNav()  {
    document.getElementById("sidenav").style.width = "230px";
}

function closeNav()  {
    document.getElementById("sidenav").style.width = "0";

}




// Servicesbox, open and close
function showServices() {
    document.getElementById('servicesbox').style.display = 'flex';

}

function closeServices()  {
    document.getElementById("servicesbox").style.display = "none";
}  



// Projectpictures, zoom
function zoomImg(element) {
    element.classList.toggle('zoomed');
    

}