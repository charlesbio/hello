#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var num = 100;
function checkprime(n){
    for (a=2; a<=n - 1; a++){
      if ( n%a == 0 ){
        return true;
      }
      return false;
   }
};
function getPrimes(max) {
    var primenum = [];
	var i = 2;
	while(max != 0)
	{	
		if(! checkprime(i))
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
var output = fmt(getarr);
console.log(output);
/*
var getarr = getPrimes(num);
var output = fmt(getarr);
var texttowrite = fmt(output);
fs.writeFileSync(outfile, texttowrite);
console.log("Script: " + __filename + "\nWrote: " + texttowrite + "To: " + outfile);*/