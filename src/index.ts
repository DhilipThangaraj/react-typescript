//Basic Types

let id: number = 10;

let company: string = "Heisan tech";

let isPublished: boolean = true;

let x: any = "hello";

x = true;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "hello"];

//tuple
let person: [number, string, boolean] = [1, "dhilip", true];

//tuple array

let employee: [number, string][];

employee = [
  [1, "dhilip"],
  [2, "kumar"],
  [3, "dhilip kumar"],
];

//union
let pid: string | number;

pid = "22";

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Right);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Left);

//Object

type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: "dhilip",
};

//Type Assertion

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

customerId = 100;

//Functions
function addNum(a: number, b: number): number {
  return a + b;
}

console.log(addNum(1, 2));

//void -- no return
function getMessage(message: number | string): void {
  console.log(message);
}

console.log(getMessage(1));
console.log(getMessage("one"));

//Interfaces

interface UserInterFace {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterFace = {
  id: 1,
  name: "dhilip",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//classes
interface PersonInterFace {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterFace {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} got registered with us`;
  }
}

const dhilip = new Person(1, "dhilip");
const kumar = new Person(2, "kumar");

//dhilip.id = 101;

console.log(dhilip, kumar);
console.log(dhilip.register());

//Sub class
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(121, "Dhilip Thanga", "Senior Developer");

console.log(emp);

//Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "dhilip"]);

numArray.push("Hello");

console.log(numArray);

//i want to push the same data type in a array not others
function getArray1<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray1 = getArray1<number>([1, 2, 3, 4]);
let strArray1 = getArray1<string>(["brad", "dhilip"]);

// numArray1.push("Hello"); - will get error

console.log(numArray1);
console.log(strArray1);
