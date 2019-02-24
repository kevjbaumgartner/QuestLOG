//Weapon class definition
class armour{
	constructor(){
		var name;
		var type;
		var rarity;
		var defense;
	}

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

	getDefence(){
		return this.defense;
	}

	setDefence(val){
		this.defense = val;
	}

	determineDefence(){
		switch(this.rarity){
			case 1:
				setDefense(Math.floor((Math.random() * ((LV/2) + 1)) + ((LV/4) + 1)));
				break;
			case 2:
				setDefense(Math.floor((Math.random() * ((LV/2) + 2)) + ((LV/4) + 2)));
				break;
			case 3:
				setDefense(Math.floor((Math.random() * ((LV/2) + 3)) + ((LV/4) + 3)));
				break;
			case 4:
				setDefense(Math.floor((Math.random() * ((LV/2) + 4)) + ((LV/4) + 4)));
				break;
			case 5:
				setDefense(Math.floor((Math.random() * ((LV/2) + 5)) + ((LV/4) + 5)));
				break;
		}
	}

	determineType(){

	}

	generateArmourName(){
		var str;
		var r = getRarity();
		var t = getType();
	}
}

