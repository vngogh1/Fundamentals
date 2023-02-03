// complete the following function
// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];

function flatten(arr2d) {
    var flat = [];
    for(let row = 0; row < arr2d.length; row++){
        for(let col = 0; col < arr2d.length; col++){
            flat.push(arr2d[row][col]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]