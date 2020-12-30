let filmurl = 'https://ghibliapi.herokuapp.com/films';
let locationurl='"https://ghibliapi.herokuapp.com/locations';
// let filminfo = document.querySelector('.filminfo');

let filminfo = document.querySelector('.filminfo');
let push = document.getElementById('button');
push.addEventListener('click',fetchFilm);

// let filmcar = document.querySelector('.filmcar');
// let vehpic = document.getElementById('vehpic');
// vehpic.addEventListener('click',fetchlocation);


function fetchFilm(e) {
    e.preventDefault();
 
    fetch(filmurl)
    .then(response => response.json())
    .then(json => displayFilm(json))

    // let push = document.getElementById('button');
    // push.removeChild(button);
 
}

function myFunction() {
    var x = document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// function fetchlocation(e) {
//     e.preventDefault();
 
//     fetch(locationurl)
//     .then(response => response.json())
//     .then(json => displaylocation (json))
// } 
 
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

// let button = document.createElement('button');
// button.innerText = 'Click Me';
// button.className = 'btn';
// button.style = 'margin:0; margin-top: 500px;'


// quoteContainer.appendChild(screen);
// quoteContainer.appendChild(button)

// button.addEventListener('click', () => {
//     quoteContainer.removeChild(quote);
//     quoteContainer.removeChild(button)

//     displayfilm();
// })
 
// function displaylocation(json) {
    
// console.log('Display Location', json);
 

// for (i = 0; i < 24; i++ ){
//     console.log(json[i].location)
 
//     let pel = json[i].location
//     let screen = document.createElement('h1')
//     screen.className = 'screen';
//     screen.innerText = `"${pel}"`;
    
 
//     console.log(pel);
//     filmcars.appendChild(screen);
// }}



