// https://www.hackerrank.com/challenges/mini-max-sum/problem

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
    arr = readLine().split(' ');
    arr = arr.map(Number);
  
  arr.sort()
  const size = arr.length
  const min = arr[0] + arr[1] + arr[2] + arr[3]
  const max = arr[size - 1] + arr[size - 2] + arr[size -3 ] + arr[size -4]
  console.log(`${min} ${max}`)
}
