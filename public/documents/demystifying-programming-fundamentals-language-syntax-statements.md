---
title: 'Demystifying Programming Fundamentals: Languages, Syntax, Statements'
subtitle: 'Different types of programming languages based on their levels and type security alongside syntax, generally reserved keywords, statements, and many more.'
date: 'November 03 2022'
---

## Prologue

Learning how to code properly is a vital means of grasping at least the basic fundamentals of programming. Programming is hard especially when the learning habits and experience are also bad. One's journey makes it harder which leads to different issues in making our own source code.

Changing the way we do programming also involves a proper learning habit that we should enforce and adapt.

In this part, I will talk about the different types of programming languages alongside syntax with reserved keywords, and statements. I will tackle each one of the general and high-level concepts which are also mainly present in most programming languages out there.

Learning these concepts makes programming easier as they are fundamentally attached altogether to solving problems by making applications to create solutions. Learning every single one of them could also lead to an easier learning experience in multiple programming languages out there. One of the ways in order to make programming easier to study is to make our hands dirty which, sadly, some people are missing.

### Foreword

This material is not a stand-alone reading to learn about the fundamentals of programming as a whole. It is a simplified blog that tackles the basics. It could be used as a primary or secondary reference for learning them but it's not a stand-alone one.

You could use this with other means of learning such as watching a video, reading other articles, etc. It's good to be supplemented with third-party references. You can also use this to have a quick read about concepts in relatively simplified content.

If you are just starting out, it really doesn't matter to learn all the internal happenings about specific concepts. What really matters is that we know their use cases and we know at least how their work. It's not necessary to immediately learn their total workings in the background.

But if you want, you can explore them on your own as there are tons of references on the web to make your hands dirty with it if you want to play with it. After all, we are different types of learners and nothing's wrong with that.

Studying the fundamentals of programming is also not language-specific. In fact, it is a general concept which means that we can use other programming languages out there when learning it. I suggest you pick those languages that are very popular in the tech industry such as Java, Python, JavaScipt, Rust, Go, etc.

These languages are well-established ones that also have a bright future on top of them. In regards to their setup and installation to get started on your computer, the web is full of tutorials on these. Feel free to search them out to get your hands dirty in no time.

## Language Types

Before we proceed to learn the fundamentals, let's talk about types of programming languages and why at least having a basic understanding of their difference could help us understand more about programming.

There are a lot of programming languages out there and most of them are _open-source_ meaning they are open for the public for modification and usage.

Most of them, in terms of structure, are somewhat similar to each other and there's a chance that we will have to interact in not just one language so having basic knowledge about at least basic distinguishable features that they have is worth learning about.

### Level

In terms of level, languages could be classified as either high or low-level one. What doesn't it mean? Well, the word _level_ here is not just about the difficulty of the learning curve to get started or its usage of it. It is also not just about its superiority over the low-level ones.

Levels, in the context of PLs (or programming languages), point to how the _syntax_, which I will gonna talk about in a moment, is readable or understandable to human programmers. This means that not all languages are readable to us, at least at first glimpse.

Also, the levels describe the background operations a language will take to create or to do an operation commanded by us. This also means the levels describe the amount of _abstraction_ (or basically just means simplicity or complexity) a language provides, generally speaking.

Both these languages have their own pros and cons and we must consider them into account. Mostly, in terms of levels, they are classified into two: high-level and low-level.

#### High

High-level programming languages are considered _high_ due to valuable reasons. High-level languages have their code consisting of English words called _keywords_ which makes them more readable to us and coding with them just like similar to how to write poems - line by line.

These languages, in terms of their background execution, are much simpler than the low levels.

With this regard, we can conclude that coding with this type is much simpler and faster. Writing a bunch of solutions is straightforward since the words that need to use are intuitive.

Generally, it provides a high level of _abstraction_ which aims to lessen the difficulty of creating solutions through PLs. The code base of these PLs is easy to maintain or sustain, debug, refactor, and many other modifications.

PLs of this category are independent of the machine that the code is running from and the focus is only to create source code to solve problems without the emphasis on whether the machine will run it or not. Notable examples are Java, C++, C#, JavaScript, Python, Rust, and many more.

_Simple statement using Java that displays something on the screen_

```
String greeting = "Hello, World.";

// Prints "Hello, World."
System.out.println(greeting);
```

> **Compilers and interpreters** are applications that convert our high-level code into a machine or binary code that CPUs only understand to do a specific task based on the instructions that we've made. They are a _middleman_ whose task is to just translate our code into a series of 0s and 1s. They are specifically crafted in order to do this task to be thrown to our CPU.
>
> In terms of their difference, _interpreters_ convert our code into machine code right when our program or application runs also known as _runtime_ while _compilers_ translates our code into machine code before our program or application runs also known as _compile time_. Interpreters are used by dynamically-typed PLs while the compilers are used by static types which we will talk about in the next part.

#### Low

Low-level programming languages are considered as _low_ due to underlying reasons. Aside from these PLs being the first ones who exist in the early days of computers, the syntax of these languages is highly similar to computer commands.

The background execution of these PLs is also specific and relies on the machine that it is running from which could be simple or complex.

Coding with this level is relatively much more difficult and somewhat time-consuming due to their early implementations. Creating a source code needs to be clarified carefully because aside from they are not that understandable at first, they are specific to their machine.

Generally, the level of _abstraction_ it has are low which makes them albeit complex to use.

The speed and efficiency are one of its great strengths as they directly communicate to the CPU to execute instantly the created code without making any other additional background executions which also makes them for being memory-efficient.

They are also highly controllable for maximizing performance to unlock their powerful potential. Notable examples are Assembly, the machine code itself, and others.

_Simple statement using Assembly that displays something on the screen_

```
org 0x100

mov dx, msg
mov cx, len
mov bx, 1
mov ah, 0x40
int 0x21

mov ah, 0x4c
int 0x21

msg db 'Hello, World.', 0x0d, 0x0a
len equ $ - msg
```

### Typed

Generally, programming languages could classify as being statically or dynamically typed. It also generally refers to the necessity of stating _data types_, alongside _variables_ which we will talk about in a second. Both of these types of languages have their own pros and cons.

That doesn't mean static languages are strict in terms of syntax doesn't mean they are superior compared to dynamic ones and vice versa.

After all, programming languages are just part of the numerous tools to create solutions like applications and it's really up to a programmer (us) how to pick a tool or technology like languages to solve problems suitably.

#### Dynamic

Dynamically-typed languages are considered _loose_ or _flexible_ because stating data types is not required by their own compilers. This also means that _types_ are only known or recognized as the program or application is running or in runtime.

They are made to have the capability of recognizing these types upon execution that skips, ignores, or completely disregards the so-called _type-checking_ (or basically just a way of a language to check the types and values).

The PLs of this type promote flexibility and freedom in their code as they allow us to have complete control of the source code that we are writing.

_Simple statement using C++ that declares variables with data types_

```
string myFullName = "John Rommel Octaviano";
char myMiddleInitial = 'P';
int myAge = 28;
bool isHuman = true;
```

#### Static

Statically-typed languages are considered _strong_ or _strict_ because they tend to require us to state data types on pretty much anything that they are required by their own compilers. This also means that those types are known or recognized before the program or application will run or in compile time.

This is to ensure the correct usage of types in the source code wherever they are needed. They enforce the type-checking and throw errors wherever they encounter inappropriate use-case.

This makes PLs of this type produce a robust code that has a uniform standard of using types in a relatively appropriate manner.

_Simple statement using JavaScript that declares variables without data types_

```
let myFullName = "John Rommel Octaviano";
let myMiddleInitial = 'P';
let myAge = 28;
let isHuman = true;
```

## Syntax

Syntax is defined as _the arrangement of words and phrases to create well-formed sentences in a language_. Well, it makes sense because in programming, writing every piece of code must follow the said syntax of a specific language that we code along.

Not following so mostly will cause exceptions (or basically just another term for errors).

Generally, most languages have their own implementation or defined rules on how to write code based on its structure or contents implemented by their creators.

As programmers, one of our jobs is to write code that follows proper syntax in order to do something through that language. Learning the syntax is language-specific and as we learn more concepts of a language that we code from, the more we have exposed to the different syntax that it supports.

It's progress-based learning you could say.

We need to also ensure reading language official documentation or by just simply researching online about a particular syntax.

The good thing though is that when we are using a well-built IDE or code editor, they have the capability of visualizing incorrect syntaxes that we wrote in which could help us to fix them in a much faster and smart manner.

Generally, the syntax of a particular language is somewhat similar to another one. As we learn more other programming languages, the more we notice that the syntaxes are very similar to each other (at least to most languages that are considered high-level ones).

Just like for example, the syntax of JavaScript and C# is heavily-inspired by the syntax of C and C++. A concept could also be present in a particular language to others ones.

_Different syntaxes for creating just a basic variable for dynamic type and static type languages and sample syntax for creating general structures_

```
<declaration type> <name> = <value>;

<data type> <name> = <value>;

if (condition) {
    <statements>
}

for(<initialization>; <condition>; <initialization modification>) {
	<statements>
}
```

> ### Note
>
> Lastly, when learning the fundamentals of programming, it's also important to note that even though the concepts themselves are not particular to a specific language, meaning it is a general concept most likely applied to the majority of PLs, the syntax on the other hand may vary.
>
> It's important to specifically check the official syntaxes to avoid nasty errors. The web has a very plenty amount of resources so kindly check them out to learn more about a particular language.

### Reserved Keywords

Most programming languages have their own syntaxes represented through the use of English words like _for, do, while, if, else, switch, break, continue_, and many more. These are called _reserved keywords_ and they are mostly not allowed to be used in user-specific use cases such as naming something, etc.

They are _reserved_ and specifically intended for special use cases. Only use them in particular use cases where they are needed.

_A basic use case that shows that these reserved keywords have unique purposes in a particular language like JavaScript_

```
let foo = 'Mamba';
let bar = 'Coco';

if (foo === bar)
console.log('They are both equal!');
else
console.log('They are not equal!');

for (let i = 0; i <= 9; i++) {
console.log(`${foo} & ${bar}!`);
}
```

> ### Note
>
> One important notion to remember is that doesn't mean a language shared a syntax with another language generally means they are completely similar to each other as a whole. There is still some difference between them such as concepts that are not present in one another.
>
> They are generally the same but not at all. All language has their own _unique features_ and we also need to learn those principles in order to grasp them.
>
> The good thing is once we grasp the general principles just like learning the fundamentals itself, adapting to learn other languages became easier and we only need to adjust to those distinct concepts that are present in them.

## Statements and Expressions

Statements are just pieces of code that comprehend specific instructions or tasks that we want to accomplish. They're not producing a value on their own, unlike expressions. They are the pieces of code that hold our entire program together and they provide some sort of _slots_ to be filled by expressions

Expressions on the other hand produce values. Values whether a product of an operation like adding numbers or just a raw value like a number. They fill the so-called _slots_ produced by statements.

They work hand in hand together as part of an entire program or application in order to run. Together, they both formed the big picture of our intended product or solution.

_Basic addition operation as an example of the combination of statements and expressions using Java_

```
int numOne = 43;
int numTwo = 45;
int sum = 0;

sum = numOne + numTwo;
```

### Blocks

They are basically just multiple pieces of statements and expressions grouped or enclosed together, commonly by curly braces to do something. They are just multiple lines of code inside these braces to do tasks. Nothing special. Just a grouped source code and that's what a block or _code block_ is.

Forming single lines or multiple lines together forms and isolating them through braces forms it. They are found and used mostly in other programming fundamentals like structures. They are part of their syntax in most PLs.

_Basic code that determines if the entered year by the user is a leap year or not using C++_

```
int year;

cout << "Enter a year: ";
cin >> year;

if (year % 400 == 0) {
cout << year << " is a leap year.";
}
else if (year % 100 == 0) {
cout << year << " is not a leap year.";
}
else if (year % 4 == 0) {
cout << year << " is a leap year.";
}
else {
cout << year << " is not a leap year.";
}

return 0;
```

#### Conditions

Conditions in real-life and conditions in programming both work the same way. They are statements that produce expressions that make our computer decide whether they _return_ only 2 types of values - true or false. Depending on the returned value, succeeding tasks are gonna be executed aligned to them.

Just think of true or false as _yes or no_ as responses originated from these conditions. This is a way to make computers create decisions based on specific conditions that we created.

And through that decisions, they will do intended tasks according to the results of their decision, which are commonly based on either true or false which makes our programs more dynamic and concise.

Conditions are used in so-called _structures_, which is a concept in programming to do more tasks. They are some sort of _machine_ that creates raw materials to be consumed by other _machines_ like structures for other intended tasks.

_Pieces of code to show the use case of conditions_

```
if (foo == bar)...

while(foo == bar)...

for(int i = 0; foo <= bar; i++)...
```

### Comments

Comments are just texts whose purpose is to basically describe something in our code. Whether explaining something about the value of a variable or indicating the purpose of something, comments should be used moderately.

Their sole purpose is to make our source code easier to read and understand to reduce the difficulty of maintaining or modifying them.

Generally, because of their syntax, they are commonly ignored by compilers or interpreters. We can comment on everything in code like our statements themselves but be mindful of commenting on something to avoid errors.

_Code using Python that solves quadratic equations_

```
# Solve the quadratic equation ax**2 + bx + c = 0

# import complex math module
import cmath

a = 1
b = 5
c = 6

# calculate the discriminant
d = (b**2) - (4*a*c)

# find two solutions
sol1 = (-b-cmath.sqrt(d))/(2*a)
sol2 = (-b+cmath.sqrt(d))/(2*a)

# displays the result
print('The solution are {0} and {1}'.format(sol1,sol2))

```

## Epilogue

And that's it. That's the different types of programming languages alongside what syntax is and reserved keywords. We tackle PL types based on their level which is not basically all about their difficulty. We also tackled their strictness and conciseness as they distinguishable features. Also, we tackled what syntax is and the reserved keywords in a language.

I hope you learned something from this article. Now, you have at least basic ideas about some general ideas in relation to programming in a nutshell. Underlying concepts that matter not just only when starting out but also in the long run. Hopefully, you grow on this blog and continue to learn about them. Thank you and see you at the next one.

---

### _Change is the end result of all true learning._

Leo Buscaglia
