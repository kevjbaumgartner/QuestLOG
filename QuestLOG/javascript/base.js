//Variable Declarations
var gameVer = "0.05a"
var lvSTRButton = $('#lvSTRButton');
var lvDEXButton = $('#lvDEXButton');
var lvCONButton = $('#lvCONButton');
var lvWISButton = $('#lvWISButton');
var lvLUKButton = $('#lvLUKButton');
var questTimer;

var TTS_QUESTS = 15; //TIME TO SPAWN_QUESTS

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

	var starterWeapon = new weapon;
	starterWeapon.setName("Stick of Stickyness");
	starterWeapon.setType(2);
	starterWeapon.setRarity(6);
	starterWeapon.setDamage(1);
	starterWeapon.setSpeed(1);
	starterWeapon.setCriticalChance(1);
	starterWeapon.setCriticalDamage(50);
	equipWeapon(starterWeapon);

	var starterAmulet = new accessory;
	starterAmulet.setName("Ugly Locket");
	starterAmulet.setType(1);
	starterAmulet.setStatType(1);
	starterAmulet.setStat(0);
	starterAmulet.setRarity(6);
	equipAccessory(starterAmulet);

	var starterEarrings = new accessory;
	starterEarrings.setName("Rusted Nails");
	starterEarrings.setType(2);
	starterEarrings.setStatType(2);
	starterEarrings.setStat(0);
	starterEarrings.setRarity(6);
	equipAccessory(starterEarrings);

	var starterRing = new accessory;
	starterRing.setName("Cracked Copper Ring");
	starterRing.setType(3);
	starterRing.setStatType(3);
	starterRing.setStat(0);
	starterRing.setRarity(6);
	equipAccessory(starterRing);

	var starterBelt = new accessory;
	starterBelt.setName("Moldy Rope");
	starterBelt.setType(4);
	starterBelt.setStatType(4);
	starterBelt.setStat(0);
	starterBelt.setRarity(6);
	equipAccessory(starterBelt);

	var starterCape = new accessory;
	starterCape.setName("Stained House Cloth");
	starterCape.setType(5);
	starterCape.setStatType(5);
	starterCape.setStat(0);
	starterCape.setRarity(6);
	equipAccessory(starterCape);

	updateAccessoryArea();

	addLogText("To begin your journey, you have been given the <label class='rarity" + currentWeapon.rarity + "'>" + currentWeapon.name + "</label> and the finest set of armour and accessories from a nearby inn's garbage.");
}

//addText(), adds the parameter as a new entry to the top of the text log and removes bottom most entry
function addLogText(text){
	$('#textLog').prepend('<span>> ' + text + '<br></span>');
	$('#textLog span').last().remove();
}

//handleSpecialRace(), checks to see if the user has entered a special race and displays a dialogue response
function handleSpecialRace(){
	if(raceCount == 0){
		addLogText("You have no predefined race! You're so quirky and random.");
		addLogText("Sadly there are no bonuses to being a " + race + "! :^(");
	}
	else if(raceCount == 1){
		addLogText("You have a predefined race! You're a true blooded " + race + "!");
		addLogText("Stat bonuses have been applied! :^)");
	}
}

//addQuest(), used to generate the html posting for a generated quest
function addQuest(){
    var questToBe = generateQuest();
    var typeToBe;
    if(questToBe.type == 1){
    	typeToBe = "Short";
    }
    else if(questToBe.type == 2){
    	typeToBe = "Dungeon";
    }
    else if(questToBe.type == 3){
    	typeToBe = "Boss";
    }
	$('#questPostings').prepend('<div class="questPost" id="' + questToBe.questId + '"> <h3 class="questHeader">Title: ' + questToBe.name + '</h3> <h3 class="questHeader">Level: ' + questToBe.level + '</h3> <h3 class="questHeader">Type: ' + typeToBe + '</h3> <br> <h3 class="questHeader">Expiry: <span id="questExpiryText">' + questToBe.expiry + '</span></h3> <hr> <h3 class="questHeader">Monsters: ' + questToBe.monstersToString() + '</h3> <hr> <h3 class="questHeader">Rewards: ' + questToBe.reward + ' CC</h3> </div>');
	questToBe.tickExpiry();
	questToBe.createListener();
}

//addKillPost(), used to generate a listing on the kill queue with a monster name
function addKillPost(monsterName, monsterLevel){
	$('#queuePostings').append('<div class="killPosting">LV ' + monsterLevel + " " + monsterName + '<br></div>');
}

//cycleQuests(), adds an additional quest to the postings at a defined time interval
function cycleQuests(){
	clearTimeout(questTimer);
	questTimer = setTimeout(function () {
		addQuest();
		cycleQuests();
    }, (TTS_QUESTS * 1000));
}

//clearData(), sends the user back to user creation on page reload, refreshes local data as well
function clearData(){
	if(window.performance && performance.navigation.type == 1){
		window.location.replace("CharacterCreation.html");
	}
	else if(STR == null || DEX == null || CON == null || WIS == null || LUK == null){
		alert("Fatal Error. Variable Stat returned as NULL.")
		window.location.replace("CharacterCreation.html");
	}

	localStorage.clear();
}

//determineRarity(), based off of a 1-10000 scale to determine the rarity based on roll
function determineRarity(roll){
	if(roll <= (100 + LUK)){
		return 5;
	}
	else if(roll <= (1000 + LUK )){
		return 4;
	}
	else if(roll <= (3000 + LUK)){
		return 3;
	}
	else if(roll <= (5000 + LUK)){
		return 2;
	}
	else{
		return 1;
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

	//clearData();

	intializeGame(name, race, STR, DEX, CON, WIS, LUK, maxHP, maxSP);
	addQuest();
	cycleQuests();
}