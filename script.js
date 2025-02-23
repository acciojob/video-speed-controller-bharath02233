document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".player__video");
    const playButton = document.querySelector(".toggle");
    const progressBar = document.querySelector(".progress");
    const volumeControl = document.querySelector(".volume");
    const speedControl = document.querySelector(".playbackSpeed");
    const rewindButton = document.querySelector(".rewind");
    const fastForwardButton = document.querySelector(".fastForward");

    // Play/Pause Toggle
    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.textContent = "❚ ❚"; // Pause symbol
        } else {
            video.pause();
            playButton.textContent = "►"; // Play symbol
        }
    }

    // Update Progress Bar
    function updateProgress() {
        progressBar.value = (video.currentTime / video.duration) * 100;
    }

    // Set Video Progress
    function setProgress() {
        video.currentTime = (progressBar.value / 100) * video.duration;
    }

    // Volume Control
    function updateVolume() {
        video.volume = volumeControl.value;
    }

    // Playback Speed Control
    function updateSpeed() {
        video.playbackRate = speedControl.value;
    }

    // Rewind & Fast Forward
    function rewind() {
        video.currentTime = Math.max(0, video.currentTime - 10);
    }

    function fastForward() {
        video.currentTime = Math.min(video.duration, video.currentTime + 25);
    }

    // Event Listeners
    playButton.addEventListener("click", togglePlay);
    video.addEventListener("timeupdate", updateProgress);
    progressBar.addEventListener("input", setProgress);
    volumeControl.addEventListener("input", updateVolume);
    speedControl.addEventListener("input", updateSpeed);
    rewindButton.addEventListener("click", rewind);
    fastForwardButton.addEventListener("click", fastForward);
});
