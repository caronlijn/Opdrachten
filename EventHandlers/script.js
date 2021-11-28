
//const changeClassBlueBackground = function () {
//    const bodyElement = document.body;
//    bodyElement.classList.add("red-background");
//  };
//  const attachEventToChangeColorButton = function () {
//    const changeColorButton = document.getElementById("change-background-button");
//    changeColorButton.addEventListener("click", function () {
//      changeClassBlueBackground();
//    });
//  };
  
  
  //attachEventToAlertButton();
//  attachEventToChangeColorButton();

  
const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
  };
  const attachEventToChangeColorButton = function () {
    const toggleColorButton = document.getElementById("change-background-button");
    toggleColorButton.addEventListener("click", function () {
      changeClassBlueBackground("toggle.changeClassBlueBackground");
    });
  };
 const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
        alert("Button geklikt!");
  });
  };
  
  attachEventToAlertButton();
  attachEventToChangeColorButton();