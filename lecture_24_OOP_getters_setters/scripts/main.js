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