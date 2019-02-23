//Monster class definition
class monster{
	constructor(name, level, HP, damage, speed, defense){
		this.name = name;
		this.level = level;
		this.HP = HP;
		this.damage = damage;
		this.speed = speed;
		this.defense = defense;
		var XP;
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
		this.val;
	}

	//generateLootTable(), creates a predefined amount of loot that is affected by LUK
	generateLootTable(){
		var lootAmount = 1;
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

	//generateXP(), defines the XP that the monster will give when slain
	generateXP(){
		var xpRoll = Number(((Math.random() * 250 + 75))/100).toFixed(2);
		this.XP = Math.round((xpRoll * (1 + (this.level/100))) * 10) / 10;
	}

	//handleDeath(), monster HP reaches 0; rewards granted
	handleDeath(){
		for(var i = 0; i < this.lootTable.length; i++){
			addLogText("<label class='rarity" + this.lootTable[i].rarity + "'>" + this.lootTable[i].name + "</label> acquired, sold for: <label class='logCurrency'>" + this.lootTable[i].value + "</label>!");
			gainCurrency(this.lootTable[i].value);
		}

		var roll = Math.floor((Math.random() * 100) + 1);
		var reqChance = (1 * (1 + (LUK/100)));
		if(roll <= reqChance){
			var weaponHold = randomWeapon();
			addLogText("You found a <label class='rarity" + weaponHold.rarity + "'>" + weaponHold.name + "</label>!");
			exchangeWeapon(weaponHold);
		}

		gainXP(this.XP);
	}
}

//randomMonster(), returns a random monster
function randomMonster(){
	var typeRoll = Math.floor((Math.random() * 7 + 1));
	var monsterHold;

	var nameHold;
	var levelHold;
	var hpHold;
	var damageHold;
	var speedHold;
	var defenseHold;

	switch(typeRoll){
		case 1:
			nameHold = "Wolf";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 2:
			nameHold = "Spider";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 3:
			nameHold = "Boar";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 4:
			nameHold = "Bear";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 5:
			nameHold = "Scorpion";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 6:
			nameHold = "Squid";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 7:
			nameHold = "Harpy";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
	}
}

//randomBoss(), returns a random boss monster
function randomBoss(){
	var typeRoll = Math.floor((Math.random() * 2 + 1));
	var monsterHold;

	var nameHold;
	var levelHold;
	var hpHold;
	var damageHold;
	var speedHold;
	var defenseHold;

	switch(typeRoll){
		case 1:
			nameHold = "Werewolf";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 2:
			nameHold = "Lamia";
			levelHold = LV + Math.floor((Math.random() * 2 + 1));
			hpHold = 10;
			damageHold = 2;
			speedHold = 1;
			defenseHold = 0;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
	}
}