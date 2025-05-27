const sword = {
  name: 'Stell Sword',
  weight: 1.1,
  level: 10
};

const shield = {
  name: 'The Oak Shield',
  weight: 3.6,
  level: 8
};

const armour = {
  helmet: {
    name: 'Steel Helmet',
    weight: 0.8
  },
  armour: {
    name: 'Mitril Armour',
    weight: 0.2,
    level: 21
  }
}

const dwarf = {
  name: 'Torin'
}

const numbersObject = {
  first: 104,
  second: 98,
  third: 345,
  fourth: 42
};

const stringsObject = {
  name: 'SimpleName',
  age: 21,
  lastname: 'LastSimpleName',
  address: 'none'
};

const simpleDwarf = {
  name: 'Torin',
  level: 15,
  fraction: 'Dwarwes'
};

const middleDwarf = {
  name: 'Balin',
  level: 14,
  fraction: 'Dwarwes',
  skills: {
      melee: 13,
      archery: 2
  }
};

const DWARWES_AREAS = {
  Moria: {
      population: 1000,
      king: 'Balin'
  },
  IronHills: {
      population: 50000,
      king: 'Dain'
  },
  Erebor: {
      population: 34000,
      king: 'Tror'
  }
}


const simpleObject = {
  name: 'Name',
  age: 20,
  address: {
    street: 'StreetName',
    house: 8
  },
  phones: ['00012', '00013', '00014']
}

const entries = Object.entries(simpleObject);


const cart = {
  saw: { name: 'Saw', price: 10, count: 5},
  hammer: { name: 'Hammer', price: 5, count: 2},
}

const entries1 = Object.entries(stringsObject)
 const found = entries1.find(([name, value])=>{
    if (name.includes('name') ) {
      console.log(value);

    }
  })

/*
1. Пристрелочная. Для объекта `simpleDwarf`, вывести в консоль его свойства и значения, вида "Свойство propName, значение value".
2. У нас есть объект `numbersObject`, значениями его свойств являются числа. С помощью методов работы с объектами, посчитайте сумму значений его свойств.
3. Есть объект `stringsObject`, нужно вывести в консоль значения только тех свойств, у которых ключи содержат "name".
4. У нас есть объект `DWARWES_AREAS`, который содержит данные о местах проживания гномов. Нужно создать массив, в котором будут содержаться только названия локаций (то есть, ключи объекта `DWARWES_AREAS`), отсортировать его в алфавитном порядке, и вывести в консоль.
5. Теперь создаем массив объектов с данными о местах проживания гномов (значения ключей объекта `DWARWES_AREAS`), сортируем его по возрастанию населения (`population`), и выводим в консоль.
6. Нужно получить массив всех гномьих королей. То есть, пройтись по свойствам объекта `DWARWES_AREAS`, взять из каждого данные по королю, и сложить в массив. Результат вывести в консоль.
7. Собираем данные по королям и локациям. Нужно получить объект, где в качестве ключей будут использоваться локации, а в качестве значений  - имя правителя этой локации.
```
{
  Moria: Balin,
  IronHills: Dain,
  Erebor: Tror
}
  */
