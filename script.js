'use strict';

const showWindow = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeWindow = document.querySelector('.close-modal');

showWindow.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeWindow.addEventListener('click', () => {
  modal.style.display = 'none';
});
