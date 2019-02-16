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

	generateMonsterTable(amount){
		this.monsterTable = [];
		for (var i = 0; i < amount; i++){
			this.monsterTable[i] = randomMonster();
		}
	}

	tickExpiry(){
		var expTimer = this.expiry;
		var id = this.questId;
		var post = $("#" + id );
		var selfInterval = setInterval(function(){
			expTimer -= 1;
			if(expTimer < 1){
				clearInterval(selfInterval);
				post.remove();
			}
			post.find("#questExpiryText").html(expTimer);
		}, 1000);
	}

	createListener(){
		var exp = this.expiry;
		var id = this.questId;
		var post = $("#" + id );
		$(document).on('click', post, function(){
			
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
			questHold.questId = Math.floor((Math.random() * 100000) + 1);
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
			questHold.questId = Math.floor((Math.random() * 100000) + 1);
			return questHold;
			break;
		case 3:
			nameHold = "Boss Quest";
			levelHold = LV + 2;
			typeHold = "Boss";
			rewardHold = "Nothing";
			expiryHold = 90;
			questHold = new quest(nameHold, levelHold, typeHold, expiryHold, rewardHold);
			questHold.generateMonsterTable(1);
			questHold.questId = Math.floor((Math.random() * 100000) + 1);
			return questHold;
			break;
	}
}