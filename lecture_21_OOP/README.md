# README

## Лекционное занятие №21

### Тема:

Репозитарий содержит материалы по лекционному занятию №21, посвященному основам объектно-ориентированного программирования в JS.

**Зачем это нужно**
На прошлом занятии, мы рассматривали понятие контекста, ключевое слово `this`, и привязку контекста. Все это обсуждалось в тесной связке с объектами. И сегодня, мы поговорим об основной концепции объектно-ориентированного программирования - а именно, о классах.

Зачем нужны классы? Кроме того, что это стильно-модно-молодежно. Классы - это конепция, которая позволяет нам строить толковые архитектуры наших приложений, организовывать данные так, чтобы с ними впоследствии было проще работать, и многое другое.

**Что такое классы, и зачем они применяются**
Есть определение, что класс - это расширяемый шаблон кода для создания объектов, который устанавливает их начальные значения свойств, и определяет поведение (методы). Ясности пока немного. Попробуем ее добавить.

Класс можно воспринимать как некий "шаблон" объекта. Как на заводе, пресс штампует заготовки по определенному шаблону, так и здесь - класс создает объекты определенной структуры. Классы также отображают сущности реального мира.

Но зачем все это нужно?

Предположим, мы пишем программу для автоматизации производства дверей. У нас есть объект реального мира - дверь. Некая абстрактная, то есть максимально обобщенная дверь, без конкретики. Подумаем, какие характеристики могут быть у двери. Материал, из которого она изготовлена. Цвет. Вес. Наличие фурнитуры. Гарантийный срок. И так далее. И получается, что наше программное обеспечение должно создавать объекты-двери. Попробуем это реализовать.

```
function makeDoor(doorMaterial, doorColor) {
   return {
      material: doorMaterial,
      color: doorColor
   }
}

const door1 = makeDoor('wood', 'brown');
```

Чем не годится? Да пожалуй всем годится, но можно и лучше. Мы можем сделать класс, который будет отвечать за нашу абстрактную дверь, то есть это будет шаблон двери. И мы будем производить двери по шаблону.

```
class Door {} // определяем класс. Он пока что пустой.
const door1 = new Door(); // создаем объект класса (instance). То есть делаем конкретную дверь.
door1.color = 'brown'; // задаем цвет
door1.material = 'wood'; // задаем материал
```

Как-то не особо удобно.. Было бы неплохо, чтобы мы могли при изготовлении двери сразу указать материал и цвет. Попробуем реализовать это.

```
class Door {
   makeDoor(color, material) {
      this.color = color;
      this.material = material;
   }
}

const door = new Door();
door.makeDoor('brown', 'wood');
```

Уже поинтереснее. А можем ли мы все это объединить, то есть сделать так, чтобы при создании новой двери мы сразу же определяли бы цвет и материал? Да, можем. Здесь нам на помощь придет **конструктор**.

**Что такое конструктор**
Конструктор - это особый метод класса, который будет вызываться тогда, когда мы будем создавать новый объект этого класса. То есть, когда мы "конструируем" новый объект по тому шаблону, который определяет наш класс. Для создания конструктора, есть ключевое слово `constructor`, которое должно применяться только внутри класса.

```
class Door {
   constructor(color, material) {
      this.material = material;
      this.color = color;
   }
}

const door = new Door('brown', 'wood'); // фактически, это вызов конструктора. И мы передаем в него аргументы. Результатом работы конструктора будет объект класса Door.
```

Есть несколько моментов по работе с конструкторами:
 - класс может иметь только один конструктор.
 - если конструктор не определен явно, то JS использует конструктор по умолчанию (то есть конструктор без аргументов, который просто создает пустой объект).
 - в конструкторе не нужно указывать `return` - потому что возвращаемым значением конструктора будет новый объект.
 - в конструкторе, `this` указывает на создаваемый объект.

**Закрепим практикой**
1. Определить класс `Product`, который будет принимать название, цену и описание товара, и создавать объекты товаров.
2. Реализуйте логику в конструкторе: если не передана цена, то нужно ставить цену 100.

**ВАЖНЫЙ МОМЕНТ**
В JavaScript, классы являются ФУНКЦИЯМИ. В этом легко убедиться, если вывести в консоль тип нашего класса.
```
console.log(typeof Door); // function
```

**Методы классов**
В начале занятия, мы также говорили о том, что классы дают нам возможность задать поведение объектов. За поведение объектов отвечают методы классов.

Что имеется в виду. Мы можем определять у классов методы, которые будут вызываться для их объектов, и будут выполнять какую-то логику. Например, мы хотим определить метод `paint` у нашего класса `Door`, который будет управлять цветом нашей двери.

```
class Door {
   constructor(color, material) {
      this.color = color;
      this.material = material;
   }

   paint(newColor) {
      this.color = newColor;
   }
}

const door1 = new Door('brown', 'wood');
door1.paint('black');
console.log(door1); // { color: 'black', material: 'wood' }
```

То есть, мы определяем, "что будут уметь объекты нашего класса".

**Закрепим практикой**
1. Создать класс `User`, у которго будут свойства `name`, `role`, `age`. Определить ему метод `greet`, которы будет выводить в консоль строку вида "hey, I am _name_, I am _age_ y.o., and I have _role_ role".
2. Добавить классу `User` метод `changeRole`. Он будет принимать в аргументах новую роль. Нужно реализовать такую логику, чтобы если передана пустая новая роль - то пользователю ставилась бы роль `default`.
3. Добавить метод `addAge`. Метод будет принимать в аргументах число, которое нужно прибавить к текущему возрасту пользователя. При этом, если новый возраст будет больше 100 или меньше 0 - то выводим в консоль сообщение "Impossible! At least for now", и возраст не меняем.
4. Доработать метод `addAge`. Теперь, в случае если новый возраст меньше 0, или больше 100 - нужно кидать исключение с текстом "Incorrect age!".
5. Добавляем классу метод `hasDiscount`. Он должен возвращать `true`, если у пользователя роль `stuff`, или возраст делится на 5 без остатка.
6. Делаем класс для представления корзины товаров. У корзины должны быть такие свойства:
 - список товаров (`productsStorage`), добавленных в корзину. Обязательно - с количеством товаров. Рекомендуется список хранить в виде обычного объекта, у которого в качестве ключей будут названия товаров, а в качестве значений - количество единиц данного товара в корзине. Пример:
 ```
 productsStorage: {
    Ball: 1,
    Saw: 2,
    // ...
 }
 ```
 - общая стоимость всех товаров (`totalPrice`).
7. Добавляем возможность добавить товар в корзину. Создаем метод `addProduct` - добавление товара. Ожидает объект класса Product - добавляемый товар. При добавлении товара, нужно проверить в списке товаров в корзине (это свойство `productsStorage`) наличие товара с таким наименованием. Если есть - увеличить кол-во на 1. Если нет - добавить такое свойство в наш список, и поставить ему значение 1 - т.е. мы добавили товар в корзину. При этом, общую стоимость товаров в корзине увеличить на стоимость добавляемого товара.
8. Добавляем возможность удалять товары из корзины. Создаем метод `dropProduct`. Логика та же, как и в задаче 7, только количество уменьшаем на 1. Следить чтобы не было отрицательного кол-ва товаров!

**Статические свойства и методы**
До сих пор, мы говорили об обычных свойствах и методах. То есть, свойства принадлежат объекту (кому принадлежат методы - поговорим позже, когда будем говорить о наследовании). Но иногда, возникают ситуации, когда мы хотим, чтобы свойство принадлежало бы не конкретному объекту, а классу в целом. Например, рассмотрим наш класс `Door`. Пока что у класса есть только свойства, которые принадлежат конкретным дверям. Давайте предположим, что на нашей фабрике дверей, мы хотим на каждую дверь добавлять логотип нашей фирмы (типа знак качества). Можно сделать его также свойством каждой двери. Но лучше будет сделать так, чтобы он был свойством класса (шаблона). И тут нам помогут статические свойства.

Статическое свойство - это свойство, которое принадлежит классу в целом, а не конкретному объекту. То есть для работы с этим свойством нам не нужно создавать объект класса.

```
class Door {
   // статическое свойство. Оно принадлежит классу в целом.
   static logo = 'SuperQuality!';

   // статический метод
   static getLogo() {
      // при работе со статическими свойствами внутри класса, мы также пишем перед точкой имя класса.
      return Door.logo;
   }

   // нестатический метод
   nonStaticGetLogo() {
      // при работе со статическими свойствами внутри класса, мы также пишем перед точкой имя класса.
      return Door.logo;
   }

   constructor() { ... }

   // ...
}

// если нам нужно поработать со статическим свойством, то мы с ним работаем через класс, а не через объект класса,
// то есть перед точкой ставим имя класса!
const trademark = Door.logo;
```

Теперь свойство `logo` будет общим для всех объектов класса.

Где применяются статические свойства и методы? Много где, мы с ними неоднократно сталкивались. Например, Math.PI - это статическое свойство класса `Math`, которое содержит значение числа Пи. Или методы работы с массивами (Array.from, Array.isArray), с числами (Number.parseFloat, Number.parseInt).

**Закрепим практикой**
1. Мы хотим вести учет количества произведенных дверей. Сделайте счетчик объектов класса `Door`. Это стоит сделать статическим свойством. И при создании объекта (в конструкторе), нужно увеличивать на 1 значение счетчика.
2. Ранее, мы создавали класс `User`. Мы хотим вести учет ролей. Нужно сделать счетчик, который будет содержать объект. В нем свойствами будут имена ролей, а значениями - количество пользователей с этой ролью. При создании нового пользователя (вызове конструктора), нужно проверять наличие свойства с именем роли в объекте-счетчике. Если есть - увеличивать на 1. Если нет - добавлять, и ставить значение 1.



### Полезные ссылки
 - Глава учебника про [классы](https://learn.javascript.ru/class) - читать до Class Expression, остальное - по желанию.
 - Еще один гайд по [ООП](https://proglib.io/p/uchebnik-po-javascript-oop-na-prostyh-primerah-2022-06-26). Можно читать до раздела про наследование (для базового понимания классов).