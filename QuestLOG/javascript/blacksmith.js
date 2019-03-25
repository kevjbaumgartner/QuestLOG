//Blacksmith Variable Declarations
var bsmRandomWeaponCost = 2500;
var bsmStrengthenPercent = 50;
var bsmStrengthenCost = 500;
var bsmStrengthenBladeBonus = 1;
var bsmStrengthenHiltBonus = 1;
var bsmStrengthenPointBonus = 1;

//initBlacksmith(), updates all of the blacksmith fields
function initBlacksmith(){
	updateBlacksmith();
}

//updateBlacksmith(), updates all relevant text fields
function updateBlacksmith(){
	$("#bsmRandomWeaponCostText").html(bsmRandomWeaponCost);
	$("#bsmStrengthenPercentText").html(bsmStrengthenPercent);
	$("#bsmStrengthenCostText").html(bsmStrengthenCost);
	$("#bsmStrengthenBladePercentText").html(bsmStrengthenBladeBonus);
	$("#bsmStrengthenHiltPercentText").html(bsmStrengthenHiltBonus);
	$("#bsmStrengthenPointPercentText").html(bsmStrengthenPointBonus);
	updateBlacksmithButtons();
}

//updateBlacksmithButtons(), updates all relevant buttons
function updateBlacksmithButtons(){
	if(currentWeapon.getName() == "Fists"){
		$("#bsmStrengthenBladeButton").prop('disabled', true);
		$("#bsmStrengthenHiltButton").prop('disabled', true);
		$("#bsmStrengthenPointButton").prop('disabled', true);
	}
	else{
		$("#bsmStrengthenBladeButton").prop('disabled', false);
		$("#bsmStrengthenHiltButton").prop('disabled', false);
		$("#bsmStrengthenPointButton").prop('disabled', false);
	}
}

//bsmRandomWeapon(), creates a random weapon using the blacksmith
function bsmRandomWeapon(){
	if(GC >= bsmRandomWeaponCost){
		spendCurrency(bsmRandomWeaponCost);
		var weaponHold = randomWeapon();
		addLogText("The Blacksmith forged: <label class='rarity" + weaponHold.rarity + "'>" + weaponHold.name + "</label>!");
		exchangeWeapon(weaponHold);
	}
	updateBlacksmith();
}

//
function bsmStrengthenBlade(){
	var successHold = Math.floor((Math.random() * 100) + 1);
	if((GC >= bsmStrengthenCost) && (currentWeapon.getName() != "Fists")){
		spendCurrency(bsmStrengthenCost);
		if(successHold >= bsmStrengthenPercent){
			var updatedDamage;
			updatedDamage = (currentWeapon.getDamage() * (1 + (bsmStrengthenBladeBonus/100)));
			currentWeapon.setDamage(updatedDamage);
			addLogText("Success! Blade Strengthened!");
		}
		else{
			var updatedDamage;
			updatedDamage = (currentWeapon.getDamage() * (1 - (bsmStrengthenBladeBonus/100)));
			currentWeapon.setDamage(updatedDamage);
			addLogText("Failure. Blade Weakened!");
		}
		updateBlacksmith();
		updateWeaponArea();
	}
}

//
function bsmStrengthenHilt(){
	var successHold = Math.floor((Math.random() * 100) + 1);
	if((GC >= bsmStrengthenCost) && (currentWeapon.getName() != "Fists")){
		spendCurrency(bsmStrengthenCost);
		if(successHold >= bsmStrengthenPercent){
			var updatedSpeed;
			updatedSpeed = (currentWeapon.getSpeed() * (1 + (bsmStrengthenHiltBonus/100)));
			currentWeapon.setSpeed(updatedSpeed);
			addLogText("Success! Hilt Strengthened!");
		}
		else{
			var updatedSpeed;
			updatedSpeed = (currentWeapon.getSpeed() * (1 - (bsmStrengthenHiltBonus/100)));
			currentWeapon.setSpeed(updatedSpeed);
			addLogText("Failure. Hilt Weakened!");
		}
		updateBlacksmith();
		updateWeaponArea();
	}
}

//
function bsmStrengthenPoint(){
	var successHold = Math.floor((Math.random() * 100) + 1);
	if((GC >= bsmStrengthenCost) && (currentWeapon.getName() != "Fists")){
		spendCurrency(bsmStrengthenCost);
		if(successHold >= bsmStrengthenPercent){
			var updateCD;
			updateCD = (currentWeapon.getCriticalDamage() * (1 + (bsmStrengthenPointBonus/100)));
			currentWeapon.setCriticalDamage(updateCD);
			addLogText("Success! Point Strengthened!");
		}
		else{
			var updateCD;
			updateCD = (currentWeapon.getCriticalDamage() * (1 - (bsmStrengthenPointBonus/100)));
			currentWeapon.setCriticalDamage(updateCD);
			addLogText("Failure. Point Weakened!");
		}
		updateBlacksmith();
		updateWeaponArea();
	}
}