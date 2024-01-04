document.querySelector(".menu").addEventListener("click", animateNav);
document.querySelector(".responsive_display").addEventListener("click", animateNav);



let lateralNav = document.querySelector(".responsive_display");
let changeMenu = document.querySelector(".change_menu")


function animateNav() {
    lateralNav.classList.toggle("active_nav");
    changeMenu.classList.toggle("change_close")
}

window.addEventListener('scroll', function() {

    // let animateContact = document.getElementById('contact');
    // let positionContact = animateContact.getBoundingClientRect().top;
    // let linckContact = document.querySelector(".link_whatsapp");

    let animateHeader = document.getElementById('headerTop');
    let positionAnimateHeader = animateHeader.getBoundingClientRect().top;
    let smallHeader = document.querySelector(".header_content");
    let navResponsive = document.querySelector(".responsive_display")
    console.log(positionAnimateHeader)
    
    
    if(positionAnimateHeader < -140) {
        smallHeader.classList.add("big_header");
        navResponsive.classList.add("responsive_top");
    }

    if(positionAnimateHeader == 0) {
        smallHeader.classList.remove("big_header");
        navResponsive.classList.remove("responsive_top");
    }

    if(positionAnimateHeader < 0) {
        lateralNav.classList.remove("active_nav");
        changeMenu.classList.remove("change_close")
    }
})