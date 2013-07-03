#!/usr/bin/env node
var fs = require('fs');
var output = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(output);  
console.log(output);