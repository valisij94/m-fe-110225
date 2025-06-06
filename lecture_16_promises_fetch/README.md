# README

## Лекционное занятие №16

### Тема:

Репозитарий содержит материалы по лекционному занятию №16, посвященному работе с сетевыми запросами в JS.

### Разогрев
1. Что выведет код (и в какой последовательности):
```
console.log('First');
setTimeout( () => {
  console.log('Second');
}, 100);
console.log('Third');
```

2. Что выведет код (и в какой последовательности):
```
console.log('First');
setTimeout( () => {
  console.log('Second');
}, 0);
console.log('Third');
```

3. Что выведет код (и в какой последовательности)? Будьте внимательны, задача с подвохом.
```
function simpleFunc() {
  console.log('Hey!');
}
console.log('First');
setTimeout( simpleFunc(), 100);
console.log('Third');
```

4. Что выведет код (и в какой последовательности):
```
const myPromise = new Promise( (resolve) => {
   resolve('Result!');
});

console.log('First');
myPromise.then( res => console.log(res) );
console.log('Second');
```

5. Что выведет код (и в какой последовательности):
```
const myPromise = new Promise( (resolve, reject) => {
   reject('Result!');
});

console.log('First');
myPromise
   .then( res => console.log(res) )
   .finally( () => console.log('Finally') );
console.log('Second');
```


**Сетевые запросы - зачем они нужны**
Сетевые запросы - это способ обмена данными между клиентом и сервером. Обычно в роли клиента мы рассматриваем браузер пользователя. Браузер формирует запросы, а сервер принимает и обрабатывает эти запросы, и если клиент ведет себя хорошо, то формирует ему ответы.

Нас, как фронтенд-разработчиков, интересует только клиент. Работа сервера не входит в наши задачи.

Обмен данными осуществляется по протоколу HTTP (HyperText Transfer Protocol). Протокол - это соглашение о формате обмена, то есть структуре и форме той информации, которой собираются обмениваться стороны. Кроме этого протокола, есть много других - FTP, SMTP, XMPP, и так далее, но в нашей работе нам в основном придется сталкиваться с НТТР.

Чтобы попросить сервер о чем-то (например, дать нам какую-то информацию), клиент должен подготовить и отправить запрос. По сети, запрос дойдет до сервера, а сервер уже сформирует ответ (возможно), и пришлет его клиенту. И задача клиента - обработать этот ответ.

**Какие бывают запросы?**
В НТТР, предусмотрено несколько типов сетевых запросов, которые используются для обмена данными. Вообще их 9 штук, но обычно используется 2-4 метода. Чаще всего, о разных типах запросов говорят в контексте так называемого RESTful API. Это тоже нечто вроде соглашения о формате обмена данными.
 - GET - самый часто используемый запрос. В "приличных домах" используется для получения каких-то данных от сервера. Что-то вроде "просмотр данных".
 - POST - тоже часто используется. Основная цель - модификация/создание каких-то данных (например, отправка заказа. Или изменение заказа). Опять же, в "приличных домах" используется для модификации чего-то, что уже существует на сервере.
 - PUT - используется для создания чего-то на сервере.
 - DELETE - тут все понятно из названия.

Чаще всего, работают с GET, POST. Запросы PUT, DELETE используются значительно реже, а остальные (HEAD, TRACE, OPTIONS, CONNECT, PRI) - это вроде снежного человека, о них все слышали, но никто не видел. Но знать о них надо!

**Отправка простого запроса с клиента**
В JS работа с сетевыми запросами доступна "из коробки", то есть не нужно никаких сторонних библиотек. За всю эту кухню, отвечает метод `window.fetch`, который собственно и отправляет сетевой запрос.

```
fetch(url, [options])
```

Анатомия метода такова: он ожидает от нас как минимум один аргумент `url`, который должен содержать адрес, к которому мы хотим обратиться. Это обычно URL-адрес.

Второй аргумент - это объект настроек, о нем поговорим чуть позже. Он нужен для настроек запроса (неожиданно..).

*ВАЖНО!* По умолчанию (то есть, если не передан `options`, и в нем нет свойства `method`), то `fetch` будет отправлять GET-запрос.

И метод возвращает нам ПРОМИС, который будет или успешно завершен объектом с ответом сервера, или же нештатно завершен той ошибкой, которая произошла при запросе.

Что значит "возвращает промис"? Это значит, что для нормальной работы с результатами запроса, нам нужно работать с ними как с ПРОМИСОМ!!! То есть, через `then`.

```
const fetchedResult = fetch('https://dummyjson.com/products');
fetchedResult.then( response => console.log(response) );
```

И вуаля, в консоли мы получаем ОБЪЕКТ ОТВЕТА (`Response`)! То есть, мы по итогу получили не то, что нам ответил сервер - а "обертку", объект, который содержит много полезной для нас информации, и в том числе - тело ответа (то есть полезную нагрузку, которую сформировал сервер). Чтобы получить эту полезную нагрузку, нам нужно выполнить еще один шаг.

**Получение тела ответа**
Объект ответа содержит тело ответа (то есть нужную нам информацию). Просто так ее не извлечешь - нужно знать, в каком формате нам пришел ответ. В этом нам обычно помогает коллега-разработчик с бэка, который нам говорит, что "я тебе буду присылать данные в формате JSON/XML/BLOB/...". И нам нужно выполнить преобразование тела ответа в этот формат. В нашем случае (рассмотренном выше), нам приходит ответ в формате JSON - а соответственно, надо попробовать его преобразовать в JSON. Для этого, у интерфейса `Response` есть метод `json()`, который попробует преобразовать содержимое ответа сервера в нормальный JS объект, с которым можно будет работать. Этот метод нам тоже возвращает ПРОМИС!!! То есть с его результатом мы также работаем через `then`. И вот теперь пришла пора вспомнить о цепочках промисов!

```
const fetchedResult = fetch('https://dummyjson.com/products');
fetchedResult.then( response => response.json() ) // дожидаемся ответа сервера, и просим преобразовать в json
             .then( parsed => console.log(parsed) ); // дожидаемся результата преобразования, и выводим ответ в консоль
```

**Закрепим практикой**
1. Пишем первый сетевой запрос. Нужно обратиться к адресу `https://dummyjson.com/products/categories`. В ответ придет JSON с массивом категорий товаров. Нужно дождаться результата, преобразовать его в JS-объект, дождаться  результата преобразования, и вывести в консоль.
2. Добавьте на кнопку с текстом "Request products" обработчик события клика, который запустит запрос по адресу `https://dummyjson.com/products`. Этот запрос вернет JSON, который содержит объект с данными товаров. Преобразовать его в JS-объект, дождаться результата, и вывести результат в консоль.
3. Поработаем с результатами плотнее. Доработайте решение задачи 2, чтобы в консоль выводился не весь объект, а длина массива `products` (это свойство этого объекта).
4. Задача со звездочкой. Напишите функцию `makeJsonRequest`. Она должна принимать адрес, к которому хотим обратиться. Далее, функция делает запрос по этому адресу, дожидается ответа, преобразовывает результат в JSON. Нужно сделать так, чтобы "снаружи" функции мы могли бы получить доступ к этому результату. Подсказка: функция должна быть асинхронной, соответственно, надо подумать над тем, что она нам вернет.

**Данные объекта ответа**
Теперь поговорим о тех данных, которые нам предоставляет объект ответа. У него много всего полезного, но чаще всего нас будут интересовать 3 свойства:
 - `status` - число, которое содержит HTTP-статус ответа. О них чуть позже.
 - `statusText` - текстовый статус
 - `ok` - это boolean-значение, которое содержит `true` если статус ответа в диапазоне от 200 до 299, и `false` - если иначе.

Подробнее о статусах. Сервер должен при формировании ответа "прилепить" к нему какой-нибудь статус, чтобы клиент понял, все ли хорошо. А если нехорошо - то почему. Существует конечный перечень "общепринятых" статусов ответов, но можно добавлять и свои. Рассмотрим диапазоны наиболее часто используемых статусов.
 - 100-199 - информационные статусы, зачастую говорят о том, что надо сделать еще один запрос для получения уже информации
 - 200-299 - все хорошо, успех
 - 300-399 - редиректы (то есть, запрос был перенаправлен). Из этого не следует, что все плохо (зависит от договора с разработчиками серверной части).
 - 400-499 - ошибка клиента. То есть, сервер принял наш запрос, но не понимает что мы от него хотим, или не хочет нам отвечать. Например, потому что у нас нет прав на просмотр этой информации. Или потому что запрос непонятен серверу. Или такая информация не найдена. И т.д.
 - 500-599 - ошибка сервера. Сервер не смог даже принять наш запрос, или при обработке запроса сервер им "подавился". Например, при запросе в БД произошла ошибка установки соединения.

Таким образом, мы можем считать что все хорошо, если статус ответа 200-299. Возможно все хорошо при статусах 300-399. Но 400+ - уже не есть хорошо.

Чем это может нам помочь? Тем, что мы сможем обработать такую ситуацию, и наше приложение не сломается, а "культурно" покажет клиенту причину того, что запрос не удался, и возможно порекомендует, что ему делать. Например, обратиться в поддержку. Или авторизоваться. Или постучать в бубен.

Как это используется? При обработке результатов запроса, если статус вне диапазона 200-299 (или `!response.ok`), мы можем, например, открыть модальное окно. Приличные сервисы обычно кроме нехорошего статуса могут вернуть и JSON с пояснением причины, так что это тоже может быть использовано для того чтобы полнее обрисовать пользователю картину.

```
fetch('https://BAD_URL_DO_NOT_COPY.com')
   .then(resp => {
      if (!resp.ok) {
         throw new Error('Something went wrong in the request!');
      }
      else return resp.json();
   })
   .then(result => console.log('Everything is OK!', result));
```

**Закрепим практикой**
1. Написать блок кода, который будет обращаться к адресу `https://dummyjson.com/products`, и выведет в консоль НТТР-статус ответа.
2. Доработать нашу функцию из п.4 предыдущего блока практики - теперь она, в случае нехороших статусов, должна уведомлять вызывающий код о нештатной ситуации (пусть это будет ошибка с тестом "Wrong request, try again!"). Задача к обсуждению.

**Отправка запросов с параметрами**
Зачастую, нам мало просто отправить запрос. Нам нужно еще передать какие-то параметры. К примеру, мы хотим получить не весь список товаров, а информацию о конкретном товаре. В этом случае, нам нужно передать идентификатор этого товара. Конечно, какие конкретно параметры передавать в запросе - это нам скажут разработчики бэка. Но давайте пока рассмотрим саму возможность.

Параметры можно передавать или в адресе запроса (т.е. прямо в УРЛе), или в теле запроса, в виде полезной нагрузки.
`GET`-запросы предназначены для того, чтобы передавать параметры в адресе. Параметры "приклеиваются" к адресу в виде пар "ключ=значение". Разделитель адреса и строки параметров - символ "?". Разделитель пар - символ "&".

```
const paramsInUrl = 'https://www.myurl.com?param1=value1&foo=bar&some=5
```

В примере выше мы видим, что обращаться мы будем на адрес https://www.myurl.com. При этом, мы передадим 3 параметра, param1, foo, some.

В случае, если параметры запроса нужно передать в теле запроса, используем `POST`, `PUT` запросы.

**Отправка POST-запросов**
Чтобы отправить не-GET запрос, нам нужно вспомнить о втором аргументе `fetch`. Это объект, который содержит настройки запроса. И этот объект может содержать свойства `method`, `body`.
 - method - сюда запишем метод запроса (GET - по умолчанию)
 - body - тело запроса

Что писать в тело запроса - опять же, зависит от договора с разработчиками бэка.

Разберем на примере. Сервис `dummyjson.com` предоставляет нам возможность поиграться с запросами. Посмотрим описание их документации `https://dummyjson.com/docs/products#products-add`. Там приведен пример запроса:
```
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);
```

Обратите внимание на наличие объекта с настройками запроса. В тело запроса (свойство body), мы пишем строку, которая содержит сериалозванный объект. Тут есть еще свойство `headers` - это заголовки запроса, служебная вспомогательная информация.

**Закрепим комплексной практикой**
1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://dummyjson.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
2. Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же.
3. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://dummyjson.com/products/category/ИМЯ_КАТЕГОРИИ`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.productsContainer`).  ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим с помощью функции `renderProduct`, она умеет создавать DOM-элемент, но нужно его еще добавить в контейнер.
4. Дорабатываем функцию `getProducts`. Нужно добавить рассмотрение случая, когда у нас не задана категория (хотим запросить все товары). Нужно сделать так, чтобы, если в аргументе не передана категория, то запрос шел на адрес `https://dummyjson.com/products`.
5. Добавляем обработчик события `change` на наш `select`. При событии, нам нужно вызывать функцию из п.12 с соответствующей категорией - т.е. мы рисуем список товаров выбранной категории.
6. Добавляем "иконку загрузки" на нашу страницу. Добавляем перед нашим `select` контейнер (`div.loader`) с текстом "Подождите, идет загрузка...". По умолчанию он скрыт (`display: none`). Нам нужно показывать этот блок при начале запроса списка товаров, и скрывать, когда список товаров успешно загружен.

### Полезные ссылки
 - [Справочник](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) статусов НТТР. НЕ УЧИТЬ! Использовать как справочник!
 - Спецификация [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) на MDN - англоязычная.
 - Русскоязычный гайд по отправке [POST-запросов](https://learn.javascript.ru/fetch#post-zaprosy).