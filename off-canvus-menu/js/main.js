// original way 
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
// }



// HIDE/SHOW SIDENAV BY REMOVING/ADDING CLASSES WITH STYLES
function addShowClass() {
    document.getElementById("mySidenav").classList.add("showNav");
}

function removeShowClass() {
    document.getElementById("mySidenav").classList.remove("showNav");
}