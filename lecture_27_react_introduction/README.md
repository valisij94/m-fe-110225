# README

## Лекционное занятие №27

### Тема:

Репозитарий содержит материалы по лекционному занятию №27, посвященному знакомству с React.js.

**Что это и зачем**
Сегодняшнее занятие будет посвящено знакомству с библиотекой React.js. Это очень популярная библиотека для отрисовки пользовательских интерфейсов. Отметим основные плюсы библиотеки:
 - низкий порог входа - React проще для освоения (даже самостоятельного)
 - авторитетные авторы (facebook)
 - очень большое сообщество - есть практически 100% гарантия, что на ваши вопросы уже есть ответы, а если нет - то вам помогут.

 React - это библиотека для отрисовки пользовательских интерфейсов. Его задача - снять с нас (разработчиков) часть нагрузки, и помочь нам в построении интерфейса из маленьких, повторно используемых блоков - **компонентов**. В этом заключается основная идея React - разбиение большого, сложного интерфейса на маленькие, максимально независимые друг от друга кусочки - компоненты.

 Чем еще хорош React? Своим быстродействием, за счет наличия в нем Virtual DOM, и продуманных алгоритмов перерисовки пользовательского интерфейса. Идея быстродействия состоит в основном в том, чтобы перерисовывать в реальном DOM-дереве только то, что реально нужно перерисовать - чтобы показать пользователю актуальный интерфейс. Об этом скажем чуть позже.

 Теперь о том, как все начиналось, и как во многом это работает. В самом начале, на заре веб-разрабоки, сайты были в основном статичными, и мало отличались от досок объявлений. Как мы уже знаем, HTML, CSS не являются языками программирования, и с их помощью мы сможем слепить красивый интерфейс, но он будет практически "неподвижным" - то есть мы не сможем добавить в него динамики. Потом появился JavaScript, который вдохнул жизнь в веб-страницы, они стали динамичными. Но этого показалось мало, и начали делать всякие JS-библиотеки, призванные упростить жизнь разработчикам. В какой-то момент появился React.

 Ранее, мы с вами писали какую-то часть разметки в HTML-файле, и добавляли ей "магии" средствами JS. В React идеология немножко другая - наш файл разметки HTMl будет содержать совсем немного контента - один единственный div. Это можно считать "точкой монтирования" реактовского приложения. Вся остальная разметка будет генерироваться средствами библиотеки React (фактически, JS), и добавляться ВНУТРЬ этого контейнера (точки монтирования). То есть, генерация разметки происходит на клиенте. Клиент запрашивает адрес, и бэк ему возвращает маленький HTML, и большущие файлы скриптов. И эти скрипты генерируют разметку, показывают ее пользователю, реагируют на какие-то действия, и т.д.

 Прежде чем мы начнем работу с React, давайте проясним несколько моментов.
  - React - это не более чем библиотека JS, он не является отдельным языком программирования. Все, что делается на React, может быть сделано без него, на чистом JS.
  - React дает нам определенные возможности, которых нет в JS - например, особый синтаксис, о нем поговорим позже. Код, написанный на React, непонятен браузеру, поэтому нужно, чтобы кто-то преобразовал код React в обычный JS-код. Этим обычно занимается сборщик проекта (Webpack/Rollup), и транспилятор (Babel). Эти товарищи преобразуют код, написанный на React, в обычный JavaScript-код, который будет понятен браузеру.
  - React использует **декларативный** подход. В React, мы должны, грубо говоря, сказать приложению, **что** мы хотим увидеть по итогу, а детали реализации - за React. Ранее, мы с вами использовали **императивный** подход, то есть рассказывали DOM-элементам, **как** они должны выглядеть.

**Установка React, создание приложения**
Есть несколько вариантов, как бы мы могли подключить React к нашему приложению, это описано у них в [документации](https://react.dev/learn/installation). Можно вообще подключить React через CDN, как отдельный скрипт, и работать с ним именно как с JS-библиотекой. Также можно настроить все вручную. Но нас это пока что не интересует, нам нужно сделать быстрый старт. Для этого, разработчики React любезно создали нам инструмент под названием `create-react-app`, который создает нужную структуру проекта, подключает нужные зависимости (то есть скачивает из CDN нужные библиотеки), делает первоначальную настройку - и мы готовы создавать свое приложение.

В последнее время также большую популярность набирает `Vite` - это аналог `create-react-app`. Мы будем работать с ним.
Также, они на своей странице рекомендуют использовать React-фреймворки (например, Next.js). Но мы это пока использовать не будем.

ВАЖНО! Для работы, нам понадобится Node.js! Если нет - установите (просто скачайте с оф.сайта и установите).

**Создание нового приложения**

**Вариант с Vite**
1. Создаем папку, где мы хотим создать наше приложение. Открываем там терминал Git Bash.
2. Выполняем команду npm create `vite@latest APP_NAME` *вместо APP_NAME пишите имя своего приложения - например, lecture27*
3. Нам предлагается выбор шаблонов приложения. Нас интересует шаблон `React`. Между шаблонами перемещаемся стрелками вверх и вниз, выбираем React и нажимаем Enter.
4. Выбираем вариант, на котором мы будем писать наше приложение. Нам пока что интересен вариант JavaScript.
5. Ура, все установлено! Теперь, нам нужно зайти в свежесозданную папку с именем нашего приложения (lecture27).
6. Устанавливаем зависимости проекта, командой `npm install`.
7. Все готово, можно запускать приложение командой `npm run dev`. Оно будет запущено на локалхосте, на порту 5173.

**Вариант с create-react-app**
Воспользуемся средством [create-react-app](https://create-react-app.dev/), для создания нового React-приложения. Для этого, нам нужно зайти в папку, где мы хотим создать новое приложение, открыть ее в терминале (можно в git Bash), и там выполнить команду
```
npx create-react-app APP_NAME
```

Эта команда создаст новое React-приложение, готовое к работе. Это займет некоторое время. Время это нужно на загрузку всех необходимых библиотек.
И вот, настал счастливый момент, когда все установлено! Мы можем видеть, что у нас создана некоторая структура каталогов. Попробуем разобрать ее поплотнее.
 - node_modules - здесь содержатся все зависимости проекта, то есть библиотеки, которые мы подключили (или которые были подключены по умолчанию к проекту create-react-app). Эту папку мы не трогаем, и руками в ней ничего не меняем - ее содержимым управляет NPM при установке/обновлении/удалении зависимостей
 - public - в этой директории хранится файл `index.html`, а также ресурсы проекта (картинки, файл манифеста и файл для поисковых роботов). В этой папке нам будет интересен только `index.html`.
 - src - здесь все исходники (JS, CSS, юнит-тесты). Здесь мы будем работать: создавать свои каталоги, файлы, писать код и стили и многое другое.
 - `package-lock.json` - эталонный файл зависимостей проекта. Вручную ничего в нем не меняем.
 - `package.json` - файл с описанием проекта и его зависимостей. Вручную менять можно, но пока мы этого делать не будем.
 - .gitignore - файл, который укажет, что НЕ должно быть залито в git.

Для запуска приложения, поставка `create-react-app` включает в себя библиотеку скриптов `react-scripts`. Нас будет интересовать только скрипт запуска нашего приложения. Чтобы запустить его на локальном хосте, нужно в папке проекта выполнить команду
```
npm start
```

Эта команда запустит наш проект на локалхосте, по умолчанию на 3000 порту. При изменении чего-то в проекте, изменения ТУТ ЖЕ отобразятся в браузере, то есть нам не надо вручную обновлять страницу.

Теперь, когда мы запустили наше приложение - самое время перейти к коду!

**Разбираемся с JSX**
Для начала, откроем файл разметки `/public/index.html`. Мы видим, что в теле содержится только `div.root`. Откуда же берется остальная разметка?

Она берется из файла `src/main.jsx` (в случае create-react-app - src/index.js). Откроем его, и посмотрим на содержимое.
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
```
Пока выглядит не особо понятно. Мы видим, что мы вызываем какую-то функцию `ReactDOM.createRoot`, и передаем ей в аргументах ссылку на этот контейнер. Затем, вызываем метод `render`, и передаем нечто странное - вроде тег, но не стандартный HTML-тег, а что-то другое. Попробуем разобраться.

Первой строкой, мы создаем точку монтирования - то есть, мы говорим React, в какой РЕАЛЬНЫЙ DOM-узел мы хотим отрисовать наше React-приложение (фактически, вставить ту разметку, которая будет сгенерирована средствами React).

Второй строкой мы говорим "эй, React, ты уже знаешь, куда тебе вставить разметку. Давай-ка ты ее сгенерируешь, и вставишь в дерево документа". И React говорит "не вопрос", и делает.

Пока что непонятно, что это за странные теги. Чтобы разобраться и с этим, копнем немного глубже.

Фактически, у нас в браузере будет обычная разметка. Эту разметку создает React, для этого в нем есть специальная функция `createElement`, которая нам создает фрагменты разметки. Проверим, так ли это.

Закомментируем в `main.jsx (index.js - для CRA)` все, что внутри вызова `render`. Теперь у нас пустая страница - разметки нет. Попробуем воспользоваться `createElement` для создания разметки.

Над вызовом `render`, объявим константу:
```
const heading = React.createElement('h1', null, 'Hello From React!');
```

Здесь мы говорим: "эй, реакт, мы хотим создать фрагмент разметки. Это должен быть тег h1, у него не будет никаких пропсов (об этом позже), а его потомком будет текстовый узел, с текстом Hello From React!". И React создаст нам этот текстовый узел. Нам теперь осталось попросить его отрисоваться - добавим его в вызов функции `render` в качестве аргумента. Ура, мы видим разметку.

Теперь давайте предположим, что мы хотим нарисовать контейнер (div), внутри которого мы хотим разместить paragraph с текстом. Сначала, создадим параграф, затем создадим div, и отрисуем параграф внутри контейнера.
```
const span1 = React.createElement('span', null, 'First span');
const elem = React.createElement('div', null, span1);
```

Тоже пока все норм. Теперь предположим, что нам нужно отрисовать не только параграф внутри этого контейнера, а еще и элемент span с каким-то своим текстом. Сделаем это.
```
const span1 = React.createElement('span', null, 'First span');
const par1 = React.createElement('p', null, 'Simple paragraph');
const elem = React.createElement('div', null, span1, par1);
```

Мы видим, что мы можем передавать произвольное число аргументов в функцию `createElement` в качестве дочерних элементов.

Попробуем также передать внутрь наших элементов какие-то настройки. Например, имя класса и идентификатор для спана.
```
const span1 = React.createElement('span', { className: 'spanClass', id: 'spanId'}, 'First span');
```

Выглядит, конечно, короче чем тот код, который мы привыкли писать раньше - createElement, classList, setAttribute, ...
Но теперь ответим на вопрос, а удобно ли это? Что, если у нас сложный интерфейс, с большим количеством уровней вложенности, с кучей атрибутов, и так далее? Стоит ли нам ради эфемерной выгоды в объеме кода использовать React?

Ответ очевиден - нет. Именно поэтому, React предлагает нам синтаксис JSX - JavaScript in XML. Это одна из основных (если не самая основная) фича React. Она позволяет нам писать разметку внутри JS, что ОЧЕНЬ существенно сокращает объем кода и время разработки. Попробуем написать то, что у нас было раньше, с помощью JSX.

```
root.render(
  <div>
    <span className='spanClass' id='spanId'>First span</span>
    <p>Simple paragraph</p>
  </div>
);
```

Так выглядит сильно компактнее, и понятнее, не так ли? И действительно, мы пишем разметку в JS.

**ВАЖНО!** Если попробовать просто запустить этот фрагмент кода в браузере - он не будет работать. Нужно преобразовать его в обычный JS-код (этим занимаются Webpack, Babel), и выполнить в браузере.

**ТОЖЕ ВАЖНО!** Внимательные курсанты наверняка заметили, что мы используем странный атрибут `className` вместо привычного нам `class`. Это сделано потому, что слово `class` в `React` зарезервировано, и для обозначения имени класса мы указываем свойство (проп) `className`. О пропсах мы поговорим позже. Пока что запомним, что класс(ы) мы указываем через `className`.

Теперь мы понимаем, в чем преимущества использования JSX.

**Закрепим практикой**
1. Отрисовать внутри нашего div заголовок h1, у которого будет id=`firstHeading`, name=`simpleHeading`, и текст "Привет из мира React!".
2. Добавить в наш `div` инпут с type="text", name="simpleInput", class="simpleInput".
3. Добавить список ul, в котором будет 3 элемента (li). Первый с текстом HTML, второй - CSS, третий - JS.

**Элементы и компоненты в React**
Доселе, мы с вами говорили об элементах в React. Элементы можно рассматривать как самые маленькие строительные кубики, из которых мы составляем наши приложения. В [этой](https://dev.to/mikevarenek/what-is-the-difference-between-element-and-component-in-react-pia) шикарной статейке приведена очень наглядная аналогия. Элементы - это блоки Лего. А компоненты - это инструкции, как из этих блоков собрать нечто осмысленное (например, дом, машину и т.д.).

Пока непонятно. Попробуем уточнить. Еще одним из краеугольных камней идеологии React является разбиение интерфейса на повторно используемые компоненты. Возвращаясь к аналогии с Лего, один и тот же блок может быть применен в составе и дома, и машины, и где-то еще. То есть он - повторно используемый. И вот здесь, в дело вступает понятие **компонент**. Под компонентом, мы будем рассматривать набор инструкций, который делает ФРАГМЕНТ разметки. Некий осмысленный фрагмент, со своими задачами, который состоит из элементов, и/или других компонентов.

Опять же, рассмотрим на примере. Предположим, в приложении нам нужно отрисовать список. Каждый пункт списка содержит текст, и кнопку. Попробуем разбить это на элементы.

Элементами будут текст, и кнопка. А компонентом будет пункт списка. То есть, мы расскажем, как из блоков "текст", "кнопка", собрать нечто осмысленное, под названием "пункт списка".
```
<li className="simpleListItem">
  <p className="listItemText">Текст элемента списка</p>
  <button className="listItemButton">Кнопка элемента</button>
</li>
```

Таким образом, мы создали наш первый КОМПОНЕНТ - то есть нечто, что возвращает нам фрагмент разметки. Обычно, компоненты оформляют как отдельные функции - то есть функции, которые нам возвращают фрагменты конечной разметки. Оформим и мы.

```
function SimpleListItem() {
  return (
    <li className="simpleListItem">
      <p className="listItemText">Текст элемента списка</p>
      <button className="listItemButton">Кнопка элемента</button>
    </li>
  );
}
```

**ВАЖНО!** Имена функций, которые отвечают за компоненты, принято именовать с большой буквы!

И теперь попробуем отрисовать наш элемент списка.
```
root.render(
  <SimpleListItem/>
);
```

Ура, оно отрисовалось! И самое прекрасное - что мы можем повторно использовать наш компонент где угодно в приложении - просто добавим его как тег. Мы "типа" создали свой тег, который делает свой фрагмент разметки.
```
root.render(
  <ul>
    <SimpleListItem/>
    <SimpleListItem/>
    <SimpleListItem/>
  </ul>
);
```

Возможно, мы захотим и список оформить как компонент? Кто знает, может быть...

**ОЧЕНЬ ВАЖНО!**
Любой компонент должен возвращать ОДИН итоговый DOM-узел. То есть,
```
function SimpleListItem() {
  return (
      <p className="listItemText">Текст элемента списка</p>
      <button className="listItemButton">Кнопка элемента</button>
  );
}
```

невалидно, и вызовет ошибку. Мы должны гарантировать, что возвращаемая разметка содержит ОДИН корневой узел, а внутри него можем городить сколь угодно сложную иерархию.

**React Fragment**
В некоторых случаях, нам невыносимо хочется вернуть из какого-нибудь компонента более одного корневого узла, и оборачивать в лишний контейнер не хочется. Тут нам на помощь приходят т.н. фрагменты - это специальные React-компоненты, которые создают несуществующие контейнеры.
```
function SimpleListItem() {
  return (
    <>
      <p className="listItemText">Текст элемента списка</p>
      <button className="listItemButton">Кнопка элемента</button>
    </>
  );
}
```
Пустые угловые скобки - и есть фрагменты.

**Закрепим практикой**
1. Создайте компонент, который будет возвращать разметку параграфа (тег p), с текстом `Simple Paragraph!`. Класс - `simpleParagraph`.
2. Создайте компонент, который будет возвращать div с классом `containerDiv`, и он должен содержать заголовок h2 с текстом `Simple Header`, и поле ввода (инпут) с placeholder='Enter something!'.
3. Создайте компонент, который будет рисовать неупорядоченный список ul из 3 элементов (li), с текстами "Аз", "Буки", "Ведаю".

**Динамика в JSX**
Зачастую, нам мало просто вывести статичную разметку - мы можем захотеть вывести нечто, что будет определять значение во время выполнения кода. Напирмер, брать текущую дату и показывать ее на странице. Или считать какое-то случайное значение. То есть, реальное значение мы определим ТОЛЬКО на этапе выполнения кода.

В JSX для этого есть специальный синтаксис, который позволяет работать с выражениями (динамикой). Чтобы указать, что React сначала должен вычислить результат выражения, и потом подставить его в результирующую разметку, это выражение внутри JSX нужно обернуть в фигурные скобки.

Рассмотрим на примере - мы хотим вывести в тексте параграфа текст переменной.
```
function SimpleParagraph() {
  const value = 'Simple Text!';
  return (
    <p>{value}</p>
  );
}
```

Здесь мы как бы говорим "эй, React, возьми то что указано внутри фигурных скобок, получи значение, а результат подставь в разметку.

Мы также можем компоновать статическую (вне фигурных скобок), и динамическую (в фигурных скобках) части разметки.

```
return (
  <p>The result of 2 + 2 will be {2+2}</p>
)
```

**Закрепим практикой**
1. Работаем с JavaScript в JSX. В наш параграф к существующему тексту нам нужно добавить текущую дату (`new Date()`).
2. Еще работаем с динамикой. Объявим в нашем компоненте `SimpleParagraph` переменную `currentSeason`, и запишем в нее значение `summer` (у нас сейчас лето). Теперь нужно в компоненте параграфа, после текста `Simple Paragrph!` также выводить текст `now is CURRENT_SEASON`.
3. Создайте компонент `RandomText`. Он должен рендерить параграф. Также он должен брать случайное значение, и если оно больше 0.5 - то в параграфе должен быть текст "Less than 0.5", а иначе - "Greater than 0.5".

### Полезные ссылки по занятию:
 - Описание [create-react-app](https://create-react-app.dev/).
 - Свежая [документация](https://react.dev/) по React. Имеет смысл посмотреть "по диагонали", погулять по сайту, и посмотреть на примеры.
 - React [основы](https://react.dev/learn). Рекомендуется просмотреть хотя бы до раздела "Responding to events".