let id:number = 5
let sentence = 'This is my first typescript'
let isTrue = true
let x:any = "Hello"

//Array
let ids:any = [1,2,'name',true,1.2345]

//Tuple
let person: [number,string,boolean] = [1,'name',true]

//Tuple Array
let employee: [number, string][]
employee =[
    [1,'name1'],
    [1,'name3'],
    [1,'name2'],
]

//Union
let people: string | number

people = '2'
people = 2

//Enum
enum Direction1{
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Object
type User ={
    id: number,
    name:string,
}

//Type Assertion
let cid: any = 1
let customerId = <number>cid // or cid as number

//Function
function addNum(x:number,y:number): number{
    return x + y
}

//void
function log(message: string | number): void{
    console.log(message)
}

//Interfaces
interface UserInterface {
    id:number
    name:string
    age?: number //optional property
}

const user1: UserInterface = {
    id:1,
    name: 'John',
}

//Interface With Function
interface MathFunc{
    (x: number, y:number): number

}
const add: MathFunc =( x:number,y:number):number => x + y
const sub: MathFunc =( x:number,y:number):number => x - y


interface PersonInterface {
    id:number
    name:string
    register(): string
}

//Classes

class Person implements PersonInterface{
    id:number
    name:string

    constructor(id: number, name:string) {
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered. `
    }
}

class Employee extends Person{
    position: string

    constructor(id:number,name:string, position:string) {
        super(id,name)
        this.position = position
        
    }
}
const mk = new Person(1,'mongkol')
console.log(mk.register())

const emp = new Employee(3,'Mouygech','Girlfriend')
console.log(emp.register())

// Generics

function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,4,5])
let strArray = getArray<string>(['John Doe', 'Alice', 'Tom'])

strArray.push('hello')

