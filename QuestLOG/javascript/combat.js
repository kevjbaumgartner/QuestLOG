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

var userPrevHP;

var HPP;
var ASP;

//initializeCombat(),
function initializeCombat(){
	combatInProgress = 1;
	prepMonster();
}

//
function resetCombat(){
	clearInterval(HPP);
	HPP = null;
	var bar = document.getElementById("monsterHPProgressBar"); 
	bar.style.width = 0;
	clearInterval(ASP);
	SPP = null;
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
		updateCombatArea();
	}
	else{
		combatInProgress = 0;
	}
}

//
function monsterTakeDamage(val){
	combatMonsterPrevHP = combatMonsterHP;
	combatMonsterHP -= val;
	if(combatMonsterHP <= 0){
		combatMonsterHP = 0;
		killTop();
		resetCombat();
	}
	updateCombatArea();
}

//
function playerTakeDamage(val){
	var hold = (val - RMR);
	if(hold > 0){
		userPrevHP = HP;
		HP -= hold;
	}
	else{

	}
	updateCombatArea();
	updateHPText();
}

//
function updateCombatArea(){
	$('#monsterNameText').html(combatMonsterName);
	$('#monsterLevelText').html(combatMonsterLevel);
	$('#monsterHPText').html(combatMonsterHP);
	$('#monsterMaxHPText').html(combatMonsterMaxHP);
	$('#monsterDamageText').html(combatMonsterDamage);
	if(combatMonsterAttackSpeed != null){
		$('#monsterAttackSpeedText').html(combatMonsterAttackSpeed + "s");
	}
	else{
		$('#monsterAttackSpeedText').html(combatMonsterAttackSpeed);
	}
	$('#monsterDefenseText').html(combatMonsterDefense);
	updateMonsterHPProgressBar();
}

//
function initializeMonsterHPProgressBar(){
	var bar = document.getElementById("monsterHPProgressBar"); 
  	var width = 0;
  	HPP = setInterval(frame, 1);
  	function frame(){
    	if (width >= ((combatMonsterHP/combatMonsterMaxHP)*100)) {
    		
    	}
    	else if(combatMonsterHP == null){
    		clearInterval(HPP);
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
  	HPP = setInterval(frame, 10);
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
  	ASP = setInterval(frame, (10 * (combatMonsterAttackSpeed)));
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