//Elementen
const hamburger = document.querySelector(".hamburger");
const menuItemCadetblue = document.querySelector(".menuItem-cadetblue input");
const menuItemRed = document.querySelector(".menuItem-red input");
const menuItemGreen = document.querySelector(".menuItem-green input");
const menuItemBlue = document.querySelector(".menuItem-blue input");
const menuItemPurple = document.querySelector(".menuItem-purple input");
//const menuItemColor = document.querySelector(".colorName");

const colorLabel = document.querySelector(".colorName");

const menu = document.querySelector(".menu");

//Functies
const toggleMenu = function () {
    menu.classList.toggle("menu-opened");
};
const openMenu = function() {
    menu.classList.add("menu-opened");
};
const closeMenu = function () {
    menu.classList.remove("menu-opened");
};
const changeBodyBackgroundColor = function (colorName) {
    document.body.removeAttribute("class");
    document.body.classList.add(`body-${colorName}`);
};
const displayColorLabel = function (colorName) {
    colorLabel.innerHTML = colorName;
};
const onMenuItemClick = function (e) {
    const colorName = e.target.id;
    console.log(colorName);

    changeBodyBackgroundColor(colorName);
    displayColorLabel(colorName);
    closeMenu();
};

//Event-Listeners
hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("mouseover", openMenu);

menuItemCadetblue.addEventListener("click", e =>onMenuItemClick(e));
menuItemRed.addEventListener("click", e =>onMenuItemClick(e));
menuItemGreen.addEventListener("click", e =>onMenuItemClick(e));
menuItemBlue.addEventListener("click", e =>onMenuItemClick(e));
menuItemPurple.addEventListener("click", e =>onMenuItemClick(e));


