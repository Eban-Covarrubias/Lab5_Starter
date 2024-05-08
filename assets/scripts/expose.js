// expose.js

window.addEventListener('DOMContentLoaded', init);
let confetti;

function init() {
  // TODO
  confetti = new JSConfetti();
  const hornSelect = document.getElementById('horn-select');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  hornSelect.addEventListener('change', updateHorn);
  const playButton = document.querySelector('button');

  playButton.addEventListener('click', function() {
    console.log('Button clicked!');
    if(audioElement === null){
      return;
    }
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
    if(hornSelect.value == "party-horn"){
      confetti.addConfetti();
    }
  });
  function updateHorn(){
    const selectedHorn = hornSelect.value;
    const hornImage = document.querySelector('#expose img');
    const audioSrc = `./assets/audio/${selectedHorn}.mp3`;
  
    // Update horn image
    hornImage.src = `./assets/images/${selectedHorn}.svg`;

    // Set audio source
    //audioElement.src = audioSrc;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`
  }
  
  function updateVolume(event){
    const volume = Math.round(+event.target.value);
    //console.log("Volume :" + volume);
    audioElement.volume = volume/100;
    if(volume === 0){
      console.log('we made it in vol 0');
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volume < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }
  volumeControl.addEventListener('change', updateVolume);

}