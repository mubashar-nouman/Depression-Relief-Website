const quotes = ["This too shall pass.",
"Every day is a new beginning.",
"Believe in yourself.",
"You are stronger than you think.",
"Embrace the journey, not just the destination.",
"Keep going, even when it's tough.",
"The darkest hour has only sixty minutes.",
"You are capable of amazing things.",
"Stars can't shine without darkness.",
"Inhale courage, exhale fear.",
"You are not alone in this battle.",
"Happiness is a choice.",
"Dream big and dare to fail.",
"Your potential is endless.",
"The best is yet to come."];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

quoteBtn.addEventListener("click", () => {
  const quote = getRandomQuote();
  quoteText.innerText = quote;
});



const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});













const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentAudioIndex = 0;

const audioSources = [
    './assets/azaan.mp3',
    './assets/sheikhatif.mp3',
    './assets/surahZuha.mp3',
    './assets/nasheed.mp3'
];

function playPauseAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
}

function playNextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % audioSources.length;
    audioPlayer.src = audioSources[currentAudioIndex];
    audioPlayer.play();
}

function playPreviousAudio() {
    currentAudioIndex = (currentAudioIndex - 1 + audioSources.length) % audioSources.length;
    audioPlayer.src = audioSources[currentAudioIndex];
    audioPlayer.play();
}

playPauseButton.addEventListener('click', playPauseAudio);
nextButton.addEventListener('click', playNextAudio);
prevButton.addEventListener('click', playPreviousAudio);


const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const progressBar = document.getElementById('progress-bar');

let isExerciseActive = false;
let exerciseTimeout;

function startOrStopBreathing() {
    if (isExerciseActive) {
        stopBreathingExercise();
    } else {
        startButton.style.display = 'none';
        timerElement.style.display = 'block';
        startBreathingExercise();
    }
}

function startBreathingExercise() {
    isExerciseActive = true;
    timerElement.textContent = 'Breathe in...';
    animateProgressBar(4000, () => {
        timerElement.textContent = 'Hold...';
        animateProgressBar(7000, () => {
            timerElement.textContent = 'Exhale...';
            animateProgressBar(8000, () => {
                timerElement.textContent = 'Breathe in...';
                progressBar.style.width = '0%'; // Reset the progress bar width
                animateProgressBar(4000, () => {
                    progressBar.style.width = '100%';
                    timerElement.textContent = 'Hold...';
                    animateProgressBar(7000, () => {
                        timerElement.textContent = 'Exhale...';
                        animateProgressBar(8000, () => {
                            timerElement.textContent = 'Exercise Complete';
                            isExerciseActive = false;
                            startButton.style.display = 'block';
                            clearTimeout(exerciseTimeout);
                        });
                    });
                });
            });
        });
    });
}

function stopBreathingExercise() {
    clearTimeout(exerciseTimeout);
    isExerciseActive = false;
    timerElement.textContent = 'Exercise Stopped';
    startButton.style.display = 'block';
    progressBar.style.width = '0%';
}

function animateProgressBar(duration, callback) {
    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = '100%';
    setTimeout(() => {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        if (callback) callback();
    }, duration);
}