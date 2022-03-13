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

