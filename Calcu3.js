const display = document.getElementById('display');
let recognition; // Variable to store the recognition instance
let isRecording = false; // Track whether the voice recognition is active

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error: Try again!';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Voice recognition setup and toggle functionality
function toggleVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition.');
        return;
    }

    // Get the selected language from the dropdown
    const selectedLanguage = document.getElementById('languageSelect').value;

    if (isRecording) {
        // Stop recording if it's already active
        recognition.stop();
        isRecording = false;
        console.log('Speech recognition stopped.');
    } else {
        // Start recording
        recognition = new webkitSpeechRecognition();
        recognition.lang = selectedLanguage; // Set the selected language
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();
        isRecording = true;
        console.log('Speech recognition started.');

        recognition.onresult = function(event) {
            const spokenText = event.results[0][0].transcript;
            appendToDisplay(spokenText);
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error: ', event.error);
        };

        recognition.onend = function() {
            isRecording = false;
            console.log('Speech recognition ended.');
        };
    }
}

///Lights Section/////
function toggleClassPlayer(){

    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }