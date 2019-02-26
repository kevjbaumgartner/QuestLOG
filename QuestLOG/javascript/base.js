//Variable Declarations
var GAME_VER = "0.10a"; //CURRENT VERSION OF THE GAME
var TTS_QUESTS = 15; //TIME TO SPAWN_QUESTS
var MAX_QUESTS = 3; //MAXIMUM AMOUNT OF QUESTS AT A SINGLE GIVEN TIME

//addLogText(), adds the parameter as a new entry to the top of the text log and removes bottom most entry
function addLogText(text){
	$('#textLog').prepend('<span>> ' + text + '<br></span>');
	$('#textLog span').last().remove();
}

//Quest & Kill Postings Counters
var questCounter = 0;
var queueCounter = 0;

//addQuest(), generate the html posting for a randomly generated quest
function addQuest(){
	noPostingsCheck();
	if(questCounter < 3){
		questCounter += 1;
	    var questToBe = generateQuest();
	    var typeToBe;
	    if(questToBe.getType() == 1){
	    	typeToBe = "Short";
	    	$('#questPostings').prepend('<div class="questPost" id="' + questToBe.getQuestId() + '"> <h3 class="questHeader">Title: ' + questToBe.getName() + '</h3> <h3 class="questHeader">Type: ' + typeToBe + ' LV ' + questToBe.getLevel() + '</h3><h3 class="questHeader">Expiry: <span id="questExpiryText">' + questToBe.getExpiry() + '</span></h3><hr><h3 class="questHeader">Monsters: ' + questToBe.monstersToString() + '</h3><h3 class="questHeader">Rewards: ' + questToBe.getReward() + ' CC</h3> </div>');
	    }
	    else if(questToBe.getType() == 2){
	    	typeToBe = "Dungeon";
	    	$('#questPostings').prepend('<div class="questPost" id="' + questToBe.getQuestId() + '"> <h3 class="questHeader">Title: ' + questToBe.getName() + '</h3> <h3 class="questHeader">Type: ' + typeToBe + ' LV ' + questToBe.getLevel() + '</h3><h3 class="questHeader">Expiry: <span id="questExpiryText">' + questToBe.getExpiry() + '</span></h3><hr><h3 class="questHeader">Monsters: ' + questToBe.monstersToString() + '</h3><h3 class="questHeader">Rewards: ' + questToBe.getReward() + ' CC</h3> </div>');
	    }
	    else if(questToBe.getType() == 3){
	    	typeToBe = "Boss";
	    	$('#questPostings').prepend('<div class="questPost" id="' + questToBe.getQuestId() + '"> <h3 class="questHeader">Title: ' + questToBe.getName() + '</h3> <h3 class="questHeader">Type: ' + typeToBe + ' LV ' + questToBe.getLevel() + '</h3><h3 class="questHeader">Expiry: <span id="questExpiryText">' + questToBe.getExpiry() + '</span></h3><hr><h3 class="questHeader">Monsters: ' + questToBe.monstersToString() + '</h3><h3 class="questHeader">Rewards: ' + questToBe.getReward() + ' Coins</h3><h3 class="questHeader">Bonus: (1) Random Piece of Gear</h3></div>');
	    }
		questToBe.tickExpiry();
		questToBe.createListener();
	}
}

//noPostingsCheck(), if there are no currently available postings to be selected then display the substitute message
function noPostingsCheck(){
	if(questCounter == 0){
		$('#questBoardEmpty').removeClass("qbeHide");
	}
	else{
		$('#questBoardEmpty').addClass("qbeHide");
	}
}

//noQueuesCheck(), if there are no currently queued monsters to be faught then display the substitute message
function noQueuesCheck(){
	if(queueCounter == 0){
		$('#killBoardEmpty').removeClass("kbeHide");
	}
	else{
		$('#killBoardEmpty').addClass("kbeHide");
	}
}

//addKillPost(), used to generate a listing on the kill queue with a monster name
function addKillPost(monsterName, monsterLevel){
	$('#queuePostings').append('<div class="killPosting">LV ' + monsterLevel + " " + monsterName + '<br></div>');
}

//cycleQuests(), adds an additional quest to the postings at a defined time interval
var questTimer;
function cycleQuests(){
	noPostingsCheck();
	clearTimeout(questTimer);
	questTimer = setTimeout(function () {
		addQuest();
		cycleQuests();
    }, (TTS_QUESTS * 1000));
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

//getRarityStr(), returns the rarity type as a string
function getRarityStr(val){
	return {1:"Common", 2:"Uncommon", 3:"Rare", 4:"Epic", 5:"Legendary"}[val.getRarity()];
}

//On document loading, gather localStorage stored information from the CharacterCreation.html form 
window.onload = function(){
	getData();
	intializeGame(name, race, STR, DEX, CON, WIS, LUK, maxHP, maxSP);
}