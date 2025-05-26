const sword = {
  weight: 5,
  material: 'hardened steel',
  attackBonus: 5
}

const magicBook = {
  weight: 8,
  topic: 'Magic basics for hobbits',
  author: 'Gandalf The Grey'
}

const armour = {
  weight: 15,
  material: 'steel',
  defenceBonus: 7
}

const goldCoins = {
  weight: 18,
  issuedBy: 'Moria Incorporated LTD'
}

class Human {
  constructor(name, fraction) {
    this.name = name;
    this.fraction = fraction;
  }

  greet() {
    console.log(`Hello, I am ${this.name} from ${this.fraction}`);
  }
}

class Hobbit extends Human {

  constructor(name, homeVillage, bag, chestnuts = 0) {
    super(name, 'Hobbits');
    this.homeVillage = homeVillage;
    this.bag = bag;
    this.chestnuts = chestnuts;
  }

  getChestnuts(chestnutsCnt) {
    this.chestnuts += chestnutsCnt;
    console.log(`Now ${this.name} has ${this.chestnuts} chestnuts.`)
  }

  throwChestnut() {
    if (this.chestnuts > 0) {
      console.log(`${this.name} throws one chestnut!`);
      this.chestnuts--;
    } else {
      console.log(`${this.name} has no chestnuts - nothing to throw!`)
    }
  }
}


/*

1. Реализуем класс `CoffeeRecipe`, который хранит в себе данные о рецепте кофе (то есть о соотношении ингредиентов). В конструкторе, он принимает название рецепта, и пропорции ингредиентов - от одного до трех чисел, каждое из которых от 0 до 1. Первое - это доля воды `waterFraction`, второе - доля зерен `beansFraction`, и третье - доля молока `milkFraction` . Нужно реализовать в конструкторе контроль того, что соотношение пропорций в сумме равно 1 (т.е доля воды + доля зерен + доля молока = 1).
```
const espresso = new CoffeeRecipe('Espresso', 0.6, 0.4, 0);
const americano = new CoffeeRecipe('americano', 0.8, 0.2, 0);
```

2. Сделаем свойство-геттер `description`, которое позволит получить описание рецепта. Его задача - вернуть строку вида `Recipe ...: water: ..., beans: ..., milk: ...`

4. Теперь сделаем программное обеспечение для самой кофемашины. У кофемашины есть модель (строка), и объемы отсеков для воды, зерен и молока (числа). Это мы будем передавать в конструкторе. Для хранения, используем свойства `waterLimit`, `beansLimit`, `milkLimit`. Нам также понадобится остлеживать состояние кофемашины, т.е. сколько у нас молока, воды и кофе соответственно. Реализуем это через свойства `water`, `beans`, `milk`.
*/

class CoffeeRecipe {
  constructor(recipeName, waterFraction = 0, beansFraction = 0, milkFraction = 0) {
    if (waterFraction + beansFraction + milkFraction !== 1) {
      throw new Error('Incorrect recipe!');
    }
    this.recipeName = recipeName;
    this.waterFraction = waterFraction;
    this.beansFraction = beansFraction;
    this.milkFraction = milkFraction;
  }

  get description() {
    return `Recipe ${this.recipeName}, water: ${this.waterFraction}, beans: ${this.beansFraction}, milk: ${this.milkFraction}`;
  }
}

class CoffeeMachine {

  // Объемы отсеков для ингредиентов
  #waterLimit;
  #beansLimit;
  #milkLimit;
  // Текущее кол-во ингредиентов в кофемашине
  #water = 0;
  #beans = 0;
  #milk = 0;

  static recipes = {
    espresso: new CoffeeRecipe('espresso', 0.6, 0.4, 0),
    americano: new CoffeeRecipe('americano', 0.8, 0.2, 0),
    latte: new CoffeeRecipe('latte', 0.4, 0.2, 0.4),
    cappuccino: new CoffeeRecipe('cappuccino', 0.3, 0.2, 0.5)
  }

  constructor(model, waterLimit, beansLimit, milkLimit) {
    this.model = model;
    this.#waterLimit = waterLimit;
    this.#beansLimit = beansLimit;
    this.#milkLimit = milkLimit;
  }

  #addIngredient(ingredientName, addValue) {
    if (this[`#${ingredientName}`] + addValue > this[`#${ingredientName}Limit`]) {
      console.log(`Too much ${ingredientName}!`);
      this[`#${ingredientName}`] = this[`#${ingredientName}Limit`];
    } else {
      this[`#${ingredientName}`] += addValue;
    }
  }

  set water(addWater) {
    if (this.#water + addWater > this.#waterLimit) {
      console.log(`Too much water!`);
      this.#water = this.#waterLimit;
    } else {
      this.#water += addWater;
    }
  }

  set beans(addBeans) {
    if (this.#beans + addBeans > this.#beansLimit) {
      console.log(`Too much beans!`);
      this.#beans = this.#beansLimit;
    } else {
      this.#beans += addBeans;
    }
  }

  set milk(addMilk) {
    if (this.#milk + addMilk > this.#milkLimit) {
      console.log(`Too much milk!`);
      this.#milk = this.#milkLimit;
    } else {
      this.#milk += addMilk;
    }
  }

  makeCoffee(cofeeName) {
    const recipe = CoffeeMachine.recipes[cofeeName];
    if (!recipe) {
      console.log('Cannot make this coffee: ' + cofeeName);
    } else {
      const { beansFraction, milkFraction, waterFraction } = recipe;
      if (
        this.#beans < beansFraction ||
        this.#milk < milkFraction ||
        this.#water < waterFraction
      ) {
        console.log('Insufficient ingredients!');
      } else {
        this.#beans -= beansFraction;
        this.#milk -= milkFraction;
        this.#water -= waterFraction;
        console.log('Take your coffee!');
      }
    }
  }

}

class WendingMachine extends CoffeeMachine {

  static nominals = [1,2,5,10,25,50];
  static prices = {};

  #deposit = 0;

  constructor(name, waterLimit, beansLimit, milkLimit) {
    super(name, waterLimit, beansLimit, milkLimit);
  }

  addCoin(coin) {
    if (WendingMachine.nominals.includes(coin)) {
      this.#deposit += coin;
    } else {
      console.log('Unknown coin: ' + coin);
    }
  }

  static setCoffeePrice(name, price) {
    if (CoffeeMachine.recipes[name]) {
      WendingMachine.prices[name] = price;
    } else {
      console.log('Unknown recipe: ' + name);
    }
  }

  buyCoffee(name) {
    const cofeePrice = WendingMachine.prices[name];
    if (cofeePrice) {
      if (this.#deposit >= cofeePrice) {
        this.makeCoffee(name);
        this.#deposit -= cofeePrice;
      } else {
        console.log('Insufficient funds!');
      }
    } else {
      console.log(`Price for ${name} is not set!`);
    }
  }
}

const m1 = new WendingMachine('WM1', 5, 5, 5);
m1.water = 4;
m1.beans = 3;
m1.milk = 4;
WendingMachine.setCoffeePrice('espresso', 10);
WendingMachine.setCoffeePrice('latte', 25);

m1.buyCoffee('espresso');
console.log('Adding coins');
m1.addCoin(50);
m1.buyCoffee('latte');