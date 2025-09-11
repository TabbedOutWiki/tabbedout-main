(function () {
  try {
    document.documentElement.dataset.theme = localStorage.getItem('theme') || 'light dark';
  } catch(_) {}
})();