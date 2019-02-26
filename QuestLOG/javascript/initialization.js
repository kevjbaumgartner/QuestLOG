//initializeGame(), encorporates selected character preferences and stats to begin the game
function intializeGame(characterName, characterRace, characterSTR, characterDEX, characterCON, characterWIS, characterLUK, characterMaxHP, characterMaxSP){
	//Set Character Name & Race
	setName(characterName);
	setRace(characterRace);

	//Set Character Stats
	setSTR(characterSTR);
	setDEX(characterDEX);
	setCON(characterCON);
	setWIS(characterWIS);
	setLUK(characterLUK);

	//Set Character HP & SP
	setMaxHP(characterMaxHP);
	setMaxHP(calculateMaxHP());
	setHP(maxHP);
	setMaxSP(characterMaxSP);
	setMaxSP(calculateMaxSP());
	setSP(maxSP);

	//Set Character LV & XP
	setLV(1);
	setReqXP(10);
	setXP(0);

	//Set Character Currency
	setCC(0);
	setSC(0);
	setGC(0);
	setPC(0);

	//Set Character Stat Points
	setUnspentPoints(0);
	checkUnspentPoints();

	//Set Titles
	document.title = "QuestLOG | " + name;
	$('#gameHeaderText').html("QuestLOG ver " + GAME_VER);

	//Introductory Log Text
	addLogText("Welcome " + name + " to QuestLOG version " + GAME_VER + "!")
	handleSpecialRace();

	//Introductory Gear Assignment
	giveStarterGear();
	addLogText("To begin your journey, you have been given the <label class='rarity" + currentWeapon.rarity + "'>" + currentWeapon.name + "</label> and the finest set of armour and accessories from a nearby inn's garbage.");
	
	//Begin Cycling Quests
	addQuest();
	cycleQuests();
	noQueuesCheck();

	//Prep Combat Area
	resetCombat();

	//HP & SP Calculation Functions
	function calculateMaxHP(){
		return maxHP + (CON * 3);
	}
	function calculateMaxSP(){
		return maxSP + (DEX);
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
}

//giveStarterGear(),
function giveStarterGear(){
	var starterWeapon = new weapon;
	starterWeapon.setName("Stick of Stickyness");
	starterWeapon.setRarity(6);
	starterWeapon.setDamage(1);
	starterWeapon.setSpeed(1);
	starterWeapon.setCriticalChance(10);
	starterWeapon.setCriticalDamage(100);
	equipWeapon(starterWeapon);
	var starterAmulet = new accessory;
	starterAmulet.setName("Ugly Locket");
	starterAmulet.setType(1);
	starterAmulet.setStatType(6);
	starterAmulet.setStat(0);
	starterAmulet.setRarity(6);
	equipAccessory(starterAmulet);
	var starterEarrings = new accessory;
	starterEarrings.setName("Rusted Nails");
	starterEarrings.setType(2);
	starterEarrings.setStatType(6);
	starterEarrings.setStat(0);
	starterEarrings.setRarity(6);
	equipAccessory(starterEarrings);
	var starterRing = new accessory;
	starterRing.setName("Cracked Copper Ring");
	starterRing.setType(3);
	starterRing.setStatType(6);
	starterRing.setStat(0);
	starterRing.setRarity(6);
	equipAccessory(starterRing);
	var starterBelt = new accessory;
	starterBelt.setName("Moldy Rope");
	starterBelt.setType(4);
	starterBelt.setStatType(6);
	starterBelt.setStat(0);
	starterBelt.setRarity(6);
	equipAccessory(starterBelt);
	var starterCape = new accessory;
	starterCape.setName("Stained House Cloth");
	starterCape.setType(5);
	starterCape.setStatType(6);
	starterCape.setStat(0);
	starterCape.setRarity(6);
	equipAccessory(starterCape);
	var starterHelmet = new armour;
	starterHelmet.setName("Wooden Bucket");
	starterHelmet.setType(1);
	starterHelmet.setRarity(6);
	starterHelmet.setDefense(1);
	equipArmour(starterHelmet);
	var starterChest = new armour;
	starterChest.setName("Stinky Tunic");
	starterChest.setType(2);
	starterChest.setRarity(6);
	starterChest.setDefense(1);
	equipArmour(starterChest);
	var starterGloves = new armour;
	starterGloves.setName("Itchy Mittens");
	starterGloves.setType(3);
	starterGloves.setRarity(6);
	starterGloves.setDefense(1);
	equipArmour(starterGloves);
	var starterPants = new armour;
	starterPants.setName("Tattered Leggings");
	starterPants.setType(4);
	starterPants.setRarity(6);
	starterPants.setDefense(1);
	equipArmour(starterPants);
	var starterShoes = new armour;
	starterShoes.setName("Soggy Socks");
	starterShoes.setType(5);
	starterShoes.setRarity(6);
	starterShoes.setDefense(1);
	equipArmour(starterShoes);
}

//getData(), parses saved localStorage user data from the character creation page
function getData(){
	name = localStorage.getItem("crName");
	race = localStorage.getItem("crRace");
	STR = Number(localStorage.getItem("crSTR"));
	DEX = Number(localStorage.getItem("crDEX"));
	CON = Number(localStorage.getItem("crCON"));
	WIS = Number(localStorage.getItem("crWIS"));
	LUK = Number(localStorage.getItem("crLUK"));
	raceCount = Number(localStorage.getItem("raceCount"));
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