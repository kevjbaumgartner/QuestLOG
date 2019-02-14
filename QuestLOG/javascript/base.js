//Variable Declarations
var gameVer = "0.01a"

//initializeGame(), encorporates selected character preferences and stats to begin the game
function intializeGame(characterName, characterRace, characterSTR, characterDEX, characterCON, characterWIS, characterLUK, characterMaxHP, characterMaxSP){
	setName(characterName);
	setRace(characterRace);

	setSTR(characterSTR);
	setDEX(characterDEX);
	setCON(characterCON);
	setWIS(characterWIS);
	setLUK(characterLUK);

	setMaxHP(characterMaxHP);
	setHP(maxHP);

	setMaxSP(characterMaxSP);
	setSP(maxSP);

	setLV(1);

	setReqXP(1000);
	setXP(0);

	setCC(0);
	setSC(0);
	setGC(0);
	setPC(0);

	addLogText("Welcome " + name + " to QuestLOG version " + gameVer + "!")
}

//addText(), adds the parameter as a new entry to the top of the text log and removes bottom most entry
function addLogText(text){
	$('#textLog').prepend('<span>> <text>' + text + '</text><br></span>');
	$('#textLog span').last().remove();
}

window.onload = function(){

	name = localStorage.getItem("crName");
	race = localStorage.getItem("crRace");
	STR = Number(localStorage.getItem("crSTR"));
	DEX = Number(localStorage.getItem("crDEX"));
	CON = Number(localStorage.getItem("crCON"));
	WIS = Number(localStorage.getItem("crWIS"));
	LUK = Number(localStorage.getItem("crLUK"));

	if(window.performance && performance.navigation.type == 1){
		window.location.replace("CharacterCreation.html");
	}
	else if(STR == null || DEX == null || CON == null || WIS == null || LUK == null){
		alert("Fatal Error. Variable Stat returned as NULL.")
		window.location.replace("CharacterCreation.html");
	}

	intializeGame(name, race, STR, DEX, CON, WIS, LUK, calculateMaxHP(), calculateMaxSP);

	localStorage.clear();
}