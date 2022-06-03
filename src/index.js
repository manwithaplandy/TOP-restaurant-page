import './content.js';
import './style.css';
import {drawHomePage} from './home.js';
import {drawContactPage} from './contact.js';
import {drawMenuPage} from './menu.js';

const content = document.getElementById("content");

drawHomePage();

function clearPage () {
    content.innerHTML = '';
}

const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const home = document.getElementById('home');

home.addEventListener('click', () => {
    clearPage();
    drawHomePage();
});

contact.addEventListener('click', () => {
    clearPage();
    drawContactPage();
});

menu.addEventListener('click', () => {
    clearPage();
    drawMenuPage();
});