let array = [];


let string = "";

let number = 12;

let functionExample = function(param){
    console.log(param)
}

let object = {
    name:'santi',
    age:30
};

function setObjectValues(key,value){
    object[key] = value;
}


function Student(course,name){
    Person.call(this,name);
    this.course = course;
}

function Teacher(salary,name){
    Person.call(this,name);
    this.salary = salary;
}

function Person(name){
    this.name = name;

}

const teacher = new Teacher(100000,'J');
const student = new Student(2,'S');

console.log(teacher);
console.log(student)
