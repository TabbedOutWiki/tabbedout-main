(function() {
  const menus = document.querySelectorAll('menu');

  for (const menu of menus) {
    menu.addEventListener('click', () => {
      const submenu = document.querySelector('submenu');
      submenu.style.display = "inline-block";
    })
  }
})();