//Quest class question
class quest {
	constructor(name, level, type, expiry, reward){
		this.name = name;
		this.level = level;
		this.type = type;
		this.expiry = expiry;
		this.reward = reward;
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
		var id = this.questId;
		var monsterTable = this.monsterTable;
		var post = $("#" + id );
		var int = this.selfInterval;
		$(post).on('click', post, function(){
			clearInterval(int);
			console.log("QUID: '" + id + "' deleted. Selected.")
			post.remove();
		});
	}
}

//generateQuest(), generates a random quest and returns it
function generateQuest(){
	var questHold;
	var typeRoll = Math.floor((Math.random() * 3) + 1);

	var nameHold;
	var levelHold;
	var typeHold;
	var expiryHold;
	var rewardHold;

	switch(typeRoll){
		case 1:
			nameHold = "Short Quest";
			levelHold = LV + 1;
			typeHold = "Short";
			rewardHold = "Nothing";
			expiryHold = 45;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold, rewardHold);
			questHold.generateMonsterTable(1);
			questHold.questId = generateUID();
			return questHold;
			break;
		case 2:
			nameHold = "Dungeon Quest";
			levelHold = LV + 1;
			typeHold = "Dungeon";
			rewardHold = "Nothing";
			expiryHold = 60;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold, rewardHold);
			questHold.generateMonsterTable(3);
			questHold.questId = generateUID();
			return questHold;
			break;
		case 3:
			nameHold = "Boss Quest";
			levelHold = LV + 2;
			typeHold = "Boss";
			rewardHold = "Nothing";
			expiryHold = 75;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold, rewardHold);
			questHold.generateMonsterTable(1);
			questHold.questId = generateUID();
			return questHold;
			break;
	}

	//generateUID(), generates a unique ID for quests based on Math.random seeding algorithm
	function generateUID(){
		return Math.random().toString(36).substr(2, 10);
	}
}