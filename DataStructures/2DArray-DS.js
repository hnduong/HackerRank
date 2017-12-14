// https://www.hackerrank.com/challenges/2d-array/problem


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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let max = -Infinity
    
    for (let i = 1; i < 5; i += 1 ) {
        for (let j = 1; j < 5; j += 1) {
            const topLeft =	 	arr[i - 1][j - 1] 
            const top = 		arr[i - 1][j    ] 
            const topRight = 	arr[i - 1][j + 1]
            const center = 		arr[i    ][j    ] 
            const bottomLeft =	arr[i + 1][j - 1]
            const bottom = 		arr[i + 1][j    ]
            const bottomRight = arr[i + 1][j + 1]

            const sum = topLeft + top + topRight + center + bottomLeft + bottom + bottomRight
            if (sum > max) max = sum
        }
    }
    console.log(max)
}