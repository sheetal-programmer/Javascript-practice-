// ---------------- DataTypes ----------------

console.log("Task 1");
{
let name = "Naveen";
console.log(name);
}

console.log("Task 2");
{
console.log(typeof "JavaScript");
}

console.log("Task 3");
{
let age = 22;
console.log(typeof age);
}

console.log("Task 4");
{
let isStudent = true;
console.log(typeof isStudent);
}

console.log("Task 5");
{
let salary;
console.log(salary);
}


// ---------------- Arrays ----------------

console.log("Task 6");
{
let fruits = ["Apple","Banana","Mango","Orange","Grapes"];
console.log(fruits);
}

console.log("Task 7");
{
let fruits = ["Apple","Banana","Mango","Orange","Grapes"];
console.log(fruits[0]);
}

console.log("Task 8");
{
let fruits = ["Apple","Banana","Mango","Orange","Grapes"];
console.log(fruits[2]);
}

console.log("Task 9");
{
let fruits = ["Apple","Banana","Mango","Orange","Grapes"];
console.log(fruits[fruits.length-1]);
}

console.log("Task 10");
{
let numbers = [10,20,30,40,50];
console.log(numbers[1],numbers[3]);
}


// ---------------- Objects ----------------

console.log("Task 11");
{
let person = {
name:"Naveen",
age:22,
city:"Bangalore"
};
console.log(person);
}

console.log("Task 12");
{
let person = {
name:"Naveen",
age:22,
city:"Bangalore"
};
console.log(person.name);
}

console.log("Task 13");
{
let person = {
name:"Naveen",
age:22,
city:"Bangalore",
skills:["HTML","CSS","JS"]
};
console.log(person.skills[1]);
}

console.log("Task 14");
{
let carDetails = {
brand:"Toyota",
model:"Innova",
price:2500000
};
console.log(carDetails.brand);
}

console.log("Task 15");
{
let fruitCategory = {
red:["apple","cherry"],
yellow:["banana","mango"],
green:["kiwi","grapes"]
};
console.log(fruitCategory.yellow[0]);
}


// ---------------- Arithmetic Operators ----------------

console.log("Task 16");
{
let a = 8;
let b = 4;
console.log(a+b);
}

console.log("Task 17");
{
let a = 8;
let b = 4;
console.log(a-b);
}

console.log("Task 18");
{
let a = 8;
let b = 4;
console.log(a*b);
}

console.log("Task 19");
{
let a = 8;
let b = 4;
console.log(a/b);
}

console.log("Task 20");
{
let a = 8;
let b = 4;
console.log(a%b);
}


// ---------------- Exponential Operator ----------------

console.log("Task 21");
{
console.log(3**2);
}

console.log("Task 22");
{
console.log(2**4);
}


// ---------------- Increment / Decrement ----------------

console.log("Task 23");
{
let num = 5;
num++;
console.log(num);
}

console.log("Task 24");
{
let num = 10;
num--;
console.log(num);
}

console.log("Task 25");
{
let x = 6;
let y = x++;
console.log(x,y);
}

console.log("Task 26");
{
let a = 4;
let b = ++a;
console.log(a,b);
}


// ---------------- Assignment Operators ----------------

console.log("Task 27");
{
let value = 10;
value += 5;
console.log(value);
}

console.log("Task 28");
{
let value = 20;
value -= 3;
console.log(value);
}

console.log("Task 29");
{
let value = 6;
value *= 2;
console.log(value);
}

console.log("Task 30");
{
let value = 20;
value %= 3;
console.log(value);
}


// ---------------- Comparison Operators ----------------

console.log("Task 31");
{
console.log(10 == "10");
}

console.log("Task 32");
{
console.log(10 === "10");
}

console.log("Task 33");
{
console.log(15 > 20);
}

console.log("Task 34");
{
console.log(5 <= 5);
}


// ---------------- Logical Operators ----------------

console.log("Task 35");
{
console.log(10 > 5 && 5 > 2);
}

console.log("Task 36");
{
console.log(10 < 5 || 8 > 2);
}

console.log("Task 37");
{
console.log(!(5 === "5"));
}


// ---------------- Ternary Operator ----------------

console.log("Task 38");
{
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");
}

console.log("Task 39");
{
let password = 1;
console.log(password === 1 ? "Login success" : "Wrong password");
}


// ---------------- String Operations ----------------

console.log("Task 40");
{
let firstName = "Spider";
let lastName = "Man";

console.log(firstName + " " + lastName);
console.log('${firstName} ${lastName}');
}


















    </script>
    
</body>
</html>