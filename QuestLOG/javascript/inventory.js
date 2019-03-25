//Currency Declarations
var GC;

//Weapon Declaration
var currentWeapon;

//Armour Declarations
var RMR = 0;
var currentHelmet;
var currentChest;
var currentGloves;
var currentPants;
var currentShoes;

//Accessory Declarations
var currentAmulet;
var currentEarrings;
var currentRing;
var currentBelt;
var currentCape;

//Currency Getters & Setters
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

//Currency Functions
function gainCurrency(val){
	GC += val;
	updateGCText();
	addLogText("Gained: (" + val + ") Gold Coins");
}

function spendCurrency(val){
	GC -= val;
	updateGCText();
	addLogText("Spent: (" + val + ") Gold Coins");
}

//Armour Getters & Setters
function setRMR(val){
	this.RMR = val;
	updateRMRText();
}
function getRMR(){
	return this.RMR;
}
function updateRMRText(){
	$('#characterRMRText').html(getLiveRMR());
}