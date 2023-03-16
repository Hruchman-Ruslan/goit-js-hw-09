function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId = null;
stopButton.disabled = true;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(timerId);
});
