var container = document.querySelector('.container');
var btn = document.querySelector('.btn');

btn.onclick = function (event) {
    // event.preventDefault();
    // console.log(event);
    // container.innerHTML += '<p>Test</p>';
    var p = document.createElement('p');
    var content = document.createTextNode('hello');
    p.appendChild(content);
    container.appendChild(p);

};

var p = {
  name:"Vasya",
  age:23,
  address:{
      city:"Haifa",
      street:"Herzel"
  },
  sayHello: function () {
      console.log("hello");
  },
  toString: function () {
      console.log(this.name + " " + this.age);
  }
};

console.log(p.name);
p.sayHello();
console.log(p);
p.phone = "123456789";
p.toString();


// for(var key in p){
//     console.log(key);
// }

var employee = {
    salary:1000
};

employee.__proto__ = p;
console.log(employee);
console.log(employee.name);

function Person(name,age,phone) {
    this.name = name || 'NoName';
    this.age = age || 0;
    this.phone = phone || 'NoPhone';
    this.sayHello = function () {
        console.log("hello");
    }
}

var p1 = new Person('Vasya',23,'123456');
console.log(p1);

function Employee(salary) {
    this.salary = salary;
}

Employee.prototype = new Person();
var empl = new Employee(2000);
empl.name = "Petya";
console.log(empl);
console.log(empl['salary']);
var arr = ['Vasya','Petya','Sofa'];
console.log(arr);
console.dir(container);


Array.prototype.addSymbol = function (s) {
    for(var i in this){
        this[i] = this[i] + s;
    }
};

arr.addSymbol("Hello");
console.log(arr);
