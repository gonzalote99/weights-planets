const planets = document.getElementById('planets');
const input = document.getElementById('weight');
const result = document.querySelector('.answer');
const planetNames = document.querySelectorAll('option');
const btn = document.querySelector('button');
const img = document.querySelector('.image');


function clear() {
  input.value = '';
  result.innerHTML = '';
  img.innerHTML = '';
}

btn.addEventListener('click', () => {
  let text = planets.options[planets.selectedIndex].text
  let value = '';
  let imgSrc = '';
  if(!input.value) return;

  switch(text) {
    case 'Mercury':
    value = Math.trunc(input.value * 0.38);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Mercury.png';
    break;
    case 'Venus':
    value = Math.trunc(input.value * 0.91);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Venus.png';
    break;
    case 'Earth':
    value = Math.trunc(input.value * 1.0);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Earth.png';
    break;
    case 'Mars':
    value = Math.trunc(input.value * 0.38);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Mars.png';
    break;
    case 'Jupiter':
    value = Math.trunc(input.value * 2.34);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Jupiter.png';
    break;
    case 'Saturn':
    value = Math.trunc(input.value * 1.06);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Saturn.png';
    break;
    case 'Urans':
    value = Math.trunc(input.value * 0.92);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Urans.png';
    break;
    case 'Neptune':
    value = Math.trunc(input.value * 1.19);
    imgSrc = 'https://raw.githubusercontent.com/Sulagna-Dutta-Roy/Webeginner-projects/main/Weight%20on%20differen%20planets/images/Neptune.png';
    break;
    default:
    return;

  }
let markUp = `
<p>the weight is ${value} kgs</p>`;
result.insertAdjacentHTML('beforeend', markUp);

let markUp2 = `
<img id="planet-img" src=${imgSrc} alt="" />`;
img.insertAdjacentHTML('beforeend', markUp2);

  });


input.addEventListener('click', clear);

planets.addEventListener('click', () => {
  img.innerHTML = '';
  result.innerHTML = '';
})

