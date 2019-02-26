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
		var xpRoll = Number(((Math.random() * 150 + 75))/100).toFixed(2);
		this.XP = Math.round((xpRoll * (1 + (this.level/100))) * 10) / 10;
		this.XP += this.level;
	}

	//handleDeath(), monster HP reaches 0; rewards granted
	handleDeath(){
		for(var i = 0; i < this.lootTable.length; i++){
			addLogText("<label class='rarity" + this.lootTable[i].rarity + "'>" + this.lootTable[i].name + "</label> acquired, sold for: <label class='logCurrency'>" + this.lootTable[i].value + "</label>!");
			gainCurrency(this.lootTable[i].value);
		}

		var roll = Math.floor((Math.random() * 100) + 1);
		var equipmentRoll = Math.floor((Math.random() * 3) + 1);
		var reqChance = (3 * (1 + (LUK/100)));

		switch(this.name){
			case "Werewolf":
				roll = 0;
				break;
			case "Lamia":
				roll = 0;
				break;
		}
		if(roll <= reqChance){
			switch(equipmentRoll){
				case 1:
					var weaponHold = randomWeapon();
					addLogText("You found: <label class='rarity" + weaponHold.rarity + "'>" + weaponHold.name + "</label>!");
					exchangeWeapon(weaponHold);
					break;
				case 2:
					var accessoryHold = randomAccessory();
					addLogText("You found: <label class='rarity" + accessoryHold.rarity + "'>" + accessoryHold.name + "</label>!");
					exchangeAccessory(accessoryHold);
					break;
				case 3:
					var armourHold = randomArmour();
					addLogText("You found: <label class='rarity" + armourHold.rarity + "'>" + armourHold.name + "</label>!");
					exchangeArmour(armourHold);
					break;
				default:
					break;
			}
		}

		gainXP(this.XP);
	}

	//scaleMonster(), scales the stats of the monster based on its level
	scaleMonster(){
		var lv = this.getLevel();
		this.HP = (this.HP + (this.HP * (lv / 4)));
		this.damage = (this.damage + (this.damage * (lv / 6)));
		this.speed = (this.speed - (1 * (lv / 12)));
		this.defense = (this.defense + (this.defense * (lv / 10)));
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
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 8;
			damageHold = 5;
			speedHold = 4;
			defenseHold = 1.5;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 2:
			nameHold = "Spider";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 3;
			damageHold = 8;
			speedHold = 4;
			defenseHold = 1;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 3:
			nameHold = "Boar";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 10;
			damageHold = 4;
			speedHold = 8;
			defenseHold = 1;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 4:
			nameHold = "Bear";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 12;
			damageHold = 20;
			speedHold = 16;
			defenseHold = 1.2;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 5:
			nameHold = "Scorpion";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 6;
			damageHold = 7;
			speedHold = 4;
			defenseHold = 1;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 6:
			nameHold = "Squid";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 4;
			damageHold = 4;
			speedHold = 4;
			defenseHold = 1;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 7:
			nameHold = "Harpy";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 8;
			damageHold = 3;
			speedHold = 2;
			defenseHold = 1;
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
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 20;
			damageHold = 6;
			speedHold = 5;
			defenseHold = 1.5;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
		case 2:
			nameHold = "Lamia";
			levelHold = LV + Math.floor((Math.random() * 2 + 0));
			hpHold = 15;
			damageHold = 7;
			speedHold = 4;
			defenseHold = 1;
			monsterHold = new monster(nameHold, levelHold, hpHold, damageHold, speedHold, defenseHold);
			monsterHold.generateLootTable();
			monsterHold.generateXP();
			return monsterHold;
	}
}