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

var RMR;

var unspentPoints;

var currentWeapon;

var currentAmulet;
var currentEarrings;
var currentRing;
var currentBelt;
var currentCape;

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
	$('#characterHPText').html(HP);
}


function setMaxHP(val){
	this.maxHP = val;
	updateMaxHPText();
}

function getMaxHP(){
	return this.maxHP;
}

function updateMaxHPText(){
	$('#characterMaxHPText').html(maxHP);
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

	increaseMaxHP(5);
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

function increaseMaxSP(val){
	maxSP += val;
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
	if(confirm("Exchange your " + currentWeapon.name + "(Current DPS: " + Number(currentWeapon.dps).toFixed(2) + ") for " + newWeapon.name + " (New DPS: " + Number(newWeapon.dps).toFixed(2) + ")?")){
		currentWeapon = newWeapon;
		updateWeaponArea();
	}
	else{

	}
}

function updateWeaponArea(){
	$('#weaponNameText').html("<label class='rarity" + currentWeapon.rarity + "'>" + currentWeapon.name + "</label>");
	$('#weaponDamageText').html(currentWeapon.damage);
	$('#weaponAttackSpeedText').html(currentWeapon.speed);
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
	}

	function incStat(){
		switch(accessory.statType){
			case 1:
				STR += accessory.stat;
				updateSTRText();
				break;
			case 2:
				DEX += accessory.stat;
				updateDEXText();
				break;
			case 3:
				CON += accessory.stat;
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
		}
	}
	updateAccessoryArea();
}

function unequipAccessory(accessory){
	switch(accessory.type){
		case 1:
			currentAmulet = accessory;
			decStat();
			break;
		case 2:
			currentEarrings = accessory;
			decStat();
			break;
		case 3:
			currentRing = accessory;
			decStat();
			break;
		case 4:
			currentBelt = accessory;
			decStat();
			break;
		case 5:
			currentCape = accessory;
			decStat();
			break;
	}

	function decStat(){
		switch(accessory.statType){
			case 1:
				STR -= accessory.stat;
				updateSTRText();
				break;
			case 2:
				DEX -= accessory.stat;
				updateDEXText();
				break;
			case 3:
				CON -= accessory.stat;
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
		}
	}
	updateAccessoryArea();
}

function exchangeAccessory(newAccessory){
	switch(accessory.type){
		case 1:
			if(confirm("Exchange your " + currentAmulet.name + " (Stat Bonus: " + currentAmulet.statType + " +" + currentAmulet.stat + ") for " + newAccessory.name + " (Stat Bonus: " + newAccessory.statType + " +" + newAccessory.stat + ")")){
				unequipAccessory(currentAmulet);
				equipAccessory(newAccessory);
			}else{}
		case 2:
			if(confirm("Exchange your " + currentEarrings.name + " (Stat Bonus: " + currentEarrings.statType + " +" + currentEarrings.stat + ") for " + newAccessory.name + " (Stat Bonus: " + newAccessory.statType + " +" + newAccessory.stat + ")")){
				unequipAccessory(currentEarrings);
				equipAccessory(newAccessory);
			}else{}
		case 3:
			if(confirm("Exchange your " + currentRing.name + " (Stat Bonus: " + currentRing.statType + " +" + currentRing.stat + ") for " + newAccessory.name + " (Stat Bonus: " + newAccessory.statType + " +" + newAccessory.stat + ")")){
				unequipAccessory(currentRing);
				equipAccessory(newAccessory);
			}else{}
		case 4:
			if(confirm("Exchange your " + currentBelt.name + " (Stat Bonus: " + currentBelt.statType + " +" + currentBelt.stat + ") for " + newAccessory.name + " (Stat Bonus: " + newAccessory.statType + " +" + newAccessory.stat + ")")){
				unequipAccessory(currentBelt);
				equipAccessory(newAccessory);
			}else{}
		case 5:
			if(confirm("Exchange your " + currentCape.name + " (Stat Bonus: " + currentCape.statType + " +" + currentCape.stat + ") for " + newAccessory.name + " (Stat Bonus: " + newAccessory.statType + " +" + newAccessory.stat + ")")){
				unequipAccessory(currentCape);
				equipAccessory(newAccessory);
			}else{}
	}
	updateAccessoryArea();
}

function updateAccessoryArea(){
	$('#amuletNameText').html("<label class='rarity" + currentAmulet.rarity + "'>" + currentAmulet.name + "</label>");
	$('#earringsNameText').html("<label class='rarity" + currentEarrings.rarity + "'>" + currentEarrings.name + "</label>");
	$('#ringNameText').html("<label class='rarity" + currentRing.rarity + "'>" + currentRing.name + "</label>");
	$('#beltNameText').html("<label class='rarity" + currentBelt.rarity + "'>" + currentBelt.name + "</label>");
	$('#capeNameText').html("<label class='rarity" + currentCape.rarity + "'>" + currentCape.name + "</label>");
}