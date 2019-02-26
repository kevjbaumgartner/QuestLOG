//Combat Progress Declaration
var combatInProgress = 0;

//Monster Combat Declarations
var combatMonster;
var combatMonsterName;
var combatMonsterLevel;
var combatMonsterHP;
var combatMonsterMaxHP;
var combatMonsterPrevHP;
var combatMonsterDamage;
var combatMonsterAttackSpeed;
var combatMonsterDefense;
var mHPP;
var muHPP;
var mASP;

//Player Combat Declarations
var combatPlayerName;
var combatPlayerLevel;
var combatPlayerHP;
var combatPlayerMaxHP;
var combatPlayerPrevHP;
var combatPlayerDamage;
var combatPlayerAttackSpeed;
var combatPlayerCriticalChance;
var combatPlayerCriticalDamage;
var combatPlayerDefense;
var combatPAS; //Player Attacks per Second
var pHPP;
var puHPP;
var pASP;

//initializeCombat(),
function initializeCombat(){
	combatInProgress = 1;
	prepMonster();
	prepUser();
	updateCombatArea();
}

//resetCombat(), nullifies all relevant data and resets the display
function resetCombat(){
	clearInterval(mHPP);
	clearInterval(muHPP);
	mHPP = null;
	muHPP = null;
	var bar = document.getElementById("monsterHPProgressBar"); 
	bar.style.width = "0%";
	clearInterval(mASP);
	mASP = null;
	var bar = document.getElementById("monsterASProgressBar"); 
	bar.style.width = "0%";
	combatMonster = null;
	combatMonsterName = null;
	combatMonsterLevel = null;
	combatMonsterHP = null;
	combatMonsterMaxHP = null;
	combatMonsterPrevHP = null;
	combatMonsterDamage = null;
	combatMonsterAttackSpeed = null;
	combatMonsterDefense = null;
	clearInterval(pHPP);
	clearInterval(puHPP);
	pHPP = null;
	var bar = document.getElementById("playerHPProgressBar"); 
	bar.style.width = "0%";
	clearInterval(pASP);
	pASP = null;
	var bar = document.getElementById("playerASProgressBar"); 
	bar.style.width = "0%";
	combatPlayerName = null;
	combatPlayerLevel = null;
	combatPlayerHP = null;
	combatPlayerMaxHP = null;
	combatPlayerPrevHP = null;
	combatPlayerDamage = null;
	combatPlayerAttackSpeed = null;
	combatPlayerCriticalChance = null;
	combatPlayerCriticalDamage = null;
	combatPlayerDefense = null;
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
		initializeMonsterHPProgressBar();
		initializeMonsterASProgressBar();
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
		combatPAS = 1 * (combatPlayerAttackSpeed * (1 + (DEX/1000)))
		initializePlayerHPProgressBar();
		initializePlayerASProgressBar();
	}
	else{
		combatInProgress = 0;
	}
}

//monsterTakeDamage(), damages the monsters HP by a certain amount
function monsterTakeDamage(val){
	playerRollHit(val / (1 * ( 1 * combatMonsterDefense)));
	if(combatMonsterHP <= 0){
		combatMonsterHP = 0;
		killTop();
		resetCombat();
	}
	updateCombatMonsterArea();

	//playerRollHit(), rolls to see if the player hits for a critical
	function playerRollHit(val){
		var hold;
		var critRoll = (Math.floor(Math.random() * 100) + 1);
		var critReq = combatPlayerCriticalChance;
		if(critRoll <= critReq){
			hold = (val * (1 + (combatPlayerCriticalDamage/100)));
			addLogText("You <label class='logCrit'>crit</label> the " + combatMonsterName + " for <label class='logDamage'>" + Number(hold).toFixed(2) + "</label> damage! Wow!");
		}else{
			hold = val;
			addLogText("You hit the " + combatMonsterName + " for <label class='logDamage'>" + Number(hold).toFixed(2) + "</label> damage!");
		}
		
		combatMonsterPrevHP = combatMonsterHP;
		combatMonsterHP -= hold;
	}
}

//playerTakeDamage(), damages the players HP by a certain amount
function playerTakeDamage(val){
	var hold = (val / (1 * (1 * combatPlayerDefense)));
	if(hold > 0){
		combatPlayerPrevHP = combatPlayerHP;
		combatPlayerHP -= hold;
		addLogText(combatMonsterName + " hits you for <label class='logMonsterDamage'>" + Number(hold).toFixed(2) + "</label> damage!");
	}
	else{}
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
	updateMonsterHPProgressBar();
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
	updatePlayerHPProgressBar();
}

//Monster HP & Attack Speed Progress Bars
function initializeMonsterHPProgressBar(){
	var bar = document.getElementById("monsterHPProgressBar"); 
  	var width = 0;
  	mHPP = setInterval(frame, 1);
  	function frame(){
    	if (width >= ((combatMonsterHP/combatMonsterMaxHP)*100)) {
    		//console.log("m11");
    	}
    	else if(combatMonsterHP == null){
    		//console.log("m12");
    		clearInterval(mHPP);
    	}
    	else{
    		//console.log("m13");
    		width++; 
	   		bar.style.width = width + '%';
	   	}
	}
}
function updateMonsterHPProgressBar(){
  	var bar = document.getElementById("monsterHPProgressBar"); 
  	var width = Math.floor((combatMonsterPrevHP/combatMonsterMaxHP)*100);
  	muHPP = setInterval(frame, 10);
  	var correction = muHPP;
  	function frame(){
    	if (width <= ((combatMonsterHP/combatMonsterMaxHP)*100)) {
    		//console.log("m21");
    	}
    	else if(combatMonsterHP == null){
    		//console.log("m22");
    		width = 0;
    		clearInterval(correction);
    	}
    	else{
    		//console.log("m23");
    		width -= 1; 
	   		bar.style.width = width + '%';
	   	}
	}
}
function initializeMonsterASProgressBar(){
	var bar = document.getElementById("monsterASProgressBar"); 
  	var width = 1;
  	mASP = setInterval(frame, (10 * (combatMonsterAttackSpeed)));
  	function frame() {
    	if (width >= 100){
    		//console.log("m31");
    		width = 0;
    		playerTakeDamage(combatMonsterDamage);
    	}
    	else if(combatMonsterAttackSpeed == null){
    		//console.log("m32");
    		clearInterval(mASP);
    	}
    	else{
    		//console.log("m33");
    		width++;
	   		bar.style.width = width + '%';
	   	}
	}
}

//Player HP & Attack Speed Progress Bars
function initializePlayerHPProgressBar(){
	var bar = document.getElementById("playerHPProgressBar"); 
  	var width = 0;
  	pHPP = setInterval(frame, 1);
  	function frame(){
    	if (width >= ((combatPlayerHP/combatPlayerMaxHP)*100)) {
    		//console.log("p11");
    	}
    	else if(combatPlayerHP == null){
    		//console.log("p12");
    		clearInterval(pHPP);
    	}
    	else{
    		//console.log("p13");
    		width++; 
	   		bar.style.width = width + '%';
	   	}
	}
}
function updatePlayerHPProgressBar(){
  	var bar = document.getElementById("playerHPProgressBar"); 
  	var width = Math.floor((combatPlayerHP/combatPlayerMaxHP)*100);
  	puHPP = setInterval(frame, 10);
  	var correction = puHPP;
  	function frame(){
    	if (width <= ((combatPlayerHP/combatPlayerMaxHP)*100)) {
    		//console.log("p21");
    	}
    	else if(combatPlayerHP == null){
    		//console.log("p22");
    		width = 0;
    		clearInterval(correction);
    	}
    	else{
    		//console.log("p23");
    		width -= 1; 
	   		bar.style.width = width + '%';
	   	}
	}
}
function initializePlayerASProgressBar(){
	var bar = document.getElementById("playerASProgressBar"); 
  	var width = 1;
  	pASP = setInterval(frame, (10 / (1 * combatPAS)));
  	function frame() {
    	if (width >= 100){
    		//console.log("p31");
    		width = 0;
    		monsterTakeDamage(combatPlayerDamage);
    	}
    	else if(combatPAS == null){
    		//console.log("p32");
    		clearInterval(pASP);
    	}
    	else{
    		//console.log("p33");
    		width++;
	   		bar.style.width = width + '%';
	   	}
	}
}