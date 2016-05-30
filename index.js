#!/bin/env node

var fs = require('fs');
var chalk = require('chalk');

function colorizeLog(input) {
  var passedCase = /^.*Test #.*Passed(.|[\r\n])*$/;
  var failedCase = /^.*Test #.*Failed(.|[\r\n])*$/;
  var testCase = /.*Test #(.|[\r\n])*?sec/gm;
  return input.replace(testCase, function (tc) {
    if (tc.match(passedCase)) {
      return chalk.green(tc);
    } else if (tc.match(failedCase)) {
      return chalk.red(tc);
    } else {
      return tc;
    }
  });
}


var inputStream; // input ctest output
var buff = '';        // buffer to store input stream

if (process.argv.length === 2) {
  // use stdin as input file
  inputStream = process.stdin;
} else if (process.argv.length > 2) {
  // use first argument as input file
  inputStream = fs.createReadStream(process.argv[2]);
}

inputStream.setEncoding('utf8');

inputStream.on('data', function (chunk) {
  buff += chunk;
});

inputStream.on('end', function () {
  console.log(colorizeLog(buff));
});
