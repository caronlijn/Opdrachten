const checkNumber = function(number){
    if (number > 100) {
    return true;   
    } 
    else {
    return false;
    }
    
}
console.log(checkNumber(57));
console.log(checkNumber(157));
console.log(checkNumber(110));
console.log(checkNumber(99));

const brendaCheck = function (ageBezoek,  huidigBezoek, maxBezoek){
    if (ageBezoek < 18) {
        return "Je bent te jong";
     }
    if (huidigBezoek > 150) {
        return "Helaas is het te vol,je mag er niet in";
    }
    else {
        return "Kom binnen";
    }
}
console.log(brendaCheck(15,157));
console.log(brendaCheck(19, 160));
console.log(brendaCheck(19, 120));

const Average = function (number1, number2, number3, number4, number5)
{
    {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
}
}
console.log(Average(1,2,3,4,5)) 
console.log(Average(1, 1, 1, 1, 1));
console.log(Average(11, 22, 33, 44, 55));
console.log(Average(-10000, 0, 0, 0, 5000)); 