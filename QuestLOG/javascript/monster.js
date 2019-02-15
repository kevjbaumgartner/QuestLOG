class monster{
	constructor(name, level, HP, damage, speed, defense, loot){
		this.name = name;
		this.level = level;
		this.HP = HP;
		this.damage = damage;
		this.speed = speed;
		this.defense = defense;
		this.loot = loot;
	}

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


	getHP(){
		return this.HP;
	}

	setHP(val){
		this.HP = val;
	}


	getDamage(){
		return this.damage;
	}

	setDamage(val){
		this.damage = damage;
	}


	getSpeed(){
		return this.speed;
	}

	setSpeed(val){
		this.speed = speed;
	}


	getDefense(){
		return this.defense;
	}

	setDefense(val){
		this.defense = val;
	}


	getLoot(){
		return this.loot;
	}

	setLoot(val){
		this.loot = val;
	}

}