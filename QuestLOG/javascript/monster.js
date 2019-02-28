//Monster class definition
class monster{
	constructor(){
		var name;
		var level;
		var HP;
		var damage;
		var speed;
		var defense;
		var XP;
		var lootTable;
		var type;
		var QUID; //Quest UID that this monster belongs to
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
		this.damage = val;
	}
	getSpeed(){
		return this.speed;
	}
	setSpeed(val){
		this.speed = val;
	}
	getDefense(){
		return this.defense;
	}
	setDefense(val){
		this.defense = val;
	}
	getXP(){
		return this.XP;
	}
	setXP(val){
		this.XP = val;
	}
	getLootTable(){
		return this.lootTable;
	}
	setLootTable(val){
		this.lootTable = val;
	}
	getType(){
		return this.type;
	}
	setType(val){
		this.type = val;
	}
	getQUID(){
		return this.QUID;
	}
	setQUID(val){
		this.QUID = val;
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
			this.lootTable[i] = generateLoot(this);
		}
	}

	//generateXP(), defines the XP that the monster will give when slain
	generateXP(){
		var xpRoll = Number(((Math.random() * 150) + 75)/100).toFixed(2);
		var xpHold = ((Math.round((xpRoll * (1 + (this.level/100))) * 10) / 10) + this.level);
		this.setXP(xpHold);
	}

	//handleDeath(), once a monster HP reaches 0 its rewards are granted
	handleDeath(){
		for(var i = 0; i < this.lootTable.length; i++){
			addLogText("<label class='rarity" + this.lootTable[i].getRarity() + "'>" + this.lootTable[i].getName() + "</label> found, sold for: <label class='logCurrency'>" + this.lootTable[i].getValue() + "</label>!");
			gainCurrency(this.lootTable[i].getValue());
		}
		var roll = Math.floor((Math.random() * 100) + 1);
		var reqChance = (3 * (1 + (LUK/100)));

		//If the monster was a Boss type then it will guarantee a random gear drop
		if(this.type == 3){
			roll = 0;
		}
		if(roll <= reqChance){
			var equipmentRoll = Math.floor((Math.random() * 3) + 1);
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
		this.setHP((this.getHP() + (this.getHP() * (lv / 4))));
		this.setDamage((this.getDamage() + (this.getDamage() * (lv / 6))));
		this.setDefense((this.getDefense() + (this.getDefense() * (lv / 10))));
	}
}

//randomMonster(), returns a random monster
function randomMonster(){
	var len = monsterDataList.length;
	var roll = Math.floor((Math.random() * len) + 0);
	var monsterHold = new monster;
	monsterHold.setName(monsterDataList[roll][0]);
	monsterHold.setLevel(LV + Math.floor((Math.random() * 2) + 0));
	monsterHold.setHP(monsterDataList[roll][1]);
	monsterHold.setDamage(monsterDataList[roll][2]);
	monsterHold.setSpeed(monsterDataList[roll][3]);
	monsterHold.setDefense(monsterDataList[roll][4]);
	monsterHold.generateXP();
	monsterHold.generateLootTable();
	monsterHold.setType(monsterDataList[roll][5]);
	monsterHold.scaleMonster();
	return monsterHold;
}

//randomBoss(), returns a random boss
function randomBoss(){
	var len = bossDataList.length;
	var roll = Math.floor((Math.random() * len) + 0);
	var monsterHold = new monster;
	monsterHold.setName(bossDataList[roll][0]);
	monsterHold.setLevel(LV + Math.floor((Math.random() * 3) + 3));
	monsterHold.setHP(bossDataList[roll][1]);
	monsterHold.setDamage(bossDataList[roll][2]);
	monsterHold.setSpeed(bossDataList[roll][3]);
	monsterHold.setDefense(bossDataList[roll][4]);
	monsterHold.generateXP();
	monsterHold.generateLootTable();
	monsterHold.setType(bossDataList[roll][5]);
	monsterHold.scaleMonster();
	return monsterHold;
}