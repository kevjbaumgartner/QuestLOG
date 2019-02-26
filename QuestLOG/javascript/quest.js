//Dungeon Name Modifiers
var shortPre = ["Fend Off", "Avert", "Rebut", "Repel", "Drive Back", "Remove", "Stop", "Investigate", "Ward Off", "Dismiss", "Oust", "Abolish"];
var shortSuf = ["Annoying", "Unsettling", "Irritating", "Troublesome", "Disturbing", "Bothersome", "Tiresome", "Unsavoury"];
var dungPre = ["Traverse", "Roam", "Delve", "Tread" , "Wander", "YEET", "Explore"];
var dungAff = ["Smelly", "Stinky", "Dark", "Burning", "Horrid", "Decrepit", "Cryptic", "Ugly", "Maddening", "Magical", "Abandoned", "Overgrown", "Overrun", "Squishy"];
var dungSuf = ["Crypt", "Pit", "Forest", "Cave", "Temple", "Graveyard", "Field", "Ruins", "Wastelands", "Marsh", "Swamp"];
var bossPre = ["Slay", "Vanquish", "Execute", "Eliminate", "Destroy", "Assassinate", "Butcher", "Annihilate"];
var bossSuf = ["Evil", "Destructive", "Heinous", "Hideous", "Ugly", "Vicious", "Vile", "Wicked" , "Atrocious", "Rabid", "Revolting", "Corrupted", "Nasty", "Repulsive"]; 

//Quest class definition
class quest {
	constructor(){
		var name;
		var level;
		var type;
		var expiry;
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
		this.reward = val;
	}
	getQuestId(){
		return this.questId;
	}
	setQuestId(val){
		this.questId = val;
	}
	getSelfInterval(){
		return this.selfInterval;
	}
	setSelfInterval(val){
		this.selfInterval = val;
	}

	//generateMonsterTable(), fills the local quest posting with a defined amount of monsters based on type of quest
	generateMonsterTable(amount){
		this.monsterTable = [];
		for(var i = 0; i < amount; i++){
			this.monsterTable[i] = randomMonster();
		}
	}

	//generateBoss(), fills the local quest posting with a random boss monster
	generateBoss(amount){
		this.monsterTable = [];
		for(var i = 0; i < amount; i++){
			this.monsterTable[i] = randomBoss();
		}
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
	generateRewardTable(){
		var init = Math.floor((Math.random() * 100) + 1);
		var level = this.getLevel();
		var range = (level + (Math.floor((Math.random() * 3) + 1)));
		var type = this.getType();
		this.setReward(init * range * type);
	}

	//tickExpiry(), creates, times down, and deletes a quest post based on the defined expiry value
	tickExpiry(){
		var expTimer = this.getExpiry();
		var id = this.getQuestId();
		var post = $("#" + id );
		this.selfInterval = setInterval(() =>{
			expTimer -= 1;
			if(expTimer < 1){
				clearInterval(this.selfInterval);
				questCounter -= 1;
				noPostingsCheck();
				post.remove();
			}
			post.find("#questExpiryText").html(expTimer);
		}, 1000);
	}

	//createListener(), appends a listener to the quest posting on creation to wait for a click event
	createListener(){
		var quest = this;
		var id = this.getQuestId();
		var post = $("#" + id );
		var int = this.selfInterval;
		$(post).on('click', post, function(){
			clearInterval(int);
			addToQueue(quest);
			questCounter -= 1;
			noPostingsCheck();
			post.remove();
		});
	}

	//generateQuestName(), generates a random quest name depending on the type and monsters included
	generateQuestName(){
		var str;
		if(this.getType() == 1){
			var randomPre = Math.floor((Math.random() * shortPre.length) + 0);
			var randomSuf = Math.floor((Math.random() * shortSuf.length) + 0);
			str = shortPre[randomPre] + " the " + shortSuf[randomSuf] + " " + this.monsterTable[0].name;
		}
		else if(this.getType() == 2){
			var randomPre = Math.floor((Math.random() * dungPre.length) + 0);
			var randomAff = Math.floor((Math.random() * dungAff.length) + 0);
			var randomSuf = Math.floor((Math.random() * dungSuf.length) + 0);
			str = dungPre[randomPre] + " into the " + dungAff[randomAff] + " " + dungSuf[randomSuf];
		}
		else if(this.getType() == 3){
			var randomPre = Math.floor((Math.random() * bossPre.length) + 0);
			var randomSuf = Math.floor((Math.random() * bossSuf.length) + 0);
			str = bossPre[randomPre] + " the " + bossSuf[randomSuf] + " " + this.monsterTable[0].name;
		}
		this.name = str;
	}

	//generateUID(), generates a unique ID for quests based on Math.random seeding algorithm
	generateUID(){
		this.setQuestId(Math.random().toString(36).substr(2, 10));
	}

	//calculateQuestLevel(), determines the level of the quest based on the monsters inside
	calculateQuestLevel(){
		var temp = 0;
		var final;
		var len = this.monsterTable.length;
		for(var i = 0; i < len; i++){
			temp += this.monsterTable[0].getLevel();
		}
		final = Math.floor(temp / len);
		this.setLevel(final);
	}
}

//generateQuest(), generates a random quest and returns it
function generateQuest(){
	var typeRoll = Math.floor((Math.random() * 10) + 1);
	var questHold = new quest;
	questHold.generateUID();
	if(typeRoll <= 4){
		questHold.setType(1);
		questHold.generateMonsterTable(1);
		questHold.setExpiry(Math.floor((Math.random() * 10) + 20));
	}
	else if(typeRoll <= 8){
		questHold.setType(2);
		questHold.generateMonsterTable(3);
		questHold.setExpiry(Math.floor((Math.random() * 10) + 30));
	}
	else if(typeRoll >= 9){
		questHold.setType(3);
		questHold.generateBoss(1);
		questHold.setExpiry(Math.floor((Math.random() * 10) + 40));
	}
	questHold.generateQuestName();
	questHold.calculateQuestLevel();
	questHold.generateRewardTable();
	return questHold;
}