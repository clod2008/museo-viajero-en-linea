//Globals
var currentTextInput;
var puzzelArrayData;

let alturaMinima;




// HTML ref


const btnBorrar = document.querySelector('#clear');
const btnCheck = document.querySelector('#check');
const btnSolve = document.querySelector('#solve');
const btnClue = document.querySelector('#clue');
const btnPrint = document.querySelector('#btnPprint');


//Loads the Crossword
function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
																					//style="text-transform: uppercase"
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: uppercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "grey";
				cell.style.border =  '2px solid white';
			}
			// console.log(txtID)
		}
	}
	
	const cantidadDeFilas = (puzzelArrayData.length);
	let catidadDeFilasNum = parseInt(cantidadDeFilas);
	console.log({cantidadDeFilas})
	
	alturaMinima = (catidadDeFilasNum+2) * 40
	console.log(alturaMinima)

	// const alturaContenedorTabla = document.querySelector('#leftBox');
	// $('#tablaCont').css('min-height',alturaMinima);
	muestraDeficiciones();
}
//Adds the hint numbers
// function addHint(){
// 	document.getElementById("txt_0_3").placeholder = "1";
// 	document.getElementById("txt_1_3").placeholder = "2";
// 	document.getElementById("txt_2_3").placeholder = "3";
// 	document.getElementById("txt_3_3").placeholder = "4";
// 	document.getElementById("txt_4_3").placeholder = "5";
// 	document.getElementById("txt_5_3").placeholder = "6";
// 	document.getElementById("txt_6_3").placeholder = "7";
// 	document.getElementById("txt_7_2").placeholder = "8";
// 	document.getElementById("txt_8_4").placeholder = "9";
// 	document.getElementById("txt_9_1").placeholder = "10";
// 	document.getElementById("txt_10_2").placeholder = "11";
// 	document.getElementById("txt_0_5").placeholder = "O";
// 	document.getElementById("txt_1_5").placeholder = "R";
// 	document.getElementById("txt_2_5").placeholder = "I";
// 	document.getElementById("txt_3_5").placeholder = "G";
// 	document.getElementById("txt_4_5").placeholder = "I";
// 	document.getElementById("txt_5_5").placeholder = "N";
// 	document.getElementById("txt_6_5").placeholder = "A";
// 	document.getElementById("txt_7_5").placeholder = "R";
// 	document.getElementById("txt_8_5").placeholder = "I";
// 	document.getElementById("txt_9_5").placeholder = "O";
// 	document.getElementById("txt_10_5").placeholder = "S";
	

// }
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID240){
	currentTextInput = txtID240;
};
//Returns Array
const columnaDeLaPalabra = 8;
const indiceNumeros = 0;
function preparePuzzelArray(){
			  // 1: Marcos, 2: Rosario, 3: Inca,4: Triunvirato, 5: Economía, 6: Consulado, 7: Blanco, 8: Escarapela, 
			  // 9: Balcarce, 10: Abogado, 11: Francés, 12: Italia, 13: Tristán, 14: Langostas. Respuestas:     ,  
			  // '0', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',  '15'
var items = [	['1',	 0,    0,    0,    0,    0,    0,    0,  'M',  'A',  'R',  'C',  'O',  'S',    0,    0,],
				['2',	 0,    0,    0,    0,  'R',  'O',  'S',  'A',  'R',  'I',  'O',    0,    0,    0,    0,],
				['3',	 0,    0,    0,    0,    0,    0,  'I',  'N',  'C',  'A',    0,    0,    0,    0,    0,],
				['4',	 0,    0,    0,    0,  'T',  'R',  'I',  'U',  'N',  'V',  'I',  'R',  'A',  'T',  'O',], 
				['5',	 0,    0,    0,    0,    0,    0,    0,  'E',  'C',  'O',  'N',  'O',  'M',  'I',  'A',],
				['6',	 0,    0,   'C',  'O', 'N',  'S',  'U',  'L',  'A',  'D',  'O',    0,    0,    0,    0,],
			 	['-',	 0,    0,    0,    0,    0,    0,    0,  '-',    0,    0,    0,    0,    0,    0,    0,],
				['7',	 0,    0,    0,    0,    0,    0,    0,  'B',  'L',  'A',  'N',  'C',  'O',    0,    0,],
				['8',  'E',  'S',  'C',  'A',  'R',  'A',  'P',  'E',  'L',  'A',    0,    0,    0,    0,    0,],
				['9',	 0,    0,    0,    0,    0,  'B',  'A',  'L',  'C',  'A',  'R',  'C',  'E',    0,    0,],
				['10',	 0,    0,    0,    0,  'A',  'B',  'O',  'G',  'A',  'D',  'O',    0,    0,    0,    0,],
				['11',	 0,    0,    0,    0,    0,    0,  'F',  'R',  'A',  'N',  'C',  'É',  'S',    0,    0,],
				['12',	 0,    0,    0,    0,    0,  'I',  'T',  'A',  'L',  'L',  'I',  'A',    0,    0,    0,],
				['13',	 0,  'T',  'R',  'I',  'S',  'T',  'Á',  'N',    0,    0,    0,    0,    0,    0,    0,],
				['14',	 0,    0,    0,  'L',  'A',  'N',  'G',  'O',  'S',  'T',  'A',  'S',    0,    0,    0,],
			];
return items;
};

	var preparePuzzelArray2 = 	
			[
				['1',    0,    0,    0,    0,    0,    0,    0,  'm',  'a',  'r',  'c',  'o',  's',    0,    0,],
                ['2',    0,    0,    0,    0,  'r',  'o',  's',  'a',  'r',  'i',  'o',    0,    0,    0,    0,],
                ['3',    0,    0,    0,    0,    0,    0,  'i',  'n',  'c',  'a',    0,    0,    0,    0,    0,],
                ['4',    0,    0,    0,    0,  't',  'r',  'i',  'u',  'n',  'v',  'i',  'r',  'a',  't',  'o',], 
                ['5',    0,    0,    0,    0,    0,    0,    0,  'e',  'c',  'o',  'n',  'o',  'm',  'i',  'a',],
                ['6',    0,    0,   'c',  'o', 'n',  's',  'u',  'l',  'a',  'd',  'o',    0,    0,    0,    0,],
				['-',	 0,    0,    0,    0,    0,    0,    0,  '-',    0,    0,    0,    0,    0,    0,    0,],
                ['7',    0,    0,    0,    0,    0,    0,    0,  'b',  'l',  'a',  'n',  'c',  'o',    0,    0,],
                ['8',  'e',  's',  'c',  'a',  'r',  'a',  'p',  'e',  'l',  'a',    0,    0,    0,    0,    0,],
                ['9',    0,    0,    0,    0,    0,  'b',  'a',  'l',  'c',  'a',  'r',  'c',  'e',    0,    0,],
                ['10',   0,    0,    0,    0,  'a',  'b',  'o',  'g',  'a',  'd',  'o',    0,    0,    0,    0,],
                ['11',   0,    0,    0,    0,    0,    0,  'f',  'r',  'a',  'n',  'c',  'é',  's',    0,    0,],
                ['12',   0,    0,    0,    0,    0,  'i',  't',  'a',  'l',  'l',  'i',  'a',    0,    0,    0,],
                ['13',   0,  't',  'r',  'i',  's',  't',  'á',  'n',    0,    0,    0,    0,    0,    0,    0,],
                ['14',   0,    0,    0,  'l',  'a',  'n',  'g',  'o',  's',  't',  'a',  's',    0,    0,    0,],
			];



//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(  (selectedInputTextElement.value ==  (puzzelArrayData[i][j])) || (selectedInputTextElement.value ==  (preparePuzzelArray2[i][j]))  ) {
					// selectedInputTextElement.style.backgroundColor = 'red';
					selectedInputTextElement.classList.add('tdCorrectas');			
				}else{
					// selectedInputTextElement.style.backgroundColor = 'green';
					selectedInputTextElement.classList.add('tdInCorrectas');
				}
			}
		}
	}


}

//check 2
function compara2(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(  selectedInputTextElement ==  (preparePuzzelArray2[i][j])   ) {
					// selectedInputTextElement.style.backgroundColor = 'red';
					selectedInputTextElement.classList.add('tdInCorrectas');
				}else{
					// selectedInputTextElement.style.backgroundColor = 'green';
					selectedInputTextElement.classList.add('tdCorrectas');
				}
			}
		}
	}


}



//Clue Button
function clueClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = puzzelArrayData[row][column];
		//checkClicked();
	}
}
//Solve Button
function solveClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		
		// Print elements on top
		// for(j = row; j >= 0; j--){
		// 	if(puzzelArrayData[j][column] != 0){
		// 		document.getElementById('txt' + '_' + j + '_' + column).value = puzzelArrayData[j][column];
		// 		}else break;
		// }
		// Print elements on right
		for(i = column; i< puzzelArrayData[row].length; i++){
			if(puzzelArrayData[row][i] != 0){
				document.getElementById('txt' + '_' + row + '_' + i).value = puzzelArrayData[row][i];
				}else break;
		}
		
		// Print elements below
		// for(m = row; m< puzzelArrayData.length; m++){
		// 	if(puzzelArrayData[m][column] != 0){
		// 		document.getElementById('txt' + '_' + m + '_' + column).value = puzzelArrayData[m][column];
		// 		}else break;
		// }
		// Print elements on left
		for(k = column; k >= 0; k--){
			if(puzzelArrayData[row][k] != 0){
				document.getElementById('txt' + '_' + row + '_' + k).value = puzzelArrayData[row][k];
				}else break;
		}
		// Done!
		
	}
}

// eventos
btnBorrar.addEventListener('click', () =>  {
	clearAllClicked();
});
btnCheck.addEventListener('click', () => {
	checkClicked();
});
// btnSolve.addEventListener('click', () => {
// 	solveClicked();
// });
btnClue.addEventListener('click', () => {
	clueClicked();
});
btnPrint.addEventListener('click', () =>{
	window.print();
	
});

// function palablraCentral() {
// 	for(m = 0; m< puzzelArrayData.length; m++){
// 		if(puzzelArrayData[m][5] != 0){
// 			document.getElementById('txt' + '_' + m + '_' + 5).value = puzzelArrayData[m][5];
			
// 			}else break;
// 		}
// };



muestraDeficiciones = () => {

	for (i = 0; i < puzzelArrayData.length; i++) {
		document.getElementById('txt_' + i + '_' + `${columnaDeLaPalabra}`).value = puzzelArrayData[i][columnaDeLaPalabra]
	}	
	for (i =0; i < puzzelArrayData.length; i++) {
		document.getElementById('txt_' + i + '_' + `${indiceNumeros}`).value = puzzelArrayData[i][indiceNumeros]
	}
	for (i =0; i < puzzelArrayData.length; i++) {
		document.getElementById('txt_' + i + '_' + `${indiceNumeros}`).classList.add('test')
	}

};

// PDF



/*
id="clear"
id="check"
id="solve"
id="clue" 
*/
