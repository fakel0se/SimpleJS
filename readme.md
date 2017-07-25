# Фреймворк SimpleJS. 
После подключения фреймворка создается объект Simple, который и содержит всю начинку фреймворка. Фреймворк состоит из 2 частей: данные и функции. 
Каждый из этих участков инициализируется (а в дальнейшем получается) с помощью специальных функций. Функции инициализации: Simple.setFunc(obj) и
Simple.setData(obj), которые принимают в качестве параметров объекты. И геттеры: Simple.getData() и Simple.getFunc().

## Пример кода: 
```
data = { name: "Ilya", surname: "Gubanov" };
func = { 
	getName: function() { console.log(this); return data.name; }, 
	getSurName: function() { return data.surname; } 
}
 
Simple.setData(data); 
Simple.setFunc(func); 

document.body.innerHTML = "<h1>" + Simple.getFunc().getName() + " " + Simple.getFunc().getSurName() + "</h1>"; js
```