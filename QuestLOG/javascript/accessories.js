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
		var r = this.getRarity();
		str = getRarityStr(r) + " " + getAccessoryTypeStr(this) + " of " + getAccessoryStatTypeStr(this);
		this.setName(str);
	}

	//determineStats(), generates the stat value for the accessory based on user level
	determineStats(){
		var statHold;
		switch(this.getRarity()){
			case 1:
				this.setStat(Math.floor((Math.random() * 2) + (LV/6 + 1)));
				break;
			case 2:
				this.setStat(Math.floor((Math.random() * 3) + (LV/5 + 1)));
				break;
			case 3:
				this.setStat(Math.floor((Math.random() * 4) + (LV/4 + 2)));
				break;
			case 4:
				this.setStat(Math.floor((Math.random() * 5) + (LV/3 + 2)));
				break;
			case 5:
				this.setStat(Math.floor((Math.random() * 6) + (LV/2 + 3)));
				break;
			default:
				break;
		}
	}
}

//getAccessoryTypeStr(), returns the equipment type of the accessory as a string
function getAccessoryTypeStr(val){
	return {1:"Amulet", 2:"Earrings", 3:"Ring", 4:"Belt", 5:"Cape"}[val.getType()];
}

//getAccessoryStatType(), returns the stat type of the accessory as a string
function getAccessoryStatTypeStr(val){
	return {1:"STR", 2:"DEX", 3:"CON", 4:"WIS", 5:"LUK", 6:"N/A"}[val.getStatType()];
}

//equipAccessory(), applies stat type bonuses accordingly dependant on accessory type
function equipAccessory(accessory){
	switch(accessory.getType()){
		case 1:
			currentAmulet = accessory;
			incStat();
			break;
		case 2:
			currentEarrings = accessory;
			incStat();
			break;
		case 3:
			currentRing = accessory;
			incStat();
			break;
		case 4:
			currentBelt = accessory;
			incStat();
			break;
		case 5:
			currentCape = accessory;
			incStat();
			break;
		default:
			break;
	}

	//incStat(), increases character stat amount based on accessory stat amount
	function incStat(){
		switch(accessory.statType){
			case 1:
				STR += accessory.getStat();
				updateSTRText();
				updateWeaponArea();
				break;
			case 2:
				DEX += accessory.getStat();
				for(var i = 0; i < accessory.getStat(); i++){
					increaseMaxSP(1);
				}
				updateMaxSPText();
				updateDEXText();
				updateWeaponArea();
				break;
			case 3:
				CON += accessory.getStat();
				for(var i = 0; i < accessory.getStat(); i++){
					increaseMaxHP(3);
				}
				updateMaxHPText();
				updateCONText();
				updateArmourArea();
				break;
			case 4:
				WIS += accessory.getStat();
				updateWISText();
				break;
			case 5:
				LUK += accessory.getStat();
				updateLUKText();
				break;
			default:
				break;
		}
	}
}

//unequipAccessory(), removes stat type bonuses accordingly dependant on accessory type
function unequipAccessory(accessory){
	switch(accessory.type){
		case 1:
			decStat();
			break;
		case 2:
			decStat();
			break;
		case 3:
			decStat();
			break;
		case 4:
			decStat();
			break;
		case 5:
			decStat();
			break;
		default:
			break;
	}

	//decStat(), decreases character stat amount based on accessory stat amount
	function decStat(){
		switch(accessory.statType){
			case 1:
				STR -= accessory.stat;
				updateSTRText();
				updateWeaponArea();
				break;
			case 2:
				DEX -= accessory.stat;
				for(var i = 0; i < accessory.stat; i++){
					decreaseMaxSP(1);
				}
				updateMaxSPText();
				updateDEXText();
				updateWeaponArea();
				break;
			case 3:
				CON -= accessory.stat;
				for(var i = 0; i < accessory.stat; i++){
					decreaseMaxHP(3);
				}
				updateMaxHPText();
				updateCONText();
				updateArmourArea();
				break;
			case 4:
				WIS -= accessory.stat;
				updateWISText();
				break;
			case 5:
				LUK -= accessory.stat;
				updateLUKText();
				break;
			default:
				break;
		}
	}
}

//exchangeAccessory(), performs a confirm dialogue to switch out existing accessories for incoming ones
function exchangeAccessory(newAccessory){
	var currentStatTypeHold;
	var newStatTypeHold;
	switch(newAccessory.getType()){
		case 1:
			currentStatTypeHold = getAccessoryStatTypeStr(currentAmulet);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentAmulet.name + " (Stat Bonus: +" + currentAmulet.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentAmulet);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 2:
			currentStatTypeHold = getAccessoryStatTypeStr(currentEarrings);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentEarrings.name + " (Stat Bonus: +" + currentEarrings.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentEarrings);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 3:
			currentStatTypeHold = getAccessoryStatTypeStr(currentRing);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentRing.name + " (Stat Bonus: +" + currentRing.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentRing);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 4:
			currentStatTypeHold = getAccessoryStatTypeStr(currentBelt);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentBelt.name + " (Stat Bonus: +" + currentBelt.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentBelt);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 5:
			currentStatTypeHold = getAccessoryStatTypeStr(currentCape);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentCape.name + " (Stat Bonus: +" + currentCape.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentCape);
				equipAccessory(newAccessory);
			}else{}
			break;
		default:
			break;
	}
	updateAccessoryArea();
}

//updateAccessoryArea(), updates all relevant text areas
function updateAccessoryArea(){
	$('#amuletNameText').html("<label class='rarity" + currentAmulet.rarity + "'>" + currentAmulet.name + "</label> (+" + currentAmulet.stat + " " + getAccessoryStatTypeStr(currentAmulet) + ")");
	$('#earringsNameText').html("<label class='rarity" + currentEarrings.rarity + "'>" + currentEarrings.name + "</label> (+" + currentEarrings.stat + " " + getAccessoryStatTypeStr(currentEarrings) + ")");
	$('#ringNameText').html("<label class='rarity" + currentRing.rarity + "'>" + currentRing.name + "</label> (+" + currentRing.stat + " " + getAccessoryStatTypeStr(currentRing) + ")");
	$('#beltNameText').html("<label class='rarity" + currentBelt.rarity + "'>" + currentBelt.name + "</label> (+" + currentBelt.stat + " " + getAccessoryStatTypeStr(currentBelt) + ")");
	$('#capeNameText').html("<label class='rarity" + currentCape.rarity + "'>" + currentCape.name + "</label> (+" + currentCape.stat + " " + getAccessoryStatTypeStr(currentCape) + ")");
}

//randomAccesory(), returns a random accessory
function randomAccessory(){
	var typeRoll = Math.floor((Math.random() * 5) + 1);
	var statTypeRoll = Math.floor((Math.random() * 5) + 1);
	var rarityRoll = Math.floor((Math.random() * 10000) + 1);
	var rarityHold = determineRarity(rarityRoll);
	var accessoryHold = new accessory();
	accessoryHold.setType(typeRoll);
	accessoryHold.setStatType(statTypeRoll);
	accessoryHold.setRarity(rarityHold);
	accessoryHold.determineStats();
	accessoryHold.generateAccessoryName();
	return accessoryHold;
}