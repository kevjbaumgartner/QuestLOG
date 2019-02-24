//Weapon class definition
class armour{
	constructor(){
		var name;
		var material;
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

	getMaterial(){
		return this.material;
	}

	setMaterial(val){
		this.material = val;
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
		var typeRoll = Math.floor((Math.random() * 5) + 1);

		switch(t){
			case 1:
				determineHelmet();
				break;
			case 2:
				determineChest();
				break;
			case 3:
				determineGloves();
				break;
			case 4:
				determinePants();
				break;
			case 5:
				determineShoes();
				break;
		}
	}

	determineHelmet(){
		var nameRoll = 
	}
	
	determineChest(){

	}
	
	determineGloves(){

	}
	
	determinePants(){

	}
	
	determineShoes(){

	}
	
	determineMaterial(){
		var typeRoll = Math.floor((Math.random() * 10) + 1);

		switch(t){
			case 1:
				nameHold = "Helmet";
				break;
			case 2:
				nameHold = "Shirt";
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
	}

	generateArmourName(){
		var str;
		var r = getRarity();
		var t = getType();


	}
}

function randomArmour(){

}
