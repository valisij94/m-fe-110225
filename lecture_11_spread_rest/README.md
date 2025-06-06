 # README

## Лекционное занятие №11

### Тема:

Репозитарий содержит материалы по лекционному занятию №11, посвященному spread-оператору в JS.

**Что такое spread/rest оператор**
В JavaScript, существует интересный оператор, который пишется как троеточие (три точки). Он имеет два основных назначения:
 - разворачивание чего-то, что можно развернуть
 - сворачивание множества аргументов функции в массив

Пока что ничего не понятно. Попробуем разобраться, в том числе и на примерах.

**Оператор расширения (spread)**
Итак, первый, и наиболее частый вариант применения оператора - это разворачивание чего-то свернутого. В JS изначально можно было развернуть только массивы, но спецификация ES2018 добавила в этот перечень и объекты.

что значит "развернуть"? Это значит "взять все элементы массива/объекта, и работать с ними как с отдельными значениями". Этот оператор нужен тогда, когда мы взять содержимое массива (то есть множество его элементов), или содержимое объекта (то есть множество пар "ключ-значение"), и передать их как группу.

Типичный пример - копирование массива.
```
const array = [1,2,3,4];
// копирование массива с помощью известных нам методов
const newArray1 = array.slice(0);
const newArray2 = array.map(el => el);
const newArray3 = array.reduce( (acc, val) => {
   acc.push(val);
   return acc;
}, []);

// а теперь скопируем массив с помощью spread-оператора
const newArray4 = [...array];
```

То есть, мы как бы говорим: "возьми массив array, разверни его, и получившееся множество значений сложи в новый массив. Ссылку на этот массив запиши в переменную newArray4.

Такая же картина будет и с объектами.
```
const obj = {
   name: 'Vasya',
   lastName: 'Ivanov'
}

const newObj = { ...obj };
```

То же самое - мы говорим "возьми объект obj, разверни его, и получившееся множество пар "ключ-значение" сложи в новый объект. Ссылку на этот объект запиши в переменную newObj.

**Где применяется**
Основные варианты использования этого оператора - это создание ПОВЕРХНОСТНЫХ копий объектов и массивов. То есть, нам нужно создать ПОВЕРХНОСТНУЮ копию - нам поможет этот метод.

```
const src = [1, 2, 3, 4];
const copy = [...src]; // новый массив, который содержит 1,2,3,4

const objects = [ { name: 'Ivan'}, {name: 'Vasilij'}, {name: 'Alexey'} ];
const objectsShallow = [ ...objects ]; // новый массив, который содержит ссылки на ТЕ ЖЕ объекты, что и старый массив

console.log( objects === objectsShallow); // false, потому что разные массивы
console.log(objects[0] === objectsShallow[0]); // true, потому что одни и те же объекты
```

То есть, мы создаем поверхностную копию (разворачиваем только самый верхний уровень).

Так же и для объектов.

```
const src = { name: 'Torin' };
const copy = { ...src }; // новый объект { name: 'Torin' }

const complex = {
   name: 'Balin',
   address: {
      country: 'Erebor',
      place: 'Lonely Mountain'
   }
}

const shallow = { ...complex };
console.log( complex === shallow ); // false, потому что разные объекты
console.log( complex.address === shallow.address ); // true, потому что одни и те же объекты
```

Таким образом, мы создаем поверхностную копию массива/объекта. Все не-примитивные элементы/значения внутри копируемого массива/объекта будут скопированы.

**Закрепим практикой**
1. Создать копию массива `numbers` с использованием спред-оператора
2. Создать копию объекта `simpleDwarf` с использованием спред-оператора
3. Создать массив `third`, который будет содержать элементы массивов `first`, `second`. Нужно развернуть их в один массив с использованием спред-оператора.
4. Создать ГЛУБОКУЮ копию `complexDwarf`. То есть обеспечить, чтобы все вложенные не-примитивы также были скопированы с развертыванием.

**Передача аргументов в функцию с помощью spread-оператора**
Еще один вариант применения - это передача элементов массива в функцию в виде атомарных значений. То есть, мы передаем в функцию не сам массив в виде одного аргумента, а его значения как множество аргументов.

```
function sum(a,b) {
   return a + b;
}

const arr = [10, 20];

console.log( sum(arr[0], arr[1] ) ); // 30
console.log( sum(...arr) ); // 30
```

Здесь мы как бы говорим: "возьми массив arr, разверни его, и передавай его элементы в аргументы функции по порядку.

С объектами такая штука не работает!!!

**Rest-оператор**
У оператора "троеточие", есть еще одно предназначение, обратное рассмотренному ранее. Это так называемый "оператор остаточных параметров", или rest-оператор. Он предназначен для случаев, когда функция принимает произвольное число аргументов (от 0 до бесконечности). И нам нужно средство, чтобы работать с этими аргументами. Тогда мы можем сказать "эй, функция, возьми все аргументы, и сложи их в массив". В этом нам как раз и поможет rest-оператор.

```
funtion varArgs(...args) {
   args.forEach(el => console.log(el));
}
```
При такой реализации, мы как бы говорим функции, что в нее может быть передано от 0 до бесконечности аргументов. И при определении функции, мы их "упакуем" в массив по имени `args` (название может быть любое), и внутри функции будем с ними работать как с массивом. В приведенном выше примере, мы просто выводим их в консоль по одному.

Рассмотрим более осмысленный пример. Предположим, нам надо написать функцию, которая будет принимать произвольное количество чисел, и возвращать их сумму.

```
function getSum(...args) {
   return args.reduce( (acc, val) => acc += val, 0);
}
```
То есть, мы говорим, что функция может принять сколь угодно много аргументов. Мы эти аргументы упакуем в массив `args`, и просто посчитаем сумму элементов этого массива. Мы уже сталкивались с таким, когда разбирали методы `push`, `unshift`. Мы видели, что они принимают произвольное количество аргументов.

Иногда возникают ситуации, когда нам нужно отделить несколько аргументов от всех остальных. В этом случае, мы укажем их отдельно. Предположим, мы хотим добавить в нашу функцию подсчета суммы аргумент, в котором будем передавать число, на которое нужно домножить результат.
```
function getSum(multiplier, ...other) {
   return multiplier * other.reduce( (acc, val) => acc += val, 0);
}
```

Таким образом, мы говорим, что когда мы будем вызывать нашу функцию, мы хотим первый аргумент рассматривать отдельно, как `multiplier`, а все остальные поместить в массив `other`.

Все аргументы, которые мы хотим рассматривать отдельно, необходимо объявить ДО оператора `rest`. В определении функции может быть только один `rest`-оператор, и он должен быть в конце. Если указать его не в конце - будет ошибка.

Для примера, попробуем написать свой метод push, который принимает первым аргументом массив, куда мы хотим что-то добавить, а затем - произвольное число добавляемых элементов.

```
[0,1,2,3,4]
function customPush(array, ...args) {
   let newIdx = array.length;
   for (let i = 0; i < args.length; i++) {
      array[newIdx] = args[i];
      newIdx += 1;
   }
}
```

**Закрепим практикой**
1. Написать функцию `getTotalLength`, которая принимает произвольное количество строк, и возвращает их суммарную длину.
2. Написать функцию `makeSentence`, которая принимает произвольное количество строк, и возвращает одну большую строку (предложение) из этих строк, разделенных пробелами.
3. Усложним - сделаем функцию `makeSentenceWithCase`, которая первым аргументом примет аргумент `upperCased` типа boolean, а затем - произвольное количество строк. Если `upperCased` === true, то вернуть предложение в верхнем регистре.
4. Написать функцию `getTotalPrice`, она будет принимать произвольное количество аргументов (объектов с данными товаров), и должна вернуть их суммарную стоимость.
5. Меняем функцию `getTotalPrice`, она теперь должна первым аргументом принять категорию, а далее, через запятую, принять список товаров. Нужно вернуть суммарную стоимость товаров этой категории.

**Деструктуризация**
В JS есть две наиболее часто используемые составные структуры данных, это объекты и массивы. Нам представлена возможность "распаковки" составных структур в отдельные переменные, это называется деструктуризацией.

Начнем с распаковки массивов.

```
const array = ['Timon', 'Pumba', 'Simba'];
const [timon, pumba] = array
console.log(timon); // Timon
console.log(pumba); // Pumba
```

Мы как бы распаковываем массив (правая часть), и укладываем его элементы в переменные (левая часть), в порядке следования. То есть, мы говорим: "запиши пожалуйста 0-й элемент массива array в переменную timon, а 1-й элемент - в переменную pumba". Это и есть деструктурирующее присваивание.

ВАЖНО! При таком присваивании, исходный массив НЕ РАЗРУШАЕТСЯ! Он вообще никак не затронут. То есть предыдущая запись эквивалентна такой:

```
const timon = array[0], pumba = array[1];
```

Зачем это нужно? Иногда такой синтаксис выглядит проще. В React мы с таким будем часто сталкиваться.

При деструктуризации массива, важен порядок следования. Мы также можем пропустить элементы, указывая запятые вместо переменных.

```
const array = ['Timon', 'Pumba', 'Simba'];
const [timon, , simba] = array
console.log(timon); // Timon
console.log(simba); // Simba
```

То есть, в такой записи мы пропускаем 1-й элемент массива. Мы можем пропустить столько элементов, сколько нам нужно.

**Остаточные параметры и параметры по умолчанию**
Еще важный момент: иногда нам нужно взять первые несколько элементов массива как отдельные значения, а все остальное записать в другой массив. И это также возможно с помощью деструктуризации и rest-оператора.

```
const array = ['Timon', 'Pumba', 'Simba', 'Tucano'];
const [timon, pumba, ...others] = array
console.log(timon); // Timon
console.log(simba); // Simba
console.log(others); // ['Simba', 'Tucano']
```

То есть, мы можем записать не-деструктурированную часть массива в "остаточную" переменную.

**Закрепим практикой**
1. У нас есть массив строк `strings`. Создать переменные `first`, `second`, и записать в них первый и второй элементы массива.
2. Аналогичным образом, определить переменные `one`, `three`, и в них записать 1 и 3 элементы массива `strings` с использованием деструктуризации.
3. Пишем функцию `getNthWord`, она принимает в аргументах строку, которая содержит слова, разделенные пробелами. Второй аргумент `n` - номер слова. Нужно вернуть `n`-е слово. Нумерация слов начинается с 1.
```
getNthWord('Timon and Pumba', 2); // and
```

**Деструктуризация объектов**
В JS можно деструктурировать объекты. Но с учетом того, что у объектов немного другие ключи, то деструктуризация объектов отличается от деструктуризации массивов, а именно:
 - при деструктуризации, нужно указывать имена свойств объекта
 - порядок следования не важен

```
const obj = {
   name: 'Ivan',
   lastname: 'Petrov',
   age: 22
}

const {age, name, lastname} = obj;
console.log(name); // Ivan
console.log(lastname); // Petrov
```

То есть мы говорим "создай переменную name, и запиши в нее значение свойства name объекта obj". То же самое - для переменной lastname. Обратите внимание, что имена переменных совпадают с ключами свойств объекта. Если мы укажем несуществующее свойство - то в него будет записано undefined.

Иногда, мы хотим задать значения по умолчанию. Это делается так же, как и в аргументах функции.

```
const obj = {
   name: 'Ivan',
   lastname: 'Petrov',
   age: 22
}

const {name, lastname, hairColor = 'none', weight} = obj;
console.log(name); // Ivan
console.log(lastname); // Petrov
console.log(weight); // undefined - у объекта нет свойства weight
console.log(hairColor); // none - у объекта нет свойства hairColor, но мы задали значение по умолчанию.
```

**Алиасы (псевдонимы) при деструктуризации**
Нам иногда бывает нужно записать свойство объекта в переменную, чье имя не совпадает с ключом. Например, мы хотим записать значение свойства name в переменную username. Здесь нам помогут псевдонимы.

```
const obj = {
   name: 'Ivan',
   lastname: 'Petrov',
   age: 22
}

const {name: username, lastname} = obj;
console.log(username); // Ivan
console.log(lastname); // Petrov
```

**Вложенная деструктуризация**
Нам иногда нужно деструктурировать объект сложной структуры (с вложенностью). Для этого, мы должны сделать последовательную деструктуризацию.

```
const obj = {
   name: 'Ivan',
   lastname: 'Petrov',
   age: 22,
   address: {
      street: 'First street',
      house: 3
   },
   skills: ['Programming', 'Communication', 'Patience']
}

const {address: {street, house}, lastname, skills: [skillFirst, skillSecond] } = obj;
console.log(street); // First street
console.log(house); // 3
console.log(lastname); // Petrov
console.log(skillFirst); Programming
console.log(skillSecond); Communication
```

Таким образом, мы указываем нечто вроде пути к интересующему нас свойству.

**Закрепим практикой**
1. Записать в переменные name, age одноименные свойства объекта torin.
2. Записать в переменные dwarfName, dwarfAge свойства name, age объекта dvalin.
3. Записать в переменную melee значение свойства torin.skills.melee.
4. Усложним задачу. Теперь нам нужно записать это в переменные `torinsMelee` - то есть использовать алиасы.
5. Еще усложним (задача "со звездочкой"). Теперь нужно определить переменные `secondWeapon`, `secondArmour`, и в них записать второе оружие и второй элемент брони Торина.

### Полезные ссылки
 - Глава учебника про (остаточные параметры)[https://learn.javascript.ru/rest-parameters-spread-operator] - rest.
 - Англоязычный (источник)[https://www.javascripttutorial.net/javascript-object-spread/] про spread/rest.
 - (Деструктуризация)[https://learn.javascript.ru/destructuring-assignment] на learn.javascript