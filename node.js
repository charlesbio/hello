#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var num = 100;
function checkprime(n){
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    var m=Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) return false;
    return true;
};
function getPrimes(max) {
    var primenum = [];
	var i = 2;
	while(max != 0)
	{	
		if(checkprime(i))
		{
		primenum.push(i);  
		max--;
		}
		i++;
 
	 }
    return primenum;
};

var fmt = function(arr) {
return arr.join(" ");
};
var getarr = getPrimes(num);
var output2 = fmt(getarr);
fs.writeFileSync(outfile, output2+"\n");
console.log(output2+"\n");