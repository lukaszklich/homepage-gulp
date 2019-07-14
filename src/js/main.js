"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);


const name = 'Łukasz';
const age = 34;
console.log(`Cześć, mam na imię ${name} i mam ${age} lat. ☕️`);
const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);
about.innerHTML = `Cześć, mam na imię ${name} i mam ${age} lata ☕️`;

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat.`);
}

welcome('Natalia', 23);

const myName='Lukas';
const myAge=34;

welcome(myName, myAge);

const navigationButton = document.querySelector('.navigation__button--js');
navigationButton.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible')
});