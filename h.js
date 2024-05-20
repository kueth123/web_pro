const navList = document.querySelector('.top_right nav .nav-list');
const navListItems = navList.querySelectorAll('li');

navListItems.forEach((item) => {
  item.style.display = 'block';
});