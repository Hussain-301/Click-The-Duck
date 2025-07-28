const header = document.querySelector(".items h1")
const counterEl = document.querySelector('.counter');
const duckImg   = document.querySelector('.items img');
let count = 0;

const quackSound = new Audio('./files/sounds/quackSoundEffect.mp3');
quackSound.preload = 'auto';

duckImg.addEventListener('click', () => {
  count++;
  if (count === 1) {
    header.innerHTML = `You've clicked on the duck<br><span class="counter">1</span> times`;
  } else {
    const counterEl = header.querySelector('.counter');
    if (counterEl) {
      counterEl.textContent = count;
    }
  }

  quackSound.currentTime = 0;
  quackSound.play().catch(err => {
    console.warn('Could not play sound:', err);
  });
});