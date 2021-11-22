const colors = ["yellow", "blue", "red", "orange"];

//let i = 0;
//let text = " ";
//while (colors[i]) {
//  text += colors[i] + "<br>";
//  i++;
//  console.log(colors);
//  i++
//}

let i, len, text;
for (i = 0, len = colors.length, text = ""; i < len; i++) {
  text += colors[i] + "<br>";
  console.log(colors);
}

colors.forEach(element => console.log(element));

//1-for loop takes 6 lines, while loops takes 9 lines
//2-2 lines for forEach
//3- minder foutgevoelig
//4-geen idee