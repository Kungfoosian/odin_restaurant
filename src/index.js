import './index.css';
import Menu from './Menu';
import Home from './Home';
import createNewElement from './createNewElement';


function switchTab() {
  let otherTab = currentTab === 'Home' ? 'Menu' : 'Home';
}


const root = createNewElement('div', null, null, 'root');

const tabContainer = createNewElement('div');
const homeTab = createNewElement('button', 'Home');
homeTab.addEventListener('click', switchTab);

const menuTab = createNewElement('button', 'Menu');
menuTab.addEventListener('click', switchTab);

tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
root.appendChild(tabContainer);

let currentTab = 'Menu';

let activeTab = currentTab === 'Menu' ? new Menu : new Home;


root.appendChild(activeTab.render());

document.body.appendChild(root);
