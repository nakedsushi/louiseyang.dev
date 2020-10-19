const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('query');
const queryPlaceholder = document.getElementById('query');

queryPlaceholder.innerText = myParam;