//**************************************************************
//These utility codes should be put in front of the main program
//**************************************************************

//return an integer random number from a to b inclusive
function genRandom() {
	
	n = Math.floor(Math.random() * 50) + 1;
	return n;
	
}



//reuturn True if input number is valid
function isInputValid(x) {
	
	//if x is outside of the range or x is not a number
	// || means OR, && means AND
	if ( x < temp || x > high || isNaN(x) )
		return false
	
	return true;
	
}


//change backgroung color
function changeBackground(color) {
   
   document.body.style.background = color;
   
}
function changeBackground(input) {
    if (input.startsWith('http')) {
        document.body.style.backgroundImage = "url('" + input + "')";
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.background = input;
    }
}

  function disappear(){
    let image = document.getElementById("gg");
    image.style.visibility = "hidden";
  }
  function appear(){
    let image = document.getElementById("gg");
    image.style.visibility = "visible";
  }
  function changemessage(color){ 
    let text = document.getElementById("message")
     text.style.color = color;}
  function ff(color){
  document.body.style=color;}
