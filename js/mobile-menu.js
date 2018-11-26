(function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const mmButton = document.querySelector('.mobile-menu-button');
  const closeButton = document.querySelector('.close-button');

  // Открытие/закрытие панели меню
  mmButton.onclick = function () {
    mobileMenu.classList.add('slide-mobile-menu');
  };
  closeButton.onclick = function () {
    mobileMenu.classList.remove('slide-mobile-menu');
  };

  // Отмена выделения при нажатии
  mmButton.onselectstart = () => false;

  // Закрытие панели поиска при нажатии Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('slide-mobile-menu')) {
      mobileMenu.classList.remove('slide-mobile-menu');
    }
  });

  // Закрытие меню при клике в любом месте кроме самого меню
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('.mobile-menu-wrap')) return;
    if (mobileMenu.classList.contains('slide-mobile-menu')) {
      mobileMenu.classList.remove('slide-mobile-menu');
    }
  });
}());
