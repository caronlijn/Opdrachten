let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";
        
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;
        }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";
        
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";
        
        toggleNavStatus = false;
    
    }
};
      
// let backgroundBody = document.getElementById("background")
// let buttons = document.querySelectorAll(".nav-main ul li")

// let changeBackground = function () {
//     buttons.forEach(function (item) {
//         item.addEventListener('click', function (e) {
//             backgroundBody.removeAttribute("class")
//             backgroundBody.classList.add(e.target.classList[1])
//         })
//     })
// }
// changeBackground();

$(".variable-item > span").click(function() {
  var colorjg = $(this).css("background-color"); //get the bg color
  $("body").css('background-color', colorjg); //apply the bg color
});

// let background = document.querySelector("body-color");
// let buttons = document.querySelector(".nav-main ul li");

// let changeBackground = function () {
//     buttons.forEach(function (item) {
//         item.addEventListener("click", function (e) {
//             backgroundBody.removeAttribute("class")
//             backgroundBody.classList.add(e.target.classList[1])
          
//     })

          
//     })
// }
// changeBackground();
//document.body.style.backgroundColor = '#ff0000';

// document.getElementById("btn-red").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("body-color").style.backgroundColor = "red";
// };

//  document.getElementById("btn-green").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("body-color").style.backgroundColor = "green";
// }

// document.getElementById("btn-blue").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("body-color").style.backgroundColor = "blue";
// }

// document.getElementById("btn-purple").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("body-color").style.backgroundColor = "purple";
// }

// let buttons = document.querySelector(".nav-main ul li");
// let bodyColor = document.querySelector("body-color")

// let changeBackground = function() {
//     buttons.forEach(function (item) {
//         item.addEventListener("click", function (e) {
//             bodyColor.removeAttribute ("class")
//             bodyColor.classList.add(e.target.classList[1])
        
//     })   
//     })
// }
    

//      const curColour = document.body.style.backgroundColor;

//     if (body-color === 'white') {
//         document.body.style.backgroundColor = "colorWhite";
//     }
//     else {
//         document.body.style.backgroundColor = "colorRed";
//     };
