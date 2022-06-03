import createNewElement from './createNewElement';

export default class Menu {
  constructor() {
    this.menu = [{
      sectionTitle: 'Main Items',
      content: [
        {
          name: 'All Beef Hotdog',
          price: 1.5,
        },
        {
          name: 'Chicken Bake',
          price: 2.99,
        },
        {
          name: 'Chicken Caesar Salad',
          price: 3.99,
        },
      ],
    },
    {
      sectionTitle: 'Pizza',
      content: [
        {
          name: 'slice',
          price: 1.99,
        }, 
        {
          name: 'whole',
          price: 9.95
        },
      ]
    },
    {
      sectionTitle: 'Drinks',
      content: [
        {
          name: 'Drinks (20oz)',
          price: 0.59,
        },
        {
          name: 'Berry Smoothie',
          price: 1.45,
        },
        {
          name: 'Latte/Mocha Freeze',
          price: 1.45,
        }
      ],
    },
    {
      sectionTitle: 'Sweets',
      content: [
        {
          name: 'Very Berry Sundae',
          price: 1.65,
        },
        {
          name: 'Twisted Churro',
          price: 1,
        },
      ]
    },
  ]}

  render(){
    let menuContainer = createNewElement('div', null, 'menu-container');

    let menuTitle = createNewElement('h1', 'Menu');
    menuContainer.appendChild(menuTitle);

    this.menu.forEach((section, index) => {
      let sectionContainer = createNewElement('div', null, `section-${index}`);

      let sectionTitle = createNewElement('h2', section.sectionTitle);
      sectionContainer.appendChild(sectionTitle);

      section.content.forEach(item => {
        let itemContainer = createNewElement('div', null, 'item-contaner');

        let itemName = createNewElement('p', item.name);
        itemContainer.appendChild(itemName);

        let itemPrice = createNewElement('p', `$ ${item.price}`);
        itemContainer.appendChild(itemPrice);


        sectionContainer.appendChild(itemContainer);
      })

      menuContainer.appendChild(sectionContainer);
    })

    return menuContainer;
  }
}