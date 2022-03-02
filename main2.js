import _, { countBy, identity } from 'lodash';
import getType from './getType'
import random from './getRandom'

//ES6 Classes

//원시적인방법
// function User(first, last){
//         this.firstName = first
//         this.lastName = last
// }
// User.prototype.getFullname = function(){
//     return `${this.firstName} ${this.lastName}`
// }


//class를 이용한 직관적방법
class User{
    constructor( first, last){ //constructor 에 넣고 관리하면 코드가 더 직관적이다.
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const heropy2 = new User('Heropy22','Park')
const amy = new User('Amy22','Clarke')
const neo2 = new User('Neo22','Smith')


console.log(heropy2)
console.log(heropy2.getFullName())
console.log(amy.getFullName())
console.log(neo2.getFullName())



class Vehicle {
    constructor(name, wheel){
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)


//상속받아 사용
class Bicycle extends Vehicle {
    constructor(name, wheel){
        super(name, wheel)
    }
}
//생성자 만든후 출력
const myBicycle = new Bicycle('삼천리', 2)
const daughterdBicycle = new Bicycle('세발',3)
console.log(myBicycle)
console.log(daughterdBicycle)

//상속받아 확장하여 사용
class Car extends Vehicle{
    constructor(name, wheel, license){ //확장
        super(name, wheel)
        this.license = license //내용추가
    }
}
//생성자 만든후 출력
const myCar = new Car('벤츠', 4, true)
const daughterdCar = new Car('포르쉐',4,false)
console.log(myCar)
console.log(daughterdCar)















