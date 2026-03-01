document.addEventListener('DOMContentLoaded', () => {
  const fav = document.getElementById('favHeart');
  const text = document.getElementById('favText');
  const notes = ['hi', 'kept here', '♥', 'just a note', 'thank you!'];

  if (fav && text) {
    fav.addEventListener('click', () => {
      text.textContent = notes[Math.floor(Math.random() * notes.length)];
      text.classList.add('show');
      clearTimeout(text.timer);
      text.timer = setTimeout(() => text.classList.remove('show'), 1400);
    });
  }

  const bubble = document.querySelector('.bubble');
  if (bubble) {
    const fullText = bubble.textContent.trim();
    bubble.textContent = '';
    let index = 0;

    const timer = setInterval(() => {
      bubble.textContent = fullText.slice(0, index);
      index += 1;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 45);
  }
});
