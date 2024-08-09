import displayHome from './home.js';
import displayMenu from './menu.js';
import './style.css'

const contentContainer = document.getElementById('content');
const content = displayHome();
content.classList.add("contentClass");
contentContainer.appendChild(content);

const homeButton = document.getElementById('homeID');
const menuButton = document.getElementById('menuID');
const aboutButton = document.getElementById('aboutID');





