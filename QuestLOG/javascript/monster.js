//Monster class definition
class monster{
	constructor(name, level, HP, damage, speed, defense, XP){
		this.name = name;
		this.level = level;
		this.HP = HP;
		this.damage = damage;
		this.speed = speed;
		this.defense = defense;
		this.XP = XP;
		var lootTable = [];
	}

	//Getters & Setters
	getName(){
		return this.name;
	}

	setName(val){
		this.name = val;
	}


	getLevel(){
		return this.level;
	}

	setLevel(val){
		this.level = val;
	}


	getHP(){
		return this.HP;
	}

	setHP(val){
		this.HP = val;
	}


	getDamage(){
		return this.damage;
	}

	setDamage(val){
		this.damage = damage;
	}


	getSpeed(){
		return this.speed;
	}

	setSpeed(val){
		this.speed = speed;
	}


	getDefense(){
		return this.defense;
	}

	setDefense(val){
		this.defense = val;
	}


	getLootTable(){
		return this.lootTable;
	}

	setLootTable(val){
		this.lootTable = val;
	}


	getXP(){
		return this.XP;
	}

	setXP(val){
		this.XP = val;
	}

	//generateLootTable(), creates a predefined amount of loot that is affected by LUK
	generateLootTable(){
		var lootAmount = 2;
		var roll = Math.floor((Math.random() * 100) + 1);
		var reqChance = (10 * (1 + (LUK/100)));
		if(roll <= reqChance){
			lootAmount += 1;
		}

		this.lootTable = [];
		for (var i = 0; i < lootAmount; i++){
			this.lootTable[i] = generateLoot(this.name);
		}
	}

	//handleDeath(), monster HP reaches 0; rewards granted
	handleDeath(){

	}
}

//randomMonster(), returns a random monster
function randomMonster(){
	var roll = Math.floor((Math.random() * 1) + 1);

	switch(roll){
		case 1:
			return "Wolf";
	}
}