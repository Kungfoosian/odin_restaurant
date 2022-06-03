import './index.css';
import Menu from './Menu';

let myMenu = new Menu;

const root = document.createElement('div');
root.id= 'root';

root.appendChild(myMenu.displayMenu());

document.body.appendChild(root);
