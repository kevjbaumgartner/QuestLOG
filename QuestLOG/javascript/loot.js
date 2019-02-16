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

	setName(val){
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
}