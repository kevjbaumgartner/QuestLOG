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
		str = getRarityStr(this) + " " + getAccessoryTypeStr(this) + " of " + getAccessoryStatTypeStr(this);
		this.setName(str);
	}

	//determineStats(), generates the stat value for the accessory based on user level
	determineStats(){
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
		switch(accessory.getStatType()){
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
	updateAccessoryArea();
}

//unequipAccessory(), removes stat type bonuses accordingly dependant on accessory type
function unequipAccessory(accessory){
	switch(accessory.getType()){
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
		switch(accessory.getStatType()){
			case 1:
				STR -= accessory.getStat();
				updateSTRText();
				updateWeaponArea();
				break;
			case 2:
				DEX -= accessory.getStat();
				for(var i = 0; i < accessory.getStat(); i++){
					decreaseMaxSP(1);
				}
				updateMaxSPText();
				updateDEXText();
				updateWeaponArea();
				break;
			case 3:
				CON -= accessory.getStat();
				for(var i = 0; i < accessory.getStat(); i++){
					decreaseMaxHP(3);
				}
				updateMaxHPText();
				updateCONText();
				updateArmourArea();
				break;
			case 4:
				WIS -= accessory.getStat();
				updateWISText();
				break;
			case 5:
				LUK -= accessory.getStat();
				updateLUKText();
				break;
			default:
				break;
		}
	}
	updateAccessoryArea();
}

//exchangeAccessory(), performs a confirm dialogue to switch out existing accessories
function exchangeAccessory(newAccessory){
	var currentStatTypeHold;
	var newStatTypeHold;
	switch(newAccessory.getType()){
		case 1:
			currentStatTypeHold = getAccessoryStatTypeStr(currentAmulet);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentAmulet.getName() + " (Stat Bonus: +" + currentAmulet.getStat() + " " + currentStatTypeHold + ") for " + newAccessory.getName() + " (Stat Bonus: +" + newAccessory.getStat() + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentAmulet);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 2:
			currentStatTypeHold = getAccessoryStatTypeStr(currentEarrings);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentEarrings.getName() + " (Stat Bonus: +" + currentEarrings.getStat() + " " + currentStatTypeHold + ") for " + newAccessory.getName() + " (Stat Bonus: +" + newAccessory.getStat() + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentEarrings);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 3:
			currentStatTypeHold = getAccessoryStatTypeStr(currentRing);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentRing.getName() + " (Stat Bonus: +" + currentRing.getStat() + " " + currentStatTypeHold + ") for " + newAccessory.getName() + " (Stat Bonus: +" + newAccessory.getStat() + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentRing);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 4:
			currentStatTypeHold = getAccessoryStatTypeStr(currentBelt);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentBelt.getName() + " (Stat Bonus: +" + currentBelt.getStat() + " " + currentStatTypeHold + ") for " + newAccessory.getName() + " (Stat Bonus: +" + newAccessory.getStat() + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentBelt);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 5:
			currentStatTypeHold = getAccessoryStatTypeStr(currentCape);
			newStatTypeHold = getAccessoryStatTypeStr(newAccessory);
			if(confirm("Exchange your " + currentCape.getName() + " (Stat Bonus: +" + currentCape.getStat() + " " + currentStatTypeHold + ") for " + newAccessory.getName() + " (Stat Bonus: +" + newAccessory.getStat() + " " + newStatTypeHold + ")?")){
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
	if(currentAmulet != null){
		$('#amuletNameText').html("<label class='rarity" + currentAmulet.getRarity() + "'>" + currentAmulet.getName() + "</label> (+" + currentAmulet.getStat() + " " + getAccessoryStatTypeStr(currentAmulet) + ")");
	}
	if(currentEarrings != null){
		$('#earringsNameText').html("<label class='rarity" + currentEarrings.getRarity() + "'>" + currentEarrings.getName() + "</label> (+" + currentEarrings.getStat() + " " + getAccessoryStatTypeStr(currentEarrings) + ")");
	}
	if(currentRing != null){
		$('#ringNameText').html("<label class='rarity" + currentRing.getRarity() + "'>" + currentRing.getName() + "</label> (+" + currentRing.getStat() + " " + getAccessoryStatTypeStr(currentRing) + ")");
	}
	if(currentBelt != null){
		$('#beltNameText').html("<label class='rarity" + currentBelt.getRarity() + "'>" + currentBelt.getName() + "</label> (+" + currentBelt.getStat() + " " + getAccessoryStatTypeStr(currentBelt) + ")");
	}
	if(currentCape != null){
		$('#capeNameText').html("<label class='rarity" + currentCape.getRarity() + "'>" + currentCape.getName() + "</label> (+" + currentCape.getStat() + " " + getAccessoryStatTypeStr(currentCape) + ")");
	}
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