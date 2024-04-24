// function menuShow(){
//     let menuResponsivo = document.querySelector('.menu-responsivo');
//     if(menuResponsivo.classList.contains('open')) {
//         menuResponsivo.classList.remove('open');
//         document.querySelector('.icon').scr = "assets/img/icons/menu.svg";
//     } else {
//         menuResponsivo.classList.add('open')
//         document.querySelector('.icon').scr = "assets/img/icons/close-menu.svg";
//     }
// }
function menuShow(){
    let menuResponsivo = document.querySelector('.menu-responsivo');
    if(menuResponsivo.classList.contains('open')) {
        menuResponsivo.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/icons/menu.svg";
    } else {
        menuResponsivo.classList.add('open');
        document.querySelector('.icon').src = "assets/img/icons/close-menu.svg";
    }
}
