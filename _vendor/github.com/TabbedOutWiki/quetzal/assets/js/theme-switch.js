// Initial theme detection is set in <head> to prevent color flash
(function() {
  const THEME_KEY = 'WIKI_THEME'
  const select = document.querySelector('select#theme-switcher.menu');

  const setOption = () => {
    const theme = localStorage.getItem(THEME_KEY);
    if (isValidTheme(theme)) {
      const options = select.options;
      for (const option of options) {
        if (option.value === theme) option.selected = true;
      }
    }
  }

  const handleChange = () => {
    const selectedOption = select.options[select.selectedIndex];
    const theme = selectedOption.value;

    if (isValidTheme(theme)) {
      if (theme !== 'system') {
        document.documentElement.dataset.theme = theme;
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      localStorage.setItem(THEME_KEY, theme);
    }
  }

  setOption();
  select.addEventListener('change', handleChange);
})();