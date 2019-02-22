//Quest class question
class quest {
	constructor(name, level, type, expiry){
		this.name = name;
		this.level = level;
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
				clearInterval(this.selfInterval);
				console.log("QUID: '" + id + "' deleted. Expired.")
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
			clearInterval(int);
			console.log("QUID: '" + id + "' deleted. Selected.")
			post.remove();
		});
	}
}

//generateQuest(), generates a random quest and returns it
function generateQuest(){
	var typeRoll = Math.floor((Math.random() * 3) + 1);
	var questHold;
	var nameHold;
	var levelHold;
	var typeHold;
	var expiryHold;
	var rewardHold;

	switch(typeRoll){
		case 1:
			nameHold = "Short Quest";
			levelHold = 0;
			typeHold = 1;
			expiryHold = 30;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold);
			questHold.generateMonsterTable(1);
			questHold.level = questHold.monsterTable[0].level;
			questHold.questId = generateUID();
			questHold.generateRewardTable(questHold.level, typeRoll);
			return questHold;
			break;
		case 2:
			nameHold = "Dungeon Quest";
			levelHold = 0;
			typeHold = 2;
			expiryHold = 45;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold);
			questHold.generateMonsterTable(3);
			for(var i = 0; i < questHold.monsterTable.length; i++){
				questHold.level += questHold.monsterTable[0].level;
			}
			questHold.level = Math.floor(questHold.level / questHold.monsterTable.length);
			questHold.questId = generateUID();
			questHold.generateRewardTable(questHold.level, typeRoll);
			return questHold;
			break;
		case 3:
			nameHold = "Boss Quest";
			levelHold = 0;
			typeHold = 3;
			expiryHold = 60;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold);
			questHold.generateMonsterTable(1);
			questHold.monsterTable[0].level += 5;
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