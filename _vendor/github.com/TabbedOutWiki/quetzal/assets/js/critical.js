function isValidTheme(theme) {
  switch (theme) {
    case 'system':
    case 'light':
    case 'dark':
      return true;
  }
  return false;
}
// Subset of theme-switch.js to run critical bits first. Keep key in sync.
(function () {
  try {
    const THEME_KEY = 'WIKI_THEME';
    const theme = localStorage.getItem(THEME_KEY);
    if (theme !== 'system') {
      document.documentElement.dataset.theme = theme;
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  } catch(_) {}
})();