function getTotal (arrayOfNumbers) {
    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log('the current sum is: '+ sum)
    }
    console.log("the total is: " + sum)
}


// Results:
// the current sum is 2
// the current sum is 5
// the current sum is 10
// the toatal is 10

