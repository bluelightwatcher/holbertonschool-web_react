# holbertonschool-web_react
project is an introduction into type script 


1. Basic Types in TypeScript

TypeScript provides static types on top of JavaScript. Some basic types include:

    number – for numeric values
    string – for text
    boolean – for true/false values
    any – disables type checking
    void – used for functions that return nothing
    null and undefined
    array – written as number[] or Array<number>

Example:

let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = false;
let numbers: number[] = [1, 2, 3];

2. Interfaces, Classes, and Functions

Interfaces define the structure of an object.
Classes allow OOP-style programming in TypeScript.
Functions can be typed with parameters and return types.

Example:

// Interface
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Class implementing the interface
class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const student = new Student("Alice", 22);
console.log(student.greet()); // "Hello, my name is Alice"

// Function with types
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10)); // 15

3. How to Work with the DOM and TypeScript

When working with the DOM, you need to tell TypeScript about the types of HTML elements.

Example:

const button = document.getElementById("myButton") as HTMLButtonElement;

button.addEventListener("click", () => {
  console.log("Button Clicked!");
});

4. Generic Types

Generics allow functions and classes to work with multiple types.

Example:

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // "Hello"

5. How to Use Namespaces

Namespaces help organize code into logical groups.

Example:

namespace Utils {
  export function log(message: string) {
    console.log(message);
  }
}

Utils.log("Hello from namespace!"); // "Hello from namespace!"

6. How to Merge Declarations

Declaration merging allows multiple declarations to combine into a single definition.

Example:

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: "Alice", age: 30 }; // Merging works!

7. How to Use an Ambient Namespace to Import an External Library

Ambient declarations allow TypeScript to recognize external libraries (like jQuery).

Example: (In a .d.ts file)

declare namespace jQuery {
  function ajax(url: string, settings: any): void;
}

Now you can use:

jQuery.ajax("https://api.example.com", { method: "GET" });

8. Basic Nominal Typing with TypeScript

Nominal typing ensures type safety using unique type identifiers.

Example:

type ID = { __type: "ID"; value: string };

function createID(value: string): ID {
  return { __type: "ID", value };
}

const userId = createID("123");
console.log(userId.value); // "123"

Here, ID is a unique type and can’t be confused with a regular string.
