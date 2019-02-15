class quest {
	constructor(name, level, type, monsters, expiry, reward){
		this.name = name;
		this.level = level;
		this.type = type;
		this.monsters = monsters;
		this.expiry = expiry;
		this.reward = reward;
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

}