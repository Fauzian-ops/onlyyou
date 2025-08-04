function nextPage() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'flex';
  document.getElementById('bgMusic').play();
  dropEmoji();
}

function dropEmoji() {
  const emojiList = ['🎉', '🎈', '🎂', '✨', '🥳', '💐'];
  setInterval(() => {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.fontSize = (Math.random() * 1.5 + 1.2) + 'rem';
    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }, 300);
}
