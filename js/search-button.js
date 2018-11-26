(function () {
  const search = document.querySelector('.top-line .search');
  const searchField = document.querySelector('.top-line .search-field');
  const searchInput = searchField.querySelector('.search-input');

  search.onclick = function () {
    searchField.classList.toggle('search-field-slide');
    searchInput.focus();
  };

  // Закрытие панели поиска при нажатии Ecs
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchField.classList.contains('search-field-slide')) {
      searchField.classList.remove('search-field-slide');
    }
  });

  // Закрытие панели поиска при клике в любом месте кроме самой панели поиска
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('.search-wrap')) return;
    if (searchField.classList.contains('search-field-slide')) {
      searchField.classList.remove('search-field-slide');
    }
  });
}());
