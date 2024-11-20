const searchBtn = document.querySelector('.searchBtn'),
 searchInput = document.querySelector('.searchInput'),
 header = document.querySelector('header'),
 nav = document.querySelector('nav');

searchBtn.addEventListener('click', () => {
  searchBtn.style.visibility = 'hidden';
  searchInput.classList.toggle('active');
});

searchInput.addEventListener('blur', () => {
  searchInput.classList.remove('active');
  searchInput.value = '';
  searchBtn.style.visibility = '';
});

function setHeaderHeight() {
  const navHeight = nav.offsetHeight;
  header.style.height = `calc(100vh - ${navHeight}px)`;
}

setHeaderHeight();

window.addEventListener('resize', setHeaderHeight);