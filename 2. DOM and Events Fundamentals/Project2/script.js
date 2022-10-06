'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

let closeModalFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

let openModalFunction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    openModalFunction();
  });

btnCloseModal.addEventListener('click', closeModalFunction);
overlay.addEventListener('click', closeModalFunction);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFunction();
  }
});
