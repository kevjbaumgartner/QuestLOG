//Variable Declarations
var crName;
var crRace;
var totalPoints;
var crSTR;
var crDEX;
var crCON;
var crWIS;
var crLUK;
var raceCount;

//characterCreate(), parses all collected preferential character data and stores it locally to pass to the main game page
function characterCreate(){
	crName = creationName.value;
	crRace = creationRace.value;
	if((crName.trim() != "") && (crRace.trim() != "") && (totalPoints < 1)){
		if(confirm("Ready to begin as " + crName + "?")){
			checkSpecialRace();
			localStorage.setItem("crName", crName);
			localStorage.setItem("crRace", crRace);
			localStorage.setItem("crSTR", crSTR);
			localStorage.setItem("crDEX", crDEX);
			localStorage.setItem("crCON", crCON);
			localStorage.setItem("crWIS", crWIS);
			localStorage.setItem("crLUK", crLUK);
			localStorage.setItem("raceCount", raceCount);
			window.location.href = "QuestLOG.html";
		}
		else{}
	}
	else{
		alert("Please fill out both Name and Race fields, as well as spending all 40 points.");
	}
}

//checkSpecialRace(), checks to see if the user has entered any special race keywords
function checkSpecialRace(){
	if(crRace.includes("Human") || crRace.includes("human")){
		raceCount += 1;
		crDEX += 1;
		crWIS += 1;
	}
	if(crRace.includes("Dragon") || crRace.includes("dragon")){
		raceCount += 1;
		crSTR += 1;
		crWIS += 1;
	}
	if(crRace.includes("Dwarf") || crRace.includes("dwarf")){
		raceCount += 1;
		crSTR += 1;
		crCON += 1;
	}
	if(crRace.includes("Elf") || crRace.includes("elf")){
		raceCount += 1;
		crDEX += 1;
		crWIS += 1;
	}
	if(crRace.includes("Orc") || crRace.includes("orc")){
		raceCount += 1;
		crSTR += 1;
		crCON += 1;
	}
	if(crRace.includes("Gnome") || crRace.includes("gnome")){
		raceCount += 1;
		crDEX += 1;
		crCON += 1;
	}
	if(crRace.includes("Halfling") || crRace.includes("halfling")){
		raceCount += 1;
		crDEX += 1;
		crWIS += 1;
	}
	if(crRace.includes("Tiefling") || crRace.includes("tiefling")){
		raceCount += 1;
		crSTR += 1;
		crWIS += 1;
	}
	if(crRace.includes("Goblin") || crRace.includes("goblin")){
		raceCount += 1;
		crLUK += 2;
	}
	if(crRace.includes("Giant") || crRace.includes("giant")){
		raceCount += 1;
		crSTR += 1;
		crCON += 1;
	}
	if(crRace.includes("Ogre") || crRace.includes("ogre")){
		raceCount += 1;
		crSTR += 1;
		crCON += 1;
	}
}

//randomizeStats(), randomizes all 5 stat categories to additively distribute all 40 unalloted points
function randomizeStats(){
	do{
		var hold1 = Math.floor((Math.random() * 40) + 1);
		var hold2 = Math.floor((Math.random() * 40) + 1);
		var hold3 = Math.floor((Math.random() * 40) + 1);
		var hold4 = Math.floor((Math.random() * 40) + 1);
		var hold5 = Math.floor((Math.random() * 40) + 1);
	} while((hold1 + hold2 + hold3 + hold4 + hold5) != 40);
	crSTR = hold1;
	crDEX = hold2;
	crCON = hold3;
	crWIS = hold4;
	crLUK = hold5;
	$('#creationSTR').html(crSTR);
	$('#creationDEX').html(crDEX);
	$('#creationCON').html(crCON);
	$('#creationWIS').html(crWIS);
	$('#creationLUK').html(crLUK);
	totalPoints = 0;
	$('#creationUnallotedPoints').html(totalPoints);
}

//restartCreate(), resets all fields and values to inital or empty
function restartCreate(){
	crName = "";
	crRace = "";
	totalPoints = 40;
	crSTR = 0;
	crDEX = 0;
	crCON = 0;
	crWIS = 0;
	crLUK = 0;
	raceCount = 0;
	$('#creationName').val(crName);
	$('#creationRace').val(crRace);
	$('#creationUnallotedPoints').html(totalPoints);
	$('#creationSTR').html(crSTR);
	$('#creationDEX').html(crDEX);
	$('#creationCON').html(crCON);
	$('#creationWIS').html(crWIS);
	$('#creationLUK').html(crLUK);
	localStorage.clear();
}

//Increase stats & Decrease stats
function incSTR(){
	if(totalPoints > 0){
		crSTR += 1;
		$('#creationSTR').html(crSTR);
		totalPoints -= 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
	else{}
}
function decSTR(){
	if(totalPoints < 40 && crSTR != 0){
		crSTR -= 1;
		$('#creationSTR').html(crSTR);
		totalPoints += 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
}
function incDEX(){
	if(totalPoints > 0){
		crDEX += 1;
		$('#creationDEX').html(crDEX);
		totalPoints -= 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
	else{}
}
function decDEX(){
	if(totalPoints < 40 && crDEX != 0){
		crDEX -= 1;
		$('#creationDEX').html(crDEX);
		totalPoints += 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
}
function incCON(){
	if(totalPoints > 0){
		crCON += 1;
		$('#creationCON').html(crCON);
		totalPoints -= 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
	else{}
}
function decCON(){
	if(totalPoints < 40 && crCON != 0){
		crCON -= 1;
		$('#creationCON').html(crCON);
		totalPoints += 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
}
function incWIS(){
	if(totalPoints > 0){
		crWIS += 1;
		$('#creationWIS').html(crWIS);
		totalPoints -= 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
	else{}
}
function decWIS(){
	if(totalPoints < 40 && crWIS != 0){
		crWIS -= 1;
		$('#creationWIS').html(crWIS);
		totalPoints += 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
}
function incLUK(){
	if(totalPoints > 0){
		crLUK += 1;
		$('#creationLUK').html(crLUK);
		totalPoints -= 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
	else{}
}
function decLUK(){
	if(totalPoints < 40 && crLUK != 0){
		crLUK -= 1;
		$('#creationLUK').html(crLUK);
		totalPoints += 1;
		$('#creationUnallotedPoints').html(totalPoints);
	}
}

//Onload, refresh all fields
window.onload = function(){
	restartCreate()
}