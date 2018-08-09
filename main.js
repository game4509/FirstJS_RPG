class BaseCharacter{
	constructor(name){
		this.name=name;
		this.maxHealth=100;
		this.currentHealth=100;
		this.barriers={
			attack:10,
			sneak:10,
			persuade:10
		};
		this.skills={
			attack:0,
			sneak:0,
			persuade:0
		};
	};
};
class Hero extends BaseCharacter{
	constructor(name,health,gender,race,role){
		super(name,health);
		this.gender=gender;
		this.race=race;
		this.characterRole=role;
		this.isIncapacitated=false;
		this.equippedWeapon={
			name:"None",
			minDamage:null,
			maxDamage:null
		};
		this.equippedArmor={
			name:"None",
			hitBarrierBonus:null
		};
	};
};
const checkClass=(hero,characterClass)=>{
	let lowerCharacterClass=characterClass.toLowerCase();
	switch (lowerCharacterClass){
		case "warrior":{
			hero.skills.attack +=3;
			hero.skills.sneak --;
			break;
		}
		case "ranger":{
			hero.skills.attack++;
			hero.skills.persuade++;
			hero.skills.sneak++;
			break;
		}
		case "rogue":{
			hero.skills.sneak +=3;
			hero.skills.attack--;
			break;
		}
		default:{
			characterClass=prompt(`"${characterClass}" is not a valid class. Please choose again.`);
			hero.characterRole=characterClass;
			checkClass(hero,characterClass);
			break;
		}
	}
};
const checkRace=(hero,race)=>{
	let lowerCaseRace=race.toLowerCase();
	switch(lowerCaseRace){
		case "human":{
			break;
		}
		case "elf":{
			hero.skills.persuade++;
			hero.barriers.persuade++;
			hero.skills.attack--;
			hero.barriers.sneak--;
			break;
		}
		case "dwarf":{
			hero.skills.attack++;
			hero.barriers.attack++;
			hero.skills.sneak--;
			hero.barriers.persuade--;
			break;
		}
		case "halfling":{
			hero.skills.sneak++;
			hero.barriers.sneak++;
			hero.skills.attack--;
			hero.barriers.persuade--;
			break;
		}
		default:{
			race =prompt(`${race} is not a valid race. Please choose again.`);
			hero.race =race;
			checkRace(hero,race);
			break;
		}
	}
};

















