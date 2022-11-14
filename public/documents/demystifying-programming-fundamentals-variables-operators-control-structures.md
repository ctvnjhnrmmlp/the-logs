---
title: 'Demystifying Programming Fundamentals: Variables, Operators, Control Structures'
subtitle: 'Fundamental building blocks that one must give emphasized first who is just getting started on learning how to code.'
date: 'November 04 2022'
---

## Prologue

In my experience, I learned that skipping the basics and proceeding all along to the application of certain technologies (such as programming language) to create something that could make sense is hard.

Missing the basics also could lead to a lack of foundation which is a building block of intermediate to advanced concepts. Sure, learning by doing is great for some people but skipping the starting notions in order to start something out is also an important thing worth looking at.

In this part, I will talk about the core concepts of programming. That is what are variables alongside their data types, different types of operators in programming, kinds of structures crucial for grouping our source code, and other basics.

I will share fundamental concepts of programming by making them simple and concise over the hood just to make things more brain-friendly.

These are the fundamental building blocks that must give emphasized first to everyone who is just getting started on learning how to code. And without further ado, let's get started.

### Foreword

This material is not a stand-alone reading to learn about the fundamentals of programming as a whole. It is a simplified blog that tackles the basics. It could be used as a primary or secondary reference for learning them but it's not a stand-alone one.

You could use this with other means of learning such as watching a video, reading other articles, etc. It's good to be supplemented with third-party references. You can also use this to have a quick read about concepts in relatively simplified content.

If you are just starting out, it really doesn't matter to learn all the internal happenings about specific concepts. What really matters is that we know their use cases and we know at least how their work. It's not necessary to immediately learn their total workings in the background.

But if you want, you can explore them on your own as there are tons of references on the web to make your hands dirty with it if you want to play with it. After all, we are different types of learners and nothing's wrong with that.

Studying the fundamentals of programming is also not language-specific. In fact, it is a general concept which means that we can use other programming languages out there when learning it. I suggest you pick those languages that are very popular in the tech industry such as Java, Python, JavaScipt, Rust, Go, etc.

These languages are well-established ones that also have a bright future on top of them. In regards to their setup and installation to get started on your computer, the web is full of tutorials on these. Feel free to search them out to get your hands dirty in no time.

## Variables

What the heck are these variables and why they are important in programming? Variables in programming and in mathematics are similar. They basically just store a value that could be used for different crucial operations.

But unlike in mathematics, variables could store not just numbers. They could be characters, series of characters (or called strings in programming), booleans (just only true or false), and any other _thing_ that could be stored for further operations.

Variables could also store references to a specific _thing_ or _entity_ in programming. Such references mean that variables hold the _entity's_ information crucial for accessing them. Values are also called _literal_ or just simply data in some contexts.

Under the hood, it's also important to note that variable values are stored in the memory of a computer they are running from just like other things in programming.

_Simple variable declarations in Python_

```
myFullName = "John Rommel Octaviano"
myMiddleInitial = 'P';
myAge = 20;
isHuman = true;
```

Accessing or reading the values that a variable stored could be used for different operations such as multiplication and division if the said value is a number. The same goes for strings.

We can do string manipulation (or just basically modification) like converting them to uppercase. Storing values in a variable is one of the often practices that we must fully and properly be utilizing of. Storing and retrieving values should also use moderately.

In some instances, the usage of variables is not necessary at all. In fact, we can still do some operations to do our aimed task. But variables make these operations much easier by reducing repetitions like duplicating code.

Variables are also crucial in operations where values need to be stored in order to achieve a specific operation to keep track of something which then the result of it that is stored in that variable and is also to be used for further operations, and so on.

_A source code for solving the roots of a quadratic equation that shows the importance of variables in storing values in such small use cases_

```
double a;
double b;
double c;
double determinant;
double root1;
double root2;

a = 2.3;
b = 4;
c = 5.6;
determinant = b * b - 4 * a * c;

if (determinant > 0) {
  root1 = (-b + Math.sqrt(determinant)) / (2 * a);
  root2 = (-b - Math.sqrt(determinant)) / (2 * a);
} else if (determinant == 0) {
  root1 = root2 = -b / (2 * a);
} else {
  double real = -b / (2 * a);
  double imaginary = Math.sqrt(-determinant) / (2 * a);
}
```

### Constants

Constants are just special types of variables that cannot be updated or prohibited from changing once we declared them. Since these variables cannot be changed, operators like Assignments and Increment/Decrement will not work, and using them with constants could lead to errors.

They are only available for reading or accessing their value for specific purposes. It's also just a programming representation of absolute variables in Math like the Pi, Golden ratio, Euler's number, and many more.

### Identifiers

Identifiers are just another term for _the name_ of something in our code. In programming, most concepts like variables, functions, objects, arrays, and others are needed to become known by putting names.

Such names that we created are used for their references and specific purposes when we need to interact with them like creating, reading, and updating their values.

Conventionally, identifiers must become readable like putting a concise name in relation to their value. They must also a valid by following a specific language's official syntax just like not using a reserved keyword.

I highly suggest that we must check the language syntax for creating identifiers when creating one to avoid errors. Conventions like PascalCase, camelCase, and kebab-case are the most commons to use.

### Data Types

Since variables could store values like strings, numbers, and booleans, these variables could also be regulated on what type of data or literal they could store. In static languages like Java & C#, stating data types in variables is highly enforced upon declaration. Not doing so could cause exceptions.

_Simple statements using C# that declare variables with data types_

```
string myFullName = "John Rommel Octaviano";
char myMiddleInitial = 'P';
int myAge = 20;
bool isHuman = true;
```

On the side of dynamic languages like JavaScript and Python, stating data types are not necessary. The compiler (or basically just an application that converts our code into a series of 0s and 1s that only our CPU understands to execute our desired operations) is not enforcing these kinds of declarations (or basically just creating but not storing anything).

_Simple statements using Python that declare variables without data types_

```
myFullName = "John Rommel Octaviano"
myMiddleInitial = 'P'
myAge = 28
isHuman = true
```

Just think of data types like just a marking that states that a particular variable could only accept a value depending on the data type that is stated. Not following these markings by means of not storing a number in a String could cause errors. A protocol must be followed.

**int** - for integers of the whole number

**float** - for numbers that have a floating point value

**double** - for numbers that have floating point value in which the range or limit of this data type that a variable can accept is much higher than the float

**long** - for integers of the whole number in which the range or limit of this data type that a variable can accept is much higher than int

**char** - for a single character

**String** - for the sequence of characters

**boolean** - for values true or false

_Simple statements using Java that declare variables with data types_

```
String myFullName = "John Rommel Octaviano";
char myMiddleInitial = 'P';
int myAge = 20;
float myBatteryLevel = 90;
double myTemperature = 35.7;
long myCellCount = 30,000,000,000,000;
boolean isHuman = true;
```

and many more. These are the common and general types that most programming languages present particularly the strongly-ones. There are also data types for specific entities like arrays (basic storage for values), and many more.

In fact, we could also create our own types (this is called _Generics_ in programming, an advanced concept).

#### Simple (Primitive) and Composite (Reference)

Variables have also kinds of their own. It could be simple or composite. A variable could be considered as simple if the data type that is used to create or declare it is using built-in data types. Those are types that are naturally provided by the language itself.

Simple types are also called _primitives_ which used primitive data types of a specific language. Basically, they directly stored the actual value. In which, a simple or primitive variable literally represents the actual literal itself.

Meanwhile, composite ones are basically just the complete opposite. Those are the variables that used created types by the programmer itself. In most languages, we can create our own types. They are also called _reference_ types.

Reference variables commonly do not directly store the actual value itself but the _reference_ or just basically a piece of information of the actual value's location in the memory.

It's a kind of intermediate topic but as your progress succeeds, you will know more about them and their importance in writing code.

## Operators

Storing different values and literal is good. But we need to do something about them in order to consume or use them depending on the specific use case that we aim for. Good thing is, just like in Mathematics, there are operators.

Fundamental operators in mathematics and some programming operators shared concepts between them.

These are the general operators which are generally common across different PLs (programming languages) out there. Some operators could also mean different in other language syntaxes for unique operations. They are also part of their own unique features.

### Arithmetic

**Addition operator (+)**
add number types. It could also be used to concatenate (or just basically just combine) non-string types to string types in most languages.

**Subtraction operator (Subtract) (-)**
subtract number types. It could also use to indicate negative numerical.

**Multiplication operator (\*)**
multiply number types.

**Division operator (/)**
divide number types.

**Modulo operator (%)**
it computes the remainder of number types.

_Simple statements using JavaScript that perform different basic computations and storing their values on different variables_

```
let numOne = 23;
let numTwo = 24;
let sum;
let difference;
let product;
let quotient;
let remainder;

sum = numOne + numTwo; // 47
difference = numOne - numTwo; // -1
product = numOne * numTwo; // 552
quotient = numOne / numTwo; // 0.95833333333
remainder = numOne % numTwo; // 0
```

### Logical

**AND (&&)**
returns true if both the _conditions_ on the left and right are true

**OR (||)**
returns true if at least one _condition_ on either left or right is true

**NOT (!)**
flips the boolean value of a _condition_ or a value

_Simple statements using Java that perform different basic operations by using logical operators between 2 boolean values and printing their results_

```
boolean booleanOne = true;
boolean booleanTwo = false;

System.out.println(booleanOne && booleanTwo); // false
System.out.println(booleanOne || booleanTwo); // true
System.out.println(!booleanOne); // false
System.out.println(!booleanTwo); // true
```

### Relational

**Equals to (==)**
returns true if both _condition_ or value are equal

**Not equals to (!=)**
returns true if both _condition_ or value are not equal

**Greater than (\>)**
returns true if the value on the left is bigger than the right

** Less than (<)**
returns true if the value on the left is smaller than the right

**Greater than or equal to (\>=)**
returns true if the value on the left is bigger than or equal to the right

**Less than or equal to (<=)**
returns true if the value on the left is smaller than or equal to the right

_Simple statements using Python that perform different basic comparisons of numbers by using relational operators between integer numbers and printing their results_

```
numOne = 56
numTwo = 33

print(numOne > numTwo) # True
print(numOne != numTwo) # True
print(numOne > numTwo) # True
print(numOne < numTwo) # False
print(numOne >= numTwo) # True
print(numOne <= numTwo) # False
```

### Assignment

**Assignment (=)**
assigns the value of the right variable to the left variable

**Add and assign (+=)**
increase by adding the value of the left variable from the right variable

**Subtract and assign (-=)**
decrease by adding the value of the left variable from the right variable

**Multiply and assign (\*=)**
increase by multiplying the value of the left variable from the right variable

**Divide and assign (/=)**
decrease by dividing the value of the left variable from the right variable

_Simple statements using C++ that perform different basic comparisons of a number by using assignment operators and printing its final result_

```
int numOne = 28;

numOne += 5; // 33
numOne -= 4; // 29
numOne *= 7; // 203
numOne /= 2; // 101

cout << numOne; // 101
```

### Increment/Decrement

**Post-increment (x++)**
increase the value of the variable by 1 after using the value

**Pre-increment (++x)**
increase the value of the variable by 1 before using the value

**Post-decrement (x--)**
decrease the value of the variable by 1 after using the value

**Pre-increment (--x)**
decrease the value of the variable by 1 before using the value

_Simple statements using Java that perform different basic modifications of a number by using increment/decrement operators and printing its final result_

```
int numOne = 28;

numOne++; // 28
++numOne; // 30
numOne--; // 30
--numOne; // 28

System.out.println(numOne); // 28
```

## Control Structures

Writing code with operators and variables is relativity good enough for selected operations. But most of the time, we need additional tools to meet certain functionalities that our app needs. We need more tools to perform tasks that can do the heavy lifting for us in meeting our specific needs in code.

And this is where _control structures_ in programming came to work. They are crucial and not just optional tools to consider. Just like operators, there are structures that are not present in one language and that is part of learning some adjustments when jumping from one language to another.

But, the good thing is there are general structures that most languages are common for.

### Selection

Serves as a _gate_ on what code will be run. Since it's like a _gate_, the only way to open them is to have a true _key_, literally. Or a condition evaluates to TRUE.

**Single Alternative (if)**
Statements will be done or executed when a _condition_ is met, evaluated, or equal to TRUE. Otherwise, meaning if the condition will become equal to FALSE, then nothing happens.

_An if statement checks if the value of a variable is equal to something through a conditional in JavaScript, in which if the checking is true, it will print something, otherwise, nothing happens_

```
let foo = "foo";

if(foo === "foo") {
  console.log("foo!"); // Prints this if true
}
```

**Double Alternatives (if-else)**
Statements will be done or executed when a condition is met, evaluated, or equal to TRUE. Otherwise, meaning if the condition will become equal to FALSE, then the alternative statements will be executed.

_An if statement checks if the value of a variable is equal to something through a conditional in JavaScript, in which if the checking is true, it will print something, otherwise, it prints something else_

```
let foo = "foo";

if(foo === "foo") {
  console.log("foo!"); // Prints this if true
} else {
  console.log("bar!"); // Prints this if false instead
}
```

**Multiple Alternatives (if-elseif-else)**
Statements will be done or executed when a condition is met, evaluated, or equal to TRUE. But, if the condition returns FALSE, succeeding conditions will be checked until a condition is evaluated to TRUE, and statements inside of that will be executed. Finally, if all those succeeding conditions are all evaluated to FALSE, meaning none of them happens, then the statements in the final block will be executed.

_An if statement checks if the value of a variable is equal to something through a conditional in JavaScript, in which if the checking on the first condition is true, it will print something, otherwise, it will check the next conditions and print something else if true but if all conditions are false, print the last one_

```
if(foo === "bar") {
  console.log("bar!"); // Prints this if true
} else if(foo === "foobar") {
  console.log("foobar!"); // Prints this if false instead
} else {
  console.log("foo!"); // Prints this if everything else is false
}
```

### Repetition

Serves as a _wheel_ that continues to spin or run our code repeatedly. Since it's like a _wheel_, the only way to stop them is to have a false _handbrake_, literally. Or until a condition returns FALSE.

**Repeat-While**
Before statements will be run, a condition is first evaluated and if the result is equal to TRUE, code will be run. After the execution, it will back at checking the condition again and it will run again and again until the condition becomes FALSE.

_A basic while loop in Java that prints all numbers within the starting and ending range_

```
int counter = 1;

while (counter <= 10) {
  System.out.println(counter);
  counter++;
}
```

**Do-Repeat-While**

Statements will be run first before checking the condition. After checking and the result was TRUE, it will run again the code and back at checking again. It will run again and again until the condition becomes FALSE. Unlike while loops, do-whiles are expected to run at least once.

_A basic do-while loop in Java that prints all numbers within the starting and ending range_

```
do {
  System.out.println(counter);
  counter++;
} while(counter <= 10);
```

**Repeat-For**

This structure also works under the hood like while loop but they have their own major difference. In for loop, iteration or number of times the code will run is known before the execution while the iteration is not known in a while loop.

The code in here will run on a known time while the while loop is not. The other differences are most commonly language specific.

_A basic for loop in Java that prints all numbers within the starting and ending range_

```
for(int counter = 1; counter <= 10; counter++) {
  System.out.println(counter);
}
```

## Epilogue

And there you have it. That's some of the different concepts of programming categorized as fundamental. We tackled variables alongside what constants, and identifiers are, alongside data types and their subtypes for basically just storing variables. We also learned more about different operators from arithmetic to increments and decrements to solve create calculations and execute crucial tasks. Lastly, we also talked about different control structures that make our applications much more smarter.

I hope you learn more about the basics of programming. Now, you have at least basic ideas about some general concepts in relation to programming at least in simple terms. Concepts that are fundamentally crucial in making real-world applications. Feel free to learn more about them as your progress grow. Thank you and see you at the next one.

---

### _Recipes tell you nothing. Learning techniques is the key._

Tom Colicchio
