var combatInProgress = 0;

var combatMonster;
var combatMonsterName;
var combatMonsterLevel;
var combatMonsterHP;
var combatMonsterMaxHP;
var combatMonsterPrevHP;
var combatMonsterDamage;
var combatMonsterAttackSpeed;
var combatMonsterDefense;

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

var combatPAS;

var mHPP;
var mASP;

var pHPP;
var pASP;

//initializeCombat(),
function initializeCombat(){
	combatInProgress = 1;
	prepMonster();
	prepUser();
}

//
function resetCombat(){
	clearInterval(mHPP);
	mHPP = null;
	var bar = document.getElementById("monsterHPProgressBar"); 
	bar.style.width = 0;
	clearInterval(mASP);
	mASP = null;
	var bar = document.getElementById("monsterASProgressBar"); 
	bar.style.width = 0;

	combatMonster = null;
	combatMonsterName = null;
	combatMonsterLevel = null;
	combatMonsterHP = null;
	combatMonsterMaxHP = null;
	combatMonsterDamage = null;
	combatMonsterAttackSpeed = null;
	combatMonsterDefense = null;
	combatMonsterPrevHP = null;

	clearInterval(pHPP);
	pHPP = null;
	var bar = document.getElementById("playerHPProgressBar"); 
	bar.style.width = 0;
	clearInterval(pASP);
	pASP = null;
	var bar = document.getElementById("playerASProgressBar"); 
	bar.style.width = 0;

	combatPlayer = null;
	combatPlayerName = null;
	combatPlayerLevel = null;
	combatPlayerHP = null;
	combatPlayerMaxHP = null;
	combatPlayerDamage = null;
	combatPlayerAttackSpeed = null;
	combatPlayerCriticalChance = null;
	combatPlayerCriticalDamage = null;
	combatPlayerDefense = null;
	combatPlayerPrevHP = null;

	updateCombatArea();

	combatInProgress = 0;

	if(queueSize != 0){
		initializeCombat();
	}
}

//
function prepMonster(monster){
	if(queueSize != 0){
		combatMonster = monsterQueue[0];
		combatMonsterName = monsterQueue[0].name;
		combatMonsterLevel = monsterQueue[0].level;
		combatMonsterHP = monsterQueue[0].HP;
		combatMonsterMaxHP = monsterQueue[0].HP;
		combatMonsterDamage = monsterQueue[0].damage;
		combatMonsterAttackSpeed = monsterQueue[0].speed;
		combatMonsterDefense = monsterQueue[0].defense;
		initializeMonsterHPProgressBar();
		initializeMonsterASProgressBar();
		updateCombatMonsterArea();
	}
	else{
		combatInProgress = 0;
	}
}

//
function prepUser(){
	if(combatMonster != null){
		combatPlayerName = name;
		combatPlayerLevel = LV;
		combatPlayerHP = HP;
		combatPlayerMaxHP = maxHP;
		combatPlayerDamage = (currentWeapon.damage * (1 + (STR/100)));
		combatPlayerAttackSpeed = currentWeapon.speed;
		combatPlayerCriticalChance = (currentWeapon.cc * (1 + (LUK/1000)));
		combatPlayerCriticalDamage = currentWeapon.cd;
		combatPlayerDefense = (RMR * (1 + (CON/200)));
		combatPAS = 1 * (combatPlayerAttackSpeed * (1 + (DEX/1000)))
		initializePlayerHPProgressBar();
		initializePlayerASProgressBar();
		updateCombatPlayerArea();
	}
	else{}
}

//
function monsterTakeDamage(val){
	playerRollHit(val / (1 * ( 1 * combatMonsterDefense)));
	if(combatMonsterHP <= 0){
		combatMonsterHP = 0;
		killTop();
		resetCombat();
	}
	updateCombatMonsterArea();

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

//
function playerTakeDamage(val){
	var hold = (val / (1 * (1 * combatPlayerDefense)));
	if(hold > 0){
		combatPlayerPrevHP = combatPlayerHP;
		combatPlayerHP -= hold;
		HP = combatPlayerHP;
		addLogText(combatMonsterName + " hits you for <label class='logMonsterDamage'>" + Number(hold).toFixed(2) + "</label> damage!");
	}
	else{

	}
	updateCombatPlayerArea();
	updateHPText();
}

//
function updateCombatArea(){
	updateCombatMonsterArea();
	updateCombatPlayerArea();
}

//
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

//
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

//
function initializeMonsterHPProgressBar(){
	var bar = document.getElementById("monsterHPProgressBar"); 
  	var width = 0;
  	mHPP = setInterval(frame, 1);
  	function frame(){
    	if (width >= ((combatMonsterHP/combatMonsterMaxHP)*100)) {
    		
    	}
    	else if(combatMonsterHP == null){
    		clearInterval(mHPP);
    	}
    	else{
    		width++; 
	   		bar.style.width = width + '%';
	   	}
	}
}

//
function updateMonsterHPProgressBar(){
  	var bar = document.getElementById("monsterHPProgressBar"); 
  	var width = Math.floor((combatMonsterPrevHP/combatMonsterMaxHP)*100);
  	mHPP = setInterval(frame, 10);
  	function frame(){
    	if (width <= ((combatMonsterHP/combatMonsterMaxHP)*100)) {
    	}
    	else{
    		width -= 1; 
	   		bar.style.width = width + '%';
	   	}
	}
}

//
function initializeMonsterASProgressBar(){
	var bar = document.getElementById("monsterASProgressBar"); 
  	var width = 1;
  	mASP = setInterval(frame, (10 * (combatMonsterAttackSpeed)));
  	function frame() {
    	if (width >= 100){
    		width = 0;
    		playerTakeDamage(combatMonsterDamage);
    	}
    	else{
    		width++;
	   		bar.style.width = width + '%';
	   	}
	}
}

//
function initializePlayerHPProgressBar(){
	var bar = document.getElementById("playerHPProgressBar"); 
  	var width = 0;
  	pHPP = setInterval(frame, 1);
  	function frame(){
    	if (width >= ((combatPlayerHP/combatPlayerMaxHP)*100)) {
    	}
    	else if(combatPlayerHP == null){
    		clearInterval(pHPP);
    	}
    	else{
    		width++; 
	   		bar.style.width = width + '%';
	   	}
	}
}

//
function updatePlayerHPProgressBar(){
  	var bar = document.getElementById("playerHPProgressBar"); 
  	var width = Math.floor((combatPlayerHP/combatPlayerMaxHP)*100);
  	pHPP = setInterval(frame, 10);
  	function frame(){
    	if (width <= ((combatPlayerHP/combatPlayerMaxHP)*100)) {
    	}
    	else if(combatPlayerHP == null){
    		clearInterval(pHPP);
    	}
    	else{
    		width -= 1; 
	   		bar.style.width = width + '%';
	   	}
	}
}

//
function initializePlayerASProgressBar(){
	var bar = document.getElementById("playerASProgressBar"); 
  	var width = 1;
  	pASP = setInterval(frame, (10 / (1 * combatPAS)));
  	function frame() {
    	if (width >= 100){
    		width = 0;
    		monsterTakeDamage(combatPlayerDamage);
    	}
    	else{
    		width++;
	   		bar.style.width = width + '%';
	   	}
	}
}