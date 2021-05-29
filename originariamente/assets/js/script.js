//Globals
var currentTextInput;
var puzzelArrayData;




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
		}
	}
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
function textInputFocus(txtID123){
	currentTextInput = txtID123;
};
//Returns Array
const columnaDeLaPalabra = 6;
const indiceNumeros = 0;
function preparePuzzelArray(){
var items = [	['1',	0,0,0,'O','J','O','T','A','S',0,0,], //O J O T A S
				['2',	0,0,0,'Y','E','R','B','A',0,0,0,], // Y E R B A
				['3',	0,0,0,'C','A','I','G','U','A',0,0,], // C A I G U A
				['4',	0,0,0,'B','A','G','U','A','L','A','S',],// B A G U A L A S 
				['5',	0,0,0,'M','A','I','Z',0,0,0,0,],//M A I Z
				['6',	0,0,0,'C','A','N','O','A',0,0,0,],//C A N O A
				['7',	0,0,0,'G','U','A','N','A','C','O',0,],//G U A N A C O
				['8',	0,0,'E','S','T','R','E','L','L','A',0,],//E S T R E L L A
				['9',	0,0,0,0,'A','I','R','E',0,0,0,],//A I R E
				['10',	0,'L','A','N','G','O','S','T','A',0,0,],//L A N G O S T A
				['11',	0,0,'O','N','A','S',0,0,0,0,0,], //O N A S
			];
return items;
}

	var preparePuzzelArray2 = [	
					//0		1 2 3  4   5   6   7   8   9  10 11
					['1',	0,0,0,'o','j','o','t','a','s',0,0,], //O J O T A S
					['2',	0,0,0,'y','e','r','b','a',0,0,0,], // Y E R B A
					['3',	0,0,0,'c','a','i','g','u','a',0,0,], // C A I G U A
					['4',	0,0,0,'b','a','g','u','a','l','a','s',],// B A G U A L A S 
					['5',	0,0,0,'m','a','i','z',0,0,0,0,],//M A I Z
					['6',	0,0,0,'c','a','n','o','a',0,0,0,],//C A N O A
					['7',	0,0,0,'g','u','a','n','a','c','o',0,],//G U A N A C O
					['8',	0,0,'e','s','t','r','e','l','l','a',0,],//E S T R E L L A
					['9',	0,0,0,0,'a','i','r','e',0,0,0,],//A I R E
					['10',	0,'l','a','n','g','o','s','t','a',0,0,],//L A N G O S T A
					['11',	0,0,'o','n','a','s',0,0,0,0,0,], //O N A S
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

	for (i =0; i < puzzelArrayData.length; i++) {
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
