//Armour class definition
class armour{
	constructor(){
		var name;
		var type;
		var rarity;
		var material;
		var defense;
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


	getMaterial(){
		return this.material;
	}

	setMaterial(val){
		this.material = val;
	}


	getDefense(){
		return this.defense;
	}

	setDefense(val){
		this.defense = val;
	}

	//determineDefense(),
	determineDefense(){
		switch(this.rarity){
			case 1:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 2)) + ((LV/6) + 1))) * this.material);
				break;
			case 2:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 3)) + ((LV/5) + 1))) * this.material);
				break;
			case 3:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 4)) + ((LV/4) + 2))) * this.material);
				break;
			case 4:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 5)) + ((LV/3) + 2))) * this.material);
				break;
			case 5:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 6)) + ((LV/2) + 3))) * this.material);
				break;
		}
	}

	//determineArmourName(),
	generateArmourName(){
		var str;
		var r = this.getRarity();
		var t = this.getType();
		var m = this.getMaterial();
		var rarityHold;
		var typeHold;
		var materialHold;

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
				typeHold = "Helmet";
				break;
			case 2:
				typeHold = "Chest";
				break;
			case 3:
				typeHold = "Gloves";
				break;
			case 4:
				typeHold = "Pants";
				break;
			case 5:
				typeHold = "Shoes";
				break;
		}

		switch(m){
			case 1:
				materialHold = "Leather";
				break;
			case 2:
				materialHold = "Chainmail";
				break;
			case 3:
				materialHold = "Steel";
				break;
		}

		str = rarityHold + " " + materialHold + " " + typeHold;
		this.name = str;
	}
}

//randomArmour(), returns a random piece of armour
function randomArmour(){
	var typeRoll = Math.floor((Math.random() * 5) + 1);
	var materialRoll = Math.floor((Math.random() * 3) + 1);
	var rarityRoll = Math.floor((Math.random() * 10000) + 1);
	var typeHold;
	var rarityHold;
	var defenseHold;
	var armourHold;

	switch(typeRoll){
		case 1:
			typeHold = 1;
			rarityHold = determineRarity(rarityRoll);
			armourHold = new armour();
			armourHold.setType(typeHold);
			armourHold.setRarity(rarityHold);
			armourHold.setMaterial(materialRoll);
			armourHold.determineDefense();
			armourHold.generateArmourName();
			return armourHold;
		case 2:
			typeHold = 2;
			rarityHold = determineRarity(rarityRoll);
			armourHold = new armour();
			armourHold.setType(typeHold);
			armourHold.setRarity(rarityHold);
			armourHold.setMaterial(materialRoll);
			armourHold.determineDefense();
			armourHold.generateArmourName();
			return armourHold;
		case 3:
			typeHold = 3;
			rarityHold = determineRarity(rarityRoll);
			armourHold = new armour();
			armourHold.setType(typeHold);
			armourHold.setRarity(rarityHold);
			armourHold.setMaterial(materialRoll);
			armourHold.determineDefense();
			armourHold.generateArmourName();
			return armourHold;
		case 4:
			typeHold = 4;
			rarityHold = determineRarity(rarityRoll);
			armourHold = new armour();
			armourHold.setType(typeHold);
			armourHold.setRarity(rarityHold);
			armourHold.setMaterial(materialRoll);
			armourHold.determineDefense();
			armourHold.generateArmourName();
			return armourHold;
		case 5:
			typeHold = 5;
			rarityHold = determineRarity(rarityRoll);
			armourHold = new armour();
			armourHold.setType(typeHold);
			armourHold.setRarity(rarityHold);
			armourHold.setMaterial(materialRoll);
			armourHold.determineDefense();
			armourHold.generateArmourName();
			return armourHold;
	}

}

