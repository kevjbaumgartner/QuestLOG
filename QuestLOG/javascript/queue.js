//Variable Declarations
var monsterQueue = [];
var queueSize = 0;
var init = 0;
var rewardQueue = [];
var nameQueue = [];

//addToQueue(), adds monster(s) into the queue system to be thrown into the combat system with accompanied reward
function addToQueue(title, monsterTable, reward){
	for(var i = queueSize; i < (monsterTable.length + queueSize); i++){
		monsterQueue[i] = monsterTable[init];
		init += 1;
		addKillPost(monsterQueue[i].name, monsterQueue[i].level);
		queueCounter += 1;
	}
	queueSize = monsterQueue.length;
	rewardQueue[queueSize - 1] = reward;
	nameQueue[queueSize - 1] = title;
	init = 0;
	noQueuesCheck();
	if(combatInProgress == 0){
		initializeCombat();
	}
}

//killTop(), reduces the queue size and shifts everything to the left by 1
function killTop(){
	if(queueSize < 1){
		queueSize = 0;
	}
	else{
		addLogText("<label class='logKill'>" + monsterQueue[0].name + " killed</label>!");
		monsterQueue[0].handleDeath();
		$('#queuePostings').find('div').first().remove();
		queueSize -= 1;
		checkQueueReward();
		queueCounter -= 1;
		bumpQueue();
	}
}

//
function failTop(){
	
}

//bumpQueue(), shift everything to the left by 1 and pop the remaining duplicate
function bumpQueue(){
	for(var i = 0; i < queueSize; i++){
		monsterQueue[i] = monsterQueue[i+1];
	}
	monsterQueue.pop();
	rewardQueue = rewardQueue.slice(1);
	nameQueue = nameQueue.slice(1);
	noQueuesCheck();
}

//checkQueueReward(), checks to see if there is an accompanied reward for killing a monster at index position in the queue
function checkQueueReward(){
	if(typeof rewardQueue[0] !== 'undefined' && rewardQueue[0] !== null){
		addLogText("Quest Complete: " + nameQueue[0] + "!");
		gainCurrency(rewardQueue[0]);
	}
	else{
	}
}