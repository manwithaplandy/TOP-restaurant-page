import './content.js';
import './style.css';
import {drawPage} from './home.js';

drawPage();

const content = document.getElementById("content");

function clearPage () {
    content.innerHTML = '';
}

const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const home = document.getElementById('home');

home.addEventListener('click', () => {
    clearPage();
    drawPage();
});