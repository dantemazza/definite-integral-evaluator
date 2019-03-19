
	
	var expressionOut = "";
	var inputs;
	var sin = "sin(";
	var cos = "cos("
	var tan = "tan("
	var arcsin = "arcsin(";
	var arccos = "arccos(";
	var arctan = "arctan(";
	var plus = "+";
	var minus = "-";
	var divide = "/";
	var times = "*";
	var pi = "&#7464";
	var log = "log";
	var e = "e";
	var exp = "^";
	var ln = "ln(";
	var square = "^2";
	var cube = "^3";
	var del = "delete";
	var inv = "^-1";
	var go = "Go!"
	var C = "C";
	var x = "x";
	var point = ".";
	var sqrt = "&#8730(";
	var op = "(";
	var clo = ")";

	
	
	function build(p){
		expressionOut = expressionOut + p;
	}
	
	function update(){
		document.getElementById('box').innerHTML = expressionOut + "<b>dx</b>";
	}
	
	update();	