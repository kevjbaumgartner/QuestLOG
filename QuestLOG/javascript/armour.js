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

	//determineArmourName(), generates a piece of armour name based on the type, material, and rarity
	generateArmourName(){
		var str;
		str = getRarityStr(this) + " " + getArmourMaterialStr(this) + " " + getArmourTypeStr(this);
		this.setName(str);
	}

	//determineDefense(), generates the stat value for the piece of armour based on user level and material type
	determineDefense(){
		switch(this.rarity){
			case 1:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 2)) + ((LV/6) + 1))) * this.material);
				break;
			case 2:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 3)) + ((LV/5) + 2))) * this.material);
				break;
			case 3:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 4)) + ((LV/4) + 3))) * this.material);
				break;
			case 4:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 5)) + ((LV/3) + 4))) * this.material);
				break;
			case 5:
				this.setDefense((Math.floor((Math.random() * ((LV/2) + 6)) + ((LV/2) + 5))) * this.material);
				break;
			default:
				break;
		}
	}
}

//getArmourTypeStr(), returns the equipment type of the armour as a string
function getArmourTypeStr(val){
	return {1:"Helmet", 2:"Chest", 3:"Gloves", 4:"Pants", 5:"Shoes"}[val.getType()];
}

//getArmourStatType(), returns the stat type of the armour as a string
function getArmourMaterialStr(val){
	return {1:"Leather", 2:"Chainmail", 3:"Steel"}[val.getMaterial()];
}

//equipArmour(), applies RMR bonuses accordingly dependant on the armour
function equipArmour(armour){
	switch(armour.getType()){
		case 1:
			currentHelmet = armour;
			incRMR();
			break;
		case 2:
			currentChest = armour;
			incRMR();
			break;
		case 3:
			currentGloves = armour;
			incRMR();
			break;
		case 4:
			currentPants = armour;
			incRMR();
			break;
		case 5:
			currentShoes = armour;
			incRMR();
			break;
		default:
			break;
	}

	//incRMR(), increases character RMR amount based on armour
	function incRMR(){
		RMR += armour.getDefense();
	}
	updateArmourArea();
}

//upequipArmour(), removes RMR bonuses accordingly dependant on the armour
function unequipArmour(armour){
	switch(armour.getType()){
		case 1:
			decRMR();
			break;
		case 2:
			decRMR();
			break;
		case 3:
			decRMR();
			break;
		case 4:
			decRMR();
			break;
		case 5:
			decRMR();
			break;
		default:
			break;
	}

	//decRMR(), decreases character RMR amount based on armour
	function decRMR(){
		RMR -= armour.getDefense();
	}
	updateArmourArea();
}

//exchangeArmour(), performs a confirm dialogue to switch out existing armour
function exchangeArmour(newArmour){
	switch(newArmour.getType()){
		case 1:
			if(confirm("Exchange your " + currentHelmet.getName() + " (DEF: " + currentHelmet.getDefense() + ") for " + newArmour.getName() + " (DEF: " + newArmour.getDefense() + ")?")){
				unequipArmour(currentHelmet);
				equipArmour(newArmour);
			}else{}
			break;
		case 2:
			if(confirm("Exchange your " + currentChest.getName() + " (DEF: " + currentChest.getDefense() + ") for " + newArmour.getName() + " (DEF: " + newArmour.getDefense() + ")?")){
				unequipArmour(currentChest);
				equipArmour(newArmour);
			}else{}
			break;
		case 3:
			if(confirm("Exchange your " + currentGloves.getName() + " (DEF: " + currentGloves.getDefense() + ") for " + newArmour.getName() + " (DEF: " + newArmour.getDefense() + ")?")){
				unequipArmour(currentGloves);
				equipArmour(newArmour);
			}else{}
			break;
		case 4:
			if(confirm("Exchange your " + currentPants.getName() + " (DEF: " + currentPants.getDefense() + ") for " + newArmour.getName() + " (DEF: " + newArmour.getDefense() + ")?")){
				unequipArmour(currentPants);
				equipArmour(newArmour);
			}else{}
			break;
		case 5:
			if(confirm("Exchange your " + currentShoes.getName() + " (DEF: " + currentShoes.getDefense() + ") for " + newArmour.getName() + " (DEF: " + newArmour.getDefense() + ")?")){
				unequipArmour(currentShoes);
				equipArmour(newArmour);
			}else{}
			break;
		default:
			break;
	}
	updateArmourArea();
}

//getLiveRMR(), returns the active amount of armour the user has after calculations
function getLiveRMR(){
	return Number(RMR * (1 + (CON/200))).toFixed(2)
}

//updateArmourArea(), updates all relevant text areas
function updateArmourArea(){
	if(currentHelmet != null){
		$('#helmetNameText').html("<label class='rarity" + currentHelmet.getRarity() + "'>" + currentHelmet.getName() + "</label> (+" + currentHelmet.getDefense() + " DEF)");
	}
	if(currentChest != null){
		$('#chestNameText').html("<label class='rarity" + currentChest.getRarity() + "'>" + currentChest.getName() + "</label> (+" + currentChest.getDefense() + " DEF)");
	}
	if(currentGloves != null){
		$('#glovesNameText').html("<label class='rarity" + currentGloves.getRarity() + "'>" + currentGloves.getName() + "</label> (+" + currentGloves.getDefense() + " DEF)");
	}
	if(currentPants != null){
		$('#pantsNameText').html("<label class='rarity" + currentPants.getRarity() + "'>" + currentPants.getName() + "</label> (+" + currentPants.getDefense() + " DEF)");
	}
	if(currentShoes != null){
		$('#shoesNameText').html("<label class='rarity" + currentShoes.getRarity() + "'>" + currentShoes.getName() + "</label> (+" + currentShoes.getDefense() + " DEF)");
	}
	updateRMRText();
}

//randomArmour(), returns a random piece of armour
function randomArmour(){
	var typeRoll = Math.floor((Math.random() * 5) + 1);
	var materialRoll = Math.floor((Math.random() * 3) + 1);
	var rarityRoll = Math.floor((Math.random() * 10000) + 1);
	var rarityHold = determineRarity(rarityRoll);
	var armourHold = new armour();
	armourHold.setType(typeRoll);
	armourHold.setMaterial(materialRoll);
	armourHold.setRarity(rarityHold);
	armourHold.determineDefense();
	armourHold.generateArmourName();
	return armourHold;
}