(() => {
  const body = document.getElementById('body');
  if (window.scrollY === 0) {
    const timeout = setTimeout(() => {
      if (window.scrollY < body.offsetTop) {
        window.scrollTo({
          top: body.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 4000);
  }
})();