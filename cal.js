const display = document.getElementById('display');

function appendToDisplay(input){
   display.value += input; 
}

function calculate(){
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error: Try again!';
    }
}

function clearDisplay(){
    display.value = '';
 }
 
 function deleteLastChar(){
     display.value = display.value.slice(0, -1);
 }