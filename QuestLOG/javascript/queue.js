//Variable Declarations
var monsterQueue = [];
var queueSize = 0;
var init = 0;
var rewardQueue = [];
var nameQueue = [];

//fleeCombat(), cancels current combat and abandons the entire quest
function fleeCombat(){
	if(combatInProgress != 0){
		addLogText("<label class='logKill'>You flee like a peasant</label>!");
		failTop()
		resetCombat();
	}
}

//failTop(), if you fail a combat for any reason, all relevant monsters to the current quest are removed and no rewards are granted 
function failTop(){
	if(queueSize < 1){
		queueSize = 0;
	}
	else{
		var len = monsterQueue.length;
		var amount = 0;
		for(var i = 0; i < len; i++){
			if(monsterQueue[i].getQUID() == monsterQueue[0].getQUID()){
				amount++;
			}
		}
		for(var i = 0; i < amount; i++){
			if(typeof nameQueue[0] !== 'undefined' && nameQueue[0] !== null){
				addLogText("Quest Failed: " + nameQueue[0] + "!");
			}
			else{}
			$('#queuePostings').find('div').first().remove();
			queueSize -= 1;
			queueCounter -= 1;
			bumpQueue();
		}
	}
}

//addToQueue(), adds monster(s) into the queue system to be thrown into the combat system with accompanied reward
function addToQueue(quest){
	for(var i = queueSize; i < (quest.monsterTable.length + queueSize); i++){
		monsterQueue[i] = quest.monsterTable[init];
		monsterQueue[i].setQUID(quest.getQuestId());
		init += 1;
		addKillPost(monsterQueue[i].getName(), monsterQueue[i].getLevel());
		queueCounter += 1;
	}
	queueSize = monsterQueue.length;
	rewardQueue[queueSize - 1] = quest.getReward();
	nameQueue[queueSize - 1] = quest.getName();
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
		addLogText("<label class='logKill'>" + monsterQueue[0].getName() + " killed</label>!");
		monsterQueue[0].handleDeath();
		$('#queuePostings').find('div').first().remove();
		queueSize -= 1;
		checkQueueReward();
		queueCounter -= 1;
		bumpQueue();
	}
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
	else{}
}