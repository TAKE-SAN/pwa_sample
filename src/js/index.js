import '../css/style.css';

let isPlaying = false;
let tapCount, time = 0;
const tapBtn    = document.getElementById('js-tapBtn');
const startBtn  = document.getElementById('js-startBtn');
const countText = document.getElementById('js-count');
const timeText  = document.getElementById('js-time');

const setGame = () => {
  tapCount = 0;
  time = 5000;
  countText.innerText = tapCount;
  timeText.innerHTML = time / 1000;
};
setGame();

// タップした時にカウントを増やす
tapBtn.addEventListener('click', () => {
  if (!isPlaying) {
    return false
  }

  tapCount++;
  countText.innerText = tapCount;
});

// STARTボタンを押してゲームをスタートさせる
startBtn.addEventListener('click', () => {
  setGame();

  isPlaying = true;
  tapBtn.disabled = false;
  startBtn.style.display = 'none';

  const timer = setInterval( () => {
    time -= 10;
    timeText.innerHTML = (time / 1000).toFixed(2);

    if (time === 0) {
      clearInterval(timer);
      isPlaying = false;
      startBtn.style.display = 'inline-block';
      startBtn.innerText = 'もう一回';
    }
  }, 10)
});
