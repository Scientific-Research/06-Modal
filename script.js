'use strict';

const showWindow = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeWindow = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

/* As default, we don't want to see the Window, only after clicking on the button, we want to display it! */
modal.style.display = 'none';
overlay.style.display = 'none';

/* here, we have a toggle state, we can click on the same button and it will close or show our window! */
showWindow.addEventListener('click', () => {
  // modal.style.display === 'none'
  //   ? (modal.style.display = 'block')
  //   : (modal.style.display = 'none');
  if (modal.style.display === 'none') {
    modal.style.display = 'block';
    // modal.style.zIndex = '1000';
    overlay.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
});

/* here, we click on the X symbol and the window will be closed! */
closeWindow.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});
