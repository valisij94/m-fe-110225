const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

const cart = {
   products: [],
   count: 0,
   totalPrice: 0
}

const dwarf = {
  name: 'Torin',
  lastname: 'The Oakshield',
  age: 254,
  weapons: ['Sword', 'Axe'],
  armour: ['Helmet', 'Armour', 'Shield'],
  skills: {
    melee: 10,
    magic: 5
  },
}

const numbers = [76, 98, 104, 106, 345, 42];

const weirdArray = {
  2: 'Timon',
  length: 3,
  0: 'Saw',
  1: 'Hammer',
};

const veryWeirdArray = {
  0: 'Drill',
  1: 'Axe',
  2: 'Nails',
};