	var sin = "sin(", sinO = "Math.sin(";
	var cos = "cos(", cosO = "Math.cos(";
	var tan = "tan(", tanO = "Math.tan(";
	var arcsin = "arcsin(", arcsinO = "Math.asin(";
	var arccos = "arccos(", arccosO = "Math.acos(";
	var arctan = "arctan(", arctanO = "Math.atan(";
	var plus = "+";				
	var minus = "-";
	var divide = "/";
	var times = "*";
	var pi = "&#7464 ", piO = "Math.pi()";
	var log = "log(", logO = "Math.log10(";
	var e = "e^(", eO = "Math.exp(";
	var exp = "^", expO = "**";
	var ln = "ln(", lnO = "Math.log(";
	var square = "^2", squareO = "**2";
	var cube = "^3", cubeO = "**3";
	var x = "x", xO = "x";
	var point = ".";			
	var sqrt = "&#8730(", sqrtO = "Math.sqrt(";
	var op = "(";
	var clo = ")";

	var expressionOut = "";
	var expressionIn = "";
	var clicksOut = [];
	var clicksIn = [];


	function build(out, inn){
		
		clicksOut.push(out);
		if(!clicksIn.length < 1){
			if(!isOperator(clicksIn[clicksIn.length-1]) &&(( canBeCoed(inn) || (Number.isInteger(inn)) && clicksIn[clicksIn.length-1] == ")"))){
				inn = "*" + inn;
			}
		}
	
		clicksIn.push(inn);
	}
	
	
	function update(){
		expressionOut = clicksOut.join("");
		expressionIn = clicksIn.join("");
		document.getElementById('box').innerHTML = expressionIn + "<b>dx</b>";
	}
	
	function back(){
		clicksOut.pop();
		clicksIn.pop();
		document.getElementById('output').innerHTML = 0;
	}
	
	function ev(){
		var answer = 0;
		var lbound, ubound, larger;
		var refArray = [];
		var expression, i;
		lbound = document.getElementById('lB').value;
		ubound = document.getElementById('uB').value;
		var increment = 0.0001;
		larger = lbound > ubound; 
		
		if(larger){
			i = lbound;
			lbound = ubound;
		}
		else{
			i = ubound;
		}
		
		while(i > lbound){
			refArray = cloneArray(clicksIn);
			
			replaceVariable(refArray, i);
			expression = refArray.join("");	
			answer += eval(expression) * increment;
			i -= increment;
		}
		if(larger) answer *= -1;
		answer = Number(answer).toFixed(2);
		document.getElementById('output').innerHTML = answer;
		
	}
	
	function clean(){
		clicksIn = [];
		clicksOut = [];
		document.getElementById('output').innerHTML = 0;
	}
	function isOperator(k){
		if(	!Number.isInteger(k)){
			if(k.charAt(k.length-1) === "(") return true;
		}
		return k === "+" || k === "-" || k === "/" || k === "*";	
	}
	
	function canBeCoed(k){
		if( k === "x" || k === "(") return true;
		if(k.length > 3){
			if(k.substring(0,4) === "Math" || k.substring(0,2) === "&#") return true;
		}
		return false;
	}
	
	function replaceVariable(inputArray, value){
		for(i = 0; i<inputArray.length; i++){
			if(inputArray[i] === "x") inputArray[i] = value; 
		}
			
	}
	
	function cloneArray(array){
		var returnArray = [];
		
		for(i = 0; i<array.length; i++){
			returnArray.push(array[i]);
		}
		return returnArray;
	}
	
	update();	
