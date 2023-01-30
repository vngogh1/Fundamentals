var i = [1,2,3,4,5,6]
function d6() {
    var roll = Math.random()* 6;
    roll = Math.ceil(roll);
    
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);