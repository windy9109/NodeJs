import _, { countBy, identity, replace } from 'lodash';
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






//JS 데이터

//String: "",'', ``
//Number
//Boolean: true, false
//undefined
//null
//Array: []
//Ojbect: {}



const result = 'Hello world!'.indexOf('Heropy')
console.log(result)
//일치하는 숫자가 없으면 -1을 반환
//String.prototype.indexOf()


//공백포함 카운트
const str ='0123'
console.log(str.length)
console.log('34 2453'.length)

//-1
console.log(str.indexOf('world'))

//boolean => false
console.log(str.indexOf('world') !== -1)


const str2 = 'hello world!'
console.log(str2.slice(6,11))

//해당하는 위치를 찾아서 두번째 인수로 대체시켜버림
console.log(str2.replace('world!', 'HEROPY'))


const str3 = 'windy9109@naver.com'
//정규표현식
//match는 정규표현식을 비교하여 반환함
console.log(str3.match(/.+(?=@)/)[0])



//공백제거
const str4 = '      Hello world      '
console.log(str4.trim())



