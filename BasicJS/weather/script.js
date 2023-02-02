//This makes sure the temperature units selector is set to 'Celcius'
document.getElementById('temp-units-selector').value='celcius';

function displayAlert(element) {
    alert("Loading weather report...")
}

function removeParent(element) {
    element.parentNode.remove()
};

function updateTemperatures(element) {
        let temperatureNumbers = document.querySelectorAll('.temp-number');
        let tempChoice = document.getElementById('temp-units-selector').value;        

        if (tempChoice === 'farenhiet'){
            for(let i=0; i<temperatureNumbers.length; i++){
                temperatureNumbers[i].innerText = Math.round((temperatureNumbers[i].innerText*1.8)+32)
            }
        } else {
            for(let i=0; i<temperatureNumbers.length; i++){
                temperatureNumbers[i].innerText = Math.round((temperatureNumbers[i].innerText-32)*.5556)
            }
        }

    }
