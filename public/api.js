let filmurl = 'https://ghibliapi.herokuapp.com/films';
let locationurl='"https://ghibliapi.herokuapp.com/locations';
// let filminfo = document.querySelector('.filminfo');

let filminfo = document.querySelector('.filminfo');
let push = document.getElementById('button');
push.addEventListener('click',fetchFilm);



function fetchFilm(e) {
    e.preventDefault();
 
    fetch(filmurl)
    .then(response => response.json())
    .then(json => displayFilm(json))

}

function myFunction() {
    let x = document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function displayFilm(json) {
    
console.log('Display Film', json);
 

for (i = 0; i < 20; i++ ){
    console.log(json[i].title)
 
    let pel = json[i].title 
    let screen = document.createElement('h1')
    screen.className = 'screen';
    screen.innerText = `"${pel}"`;
    
 
    console.log(pel);
    filminfo.appendChild(screen);}
 
}
