const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://nakaflix.herokuapp.com/categorias';

export default {
    URL_BACKEND_TOP,
};