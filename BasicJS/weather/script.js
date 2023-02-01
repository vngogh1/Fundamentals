console.log('JS reporting for duty!');
document.getElementById('temp-units-selector').value='celcius';

function displayAlert(element) {
    alert("Loading weather report...")
}

function eatCookies(element) {
    element.parentNode.remove()
};

function updateTemperatures(element) {
    console.log('selection is hooked up')
        let temperatureNumbers = document.querySelectorAll('.temp-number'); //yeah, I know it's a verbose variable but it helped me keep things straight in my head
        let tempChoice = document.getElementById('temp-units-selector').value;
        console.log(tempChoice);
        


        //The problem (which I do not have time to solve) is that the rouning of numbers inflates the temperatures when switching back and forth.
        // The pseudo code I can think of is displaying rounded numbers but preserving the original values in an another array 
        //with wich we would use for the re-conversion
        if (tempChoice === 'farenhiet'){
            for(let i=0; i<temperatureNumbers.length; i++){
                temperatureNumbers[i].innerText = Math.ceil((temperatureNumbers[i].innerText*1.8)+32)
            }
        } else {
            for(let i=0; i<temperatureNumbers.length; i++){
                temperatureNumbers[i].innerText = Math.ceil((temperatureNumbers[i].innerText-32)*.5556)
            }
        }

    }
