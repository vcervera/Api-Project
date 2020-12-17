let baseURL = 'https://ghibliapi.herokuapp.com/films';
 
 
// let nameContainer = document.querySelector('.nameContainer');
// let logo = document.getElementById('totLogo');
// logo.addEventListener('click', fetchFilm)
 
const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const searchForm = document.querySelector('form');
const previousBtn = document.querySelector('.prev');
 
let pageNumber = 0;
searchForm.addEventListener('submit', fetchFilm);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
 
function fetchFilm(e) {
    e.preventDefault();
 
    fetch(baseURL)
    .then(response => response.json())
    .then(json => displayFilm(json))
 
}
 
 
function displayFilm(json) {
    console.log('Display Film', json);
}


function nextPage(e) {
    pageNumber++;
    fetchFilm(e);
    console.log('Page Number:', pageNumber);
}
 
function previousPage(e) {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchFilm(e);
    console.log('Page:', pageNumber);
} 
