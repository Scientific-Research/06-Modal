'use strict';

const showWindow_1 = document.querySelector('.show-modal-1');
const showWindow_2 = document.querySelector('.show-modal-2');
const showWindow_3 = document.querySelector('.show-modal-3');

const showWindow = [showWindow_1, showWindow_2, showWindow_3];

const modal = document.querySelector('.modal');
const closeWindow = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

/* As default, we don't want to see the Window, only after clicking on the button, we want to display it! */
modal.style.display = 'none';
overlay.style.display = 'none';

/* here, we have a toggle state, we can click on the same button and it will close or show our window! */
const buttonWindow = showWindow => {
  for (let i = 0; i < showWindow.length; i++) {
    showWindow[i].addEventListener('click', () => {
      // modal.style.display === 'none'
      //   ? (modal.style.display = 'block')
      //   : (modal.style.display = 'none');
      if (modal.style.display === 'none') {
        modal.style.display = 'block';
        // modal.style.zIndex = '1000';
        overlay.style.display = 'block';
      } else {
        modal.style.display = 'none';
        overlay.style.display = 'none';
      }
    });
  }
};

// close modal when clicking outside of it!
document.addEventListener('click', event => {
  if (
    !modal.contains(event.target) &&
    !showWindow.some(button => button.contains(event.target))
  ) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
});

buttonWindow(showWindow);
// buttonWindow(showWindow_2);
// buttonWindow(showWindow_3);

/* here, we click on the X symbol and the window will be closed! */
closeWindow.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});
