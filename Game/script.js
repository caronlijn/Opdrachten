var username = prompt("Wat is je naam?");
var number = prompt("Hey " + username + ", vul een getal in tussen de 0 en 25" );


if (number > 25) {
    prompt ("Dit getal is hoger dan 25, het spel wordt gestopt");
}
    else if (number < 0) {
        prompt ("Dit getal in lager dan 0, het spel wordt gestopt");
    }
    else if (number > 0, number < 25) {
        alert ("Dit getal ligt tussen de 0 en 25, wil je het juiste getal weten?");
    }
    else if (number == rand){
        alert (" Gefeliciteerd " + username);
    }
    else {
        alert("exit the game, goodbye " + username)
    };

   let max = 25;
   let min = 0;
   let range = max - min + 1;
 
     for (let i = 0; i <= 25; i++) {
       let rand =(Math.floor)(Math.random()*25) + min;
       alert(rand);
    }
    
    if (number == rand){
        alert (" Gefeliciteerd " + username);
    }

   
    // var min = 0; var max = 25; var x = Math.floor(Math.random()*(max-min+1)+min); console.log(x); //2509

    //{
        // define the range
        //int max = 25;
        //int min = 1;
        //int range = max - min + 1;
  
        // generate random numbers within 1 to 10
        //for (int i = 0; i < 25; i++) {
            //int rand = (int)(Math.random() * range) + min;
  
            // Output is different everytime this code is executed
      //      System.out.println(rand);
        //}
    //}
