function showLove() {
  const loveRain = document.getElementById('loveRain');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.innerText = '💖';
    loveRain.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
