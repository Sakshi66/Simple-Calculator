function getHistory(){
	return document.getElementById("history-value").innerText;
}

function printHistory(num){
	document.getElementById("history-value").innerText = num;
}
//window.onload=function(){alert(getHistory());};
//printHistory("9*9+8");

function getOutput(){
	return document.getElementById("output-value").innerText;	
}

function printOutput(num){
	if(num == ""){
		document.getElementById("output-value").innerText = num;
	}
	else{
		document.getElementById("output-value").innerText = getFormattedNumber(num);
	}
}

function getFormattedNumber(num){  // string to string formatted with commas
	if(num == "-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseNumberFormat(num){  // formatted string to unformatted string
	return Number(num.replace(/,/g,''))
	// this will replace the comma to an empty character
}

var operator = document.getElementsByClassName("operator");
for (var i=0; i<operator.length ;i++){
	operator[i].addEventListener('click',function(){
		//alert("The operator clicked: "+this.id);
		if(this.id == "clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id == "backspace"){
			var output = reverseNumberFormat(getOutput()).toString();
			if(output){   // if output has a value
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output = getOutput();
			var history = getHistory();

			if(output == "" && history != ""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0,history.length-1);
				}
			}
			if(output != "" || history != ""){
				// if condition?true:false
				//output = output == ""? output:reverseNumberFormat(output);
				if(output != ""){
					output = reverseNumberFormat(output);
				} 
				history = history + output;

				if(this.id == "="){
					var result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history = history + this.id;
					printHistory(history);
					printOutput("")
				}
			}
		}
	})
}

var number = document.getElementsByClassName("number");
for (var i=0; i<number.length ;i++){
	number[i].addEventListener('click',function(){
		//alert("The number clicked: "+this.id);
		var output = reverseNumberFormat(getOutput())
		if(output != NaN){  //if output is a number
			output = output + this.id;
			printOutput(output);
		}
	});
}