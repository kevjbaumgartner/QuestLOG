//Weapon Suffixes
var weaponSuffixList = ["Killing", "Crushing", "Slamming", "Squishing", "Spanking", "Slicing", "Destroying", "Stabbing", "Cutting", "Piercing", "Penetrating", "Obliterating", "Cleansing", "Melting", "Petrifying", "Tormenting", "Smiting", "Oppressing", "Chomping", "Pulverizing", "Carving", "Shaving", "Ravaging", "Corroding", "Scorching", "Rioting", "Corrupting", "Splintering", "Lacerating", "Crippling", "Hemorrhaging", "Thrusting", "Thwacking", "Thumping", "Manhandling", "Dismembering", "Mangling", "Curb Stomping", "Poking", "Persecuting", "Crucifying", "Whipping", "Bruising", "Injuring"];

//Weapon class definition
class weapon{
	constructor(){
		var name;
		var type;
		var suffix;
		var rarity;
		var damage;
		var speed;
		var cc;
		var cd;
		var dps;
	}

	//Getters & Setters
	getName(){
		return this.name;
	}
	setName(val){
		this.name = val;
	}
	getType(){
		return this.type;
	}
	setType(val){
		this.type = val;
	}
	getSuffix(){
		return this.suffix;
	}
	setSuffix(val){
		this.suffix = val;
	}
	getRarity(){
		return this.rarity;
	}
	setRarity(val){
		this.rarity = val;
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
	getCriticalChance(){
		return this.cc;
	}
	setCriticalChance(val){
		this.cc = val;
	}
	getCriticalDamage(){
		return this.cd;
	}
	setCriticalDamage(val){
		this.cd = val;
	}
	getDPS(){
		return this.dps;
	}
	setDPS(val){
		this.dps = val;
	}

	//generateWeaponName(), generates a weapon name based on the type and rarity
	generateWeaponName(){
		var str;
		str = getRarityStr(this) + " " + getWeaponTypeStr(this) + " of " + getWeaponSuffixStr(this);
		this.setName(str);
	}

	//determineStats(), generates weapon stats based on the rarity of the weapon
	determineStats(){
		switch(this.rarity){
			case 1:
				this.setDamage(Math.floor((Math.random() * ((LV/2) + 5)) + ((LV/4) + 5)));
				this.setSpeed((Math.random() * (0.10 - 1.00 + 1.00) + 0.90).toFixed(2));
				this.setCriticalChance(Math.floor((Math.random() * ((LV/2) + 2)) + ((LV/4) + 2)));
				this.setCriticalDamage(Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 100)));
				break;
			case 2:
				this.setDamage(Math.floor((Math.random() * ((LV/2) + 6)) + ((LV/4) + 6)));
				this.setSpeed((Math.random() * (0.20 - 1.00 + 1.00) + 0.90).toFixed(2));
				this.setCriticalChance(Math.floor((Math.random() * ((LV/2) + 4)) + ((LV/4) + 4)));
				this.setCriticalDamage(Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 110)));
				break;
			case 3:
				this.setDamage(Math.floor((Math.random() * ((LV/2) + 7)) + ((LV/4) + 7)));
				this.setSpeed((Math.random() * (0.30 - 1.00 + 1.00) + 0.90).toFixed(2));
				this.setCriticalChance(Math.floor((Math.random() * ((LV/2) + 6)) + ((LV/4) + 6)));
				this.setCriticalDamage(Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 120)));
				break;
			case 4:
				this.setDamage(Math.floor((Math.random() * ((LV/2) + 8)) + ((LV/4) + 8)));
				this.setSpeed((Math.random() * (0.40 - 1.00 + 1.00) + 0.90).toFixed(2));
				this.setCriticalChance(Math.floor((Math.random() * ((LV/2) + 8)) + ((LV/4) + 8)));
				this.setCriticalDamage(Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 130)));
				break;
			case 5:
				this.setDamage(Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 9)));
				this.setSpeed((Math.random() * (0.50 - 1.00 + 1.00) + 0.90).toFixed(2));
				this.setCriticalChance(Math.floor((Math.random() * ((LV/2) + 10)) + ((LV/4) + 10)));
				this.setCriticalDamage(Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 140)));
				break;
			default:
				break;
		}
	}

	//determineDPS(), calculates the average damage per second dealt based on weapon stats and user stats
	determineDPS(){
		var dpsHold;
		var as;
		var critDamage;
		as = 1 * (this.getSpeed() * (1 + (DEX/1000)));
		critDamage =  ((this.getCriticalChance()/100) * (1 + (LUK/100))) * (1 * (this.getCriticalDamage()/100));
		dpsHold = (((this.getDamage() * (1 + (1 * critDamage))) * (1 + (STR/100)))) * as;
		this.setDPS(dpsHold);
	}
}

//getWeaponTypeStr(), returns the type of the weapon as a string
function getWeaponTypeStr(val){
	return {1:"Knife", 2:"Dagger", 3:"Shortsword", 4:"Sword", 5:"Gladius", 6:"Sabre", 7:"Scimitar", 8:"Rapier", 9:"Katana", 10:"Claymore"}[val.getType()];
}

//getWeaponSuffixStr(), returns the suffix of the weapon as a string
function getWeaponSuffixStr(val){
	return weaponSuffixList[val.getSuffix()];
}

//equipWeapon(), inserts a weapon into the characters weapon slot area
function equipWeapon(weapon){
	currentWeapon = weapon;
	updateWeaponArea();
}

//exchangeWeapon(), performs a confirm dialogue to switch out the existing weapon
function exchangeWeapon(newWeapon){
	if(confirm("Exchange your " + currentWeapon.getName() + " (Current DPS: " + Number(currentWeapon.getDPS()).toFixed(2) + ") for " + newWeapon.getName() + " (New DPS: " + Number(newWeapon.getDPS()).toFixed(2) + ")?")){
		equipWeapon(newWeapon)
	}
	else{}
	updateWeaponArea();
}

//updateWeaponArea(), updates all relevant text areas
function updateWeaponArea(){
	$('#weaponNameText').html("<label class='rarity" + currentWeapon.getRarity() + "'>" + currentWeapon.getName() + "</label>");
	$('#weaponDamageText').html(Number(currentWeapon.getDamage()).toFixed(2));
	$('#weaponAttackSpeedText').html(Number(currentWeapon.getSpeed()).toFixed(2));
	$('#weaponCriticalChanceText').html(Number(currentWeapon.getCriticalChance()).toFixed(2));
	$('#weaponCriticalDamageText').html(Number(currentWeapon.getCriticalDamage()).toFixed(2));
	currentWeapon.determineDPS();
	$('#weaponDPSText').html(Number(currentWeapon.getDPS()).toFixed(2));
}

//randomWeapon(), return a random weapon
function randomWeapon(){
	var typeRoll = Math.floor((Math.random() * 10) + 1);
	var sufRoll = Math.floor((Math.random() * weaponSuffixList.length) + 0);
	var rarityRoll = Math.floor((Math.random() * 10000) + 1);
	var rarityHold = determineRarity(rarityRoll);
	var weaponHold = new weapon();
	weaponHold.setType(typeRoll);
	weaponHold.setSuffix(sufRoll);
	weaponHold.setRarity(rarityHold);
	weaponHold.determineStats();
	weaponHold.determineDPS();
	weaponHold.generateWeaponName();
	return weaponHold;
}

//Unique Weapons Temporary Declarations
var uqFists = new weapon;
uqFists.setName("Fists");
uqFists.setRarity(6);
uqFists.setDamage(2);
uqFists.setSpeed(1);
uqFists.setCriticalChance(1);
uqFists.setCriticalDamage(100);