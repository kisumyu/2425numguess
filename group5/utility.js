//**************************************************************
//These utility codes should be put in front of the main program
//**************************************************************

//return an integer random number from a to b inclusive
function genRandom() {
	
	n = Math.floor(Math.random() * 20) + 1;
	return n;
	
}



//reuturn True if input number is valid
function isInputValid(x) {
	
	//if x is outside of the range or x is not a number
	// || means OR, && means AND
	if ( x < 1 || x > 20 || isNaN(x) )
		return false
	
	return true;
	
}


//change backgroung color
function changeBackground(color) {
   
   document.body.style.background = color;
   
}