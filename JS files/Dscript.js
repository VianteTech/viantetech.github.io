let selector = document.getElementById('scheme');
selector.value = localStorage.getItem('theme') || 'auto';
selector.addEventListener('click', event => window.setTheme(selector.value));