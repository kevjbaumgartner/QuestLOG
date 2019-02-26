//Currency Declarations
var CC;
var SC;
var GC;
var PC;

//Weapon Declaration
var currentWeapon;

//Armour Declarations
var RMR = 0;
var currentHelmet;
var currentChest;
var currentGloves;
var currentPants;
var currentShoes;

//Accessory Declarations
var currentAmulet;
var currentEarrings;
var currentRing;
var currentBelt;
var currentCape;

//Currency Getters & Setters
function setCC(val){
	this.CC = val;
	updateCCText();
}
function getCC(){
	return this.CC;
}
function updateCCText(){
	$('#characterCCText').html(CC);
}
function setSC(val){
	this.SC = val;
	updateSCText();
}
function getSC(){
	return this.SC;
}
function updateSCText(){
	$('#characterSCText').html(SC);
}
function setGC(val){
	this.GC = val;
	updateGCText();
}
function getGC(){
	return this.GC;
}
function updateGCText(){
	$('#characterGCText').html(GC);
}
function setPC(val){
	this.PC = val;
	updatePCText();
}
function getPC(){
	return this.PC;
}
function updatePCText(){
	$('#characterPCText').html(PC);
}

//Currency Functions
function gainCurrency(val){
	var gained = val;
	var ccHold = 0;
	var scHold = 0;
	var gcHold = 0;
	var pcHold = 0;
	var str = "Gained: ";
	ccHold = gained;
	do{
		if(ccHold >= 100){
			scHold += 1;
			ccHold -= 100;
			if(scHold >= 100){
				gcHold += 1;
				scHold -= 100;
				if(gcHold >= 100){
					pcHold += 1;
					gcHold -= 100;
				}
			}
		}
		else{
			gained = 0;
		}
	} while(gained != 0);
	if(ccHold > 0){
		str = str + "(" + ccHold + " CC) ";
	}
	if(scHold > 0){
		str = str + "(" + scHold + " SC) ";
	}
	if(gcHold > 0){
		str = str + "(" + gcHold + " GC) ";
	}
	if(pcHold > 0){
		str = str + "(" + pcHold + " PC)";
	}
	CC += ccHold;
	if(CC >= 100){
		scHold += 1;
		CC -= 100;
	}
	updateCCText();
	SC += scHold;
	if(SC >= 100){
		gcHold += 1;
		SC -= 100;
	}
	updateSCText();
	GC += gcHold;
	if(GC >= 100){
		pcHold += 1;
		GC -= 100;
	}
	updateGCText();
	PC += pcHold;
	updatePCText();
	addLogText(str);
}

function spendCurrency(val){
    var spent = val;
    var ccHold = 0;
    var scHold = 0;
    var gcHold = 0;
    var pcHold = 0;
    var pcTemp = PC; 
    var str = "Spent: ";
    ccHold = spent;
    do{
        if(ccHold >= 100){
            scHold += 1;
            ccHold -= 100;
            if(scHold >= 100){
                gcHold += 1;
                scHold -= 100;
                if(gcHold >= 100){
                    pcHold += 1;
                    gcHold -= 100;
                }
            }
        }
        else{
            spent = 0;
        }
    } while(spent != 0);

    if((pcTemp - pcHold) < 0){
        alert("Not enough currency!!");
        return;
    }
    if(ccHold > 0){
        str = str + "(" + ccHold + " CC) ";
    }
    if(scHold > 0){
        str = str + "(" + scHold + " SC) ";
    }
    if(gcHold > 0){
        str = str + "(" + gcHold + " GC) ";
    }
    if(pcHold > 0){
        str = str + "(" + pcHold + " PC) ";
    }
    CC -= ccHold;
    if(CC < 0){
        SC -= 1;
        CC += 100;
    }
    updateCCText();
    SC -= scHold;
    if(SC < 0){
        GC -= 1;
        SC += 100;
    }
    updateSCText();
    GC -= gcHold;
    if(GC < 0){
        PC -= 1;
        GC += 100;
    }
    updateGCText();
    PC -= pcHold;
    updatePCText();
    addLogText(str);
}

//Armour Getters & Setters
function setRMR(val){
	this.RMR = val;
	updateRMRText();
}
function getRMR(){
	return this.RMR;
}
function updateRMRText(){
	$('#characterRMRText').html(getLiveRMR());
}