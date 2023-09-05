// Get all the audio elements with id starting with "audioControl"
var audioControls = Array.from(document.querySelectorAll("[id^='audioControl']"));

// Set initial values for variables to keep track of the current audio and its control
var currentAudioIndex = -1;
var currentAudioControl = null;

// Keep track of the number of times the current audio has played in a row
var numPlays = 0;

// Define a function to play a random audio control
function playRandomAudio() {

  // Generate a random index to choose a random audio control from the array
  var randomIndex = Math.floor(Math.random() * audioControls.length);

  // If the random index is the same as the current audio index and the audio hasn't played twice yet,
  // restart the audio and increase the number of plays
  if (randomIndex === currentAudioIndex && numPlays < 2) {
    numPlays++;
    currentAudioControl.currentTime = 0; // Restart the audio
  }

  // If the random index is the same as the current audio index and the audio has played twice already,
  // recursively call the function to choose a new random audio control
  else if (randomIndex === currentAudioIndex) {
    playRandomAudio();
  }

  // If the random index is different from the current audio index, choose a new audio control
  else {
    var audioControl = audioControls[randomIndex];
    numPlays = 1;

    // Pause and restart the current audio and update the current audio control variable
    if (currentAudioControl !== null) {
      currentAudioControl.pause();
      currentAudioControl.currentTime = 0;
    }

    // Play the new audio and update the current audio and its control variables
    audioControl.play();
    currentAudioControl = audioControl;
    currentAudioIndex = randomIndex;
  }
}
