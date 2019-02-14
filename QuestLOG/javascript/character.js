//Variable Declarations
var name;
var race;

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

var unspentPoints;

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
	$('#characterXPText').html(XP);
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
	XP += val;
	updateXPText();
	addLogText("Gained (" + val + ") XP!")

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

	var d = new Date();
	var time = d.toLocaleTimeString();
	addLogText("Congratulations, Level Up: " + LV + " achieved at " + time + "!" );
	addLogText("(1) Stat Point Granted!")
}

function lvSTR(){
	STR += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateSTRText();
}

function lvDEX(){
	DEX += 1;
	unspentPoints -= 1;
	updateUnspentPointsText();
	checkUnspentPoints();
	updateDEXText();

	increaseMaxSP(1);
	updateMaxSPText();
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