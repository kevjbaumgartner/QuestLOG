//Variable Declarations
var name;
var race;

var STR;
var DEX;
var CON;
var WIS;
var LUK;

var HP;
var maxHP;
var SP;
var maxSP;

var LV;
var XP;
var reqXP;

var CC;
var SC;
var GC;
var PC;

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

//Calculation Functions
function calculateMaxHP(){
	return 50 + (CON * 3);
}

function calculateMaxSP(){
	return 20 + (DEX);
}