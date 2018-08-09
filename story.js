let name = prompt("What is the name of your character?");
let gender =prompt("What gender is your character?");
let race =prompt("What race is your character? (Human, Elf, Dwarf, Halfling)");
let characterRole = prompt("What class is your character? (Warrior, Renger, Rogue)");

const mainHero =new Hero(name, 10, gender, race, characterRole);

checkRace(mainHero, mainHero.race);
checkClass(mainHero, mainHero.characterRole);

console.log(mainHero);