let clickElement = document.querySelector('.read-more');
let content = document.querySelector('.text-content');

clickElement.addEventListener('click', function () {
  content.classList.add('text-content--show-full');
  clickElement.classList.add('read-more--hidden');
});
