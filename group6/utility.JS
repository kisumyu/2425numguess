//**************************************************************
//These utility codes should be put in front of the main program
//**************************************************************

//return an integer random number from a to b inclusive
function genRandom() {
	
	n = Math.floor(Math.random() * 50) + 1;
	return n;
	
}



//return True if input number is valid
function isInputValid(x) {
	
	//if x is outside of the range or x is not a number
	// || means OR, && means AND
	if ( x < 1 || x > 50 || isNaN(x) )
		return false
	
	return true;
	
}


//change background color
function changeBackground(color) {
   
   document.body.style.background = color;
   
}


function updateTable() {
	const tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
	tableBody.innerHTML = ''; 

	inputNumbers.forEach((number, index) => {
		const row = tableBody.insertRow();
		const ordinalCell = row.insertCell(0);
		const numberCell = row.insertCell(1);
		ordinalCell.textContent = index + 1;
		numberCell.textContent = number;
	});
}
