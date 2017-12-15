// https://www.hackerrank.com/challenges/plus-minus/problem

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
  
    let positive = 0
    let negative = 0
    let zeroes = 0
    
    arr.forEach(v => {
      if (v > 0) positive++
      else if (v < 0) negative++
      else if (v === 0) zeroes++
    })
  
    console.log(positive / arr.length)
    console.log(negative / arr.length)
    console.log(zeroes / arr.length)

}
