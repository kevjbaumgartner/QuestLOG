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