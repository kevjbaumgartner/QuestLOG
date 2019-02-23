//Loot class definition
class loot{
	constructor(name, rarity, value){
		this.name = name;
		this.rarity = rarity;
		this.value = value;
	}

	//Getters & Setters
	getName(){
		return this.name;
	}

	setName(val){
		this.name = val;
	}


	getRarity(){
		return this.rarity;
	}

	setRarity(val){
		this.rarity = val;
	}


	getValue(){
		return this.value;
	}

	setValue(val){
		this.value = val;
	}


	getAmount(){
		return this.amount;
	}

	setAmount(val){
		this.amount = val;
	}


	getChance(){
		return this.chance;
	}

	setChance(val){
		this.chance = chance;
	}
}

//generatetLoot(), chooses loot based on the monster that was specified
function generateLoot(monsterName){
	if(monsterName == "Wolf"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Wolf Pelt", 1, 50);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Wolf Claw", 2, 250);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Wolf Fang", 3, 500);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Wolf Eye", 4, 1000);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Spider"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Spider Leg", 1, 50);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Spider Fang", 2, 250);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Spider Eye", 3, 500);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Spider Venom", 4, 1000);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Boar"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Boar Skin", 1, 50);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Boar Hoof", 2, 250);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Boar Snout", 3, 500);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Boar Tusk", 4, 1000);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Bear"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Bear Pelt", 1, 100);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Bear Claw", 2, 300);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Bear Fang", 3, 900);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Bear Heart", 4, 1200);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Scorpion"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Scorpion Shell", 1, 100);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Scorpion Claw", 2, 300);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Scorpion Tail", 3, 900);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Scorpion Venom", 4, 1200);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Squid"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Squid Tentacle", 1, 100);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Squid Beak", 2, 300);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Squid Eye", 3, 900);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Squid Ink", 4, 1200);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Harpy"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Harpy Feather", 3, 600);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Harpy Scale", 3, 900);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Harpy Talon", 4, 1200);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Harpy Tears", 5, 1800);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Werewolf"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Werewolf Pelt", 3, 600);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Werewolf Claw", 3, 900);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Werewolf Fang", 4, 1200);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Werewolf Heart", 5, 1800);
				return lootHold;
				break;
		}
	}
	if(monsterName == "Lamia"){
		var temp = Math.floor((Math.random() * 10) + 1);
		var lootHold;
		switch(temp){
			case 1:
			case 2:
			case 3:
			case 4:
				lootHold = new loot("Lamia Scale", 3, 600);
				return lootHold;
				break;
			case 5:
			case 6:
			case 7:
				lootHold = new loot("Lamia Tooth", 3, 900);
				return lootHold;
				break;
			case 8:
			case 9:
				lootHold = new loot("Lamia Tongue", 4, 1200);
				return lootHold;
				break;
			case 10:
				lootHold = new loot("Lamia Venom", 5, 1800);
				return lootHold;
				break;
		}
	}
}