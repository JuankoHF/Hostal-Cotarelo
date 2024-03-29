document.querySelector(".menu").addEventListener("click", animateNav);
document.querySelector(".responsive_display").addEventListener("click", animateNav);



let lateralNav = document.querySelector(".responsive_display");
let changeMenu = document.querySelector(".change_menu")


function animateNav() {
    lateralNav.classList.toggle("active_nav");
    changeMenu.classList.toggle("change_close")
}

window.addEventListener('scroll', function() {

    let linckContact = document.querySelector(".link_whatsapp");

    let animateHeader = document.getElementById('headerTop');
    let positionAnimateHeader = animateHeader.getBoundingClientRect().top;
    let smallHeader = document.querySelector(".header_content");
    let navResponsive = document.querySelector(".responsive_display")
    
    let li1 = document.querySelector(".nav_home");
    let li2 = document.querySelector(".nav_rooms");
    let li3 = document.querySelector(".nav_service");
    let li4 = document.querySelector(".nav_transfer");
    let li5 = document.querySelector(".nav_opinions");
    let li6 = document.querySelector(".nav_contact");

    let scrollTop = window.innerHeight;
    let homeActive = document.getElementById('home');
    let roomsActive = document.querySelector(".roons");
    let positionRoomsActive = roomsActive.getBoundingClientRect().top;
    let servicesActive = document.querySelector(".services");
    let positionServicesActive = servicesActive.getBoundingClientRect().top;
    let transfersActive = document.querySelector(".transfers");
    let positionTransfersActive = transfersActive.getBoundingClientRect().top;
    let opinionsActive = document.querySelector(".opinions");
    let positionOpinionsActive = opinionsActive.getBoundingClientRect().top;
    let contactActive = document.querySelector(".contact");
    let positionContactActive = contactActive.getBoundingClientRect().top;

    let moveLogo = document.querySelector(".absolute_over");
    let positionMoveLogo = moveLogo.getBoundingClientRect().top;

    
    if(positionAnimateHeader < -160) {
        smallHeader.classList.add("big_header");
        navResponsive.classList.add("responsive_top");
        linckContact.classList.add("visibleWhatsapp");
    }

    if(positionAnimateHeader == 0) {
        smallHeader.classList.remove("big_header");
        navResponsive.classList.remove("responsive_top");
        linckContact.classList.remove("visibleWhatsapp")

    }

    if(positionAnimateHeader < 0) {
        lateralNav.classList.remove("active_nav");
        changeMenu.classList.remove("change_close")
    }


    if(positionRoomsActive > scrollTop/3) {
        li1.classList.add("this_section");
        li2.classList.remove("this_section");
        li3.classList.remove("this_section");
        li4.classList.remove("this_section");
        li5.classList.remove("this_section");
        li6.classList.remove("this_section");
    }
    if(positionRoomsActive < scrollTop/3) {
        li2.classList.add("this_section");
        li1.classList.remove("this_section");
        li3.classList.remove("this_section");
        li4.classList.remove("this_section");
        li5.classList.remove("this_section");
        li6.classList.remove("this_section");
    }

    if(positionServicesActive < scrollTop/3) {
        li3.classList.add("this_section");
        li1.classList.remove("this_section");
        li2.classList.remove("this_section");
        li4.classList.remove("this_section");
        li5.classList.remove("this_section");
        li6.classList.remove("this_section");
    }

    if(positionTransfersActive < scrollTop/3) {
        li4.classList.add("this_section");
        li1.classList.remove("this_section");
        li3.classList.remove("this_section");
        li2.classList.remove("this_section");
        li5.classList.remove("this_section");
        li6.classList.remove("this_section");
    }
    if(positionOpinionsActive < scrollTop/3) {
        li5.classList.add("this_section");
        li1.classList.remove("this_section");
        li3.classList.remove("this_section");
        li2.classList.remove("this_section");
        li4.classList.remove("this_section");
        li6.classList.remove("this_section");
    }
    if(positionContactActive < scrollTop/3) {
        li6.classList.add("this_section");
        li1.classList.remove("this_section");
        li3.classList.remove("this_section");
        li2.classList.remove("this_section");
        li4.classList.remove("this_section");
        li5.classList.remove("this_section");
        linckContact.classList.remove("visibleWhatsapp");
    }

    if(positionMoveLogo < scrollTop/1.5) {
        moveLogo.classList.add("absolute_hidden")
    }

    if(positionMoveLogo > scrollTop) {
        moveLogo.classList.remove("absolute_hidden")
    }
})