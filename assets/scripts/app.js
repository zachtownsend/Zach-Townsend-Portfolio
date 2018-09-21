if (process.browser) {
  console.log('test');
  window.addEventListener('loaded', () => {
    alert('test');
  });
}

