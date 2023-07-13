let prefersDark = matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addEventListener('change', event => loadTheme());
function setTheme(theme) {
    if (theme == 'auto'){
        localStorage.removeItem('theme');
        loadTheme(null);
    } 
    else{
        localStorage.setItem('theme', theme);
        applyTheme(theme);
    }
}
function loadTheme(theme){
    theme = localStorage.getItem('theme');
    theme ??= (prefersDark.matches) ? 'dark' : 'default';
    applyTheme(theme);
}   
function applyTheme(theme){
    document.documentElement.className = theme;
}
window.setTheme = setTheme;
loadTheme();