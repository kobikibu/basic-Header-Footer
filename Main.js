// Select the id="header"
const main = document.getElementById('main');

// Creating the Container
const container = document.createElement('div');
container.style.margin = '0 auto';
container.style.width = '80%';
container.style.minHeight = '100vh';

// Container added to main
main.append(container);

// Create, style and added h1 to main
const h1 = document.createElement('h1');
h1.innerText = 'Basic Header and Footer';
h1.style.textAlign = 'center';
h1.style.paddingTop = '3rem';
container.append(h1);

// Create, style and added p to main
const p = document.createElement('p');
p.innerText = 'Page built using JavaScript';
p.style.textAlign = 'center';
container.append(p);

// Create image inside a div tag
const avatarWrapper = document.createElement('div');
avatarWrapper.style.textAlign = 'center';

const avatar = document.createElement('img');
avatar.setAttribute('src', 'images/js.png');
avatar.style.width = '10%';
avatar.style.width = '10%';


avatarWrapper.append(avatar);
container.append(avatarWrapper);

