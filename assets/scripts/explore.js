// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const selectVoice = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('img');

  // Function to populate voices dropdown
  function populateVoices() {
    const voices = synth.getVoices();
    selectVoice.innerHTML = '';
    voices.forEach(function(voice, index) {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.setAttribute('data-voice-index', index);
      selectVoice.appendChild(option);
    });
  }

  // Populate voices dropdown on page load
  populateVoices();

  // Update voices dropdown if voices change
  synth.onvoiceschanged = populateVoices;

  // Event listener for button click
  button.addEventListener('click', function () {
    const selectedVoiceIndex = selectVoice.options[selectVoice.selectedIndex].getAttribute('data-voice-index');
    const selectedVoice = synth.getVoices()[selectedVoiceIndex];
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    
    // Set the voice for the utterance
    utterance.voice = selectedVoice;

    // Event listener for when speaking starts
    utterance.onstart = function () {
      // Change face image to open mouth
      faceImage.src = 'assets/images/smiling-open.png';
    };

    // Event listener for when speaking ends
    utterance.onend = function () {
      // Change face image back to closed mouth
      faceImage.src = 'assets/images/smiling.png';
    };

    // Speak the text
    synth.speak(utterance);
  });
}
