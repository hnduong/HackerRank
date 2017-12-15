// https://www.hackerrank.com/challenges/staircase/problem

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
  

    const space = ' '
    const stair = '#'

    const staircase = [...new Array(n)]
    	.map((arr, index) =>
            [...new Array(n)]
             .fill(space, 0, n - index - 1)
             .fill(stair, n - index - 1, n)
        )
    	.map(a => a.join())
		.map(b => b.replace(/,/g, ''))
		.join()
    .replace(/,/g, '\n')
    
    console.log(staircase)
}
    
