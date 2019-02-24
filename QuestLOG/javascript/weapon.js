//Weapon class definition
class weapon{
	constructor(){
		var name;
		var type;
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

	//determineStats(), generates weapon stats based on the rarity of the weapon
	determineStats(){
		switch(this.rarity){
			case 1:
				this.damage = Math.floor((Math.random() * ((LV/2) + 1)) + ((LV/4) + 1));
				this.speed = (Math.random() * (0.10 - 1.00 + 1.00) + 1.00).toFixed(2);
				this.cc = Math.floor((Math.random() * ((LV/2) + 1)) + ((LV/4) + 1));
				this.cd = Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 41));
				break;
			case 2:
				this.damage = Math.floor((Math.random() * ((LV/2) + 2)) + ((LV/4) + 2));
				this.speed = (Math.random() * (0.20 - 1.00 + 1.00) + 1.00).toFixed(2);
				this.cc = Math.floor((Math.random() * ((LV/2) + 2)) + ((LV/4) + 2));
				this.cd = Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 51));
				break;
			case 3:
				this.damage = Math.floor((Math.random() * ((LV/2) + 3)) + ((LV/4) + 3));
				this.speed = (Math.random() * (0.30 - 1.00 + 1.00) + 1.00).toFixed(2);
				this.cc = Math.floor((Math.random() * ((LV/2) + 3)) + ((LV/4) + 3));
				this.cd = Math.floor((Math.random() * ((LV/2) + 9)) + ((LV/4) + 61));
				break;
			case 4:
				this.damage = Math.floor((Math.random() * ((LV/2) + 4)) + ((LV/4) + 4));
				this.speed = (Math.random() * (0.40 - 1.00 + 1.00) + 1.00).toFixed(2);
				this.cc = Math.floor((Math.random() * ((LV/2) + 4)) + ((LV/4) + 4));
				this.cd = Math.floor((Math.random() * ((LV/2) + 14)) + ((LV/4) + 71));
				break;
			case 5:
				this.damage = Math.floor((Math.random() * ((LV/2) + 5)) + ((LV/4) + 5));
				this.speed = (Math.random() * (0.50 - 1.00 + 1.00) + 1.00).toFixed(2);
				this.cc = Math.floor((Math.random() * ((LV/2) + 5)) + ((LV/4) + 5));
				this.cd = Math.floor((Math.random() * ((LV/2) + 14)) + ((LV/4) + 86));
				break;
		}
	}

	//determineDPS(), calculates the average damage per second dealt based on weapon stats and user stats
	determineDPS(){
		var dpsHold;
		var as;
		var critDamage;

		as = 1 * (this.speed * (1 + (DEX/1000)));
		critDamage =  (this.cc/100) * (1 * (this.cd/100));
		dpsHold = (((this.damage * (1 + (1 * critDamage))) * (1 + (STR/200)))) * as;
		this.dps = dpsHold;
	}

	//generateWeaponName(), generates a weapon name based on the type and rarity
	generateWeaponName(){
		var str;
		var r = this.rarity;
		var t = this.type;
		var nameHold;
		var rarityHold;
		var weaponSuf = ["Killing", "Crushing", "Slamming", "Squishing", "Spanking", "Slicing", "Destroying", "Stabbing", "Cutting", "Piercing", "Penetrating", "Obliterating", "Cleansing", "Melting", "Petrifying", "Tormenting", "Smiting", "Oppressing", "Chomping", "Pulverizing", "Carving", "Shaving", "Ravaging", "Corroding", "Scorching", "Rioting", "Corrupting", "Splintering", "Lacerating", "Crippling", "Hemorrhaging", "Thrusting", "Thwacking", "Thumping", "Manhandling", "Dismembering", "Mangling", "Curb Stomping", "Poking", "Persecuting", "Crucifying", "Whipping", "Bruising", "Injuring"]; 
		
		switch(r){
			case 1:
				rarityHold = "Common";
				break;
			case 2:
				rarityHold = "Uncommon";
				break;
			case 3:
				rarityHold = "Rare";
				break;
			case 4:
				rarityHold = "Epic";
				break;
			case 5:
				rarityHold = "Legendary";
				break;
		}

		switch(t){
			case 1:
				nameHold = "Dagger";
				break;
			case 2:
				nameHold = "Shortsword";
				break;
			case 3:
				nameHold = "Sword";
				break;
			case 4:
				nameHold = "Knife";
				break;
			case 5:
				nameHold = "Sabre";
				break;
			case 6:
				nameHold = "Rapier";
				break;
			case 7:
				nameHold = "Scimitar";
				break;
			case 8:
				nameHold = "Gladius";
				break;
			case 9:
				nameHold = "Katana";
				break;
			case 10:
				nameHold = "Claymore";
				break;
		}

		var suf = Math.floor((Math.random() * weaponSuf.length) + 1);
		str = rarityHold + " " + nameHold + " of " + weaponSuf[suf-1];
		this.name = str;
	}
}

//randomWeapon(), return a random weapon
function randomWeapon(){
	var typeRoll = Math.floor((Math.random() * 10) + 1);
	var rarityRoll = Math.floor((Math.random() * 10000) + 1);
	var weaponHold;

	var nameHold;
	var typeHold;
	var rarityHold;

	var damageHold;
	var speedHold;
	var ccHold;
	var ccHold;

	switch(typeRoll){
		case 1:
			nameHold = "Dagger";
			typeHold = 1;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 2:
			nameHold = "Shortsword";
			typeHold = 2;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 3:
			nameHold = "Sword";
			typeHold = 3;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 4:
			nameHold = "Knife";
			typeHold = 4;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 5:
			nameHold = "Sabre";
			typeHold = 5;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 6:
			nameHold = "Rapier";
			typeHold = 6;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 7:
			nameHold = "Scimitar";
			typeHold = 7;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 8:
			nameHold = "Gladius";
			typeHold = 8;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 9:
			nameHold = "Katana";
			typeHold = 9;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
		case 10:
			nameHold = "Claymore";
			typeHold = 10;
			rarityHold = determineRarity(rarityRoll);
			weaponHold = new weapon();
			weaponHold.type = typeHold;
			weaponHold.setRarity(rarityHold);
			weaponHold.determineStats();
			weaponHold.generateWeaponName();
			weaponHold.determineDPS();
			return weaponHold;
	}
}