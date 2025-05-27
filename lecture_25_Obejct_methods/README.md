 # README

## Итоговое занятие №10

### Тема:

Репозитарий содержит материалы по итоговому занятию №10, посвященному работе с классами, объектами и контекстом в JavaScript.

### Разогрев
1. Что выведет код:
```
class First {
  constructor() {}

  method() {
    console.log('Hello from method!');
  }
}

let firstInstance = new First();
firstInstance.method();
```

2. Что выведет код:
```
console.log('Class def');

class First {
  constructor() {
    console.log('Constructor');
  }

  method() {
    console.log('Method');
  }
}

let firstInstance = new First();
console.log('Call');
firstInstance.method();
```

3. Что выведет код:
```
class First {
  constructor() {}

  method() {
    console.log('Async');
    return new Promise( 9resolve => {
      console.log('Promise');
      resolve('Result');
    });
  }
}

let firstInstance = new First();

console.log('Before');
firstInstance.method()
  .then( (res) => console.log(res) )
  .finally( () => console.log('Finally') );
console.log('After');

// Before -> Async -> Promise -> After -> Finally -> Result (Victoria, Jana, Dmitriy)
// Before -> Async -> Finally -> After -> Promise -> Result (Olga Chirkova)
```

4. Что выведет код:
```
const myObject = {
  name2: 'First Object',
  greet() {
    console.log(`I am ${this.name2}`)
  }
  greet1: function() {/.../}
}

myObject.greet();

const copyMethod = myObject.greet;
copyMethod();

const secondObject = {
  name2: 'Another object'
}

copyMethod.call(secondObject);
myObject.greet.call(secondObject);
```

### Задачи занятия
1. Первая - пристрелочная, написать класс `Circle`. У него должны быть координаты центра (x,y), и радиус. Конструктор должен принимать эти три параметра.
2. Добавить классу методы `getLength`, `getSquare`, которые будут определять длину окружности и площадь круга соответственно.
3. Добавляем метод `move`. Он примет в аргументе новые координаты центра, куда нужно переместить наш круг.
4. Делаем метод `scale`, он примет в аргументе коэффцициент, и наша задача - растянуть или сжать круг на этот коэффициент.
5.  Реализуем класс `VersionsControl`. Он должен реализовать логику работы системы контроля версий. Класс принимает в конструкторе строку с начальной версией программного продукта, и название программного продукта. Строка с начальной версией имеет вид "1.0.0". Первое число - это Major-версия, второе - Minor-версия, и третье - Patch. Нужно сохранить имя программного продукта в поле класса `productName`, а major, minor, patch - в соответствующие поля. Также реализуем метод `getCurrentVersion`, который должен возвращать строку вида "Software PRODUCT_NAME, release MAJOR.MINOR.PATCH. All rights reserved."
6. Добавляем функциональности. Реализуем методы:
 - `major` - увеличить major на 1, а в minor и patch поставить 0.
 - `minor` - увеличить minor на 1, а в patch поставить 0.
 - `patch` - увеличить patch на 1.
7. Реализуем возможность истории версий. Нам нужно вести историю версий, т.е. при каждом изменении версии (вызове метода major, minor, patch) сохранять текущую версию.
8. Реализуем метод `rollback` - то есть откат к предыдущей версии.

### Теоретический блок. Методы работы с объектом.

Сегодня предполагается рассмотреть несколько полезных статических методов класса Object, которые широко используются при работе с объектами.

**Object.assign - слияние объектов**
Метод `Object.assign` применяется для того, чтобы "объединить" несколько объектов. Синтаксис выглядит так:
```
Object.assign(target, ...sources)
```

Здесь аргумент `target` принимает целевой объект (куда мы будем сливать остальные объекты), а дальше через запятую перечисляются те объекты, которые мы хотим "слить" с целевым. Результатом работы будет целевой объект, в который добавлены свойства объектов `sources`.

```
const target = { name: 'Timon' };
const source1 = { color: 'brown' };
const source2 = { kind: 'Suricate' };

Object.assign(target, source1, source2);
console.log(target); // { name: 'Timon', color: 'brown', kind: 'Suricate' }

const newObject = Object.assign( {}, target, source1, source2);
console.log(newObject); // { name: 'Timon', color: 'brown', kind: 'Suricate' }, и это уже НЕ объект target!
```

**Закрепим практикой**
1. В скрипте `main.js` есть объекты `sword`, `shield`, `aromur`, и есть объект `dwarf`. Объедините эти объекты так, чтобы целевым был объект `dwarf`.
2. С помощью `Object.assign`, создайте копию объекта `dwarf`, то есть нужно создать новый объект, который будет содержать все свойства объекта `dwarf`.

**Object.keys, Object.values, Object.entries**
Иногда нам необходимо "перебрать" объект. То есть, сделать обход всех его свойств (ключей), и/или значений. И здесь нам на помощь приходят три очень важных метода по работе с объектами.
 - `Object.keys(obj)` - возвращает массив, который содержит имена перечисляемых свойств объекта `obj`
 - `Object.values(obj)` - возвращает массив, который содержит значения перечисляемых свойств объекта `obj`
 - `Object.entries(obj)` - возвращает массив, который множество массивов из двух элементов. Первый элемент маленького массива - название свойства, второй - значение свойства объекта `obj`.

```
const simpleObject = {
  name: 'Name',
  age: 20,
  address: {
    street: 'StreetName',
    house: 8
  },
  phones: ['00012', '00013', '00014']
}

const keys = Object.keys(simpleObject); // ['name', 'age', 'address', 'phones']
const values = Object.values(simpleObject); // [ 'Name', 20, { street: 'StreetName', house: 8}, ['00012','00013','00014'] ]
const entries = Object.entries(simpleObject); //[ ['name', 'Name'], ['age', 20], ['address', { street: 'StreetName', house: 8}], ['phones', ['00012','00013','00014'] ] ]
```

Эти методы могут быть очень полезны при обходе (переборе) свойств объекта.

```
for (let entry of Object.entries(simpleObject)) {
  console.log(entry[0], entry[1]);
}

// с деструктуризацией, как часто пишут
for (let [key, value] of Object.entries(simpleObject)) {
  console.log(key, value);
}
```

**Закрепим практикой**
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
```