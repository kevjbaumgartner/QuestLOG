//Variable Declarations
var monsterQueue = [];
var queueSize = 0;
var init = 0;

//addToQueue(), adds a monsters in a queue system to be thrown into the combat system
function addToQueue(monsterTable, reward){
	for(var i = queueSize; i < (monsterTable.length + queueSize); i++){
		monsterQueue[i] = monsterTable[init];
		init += 1;
		console.log(monsterQueue[i] + " queued at position: " + i);
	}
	queueSize = monsterQueue.length;
	init = 0;
}

//killTop(), reduces the queue size and shifts everything to the left by 1
function killTop(){
	queueSize -= 1;
	bumpQueue();
}

//bumpQueue(), shift everything to the left by 1 and pop the remaining duplicate
function bumpQueue(){
	for(var i = 0; i < queueSize; i++){
		monsterQueue[i] = monsterQueue[i+1];
	}
	monsterQueue.pop();
}