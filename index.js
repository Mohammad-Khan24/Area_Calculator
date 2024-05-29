let userInput = prompt(
  "For Squara Shape Area Calculation Enter: S " +
    "\n" +
    "For Rectangle Shape Area Calculataion Enter: R " +
    "\n" +
    "For Triangle Shape Area Calculataion Enter: T " +
    "\n" +
    "For Trapezium Shape Area Calculataion Enter: TZ " +
    "\n" +
    "For Parallelogram Shape Area Calculataion Enter: P " +
    "\n" +
    "For Rhombus Shape Area Calculataion Enter: RH " +
    "\n" +
    "For Kite Shape Area Calculataion Enter: K " +
    "\n"
);

let base, height, perpHeight, lowestBase, highestBase, length, totalArea;

if (userInput == "S" || userInput == "s") {
  base = parseFloat(prompt("Enter Base in feet"));
  height = parseFloat(prompt("Enter Height in feet"));
  totalArea = base * height;

  document.write(
    "Total area of your square shape is : " +
      base +
      " * " +
      height +
      " = " +
      totalArea +
      " Sft"
  );
} else if (userInput == "R" || userInput == "r") {
  base = parseFloat(prompt("Enter Base in feet"));
  height = parseFloat(prompt("Enter Height in feet"));
  totalArea = base * height;

  document.write(
    "Total area of your Rectangle shape is : " +
      base +
      " * " +
      height +
      " = " +
      totalArea +
      " Sft"
  );
} else if (userInput == "T" || userInput == "t") {
  base = parseFloat(prompt("Enter Base in feet"));
  perpHeight = parseFloat(prompt("Enter Perpendicular Height in feet"));
  totalArea = (base * perpHeight) / 2;

  document.write(
    "Total area of your Triangle shape is : " +
      base +
      " * " +
      perpHeight +
      "/2" +
      " = " +
      totalArea +
      " Sft"
  );
} else if (userInput == "TZ" || userInput == "tz") {
  lowestBase = parseFloat(prompt("Enter Lowest Base in feet"));
  highestBase = parseFloat(prompt("Enter Highest Base in feet"));
  height = parseFloat(prompt("Enter Height in feet"));
  totalArea = ((lowestBase + highestBase) * height) / 2;
  document.write(
    "Total area of your Rectangle shape is : {(" +
      lowestBase +
      " + " +
      highestBase +
      ")" +
      " * " +
      height +
      "}" +
      "/2" +
      " = " +
      totalArea +
      " Sft"
  );
} else if (userInput == "P" || userInput == "p") {
  base = parseFloat(prompt("Enter Base in feet"));
  perpHeight = parseFloat(prompt("Enter Perpendicular Height in feet"));
  totalArea = base * perpHeight;
  document.write(
    "Total area of your Parallelogram shape is : " +
      base +
      " * " +
      perpHeight +
      " = " +
      totalArea +
      " Sft"
  );
} else if (userInput == "RH" || userInput == "rh") {
  length = parseFloat(prompt("Enter length in feet"));
  height = parseFloat(prompt("Enter Height in feet"));
  totalArea = (length * height) / 2;
  document.write(
    "Total area of your Rhombus shape is : (" +
      length +
      " * " +
      height +
      ")/2" +
      " = " +
      totalArea +
      " Sft"
  );
} else if ((userInput = "K" || userInput == "k")) {
  length = parseFloat(prompt("Enter length in feet"));
  height = parseFloat(prompt("Enter Height in feet"));
  totalArea = (length * height) / 2;
  document.write(
    "Total area of your Rhombus shape is : (" +
      length +
      " * " +
      height +
      ")/2" +
      " = " +
      totalArea +
      " Sft"
  );
} else {
  document.write(
    "Not a valid entry!! please choose correct option from the menu. Thank You..!!"
  );
}
