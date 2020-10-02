const open = document.getElementById('open');
const postContainer = document.getElementById('post-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  postContainer.classList.add('show');
});

close.addEventListener('click', () => {
  postContainer.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === postContainer) {
    postContainer.classList.remove('show');
  }
});
