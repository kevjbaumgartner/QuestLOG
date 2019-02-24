//Variable Declarations
var name;
var race;

var raceCount;

var STR;
var DEX;
var CON;
var WIS;
var LUK;

var HP;
var maxHP = 50;
var SP;
var maxSP = 20;

var LV;
var XP;
var reqXP;

var CC;
var SC;
var GC;
var PC;

var RMR = 0;

var unspentPoints;

var currentWeapon;

var currentAmulet;
var currentEarrings;
var currentRing;
var currentBelt;
var currentCape;

var currentHelmet;
var currentChest;
var currentGloves;
var currentPants;
var currentShoes;

//Getters, Setters, & Updates
function setName(val){
	this.name = val;
	updateNameText();
}

function getName(){
	return this.name;
}

function updateNameText(){
	$('#characterNameText').html(name);
}


function setRace(val){
	this.race = val;
	updateRaceText();
}

function getRace(){
	return this.race;
}

function updateRaceText(){
	$('#characterRaceText').html(race);
}


function setSTR(val){
	this.STR = val;
	updateSTRText();
}

function getSTR(){
	return this.STR;
}

function updateSTRText(){
	$('#characterSTRText').html(STR);
}


function setDEX(val){
	this.DEX = val;
	updateDEXText();
}

function getDEX(){
	return this.DEX;
}

function updateDEXText(){
	$('#characterDEXText').html(DEX);
}


function setCON(val){
	this.CON = val;
	updateCONText();
}

function getCON(){
	return this.CON;
}

function updateCONText(){
	$('#characterCONText').html(CON);
}


function setWIS(val){
	this.WIS = val;
	updateWISText();
}

function getWIS(){
	return this.WIS;
}

function updateWISText(){
	$('#characterWISText').html(WIS);
}


function setLUK(val){
	this.LUK = val;
	updateLUKText();
}

function getLUK(){
	return this.LUK;
}

function updateLUKText(){
	$('#characterLUKText').html(LUK);
}


function setHP(val){
	this.HP = val;
	updateHPText();
}

function getHP(){
	return this.HP;
}

function updateHPText(){
	$('#characterHPText').html(Number(HP).toFixed(2));
}


function setMaxHP(val){
	this.maxHP = val;
	updateMaxHPText();
}

function getMaxHP(){
	return this.maxHP;
}

function updateMaxHPText(){
	$('#characterMaxHPText').html(Number(maxHP).toFixed(2));
}


function setSP(val){
	this.SP = val;
	updateSPText();
}

function getSP(){
	return this.SP;
}

function updateSPText(){
	$('#characterSPText').html(SP);
}


function setMaxSP(val){
	this.maxSP = val;
	updateMaxSPText();
}

function getMaxSP(){
	return this.maxSP;
}

function updateMaxSPText(){
	$('#characterMaxSPText').html(maxSP);
}


function setLV(val){
	this.LV = val;
	updateLVText();
}

function getLV(){
	return this.LV;
}

function updateLVText(){	
	$('#characterLVText').html(LV);
}


function setXP(val){
	this.XP = val;
	updateXPText();
}

function getXP(){
	return this.XP;
}

function updateXPText(){
	$('#characterXPText').html(Number(XP).toFixed(2));
}


function setReqXP(val){
	this.reqXP = val;
	updateReqXPText();
}

function getReqXP(){
	return this.reqXP;
}

function updateReqXPText(){
	$('#characterReqXPText').html(reqXP);
}


function setCC(val){
	this.CC = val;
	updateCCText();
}

function getCC(){
	return this.CC;
}

function updateCCText(){
	$('#characterCCText').html(CC);
}


function setSC(val){
	this.SC = val;
	updateSCText();
}

function getSC(){
	return this.SC;
}

function updateSCText(){
	$('#characterSCText').html(SC);
}


function setGC(val){
	this.GC = val;
	updateGCText();
}

function getGC(){
	return this.GC;
}

function updateGCText(){
	$('#characterGCText').html(GC);
}


function setPC(val){
	this.PC = val;
	updatePCText();
}

function getPC(){
	return this.PC;
}

function updatePCText(){
	$('#characterPCText').html(PC);
}


function setUnspentPoints(val){
	this.unspentPoints = val;
	updateUnspentPointsText();
}

function getUnspentPoints(){
	return this.unspentPoints;
}

function updateUnspentPointsText(){
	$('#characterUnspentPointsText').html(unspentPoints);
}

function checkUnspentPoints(){
	if(unspentPoints == 0){
		lvSTRButton.prop('disabled', true);
		lvDEXButton.prop('disabled', true);
		lvCONButton.prop('disabled', true);
		lvWISButton.prop('disabled', true);
		lvLUKButton.prop('disabled', true);
	}
	else{
		lvSTRButton.prop('disabled', false);
		lvDEXButton.prop('disabled', false);
		lvCONButton.prop('disabled', false);
		lvWISButton.prop('disabled', false);
		lvLUKButton.prop('disabled', false);
	}
}

//Level Up Functions
function gainXP(val){
	var hold = (val * (1 + (WIS/100)));
	XP += hold;
	XP = Math.round(XP * 100) / 100;
	updateXPText();
	addLogText("Gained: <label class='logXP'>" + Number(hold).toFixed(2) + "</label> XP!")

	if(XP >= reqXP){
		XP -= reqXP;
		levelUp();
	}
}

function levelUp(){
	LV += 1;
	updateLVText();

	updateXPText();

	reqXP = reqXP * 2;
	updateReqXPText();

	unspentPoints += 1;
	updateUnspentPointsText();
	checkUnspentPoints();

	increaseMaxHP(3);
	setHP(maxHP);
	updateHPText();

	increaseMaxSP(1);
	setSP(maxSP);
	updateSPText();

	updateWeaponArea();

	addLogText("Congratulations, Level Up: " + LV + "!" );
	addLogText("(1) Stat Point Granted!")
}

function lvSTR(){
	STR += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateSTRText();

	updateWeaponArea();
}

function lvDEX(){
	DEX += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateDEXText();

	increaseMaxSP(1);
	updateMaxSPText();

	updateWeaponArea();
}

function lvCON(){
	CON += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateCONText();

	increaseMaxHP(3);
	updateMaxHPText();
}

function lvWIS(){
	WIS += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateWISText();
}

function lvLUK(){
	LUK += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateLUKText();
}

function increaseMaxHP(val){
	maxHP += val;
	updateMaxHPText();
}

function decreaseMaxHP(val){
	maxHP -= val;
	updateMaxHPText();
}

function increaseMaxSP(val){
	maxSP += val;
	updateMaxSPText();
}

function decreaseMaxSP(val){
	maxSP -= val;
	updateMaxSPText();
}

//Calculation Functions
function calculateMaxHP(){
	return maxHP + (CON * 3);
}

function calculateMaxSP(){
	return maxSP + (DEX);
}

//Currency Functions
function gainCurrency(val){
	var gained = val;
	var ccHold = 0;
	var scHold = 0;
	var gcHold = 0;
	var pcHold = 0;
	var str = "Gained: ";
	ccHold = gained;
	do{
		if(ccHold >= 100){
			scHold += 1;
			ccHold -= 100;
			if(scHold >= 100){
				gcHold += 1;
				scHold -= 100;
				if(gcHold >= 100){
					pcHold += 1;
					gcHold -= 100;
				}
			}
		}
		else{
			gained = 0;
		}
	} while(gained != 0);
	if(ccHold > 0){
		str = str + "(" + ccHold + " CC) ";
	}
	if(scHold > 0){
		str = str + "(" + scHold + " SC) ";
	}
	if(gcHold > 0){
		str = str + "(" + gcHold + " GC) ";
	}
	if(pcHold > 0){
		str = str + "(" + pcHold + " PC)";
	}
	CC += ccHold;
	if(CC >= 100){
		scHold += 1;
		CC -= 100;
	}
	updateCCText();
	SC += scHold;
	if(SC >= 100){
		gcHold += 1;
		SC -= 100;
	}
	updateSCText();
	GC += gcHold;
	if(GC >= 100){
		pcHold += 1;
		GC -= 100;
	}
	updateGCText();
	PC += pcHold;
	updatePCText();
	addLogText(str);
}

function spendCurrency(val){
    var spent = val;
    var ccHold = 0;
    var scHold = 0;
    var gcHold = 0;
    var pcHold = 0;
    var pcTemp = PC; 
    var str = "Spent: ";
    ccHold = spent;
    do{
        if(ccHold >= 100){
            scHold += 1;
            ccHold -= 100;
            if(scHold >= 100){
                gcHold += 1;
                scHold -= 100;
                if(gcHold >= 100){
                    pcHold += 1;
                    gcHold -= 100;
                }
            }
        }
        else{
            spent = 0;
        }
    } while(spent != 0);

    if((pcTemp - pcHold) < 0){
        alert("Not enough currency!!");
        return;
    }
    if(ccHold > 0){
        str = str + "(" + ccHold + " CC) ";
    }
    if(scHold > 0){
        str = str + "(" + scHold + " SC) ";
    }
    if(gcHold > 0){
        str = str + "(" + gcHold + " GC) ";
    }
    if(pcHold > 0){
        str = str + "(" + pcHold + " PC) ";
    }
    CC -= ccHold;
    if(CC < 0){
        SC -= 1;
        CC += 100;
    }
    updateCCText();
    SC -= scHold;
    if(SC < 0){
        GC -= 1;
        SC += 100;
    }
    updateSCText();
    GC -= gcHold;
    if(GC < 0){
        PC -= 1;
        GC += 100;
    }
    updateGCText();
    PC -= pcHold;
    updatePCText();
    addLogText(str);
}

//Weapon Functions
function equipWeapon(weapon){
	currentWeapon = weapon;
	updateWeaponArea();
}

function exchangeWeapon(newWeapon){
	if(confirm("Exchange your " + currentWeapon.name + " (Current DPS: " + Number(currentWeapon.dps).toFixed(2) + ") for " + newWeapon.name + " (New DPS: " + Number(newWeapon.dps).toFixed(2) + ")?")){
		currentWeapon = newWeapon;
		updateWeaponArea();
	}
	else{

	}
}

function updateWeaponArea(){
	$('#weaponNameText').html("<label class='rarity" + currentWeapon.rarity + "'>" + currentWeapon.name + "</label>");
	$('#weaponDamageText').html(currentWeapon.damage);
	$('#weaponAttackSpeedText').html(Number(currentWeapon.speed).toFixed(2));
	$('#weaponCriticalChanceText').html(currentWeapon.cc);
	$('#weaponCriticalDamageText').html(currentWeapon.cd);
	currentWeapon.determineDPS();
	$('#weaponDPSText').html(Number(currentWeapon.dps).toFixed(2));
}

//Accessory Functions
function equipAccessory(accessory){
	switch(accessory.type){
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

	function incStat(){
		switch(accessory.statType){
			case 1:
				STR += accessory.stat;
				updateSTRText();
				updateWeaponArea();
				break;
			case 2:
				DEX += accessory.stat;
				for(var i = 0; i < accessory.stat; i++){
					increaseMaxSP(1);
				}
				updateMaxSPText();
				updateDEXText();
				updateWeaponArea();
				break;
			case 3:
				CON += accessory.stat;
				for(var i = 0; i < accessory.stat; i++){
					increaseMaxHP(3);
				}
				updateMaxHPText();
				updateCONText();
				break;
			case 4:
				WIS += accessory.stat;
				updateWISText();
				break;
			case 5:
				LUK += accessory.stat;
				updateLUKText();
				break;
			default:
				break;
		}
	}
}

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

function exchangeAccessory(newAccessory){
	var currentStatTypeHold;
	var newStatTypeHold;

	switch(newAccessory.type){
		case 1:
			currentStatTypeHold = parseStatType(currentAmulet);
			newStatTypeHold = parseStatType(newAccessory);
			if(confirm("Exchange your " + currentAmulet.name + " (Stat Bonus: +" + currentAmulet.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentAmulet);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 2:
			currentStatTypeHold = parseStatType(currentEarrings);
			newStatTypeHold = parseStatType(newAccessory);
			if(confirm("Exchange your " + currentEarrings.name + " (Stat Bonus: +" + currentAmulet.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentEarrings);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 3:
			currentStatTypeHold = parseStatType(currentRing);
			newStatTypeHold = parseStatType(newAccessory);
			if(confirm("Exchange your " + currentRing.name + " (Stat Bonus: +" + currentAmulet.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentRing);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 4:
			currentStatTypeHold = parseStatType(currentBelt);
			newStatTypeHold = parseStatType(newAccessory);
			if(confirm("Exchange your " + currentBelt.name + " (Stat Bonus: +" + currentAmulet.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentBelt);
				equipAccessory(newAccessory);
			}else{}
			break;
		case 5:
			currentStatTypeHold = parseStatType(currentCape);
			newStatTypeHold = parseStatType(newAccessory);
			if(confirm("Exchange your " + currentCape.name + " (Stat Bonus: +" + currentEarrings.stat + " " + currentStatTypeHold + ") for " + newAccessory.name + " (Stat Bonus: +" + newAccessory.stat + " " + newStatTypeHold + ")?")){
				unequipAccessory(currentCape);
				equipAccessory(newAccessory);
			}else{}
			break;
		default:
			break;
	}
	updateAccessoryArea();
}

function updateAccessoryArea(){
	$('#amuletNameText').html("<label class='rarity" + currentAmulet.rarity + "'>" + currentAmulet.name + "</label> (+" + currentAmulet.stat + " " + parseStatType(currentAmulet) + ")");
	$('#earringsNameText').html("<label class='rarity" + currentEarrings.rarity + "'>" + currentEarrings.name + "</label> (+" + currentEarrings.stat + " " + parseStatType(currentEarrings) + ")");
	$('#ringNameText').html("<label class='rarity" + currentRing.rarity + "'>" + currentRing.name + "</label> (+" + currentRing.stat + " " + parseStatType(currentRing) + ")");
	$('#beltNameText').html("<label class='rarity" + currentBelt.rarity + "'>" + currentBelt.name + "</label> (+" + currentBelt.stat + " " + parseStatType(currentBelt) + ")");
	$('#capeNameText').html("<label class='rarity" + currentCape.rarity + "'>" + currentCape.name + "</label> (+" + currentCape.stat + " " + parseStatType(currentCape) + ")");
}

//Armour Function
function equipArmour(armour){
	switch(armour.type){
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

	function incRMR(){
		RMR += armour.defense;
	}
}

function unequipArmour(armour){
	switch(armour.type){
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

	function decRMR(){
		RMR -= armour.defense;
	}
}

function exchangeArmour(newArmour){
	switch(newArmour.type){
		case 1:
			if(confirm("Exchange your " + currentHelmet.name + " (DEF: " + currentHelmet.defense + ") for " + newArmour.name + " (DEF: " + newArmour.defense + ")?")){
				unequipArmour(currentHelmet);
				equipArmour(newArmour);
			}else{}
			break;
		case 2:
			if(confirm("Exchange your " + currentChest.name + " (DEF: " + currentChest.defense + ") for " + newArmour.name + " (DEF: " + newArmour.defense + ")?")){
				unequipArmour(currentChest);
				equipArmour(newArmour);
			}else{}
			break;
		case 3:
			if(confirm("Exchange your " + currentGloves.name + " (DEF: " + currentGloves.defense + ") for " + newArmour.name + " (DEF: " + newArmour.defense + ")?")){
				unequipArmour(currentGloves);
				equipArmour(newArmour);
			}else{}
			break;
		case 4:
			if(confirm("Exchange your " + currentPants.name + " (DEF: " + currentPants.defense + ") for " + newArmour.name + " (DEF: " + newArmour.defense + ")?")){
				unequipArmour(currentPants);
				equipArmour(newArmour);
			}else{}
			break;
		case 5:
			if(confirm("Exchange your " + currentShoes.name + " (DEF: " + currentShoes.defense + ") for " + newArmour.name + " (DEF: " + newArmour.defense + ")?")){
				unequipArmour(currentShoes);
				equipArmour(newArmour);
			}else{}
			break;
		default:
			break;
	}
	updateArmourArea();
}

function updateArmourArea(){
	$('#helmetNameText').html("<label class='rarity" + currentHelmet.rarity + "'>" + currentHelmet.name + "</label> (+" + currentHelmet.defense + " DEF)");
	$('#chestNameText').html("<label class='rarity" + currentChest.rarity + "'>" + currentChest.name + "</label> (+" + currentChest.defense + " DEF)");
	$('#glovesNameText').html("<label class='rarity" + currentGloves.rarity + "'>" + currentGloves.name + "</label> (+" + currentGloves.defense + " DEF)");
	$('#pantsNameText').html("<label class='rarity" + currentPants.rarity + "'>" + currentPants.name + "</label> (+" + currentPants.defense + " DEF)");
	$('#shoesNameText').html("<label class='rarity" + currentShoes.rarity + "'>" + currentShoes.name + "</label> (+" + currentShoes.defense + " DEF)");
	$('#characterRMRText').html(RMR);
}