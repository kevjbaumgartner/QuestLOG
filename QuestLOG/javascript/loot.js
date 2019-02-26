//Loot class definition
class loot{
	constructor(){
		var name;
		var rarity;
		var value;
	}

	//Getters & Setters
	getName(){
		return this.name;
	}
	setName(val){
		this.name = val;
	}
	getRarity(){
		return this.rarity;
	}
	setRarity(val){
		this.rarity = val;
	}
	getValue(){
		return this.value;
	}
	setValue(val){
		this.value = val;
	}
}

//generatetLoot(), chooses loot based on the monster that was specified
function generateLoot(monster){
	var table = eval(monster.getName().toLowerCase() + "Loot");
	var roll = lootRollRandomizer(monster);
	var lootHold = new loot;
	lootHold.setName(table[roll][0]);
	lootHold.setRarity(table[roll][1]);
	lootHold.setValue(table[roll][2]);
	return lootHold;

	//lootRollRandomizer(), rolls through the designated monsters loot table for a position
	function lootRollRandomizer(monster){
		var temp;
		var len = (table.length - 1);
		temp = Math.floor((Math.random() * len + 0));
		if(temp <= 0){
			return 0;
		}
		else{
			temp = Math.floor((Math.random() * len + 0));
			if(temp <= 1){
				return 1;
			}
			else{
				temp = Math.floor((Math.random() * len + 0));
				if(temp <= 2){
					return 2;
				}
				else{
					return 3;
				}
			}
		}
	}
}