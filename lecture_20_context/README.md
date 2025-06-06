# README

## Лекционное занятие №20

### Тема:

Репозитарий содержит материалы по лекционному занятию №20, посвященному понятию контекста в JS, и ключевому слову this.

**Зачем это нужно**
Ранее, мы неоднократно работали с объектами, в которых мы храним данные о каких-то сущностях из реального мира. У объектов, как мы помним, есть свойства и методы. Методы объектов нужны для того, чтобы имитировать выполнение каких-то действий. Например, у нас есть объект, который отвечает за корзину товаров. И мы в него добавим метод "добавление в корзину". Также добавим "удаление из корзины", и другие методы, которые сочтем нужными. То есть, мы "учим" наш объект выполнять какие-то действия.


Ниже приведено два примера, которые создают объекты `cart1`, `cart2`. Суть одна и та же, но есть небольшая разница в синтаксисе. И лучше использовать второй вариант записи. Почему - будет понятно позже, когда будем разбирать наследование. Пока что мы учим наши корзины выводить в консоль строку.

```
const cart1 = {
   products: [],
   print: function() {
      console.log(`This is a cart!`);
   }
}

const cart2 = {
   products: [],
   print() {
      console.log(`This is a cart!`);
   }
}
```

То есть, мы видим, что мы добавляем нашему объекту свойство, которое содержит функцию. Мы научили нашу корзину говорить о себе в консоли.

Но как быть, если нам нужно получить доступ к тому объекту, "внутри" которого размещен наш метод? То есть, мы бы хотели выводить количество элементов в корзине (значение свойства `products.length`). И вот здесь нам на помощь приходит контекст - то есть доступ к тому объекту, где сейчас выполняется метод. За это отвечает ключевое слово `this`.

Казалось бы, а зачем нам это ключевое слово? Не проще ли обратиться к объекту по имени, например так:
```
   const cart2 = {
      products: [],
      print() {
         console.log(`This cart has ${cart2.products.length} items!`);
      }
   }
```

Такой код будет работать. Но он не особо надежен. Например, мы переименуем переменную `cart2`. В этом случае, нам нужно не забыть переименовать все вхождения внутри этого объекта. Соответственно, такое нам не сильно подходит. Плюс, а если нам нужно создавать много объектов? Поэтому, нам нужен какой-то инструмент, который будет давать нам доступ к тому контексту, в котором выполняется тот или иной метод. И тут нам на помощь приходит `this`.

**Ключевое слово this**
Если вкратце, то `this` дает нам доступ к контексту, в котором выполняется функция (метод). Пока не особо понятно. Есть другое, упрощенное, определение - `this` указывает на "объект перед точкой".

Что имеется в виду? Мы вызываем методы объекта через точечную нотацию (или квадратные скобки), и ключевое слово `this` будет указывать на тот самый объект, который стоит перед точкой.

```
const cart = { // cart - это объект
   products: [],
   print() {
      console.log(`There are ${this.products.length} items in the cart`); // this укажет на тот объект, для которого мы вызываем метод print
   }
}

cart.products.push('Milk');
cart.print(); // управление передается в метод print, а слово this внутри этого метода указывает на объект cart - т.е. объект перед точкой.
```

Таким образом, мы можем резюмировать, что `this` в методах будет указывать на тот объект, для которого вызван этот метод. Говорят, "тот объект, в контексте которого выполняется метод".

**Для ознакомления**
Есть несколько интересных моментов относительно контекста.
1. У стрелочных функций нет своего контекста. При вызове, стрелочная функция берет контекст внешней функции, если она есть.
2. Контекст в JS не является фиксированным, и определяется во время выполнения.
3. В нестрогом режиме, `this` на самом верхнем уровне указывает на `window`. В строгом режиме не определен.

**Закрепим практикой**
1. У нас в скрипте `main.js`, есть объект `cart`. Добавьте ему метод `describe`, который должен вывести в консоль информацию о корзине, следующего вида: "Now cart has _count_ items, total price is  _totalPrice_". Использовать соответствующие значения свойств объекта `cart`.
2. У нас есть объект гнома (`dwarf`). Добавьте ему метод `getWeapon`. Он будет принимать в аргументе имя оружия, и нужно добавить это оружие в массив `weapons` гнома.
3. Добавьте гному метод `dropWeapon`, он также будет принимать имя оружия, которое гном собирается выбросить. Задача - сделать так, чтобы в массиве `weapons` гнома не было бы этого оружия.
4. Потренируем гнома. Добавим ему метод `trainMe`. Он принимает в аргументах имя навыка, который мы хотим улучшить, и число, на которое мы улучшаем навык. Нужно изменить соответствующее свойство объекта `skills` нашего гнома.

```
dwarf.trainMe('melee', 5); // dwarf.skills.melee === 15
```

5. Добавьте объекту `cart` метод `addToCart`. Он принимает объект с данными товара (объект со свойствами name, price). Нужно:
 - добавить этот объект в массив `products`
 - увеличить на 1 свойство `count` у корзины
 - прибавить цену товара к свойству `totalPrice`

**Утеря контекста**
Как уже было сказано ранее, в JS контекст не является фиксированным. То есть, он может быть утерян. Такое происходит, если контексто-ориентированную функцию (то есть метод какого-то объекта), вызывают вне этого объекта.

```
const cart = {
   products: ['Milk', 'Bread']
   totalPrice: 5,
   count: 2,
   print() {
      console.log(`the cart has ${this.count} items, total price is ${this.totalPrice}`);
   }
}

cart.print(); // все норм

const printCopy = cart.print; // записываем в переменную printCopy ссылку на метод cart.print
printCopy(); // что-то пошло не так..

// Еще пример
setTimeout( cart.print, 1000 ); // и вновь ерунда
```

Почему же у нас получился такой результат? Потому что у нас произошло явление под названием "утеря контекста". Например, в случае `printCopy`, мы копируем в переменную ссылку на метод объекта `cart`. Но НЕ КОПИРУЕМ объект, поэтому, когда мы вызовем нашу `printCopy`, у нас нет контекста. Грубо говоря, у нас "ничего нет перед точкой". Фактически, в нестрогом режиме мы вызываем `window.printCopy`, а объект `window` не содержит никаких count, totalPrice.

По этой же причине не будет работать timeout. Потому что мы копируем сам метод (и здесь теряем контекст). Фактически, мы передаем в таймаут ссылку на метод, и это можно записать так:
```
const func = cart.print;
setTimeout(func, 1000); // контекст утерян
```

И что же мы можем сделать, чтобы решить эту проблему? Как быть, например, если мы хотим вызвать метод одного объекта в контексте другого объекта? Или у нас есть контексто-ориентированная функция (из библиотеки), и нам ее нужно вызвать в контексте нашего объекта?

На помощь приходит привязка контекста.

**Привязка контекста**
В JS, мы можем явно привязать контекст. То есть явно сказать: "эй, метод, ты сейчас должен выполниться в контексте такого-то объекта". Для этого, JS добавляет каждой функции 3 очень важных метода:
 - bind - этот метод позволяет привязать контекст, и вернет ссылку на функцию с уже привязанным контекстом, для последующего вызова.
 - call - этот метод привязывает контекст, и немедленно вызывает функцию, при этом можно передать этой функции аргументы через запятую
 - apply - этот метод привязывает контекст, и немедленно вызывает функцию, при этом можно передать аргументы в виде массива

Спецификация у них очень простая.
 - bind(context) - метод bind ожидает только объект, в контексте которого мы впоследствии хотим вызвать нашу функцию. Вернет функцию с уже привязанным контекстом. Функция НЕ БУДЕТ вызвана!
 - call(context, ...arguments) - ожидает объект с контекстом, а 2-й, 3-й, ... аргументы - это те аргументы, которые будут переданы в вызов функции с привзанным контекстом. Функция будет вызвана сразу, и возвращаемым значением будет то, что вернул вызов функции.
 - apply(context, args) - то же что и call, только args - это массив с аргументами.

Пока что ничего не понятно. Давайте разбирать подробно. Предположим, мы подключили какую-то библиотеку для работы с товарами интернет-магазина. Она имеет несколько функций:
```
function printProduct() {
   console.log(`Product ${this.name}, price: ${this.price}`);
}

function changeProduct(newName, newPrice) {
   if (newPrice <= 0) {
      throw new Error('Incorrect price!');
   }
   this.price = newPrice;
   this.name = newName || this.name;
}
```

Все функции являются контексто-ориентированными, то есть мы предполагаем, что они будут вызываться из контекста. И нам нужно их как-то использовать для наших товаров. Попробуем явно привязать контекст.

```
const binded = changeProduct.bind(products[0]); // говорим, что хотим позже вызвать нашу функцию в контексте объекта products[0]

binded(120, 'Super Tool'); // вызываем функцию с привязанным контекстом, и передаем аргументы.

// теперь попробуем остальные методы

// вызываем нашу функцию в контексте объекта products[1], с аргументами 220, Giper tool!
changeProduct.call(products[1], 220, 'Giper tool!');

// вызываем нашу функцию в контексте products[2], с аргументами 320, Mega tool!
changeProduct.apply(products[2], [320, 'Mega tool!']);
```

То есть, мы привязываем контекст, и или вызываем функцию сразу (с какими-то аргументами), или получаем функцию с уже привязанным контекстом, которую мы сможем вызвать позже.

**Закрепим практикой**
1. Пишем функцию `showProductInfo()`. Задача функции - выводить в консоль информацию о товаре, вида: "Товар НАЗВАНИЕ, цена - ЦЕНА". Функция должна быть контексто-ориентированной, т.е. предполагается, что она будет вызвана в контексте объекта товара. Вызываем функцию `showProductInfo()` в контексте объекта `products[0]`. Для этого, нам понадобится явно привязать контекст.
2. Пишем функцию `customMap`, которая повторяет функциональность метода массивов `map`. Нам нужно, чтобы эта функция была бы контекстно-ориентированной, то есть работала с `this`, и ориентировалась бы на то, что в качестве `this` будет массив.
3. Есть массив `numbers`. Мы хотим получить из массива `numbers` другой, новый массив `newNumbers`, элементы которого будут рассчитаны так: `newNumbers[i] = numbers[i] * numbers[i]`. То есть, массив квадратов. Сделать это вызовом метода `customMap`, в контексте массива `numbers`.
4. Задача повышенной сложности. Есть объект `weirdArray`. У него есть свойство length, и ключи очень похожи на индексы массива. Но это не массив. Нужно применить к нему метод `forEach`, и вывести в консоль каждое его свойство, у которого ключ - число (т.е. 0, 1, 2, ...). Для этого, нам нужно привязать контекст явно к методу forEach, и вызвать его. Такой прием называется заимствованием методов. Решаем вместе.
5. Теперь метод forEach нужно применить к объекту `veryWeirdArray`. Он тоже похож на массив, но у него нет свойства `length`. Нужно как-то применить к нему метод массива `forEach`. Здесь нам тоже нужна привязка объектов, но еще не повредит установить нашему объекту свойство `length` с правильным значением.
6. Пишем простую функцию `validateInput(errorText)` валидации текстового поля (`input`). предполагается, что она будет вызываться в контексте DOM-элемента, HTMLInput. Нужно проверить:
 - если у инпута есть атрибут required - то проверить что его значение непустое.
 - если значение пустое - то добавить к инпуту класс error, и в текст записать сообщение errorText.
 - если нет required - то вернуть true.
 - если с инпутом все хорошо - то убрать класс `error`.
7. Добавляем обработчик на кнопку Validate. При нажатии на кнопку, ищем все инпуты в документе, и вызываем функцию validateInput для каждого из них. Передать в нее текст "Заполните это поле!". Здесь нам тоже нужна привязка контекста, но уже с передачей аргументов в функцию, к которой мы привязываем контекст.

### Полезные ссылки
 - Глава учебника про [this](https://learn.javascript.ru/object-methods) - это для первого знакомства.
 - Привязка контекста, продвинутая работа с [функциями](https://learn.javascript.ru/bind)
 - Заимствование методов - [русскоязычный гайд](https://learn.javascript.ru/call-apply-decorators#method-borrowing)