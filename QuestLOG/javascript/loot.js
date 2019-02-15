class loot{
	constructor(name, rarity, value, amount){
		this.name = name;
		this.rarity = rarity;
		this.value = value;
		this.amount = amount;
	}

	getName(){
		return this.name;
	}

	setName(val){
		this.name = val;
	}


	getRarity(){
		return this.rarity;
	}

	setName(val){
		this.rarity = val;
	}


	getValue(){
		return this.value;
	}

	setValue(val){
		this.value = val;
	}


	getAmount(){
		return this.amount;
	}

	setAmount(val){
		this.amount = val;
	}
}