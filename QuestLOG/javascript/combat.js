//Combat Progress Declaration
var combatInProgress = 0;

//Monster Combat Declarations
var combatMonster;
var combatMonsterName;
var combatMonsterLevel;
var combatMonsterHP;
var combatMonsterMaxHP;
var combatMonsterDamage;
var combatMonsterAttackSpeed;
var combatMonsterDefense;
var combatMonsterMaxDefense;
var mASP;
var mHPBar = document.getElementById("monsterHPProgressBar");
var mASBar = document.getElementById("monsterASProgressBar");
var mRMBar = document.getElementById("monsterRMProgressBar");

//Player Combat Declarations
var combatPlayerName;
var combatPlayerLevel;
var combatPlayerHP;
var combatPlayerMaxHP;
var combatPlayerDamage;
var combatPlayerAttackSpeed;
var combatPlayerCriticalChance;
var combatPlayerCriticalDamage;
var combatPlayerDefense;
var combatPlayerMaxDefense;
var combatPAS; //Player Attacks per Second
var pASP;
var pHPBar = document.getElementById("playerHPProgressBar");
var pASBar = document.getElementById("playerASProgressBar");
var pRMBar = document.getElementById("playerRMProgressBar");

//initializeCombat(),
function initializeCombat(){
	combatInProgress = 1;
	prepMonster();
	prepUser();
	updateCombatArea();
}

//resetCombat(), nullifies all relevant data and resets the display
function resetCombat(){
	clearInterval(mASP);
	clearInterval(pASP);
	mHPBar.style.width = "0%";
	mASBar.style.width = "0%";
	mRMBar.style.width = "0%";
	pHPBar.style.width = "0%";
	pASBar.style.width = "0%";
	pRMBar.style.width = "0%";
	
	combatMonster = null;
	combatMonsterName = null;
	combatMonsterLevel = null;
	combatMonsterHP = null;
	combatMonsterMaxHP = null;
	combatMonsterDamage = null;
	combatMonsterAttackSpeed = null;
	combatMonsterDefense = null;
	combatMonsterMaxDefense = null;

	combatPlayerName = null;
	combatPlayerLevel = null;
	combatPlayerHP = null;
	combatPlayerMaxHP = null;
	combatPlayerDamage = null;
	combatPlayerAttackSpeed = null;
	combatPlayerCriticalChance = null;
	combatPlayerCriticalDamage = null;
	combatPlayerDefense = null;
	combatPlayerMaxDefense = null;

	updateCombatArea();
	combatInProgress = 0;
	if(queueSize != 0 && combatInProgress != 1){
		initializeCombat();
	}
}

//prepMonster(), initializes the current top monster in the queue for combat
function prepMonster(monster){
	if(queueSize != 0){
		combatMonster = monsterQueue[0];
		combatMonsterName = monsterQueue[0].getName();
		combatMonsterLevel = monsterQueue[0].getLevel();
		combatMonsterHP = monsterQueue[0].getHP();
		combatMonsterMaxHP = monsterQueue[0].getHP();
		combatMonsterDamage = monsterQueue[0].getDamage();
		combatMonsterAttackSpeed = monsterQueue[0].getSpeed();
		combatMonsterDefense = monsterQueue[0].getDefense();
		combatMonsterMaxDefense = monsterQueue[0].getDefense();
		updateMonsterASProgressBar();
	}
	else{
		combatInProgress = 0;
	}
}

//prepUser(), initializes the current stats of the player for combat
function prepUser(){
	if(combatMonster != null){
		combatPlayerName = name;
		combatPlayerLevel = LV;
		combatPlayerHP = maxHP;
		combatPlayerMaxHP = maxHP;
		combatPlayerDamage = (currentWeapon.getDamage() * (1 + (STR/100)));
		combatPlayerAttackSpeed = currentWeapon.getSpeed();
		combatPlayerCriticalChance = (currentWeapon.getCriticalChance() * (1 + (LUK/100)));
		combatPlayerCriticalDamage = currentWeapon.getCriticalDamage();
		combatPlayerDefense = (getLiveRMR());
		combatPlayerMaxDefense = combatPlayerDefense;
		combatPAS = 1 * (combatPlayerAttackSpeed * (1 + (DEX/1000)))
		updatePlayerASProgressBar();
	}
	else{
		combatInProgress = 0;
	}
}

//monsterTakeDamage(), damages the monsters HP by a certain amount
function monsterTakeDamage(val){
	playerRollHit(val);
	if(combatMonsterHP <= 0){
		combatMonsterHP = 0;
		killTop();
		resetCombat();
	}
	updateCombatMonsterArea();

	//playerRollHit(), rolls to see if the player hits for a critical
	function playerRollHit(val){
		var damageHold;
		var critRoll = (Math.floor(Math.random() * 100) + 1);
		var critReq = combatPlayerCriticalChance;
		determineDamage();
		if(combatMonsterDefense > 0){
			damageHold = (damageHold/2);
			combatMonsterDefense -= damageHold;
			if(combatMonsterDefense <= 0){
				combatMonsterDefense = 0;
			}
		}
		else{
			combatMonsterHP -= damageHold;
		}
		damageText();
		updateMonsterRMProgressBar();

		function determineDamage(){
			if(critRoll <= critReq){
				damageHold = (val * (1 + (combatPlayerCriticalDamage/100)));
			}else{
				damageHold = val;
			}
		}
		function damageText(){
			if(critRoll <= critReq){
				addLogText("You <label class='logCrit'>crit</label> the " + combatMonsterName + " for <label class='logDamage'>" + Number(damageHold).toFixed(2) + "</label> damage! Wow!");
			}else{
				addLogText("You hit the " + combatMonsterName + " for <label class='logDamage'>" + Number(damageHold).toFixed(2) + "</label> damage!");
			}
		}
	}
}

//playerTakeDamage(), damages the players HP by a certain amount
function playerTakeDamage(val){
	var damageHold = val;
	if(combatPlayerDefense > 0){
		damageHold = (damageHold/2);
		combatPlayerDefense -= damageHold;
		if(combatPlayerDefense <= 0){
			combatPlayerDefense = 0;
		}
	}
	else{
		combatPlayerHP -= damageHold;
		if(combatPlayerHP <= 0){
			alert("You have died. You will be returned to the Character Creation Screen.");
			clearData();
		}
	}
	addLogText(combatMonsterName + " hits you for <label class='logMonsterDamage'>" + Number(damageHold).toFixed(2) + "</label> damage!");
	updateCombatPlayerArea();
}

//updateCombatArea(), updates both the monster and player relevant text fields
function updateCombatArea(){
	updateCombatMonsterArea();
	updateCombatPlayerArea();
}

//updateCombatMonsterArea(), updates all relevant monster text fields
function updateCombatMonsterArea(){
	$('#monsterNameText').html(combatMonsterName);
	$('#monsterLevelText').html(combatMonsterLevel);
	$('#monsterHPText').html(Number(combatMonsterHP).toFixed(2));
	$('#monsterMaxHPText').html(Number(combatMonsterMaxHP).toFixed(2));
	$('#monsterDamageText').html(Number(combatMonsterDamage).toFixed(2));
	if(combatMonsterAttackSpeed != null){
		$('#monsterAttackSpeedText').html(Number(combatMonsterAttackSpeed).toFixed(2) + "s");
	}
	else{
		$('#monsterAttackSpeedText').html(Number(combatMonsterAttackSpeed).toFixed(2));
	}
	$('#monsterDefenseText').html(Number(combatMonsterDefense).toFixed(2));
	$('#monsterMaxDefenseText').html(Number(combatMonsterMaxDefense).toFixed(2));
	updateMonsterHPProgressBar();
	updateMonsterRMProgressBar();
}

//updateCombatPlayerArea(), updates all relevant player text fields
function updateCombatPlayerArea(){
	$('#playerNameText').html(combatPlayerName);
	$('#playerLevelText').html(combatPlayerLevel);
	$('#playerHPText').html(Number(combatPlayerHP).toFixed(2));
	$('#playerMaxHPText').html(Number(combatPlayerMaxHP).toFixed(2));
	$('#playerDamageText').html(Number(combatPlayerDamage).toFixed(2));
	if(combatPlayerAttackSpeed != null){
		$('#playerAttackSpeedText').html(Number(1 / combatPAS).toFixed(2) + "s");
	}
	else{
		$('#playerAttackSpeedText').html(Number(combatPlayerAttackSpeed).toFixed(2));
	}
	$('#playerCriticalChanceText').html(Number(combatPlayerCriticalChance).toFixed(2) + "%");
	$('#playerCriticalDamageText').html(Number(combatPlayerCriticalDamage).toFixed(2) + "%");
	$('#playerDefenseText').html(Number(combatPlayerDefense).toFixed(2));
	$('#playerMaxDefenseText').html(Number(combatPlayerMaxDefense).toFixed(2));
	updatePlayerHPProgressBar();
	updatePlayerRMProgressBar();
}

//Monster HP & Attack Speed Progress Bars
function updateMonsterHPProgressBar(){
  	var width = Math.floor((combatMonsterHP/combatMonsterMaxHP) * 100);
  	mHPBar.style.width = width + "%";
}
function updateMonsterRMProgressBar(){
  	var width = Math.floor((combatMonsterDefense/combatMonsterMaxDefense) * 100);
  	mRMBar.style.width = width + "%";
}
function updateMonsterASProgressBar(){
  	var width = 0;
  	mASP = setInterval(frame, (100 * (combatMonsterAttackSpeed)));
  	function frame() {
    	if (width >= 100){
    		width = 10;
    		mASBar.style.width = width + '%';
    		playerTakeDamage(combatMonsterDamage);
    	}
    	else{
    		width += 10;
	   		mASBar.style.width = width + '%';
	   	}
	}
}

//Player HP & Attack Speed Progress Bars
function updatePlayerHPProgressBar(){
  	var width = Math.floor((combatPlayerHP/combatPlayerMaxHP) * 100);
  	pHPBar.style.width = width + "%";
}
function updatePlayerRMProgressBar(){
  	var width = Math.floor((combatPlayerDefense/combatPlayerMaxDefense) * 100);
  	pRMBar.style.width = width + "%";
}
function updatePlayerASProgressBar(){
  	var width = 0;
  	pASP = setInterval(frame, (100 / (1 * combatPAS)));
  	function frame() {
    	if (width >= 100){
    		width = 10;
    		pASBar.style.width = width + '%';
    		monsterTakeDamage(combatPlayerDamage);
    	}
    	else{
    		width += 10;
	   		pASBar.style.width = width + '%';
	   	}
	}
}