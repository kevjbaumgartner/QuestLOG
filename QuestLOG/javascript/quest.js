//Quest class definition
class quest {
	constructor(type, expiry){
		var name;
		var level;
		this.type = type;
		this.expiry = expiry;
		var reward;
		var monsterTable = []
		var questId;
		var selfInterval;
	}

	//Getters & Setters
	getName(){
		return this.name;
	}

	setName(val){
		this.name = val;
	}


	getLevel(){
		return this.level;
	}

	setLevel(val){
		this.level = val;
	}


	getType(){
		return this.type;
	}

	setType(val){
		this.type = val;
	}


	getMonsters(){
		return this.monsters;
	}

	setMonsters(val){
		this.monsters = val;
	}


	getExpiry(){
		return this.expiry;
	}

	setExpiry(val){
		this.expiry = val;
	}


	getReward(){
		return this.reward;
	}

	setReward(val){
		this.reward = reward;
	}

	//generateMonsterTable(), fills the local quest posting with a defined amount of monsters based on type of quest
	generateMonsterTable(amount){
		this.monsterTable = [];
		for (var i = 0; i < amount; i++){
			this.monsterTable[i] = randomMonster();
		}
	}

	//generateBoss(), fills the local quest posting with a random boss monster
	generateBoss(){
		this.monsterTable = [];
		this.monsterTable[0] = randomBoss();
	}

	//monstersToString(), presents the table of monsters in a legible list
	monstersToString(){
		var temp = this.monsterTable.length;
		var str = "";
		for(var i = 0; i < temp; i++){
			if(this.monsterTable[i+1] != null){
				str = str + this.monsterTable[i].name + ", ";
			}
			else{
				str = str + this.monsterTable[i].name;
			}
		}
		return str;
	}

	//generateRewardTable(), fills the reward field with a random value based on type of dungeon and player level
	generateRewardTable(level, type){
		var init = Math.floor((Math.random() * 100) + 1);
		var level = level;
		var range = level + (Math.floor((Math.random() * 3) + 1));
		var type = type;
		this.reward = (init * range * type);
	}

	//tickExpiry(), creates, times down, and deletes a quest post based on the defined expiry value
	tickExpiry(){
		var expTimer = this.expiry;
		var id = this.questId;
		var post = $("#" + id );
		var int = this.selfInterval;
		this.selfInterval = setInterval(() =>{
			expTimer -= 1;
			if(expTimer < 1){
				questCounter -= 1;
				noPostingsCheck();
				clearInterval(this.selfInterval);
				post.remove();
			}
			post.find("#questExpiryText").html(expTimer);
		}, 1000);
	}

	//createListener(), appends a listener to the quest posting on creation to wait for a click event
	createListener(){
		var title = this.name;
		var id = this.questId;
		var monsterTable = this.monsterTable;
		var post = $("#" + id );
		var int = this.selfInterval;
		var reward = this.reward;
		$(post).on('click', post, function(){
			addToQueue(title, monsterTable, reward);
			questCounter -= 1;
			noPostingsCheck();
			clearInterval(int);
			post.remove();
		});
	}

	//generateQuestName(), generates a random quest name depending on the type and monsters included
	generateQuestName(){
		var str;
		var shortPre = ["Fend Off", "Avert", "Rebut", "Repel", "Drive Back", "Remove", "Stop", "Investigate", "Ward Off", "Dismiss", "Oust", "Abolish"];
        var shortSuf = ["Annoying", "Unsettling", "Irritating", "Troublesome", "Disturbing", "Bothersome", "Tiresome", "Unsavoury"];
        var dungPre = ["Traverse", "Roam", "Delve", "Tread" , "Wander", "YEET", "Explore"];
        var dungAff = ["Smelly", "Stinky", "Dark", "Burning", "Horrid", "Decrepit", "Cryptic", "Ugly", "Maddening", "Magical", "Abandoned", "Overgrown", "Overrun", "Squishy"];
        var dungSuf = ["Crypt", "Pit", "Forest", "Cave", "Temple", "Graveyard", "Field", "Ruins", "Wastelands", "Marsh", "Swamp"];
        var bossPre = ["Slay", "Vanquish", "Execute", "Eliminate", "Destroy", "Assassinate", "Butcher", "Annihilate"];
        var bossSuf = ["Evil", "Destructive", "Heinous", "Hideous", "Ugly", "Vicious", "Vile", "Wicked" , "Atrocious", "Rabid", "Revolting", "Corrupted", "Nasty", "Repulsive"]; 

		if(this.type == 1){
			var randomPre = Math.floor((Math.random() * shortPre.length) + 1);
			var randomSuf = Math.floor((Math.random() * shortSuf.length) + 1);
			str = shortPre[randomPre-1] + " the " + shortSuf[randomSuf-1] + " " + this.monsterTable[0].name;
		
		}
		else if(this.type == 2){
			var randomPre = Math.floor((Math.random() * dungPre.length) + 1);
			var randomAff = Math.floor((Math.random() * dungAff.length) + 1);
			var randomSuf = Math.floor((Math.random() * dungSuf.length) + 1);
			str = dungPre[randomPre-1] + " into the " + dungAff[randomAff-1] + " " + dungSuf[randomSuf-1];
		}
		else if(this.type == 3){
			var randomPre = Math.floor((Math.random() * bossPre.length) + 1);
			var randomSuf = Math.floor((Math.random() * bossSuf.length) + 1);
			str = bossPre[randomPre-1] + " the " + bossSuf[randomSuf-1] + " " + this.monsterTable[0].name;
		}

		this.name = str;
	}
}

//generateQuest(), generates a random quest and returns it
function generateQuest(){
	var typeRoll = Math.floor((Math.random() * 5) + 1);
	var questHold;
	var typeHold;
	var expiryHold;
	var rewardHold;

	switch(typeRoll){
		case 1:
		case 2:
			nameHold = "Short Quest";
			typeHold = 1;
			expiryHold = Math.floor((Math.random() * 10) + 25);
			questHold = new quest(typeHold, expiryHold);
			questHold.generateMonsterTable(1);
			questHold.generateQuestName();
			questHold.level = questHold.monsterTable[0].level;
			questHold.questId = generateUID();
			questHold.generateRewardTable(questHold.level, typeRoll);
			return questHold;
			break;
		case 3:
		case 4:
			typeHold = 2;
			expiryHold = Math.floor((Math.random() * 10) + 35);
			questHold = new quest(typeHold, expiryHold);
			questHold.generateMonsterTable(3);
			questHold.generateQuestName();
			questHold.level = 0;
			for(var i = 0; i < questHold.monsterTable.length; i++){
				questHold.level += questHold.monsterTable[0].level;
			}
			questHold.level = Math.floor(questHold.level / questHold.monsterTable.length);
			questHold.questId = generateUID();
			questHold.generateRewardTable(questHold.level, typeRoll);
			return questHold;
			break;
		case 5:
			typeHold = 3;
			expiryHold = Math.floor((Math.random() * 10) + 45);
			questHold = new quest(typeHold, expiryHold);
			questHold.generateBoss();
			questHold.generateQuestName();
			questHold.monsterTable[0].level += 5;
			questHold.monsterTable[0].generateXP();
			questHold.monsterTable[0].XP += (1 + (1 * (2 * (LV/10))));
			questHold.level = questHold.monsterTable[0].level;
			questHold.questId = generateUID();
			questHold.generateRewardTable(questHold.level, typeRoll);
			return questHold;
			break;
	}

	//generateUID(), generates a unique ID for quests based on Math.random seeding algorithm
	function generateUID(){
		return Math.random().toString(36).substr(2, 10);
	}
}