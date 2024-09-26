import displayHome from './home.js';
import displayMenu from './menu.js';
import displayAbout from './about.js';
import './style.css'

const contentContainer = document.getElementById('content');
const home = displayHome();
const menu = displayMenu();
const about = displayAbout();

function switchDisplay(selectedPage) {
    contentContainer.removeChild(contentContainer.firstChild);
    contentContainer.appendChild(selectedPage);
}

home.classList.add("contentClass");
menu.classList.add("contentClass");
about.classList.add("contentClass");

contentContainer.appendChild(home);

const homeButton = document.getElementById('homeID');
const menuButton = document.getElementById('menuID');
const aboutButton = document.getElementById('aboutID');

homeButton.addEventListener("click", function() {
    switchDisplay(home);
});

menuButton.addEventListener("click", function() {
    switchDisplay(menu);
});

aboutButton.addEventListener("click", function() {
    switchDisplay(about);
})









