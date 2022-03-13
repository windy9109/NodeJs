<<<<<<< HEAD
//데이터 불변성(Immutability)
//원시데이터: String, Number, Boolean, undefined, null
//참조형 데이터: Object, Array, Function
//------------------------------------------------------------------
//|1:       |2:        |3:         |4:
//------------------------------------------------------------------


//참조형: 불변성이 없음. 데이터가 동일해도 새로운 메모리에 할당됨
let a = { k:1 }
let b = { k:1 }
console.log(a,b,a === b) //false
a.k = 7
b = a //b를 a와 같은 곳을 바라보게함
console.log(a,b,a === b) //true
a.k = 2
console.log(a,b,a === b) 
let c = b
console.log(b,c, a === c)
a.k = 9
console.log(a,b,c,a === c) //true

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['qwe@naver.com']
}



const copyUser = Object.assign({}, user) //복사
console.log(copyUser === user) //false

user.age = 22
console.log('user',user)
console.log('copyUser',copyUser)

console.log('------')
console.log('------')



//얕은복사(Shallow copy), 깊은복사(Deep copy)
const user2 = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
const copyUser2 = {...user2} //전개연산자로 복사
console.log( copyUser2 === user2 ) //false
user2.age = 22
console.log('user',user2)
console.log('copyUser',copyUser2)

console.log('------')
console.log('------')

user2.emails.push('qwer123@naver.com')
console.log(user2.emails === copyUser2.emails) //true
console.log('user',user2)
console.log('copyUser',copyUser2)

=======
// 구조 분해 할당 ( Destructuring assignment )
// 비구조화 해당

const user = {
    name: 'Heropy',
    age: 85,
    email: 'qwe123@naver.com'
}

const { name: heropy2, age, email, address='Korea' } = user
//E.g, user.address

//const heropy = name

console.log(`사용자의 이름은 ${heropy2}입니다.`)
console.log(`${heropy2}의 나이는 ${age}세 입니다.`)
console.log(`${heropy2}의 이메일 주소는 ${email}입니다.`)
console.log(address)

//출력: Apple Banana Cherry undefined
const fruits = ['Apple','Banana','Cherry']
const [a,b,c,d] = fruits
console.log(a,b,c,d)

//출력: Apple Banana
const [a1,b1] = fruits
console.log(a1,b1)

//출력: Cherry
const [, , b2] = fruits
console.log(b2) 



//전개연산자(Spread)

const fruits2 = ['Apple','Banana','Cherry', 'Cherry2']
//출력: ['Apple', 'Banana', 'Cherry']
console.log(fruits2)
//출력: Apple Banana Cherry
console.log(...fruits2)

//console.log('Apple','Banana','Cherry')
//람다***
toObject = (a, b, ...c) => ({ a:a, b:b, c:c })
//function***
// function toObject(a, b, ...c){  // a,b 이후의 모든값의미
//     return{
//         a:a,
//         b:b,
//         c:c
//     }

// }

//출력: {a: 'Apple', b: 'Banana', c: 'Cherry'} => 'Cherry2'는 반영되지 않는다.
// 파라미터 값을 ...c로 수정하면 추가됨
console.log(toObject(...fruits2))
>>>>>>> 21c28c1622e7dd6a25f2dd4e66bac9cae8d028cf
