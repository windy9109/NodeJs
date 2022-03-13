import _,{} from 'lodash';
import getType from './getType';
import random from './getRandom';

const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

const a = numbers.map(number => number < 3)
//출력: [true, true, false, false]
console.log(a)


const b = numbers.filter(number => number < 3)
//출력:  [1, 2]
console.log(b)

//출력:  [1, 2, 3, 4]
console.log(numbers)


//.find()
const a1 = fruits.find(fruit =>  /^B/.test(fruit))
// 대문자B로 시작하는 문자데이터(찾으면 종료함)
//출력: Banana
console.log(a1)



//.findIndex()
const b1 = fruits.findIndex(fruit => /^C/.test(fruit))
// 대문자C 로 시작하는 문자데이터(찾으면 종료함)
//출력: 2 (인덱스 위치 반환)
console.log(b1)




//.includes()
//인수로 사용하는 특정 값이 배열에 있는지 검사할때
//결과: false
const c1 = fruits.includes(3)
console.log(c1)

//결과:  false
const c2 = fruits.includes('Heropy')
console.log(c2)

//.push() .unshift()
//원본이 수정됨 주의!

//.push() 맨뒤에 추가함
//결과: [1, 2, 3, 4, 5]
numbers.push(5)
console.log(numbers)

//.unshift() 맨앞에 추가함
//결과: [0, 1, 2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers)


//.reverse()
//원본수정됨 주의!
//순서를 뒤집어버림
numbers.reverse()
fruits.reverse()
//결과: ['Cherry', 'Banana', 'Apple']
console.log(fruits)
//결과: [5, 4, 3, 2, 1, 0]
console.log(numbers)


//.splice() => 특정 index를 지우거나 삽입함
//2번에서 아이템 1개를 지워라
//결과: [5, 4, 2, 1, 0]
numbers.splice(2,1)
console.log(numbers)

//index 2번에서 0개를 지우고 999를 넣어라
//결과 [5, 4, 999, 2, 1, 0]
numbers.splice(2,0,999)
console.log(numbers)

//결과: ['Cherry', 'Banana', 'Orange', 'Apple']
fruits.splice(2,0,'Orange')
console.log(fruits)

const userAge = {
//객체데이터
//key: value
name: 'Heropy11',
age: 85
}

const userEmail = {
    name: 'Heropy22',
    email: 'thesecon@gmail.com'
}
//대상 객체 userAge, 타겟객체 userEmail
const target = Object.assign({}, userAge, userEmail)
//결과: {name: 'Heropy22', age: 85, email: 'thesecon@gmail.com'}
console.log(target)
//결과: {name: 'Heropy11', age: 85}
console.log(userAge)
//결과: true
//같은 장소를 바라보고 있기때문에 true
console.log(target === userAge)


const a3 = { k:123 }
const b3 = { k: 123 }
//결과: false
//다른 장소를 바라보고 있기 때문에 false
console.log(a === b)




const user2 ={
    name: 'Heropy22',
    age: 85,
    email: 'thesecon@gmail.com'
}

const keys = Object.keys(user2)
//결과: ['name', 'age', 'email']
console.log(keys) //key값을 추출함
//결과: thesecon@gmail.com
console.log(user2['email']) //email을 추출함

const values = keys.map(key => user2[key]) 
//반환된값을 받아서 values에 넣는다
//결과:  ['Heropy22', 85, 'thesecon@gmail.com']
console.log(values) //값을 추출함



//구조분해할당(Destructuring assignment)
//비구조화 할당
const user3 = {
    name:'Heropy',
    age: 85,
    email:'qwer123@gamil.com'
}

const { name: heropy3, age, address ='Korea' } = user3
//E.g, user.address



console.log(`사용자의 이름은 ${heropy3}입니다. `+'이름은'+user3['name'])
console.log(`${heropy3}의 나이는 ${age}세 입니다.`)
console.log(`${heropy3}의 이메일 주소는 ${user3.email}입니다.`)
console.log(address) //정의되지않았음 undefined 출력
console.log(user3.address)

const fruits7 = ['Apple','Banana','Cherry']
const [a7,b7,c7,d7] = fruits7
console.log(a7,b7,c7,d7) //d7은 데이터없음 > undefined
console.log(fruits7[0],fruits7[1],fruits7[2],fruits7[3])






//전개연산자(Spread)
const fruits8 = ['Apple','Banana','Cherry','Orange']
console.log(fruits8)
console.log(...fruits8) //배열데이터를 쉼표로 구분하는 각각의 아이템으로 전개해서 출력함
//console.log('Apple','Banana','Cherry')

//개체데이터로 변환해주는 함수
function toObject(a8,b8,...c8){ //...c8 나머지 매개변수 모두 출력
return{
    사과:a8,
    b8, //축약형
    체리오렌지:c8 //나머지매개변수들
    }
}
console.log(toObject(...fruits8))



const toObject2 = (a12,b12,...c12) => ({a12, b12, c12})
//중괄호는 화살표함수에서 함수의 범위를 나타내는 단순한 블럭의 의미이므로
//소괄호를 열어서 객체데이터를 정의한다. ({})

console.log(toObject2(...fruits8))


