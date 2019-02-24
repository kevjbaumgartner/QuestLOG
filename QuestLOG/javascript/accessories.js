//Accessories class definition
class accessory{
	constructor(){
		var name;
		var type;
		var rarity;
		var stat;
		var statType;
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


	getStat(){
		return this.stat;
	}

	setStat(val){
		this.stat = val;
	}
	

	getStatType(){
		return this.statType;
	}

	setStatType(val){
		this.statType = val;
	}

	//generateAccessoryName(), generates an accessory name based on the type and rarity
	generateAccessoryName(){
		var str;
		var r = this.rarity;
		var t = this.type;
		var st = this.statType;
		var nameHold;
		var rarityHold;
		var accessorySuf;

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
				nameHold = "Amulet";
				break;
			case 2:
				nameHold = "Earrings";
				break;
			case 3:
				nameHold = "Ring";
				break;
			case 4:
				nameHold = "Belt";
				break;
			case 5:
				nameHold = "Cape";
				break;
		}

		switch(st){
			case 1:
				accessorySuf = "STR";
				break;
			case 2:
				accessorySuf = "DEX";
				break;
			case 3:
				accessorySuf = "CON";
				break;
			case 4:
				accessorySuf = "WIS";
				break;
			case 5:
				accessorySuf = "LUK";
				break;
		}
		str = rarityHold + " " + nameHold + " of " + accessorySuf;
		this.name = str;
	}

	//determineStats(), generates the stat value for the accessory based on user level
	determineStats(){
		var statHold;
		switch(this.rarity){
			case 1:
				this.stat = Math.floor((Math.random() * 2) + (LV/6 + 1));
				break;
			case 2:
				this.stat = Math.floor((Math.random() * 3) + (LV/5 + 1));
				break;
			case 3:
				this.stat = Math.floor((Math.random() * 4) + (LV/4 + 2));
				break;
			case 4:
				this.stat = Math.floor((Math.random() * 5) + (LV/3 + 2));
				break;
			case 5:
				this.stat = Math.floor((Math.random() * 6) + (LV/2 + 3));
				break;
		}
	}
}

//parseStatType(), returns a string format version depending on the stat type of an accessory
function parseStatType(accessory){
	switch(accessory.statType){
		case 1:
			return "STR";
		case 2:
			return "DEX";
		case 3:
			return "CON";
		case 4:
			return "WIS";
		case 5:
			return "LUK";
		default:
			return "N/A";
	}
}

//randomAccesory(), returns a random accessory
function randomAccessory(){
	var typeRoll = Math.floor((Math.random() * 5) + 1);
	var statTypeRoll = Math.floor((Math.random() * 5) + 1);
	var rarityRoll = Math.floor((Math.random() * 10000) + 1);
	var typeHold;
	var rarityHold;
	var accessoryHold;

	switch(typeRoll){
		case 1:
			typeHold = 1;
			rarityHold = determineRarity(rarityRoll);
			accessoryHold = new accessory();
			accessoryHold.setStatType(statTypeRoll);
			accessoryHold.type = typeHold;
			accessoryHold.setRarity(rarityHold);
			accessoryHold.determineStats();
			accessoryHold.generateAccessoryName();
			return accessoryHold;
		case 2:
			typeHold = 2;
			rarityHold = determineRarity(rarityRoll);
			accessoryHold = new accessory();
			accessoryHold.setStatType(statTypeRoll);
			accessoryHold.type = typeHold;
			accessoryHold.setRarity(rarityHold);
			accessoryHold.determineStats();
			accessoryHold.generateAccessoryName();
			return accessoryHold;
		case 3:
			typeHold = 3;
			rarityHold = determineRarity(rarityRoll);
			accessoryHold = new accessory();
			accessoryHold.setStatType(statTypeRoll);
			accessoryHold.type = typeHold;
			accessoryHold.setRarity(rarityHold);
			accessoryHold.determineStats();
			accessoryHold.generateAccessoryName();
			return accessoryHold;
		case 4:
			typeHold = 4;
			rarityHold = determineRarity(rarityRoll);
			accessoryHold = new accessory();
			accessoryHold.setStatType(statTypeRoll);
			accessoryHold.type = typeHold;
			accessoryHold.setRarity(rarityHold);
			accessoryHold.determineStats();
			accessoryHold.generateAccessoryName();
			return accessoryHold;
		case 5:
			typeHold = 5;
			rarityHold = determineRarity(rarityRoll);
			accessoryHold = new accessory();
			accessoryHold.setStatType(statTypeRoll);
			accessoryHold.type = typeHold;
			accessoryHold.setRarity(rarityHold);
			accessoryHold.determineStats();
			accessoryHold.generateAccessoryName();
			return accessoryHold;
	}
}