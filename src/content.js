const content = document.getElementById('content');

const navBar = document.createElement('div');
navBar.id = 'navbar';

const homeLink = document.createElement('div');
homeLink.textContent = 'Home';

const contactLink = document.createElement('div');
contactLink.textContent = 'Contact';

const menuLink = document.createElement('div');
menuLink.textContent = 'Menu';

navBar.append(contactLink, menuLink, homeLink);

const header = document.createElement('h1');
header.textContent = 'Welcome to our restaurant, FOOLS!';

const mainImage = document.createElement('img');
mainImage.src = '../images/elevate.jpg';
mainImage.width = '500';

const blurb = document.createElement('p');
blurb.textContent = "This restaurant is so sick we don't even use plates, we just throw a bunch of shit we found on the ground onto a piece of wood.";

content.append(navBar, header, mainImage, blurb);