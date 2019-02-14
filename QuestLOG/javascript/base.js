//Variable Declarations
var gameVer = "0.02a"
var lvSTRButton = $('#lvSTRButton');
var lvDEXButton = $('#lvDEXButton');
var lvCONButton = $('#lvCONButton');
var lvWISButton = $('#lvWISButton');
var lvLUKButton = $('#lvLUKButton');

//initializeGame(), encorporates selected character preferences and stats to begin the game
function intializeGame(characterName, characterRace, characterSTR, characterDEX, characterCON, characterWIS, characterLUK, characterMaxHP, characterMaxSP){
	//Initialize all character data
	setName(characterName);
	setRace(characterRace);

	setSTR(characterSTR);
	setDEX(characterDEX);
	setCON(characterCON);
	setWIS(characterWIS);
	setLUK(characterLUK);

	setMaxHP(characterMaxHP);
	setMaxHP(calculateMaxHP());
	setHP(maxHP);

	setMaxSP(characterMaxSP);
	setMaxSP(calculateMaxSP());
	setSP(maxSP);

	setLV(1);

	setReqXP(10);
	setXP(0);

	setCC(0);
	setSC(0);
	setGC(0);
	setPC(0);

	setUnspentPoints(0);
	checkUnspentPoints();

	document.title = "QuestLOG | " + name;
	addLogText("Welcome " + name + " to QuestLOG version " + gameVer + "!")
	handleSpecialRace();
}

//addText(), adds the parameter as a new entry to the top of the text log and removes bottom most entry
function addLogText(text){
	$('#textLog').prepend('<span>> <text>' + text + '</text><br></span>');
	$('#textLog span').last().remove();
}

//handleSpecialRace(), checks to see if the user has entered a special race and displays a dialogue response
function handleSpecialRace(){
	if(raceCount == 0){
		addLogText("You have no predefined race! You're so quirky and random. No stat bonuses applied!");
	}
	else if(raceCount == 1){
		addLogText("You have a predefined race! You're a true blooded patriot. Stat bonuses applied!");
	}
}

window.onload = function(){

	name = localStorage.getItem("crName");
	race = localStorage.getItem("crRace");
	STR = Number(localStorage.getItem("crSTR"));
	DEX = Number(localStorage.getItem("crDEX"));
	CON = Number(localStorage.getItem("crCON"));
	WIS = Number(localStorage.getItem("crWIS"));
	LUK = Number(localStorage.getItem("crLUK"));
	raceCount = Number(localStorage.getItem("raceCount"));

	/*
	if(window.performance && performance.navigation.type == 1){
		window.location.replace("CharacterCreation.html");
	}
	else if(STR == null || DEX == null || CON == null || WIS == null || LUK == null){
		alert("Fatal Error. Variable Stat returned as NULL.")
		window.location.replace("CharacterCreation.html");
	}

	localStorage.clear();
	*/

	intializeGame(name, race, STR, DEX, CON, WIS, LUK, maxHP, maxSP);
}