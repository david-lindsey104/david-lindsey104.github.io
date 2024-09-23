let menuList = document.getElementById('menu__list');
menuList.style.maxHeight = "0px";

const menuButton = document.getElementById('menu__button');
menuButton.addEventListener("click", toggleMenu)

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
