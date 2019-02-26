//Level Up Specific Functions
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
	$('#characterReqXPText').html(Number(reqXP).toFixed(2));
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

//gainXP(), increases XP affected by amount of character WIS
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

//levelUp(), handles all functions that are to occur when the user levels up
function levelUp(){
	LV += 1;
	updateLVText();
	updateXPText();

	reqXP = reqXP + (reqXP/2);
	updateReqXPText();
	unspentPoints += 3;
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
	addLogText("(3) Stat Points Granted!")
}

//Stat Button Functions
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
	updateArmourArea();
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
	updateWeaponArea();
}

//maxHP & maxSP Increase Functions
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

//checkUnspentPoints(), toggles the character sheet stat buttons
function checkUnspentPoints(){
	if(unspentPoints == 0){
		$('#lvSTRButton').prop('disabled', true);
		$('#lvDEXButton').prop('disabled', true);
		$('#lvCONButton').prop('disabled', true);
		$('#lvWISButton').prop('disabled', true);
		$('#lvLUKButton').prop('disabled', true);
	}
	else{
		$('#lvSTRButton').prop('disabled', false);
		$('#lvDEXButton').prop('disabled', false);
		$('#lvCONButton').prop('disabled', false);
		$('#lvWISButton').prop('disabled', false);
		$('#lvLUKButton').prop('disabled', false);
	}
}