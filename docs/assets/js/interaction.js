const firstNames = {
  A: "Captain",
  B: "Turbo",
  C: "Galactic",
  D: "The",
  E: "Aqua",
  F: "Fire",
  G: "Iron",
  H: "Super",
  I: "Green",
  J: "Phantom",
  K: "Dark",
  L: "Ghost",
  M: "Professor",
  N: "Atomic", 
  O: "Rock",
  P: "Omega",
  Q: "Rocket",
  R: "Shadow",
  S: "Agent",
  T: "Silver",
  U: "Wild",
  V: "Wolf",
  W: "Ultra",
  X: "Wonder",
  Y: "Doctor",
  Z: "Star",

};

const lastNames = {
   A: "X",
   B: "Shield",
   C: "Machine",
   D: "Justice",
   E: "Beast",
   F: "Wing",
   G: "Arrow",
   H: "Skull",
   I: "Blade",
   J: "Bolt",
   K: "Cobra",
   L: "Blaze",
   M: "Solder",
   N: "Strike",
   O: "Falcon",
   P: "Fang",
   Q: "King",
   R: "Surfer",
   S: "Bot",
   T: "Guard",
   U: "Thing",
   V: "Claw",
   W: "Brain",
   X: "Master",
   Y: "Power",
   Z: "Storm",

};

let titleNames = ["The almighty... ", "The one and only... ", "The unbreakable... ", "Here comes... ", "The immortal... "]

// User input the first letter of the first name and last name
// Each of the letters match a specific name
// A title is then assigned at random
function heroSubmit() {
  let userInput1 = document.getElementById("firstName").value;
  let userInput2 = document.getElementById("lastName").value;
  for (let hero1 in firstNames) {
    for (let hero2 in lastNames) {
     if (userInput1.toUpperCase() === hero1) { 
        if(userInput2.toUpperCase() === hero2) {
         userInput1 = firstNames[hero1]; 
         userInput2 = lastNames[hero2];
         let randomTitle = titleNames[Math.floor(Math.random() * titleNames.length)];
         preName.innerHTML = randomTitle;
         return heroName.innerHTML = `${userInput1} ${userInput2}`, preName.innerHTML;
         
        } 
     
    } else {
        preName.innerHTML = " ";
        heroName.innerHTML = "You must enter letters only!";
        
    };
    
   };
   
  };

  
};


var subButton = document.getElementById("submit");
subButton.addEventListener("click", heroSubmit);
