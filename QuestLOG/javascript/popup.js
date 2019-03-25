//Modal definition
var popup = document.getElementById("popupEntity");
var titleText = document.getElementById("popupTitle");
var textText = document.getElementById("popupText");

//displayPopup(), displays a relevant modal popup with customizable title and text
function displayPopup(title, text){
	titleText.innerHTML = title;
	textText.innerHTML = text;
	popup.style.display = "block";
}

//hidePopup(), hides the relevant modal popup and clears the title and text
function hidePopup(){
	titleText.innerHTML = "";
	textText.innerHTML = "";
	popup.style.display = "none";
}