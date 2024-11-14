const btn = document.querySelector("#btn-getStarted");
const menuon = document.querySelector("#open");
const menuclose = document.querySelector("#close");
const menu = document.querySelector(".mobile-menu");
const text_name_logo = document.querySelector(".text-name-logo");


let openmenu = false;

function BtnGetStartAnimation(){
    btn.style.scale = ".9";
    setTimeout(() => {
        btn.style.scale="1";
    }, 500);
}

function AbrirMenu_FecharMenu() {
    if (openmenu) {
        menu.style.opacity="0";
        menuon.style.display="flex";
        menuclose.style.display="none";
        openmenu=false
    }else {
        menu.style.opacity="1";
        menuon.style.display="none";
        menuclose.style.display="flex";
        openmenu=true
    }
}

function GirarTextNameLogo() {
    text_name_logo.classList.add("animation-360");
    setTimeout(() => {
        text_name_logo.classList.remove("animation-360");
    }, 1000);
}


btn.addEventListener("click", BtnGetStartAnimation);
menuon.addEventListener("click", AbrirMenu_FecharMenu);
menuclose.addEventListener("click", AbrirMenu_FecharMenu);

setInterval(GirarTextNameLogo, 10000);