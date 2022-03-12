import _ from 'lodash'

// 데이터 불변성 (Immutability)
// 원시데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
//--------------------------------------------------------
//|1:           |2:         |3:           |4:
//--------------------------------------------------------


let a = 1
let b = 4
console.log(a, b, a == b)
//결과: 1 4 false
//a와 b의 값이 다르므로 false


b = a
console.log(a,b, a == b )
//결과: 1 1 true
// a의 값을 b에 넣어서 b가 같은곳을 바라보게 함 true


a = 7
console.log(a, b, a == b)
//결과: 7 1 false
// a가 7을 바라보게 되었으므로 결과는 false


let c = 1
console.log(b, c, b == c)
//결과: 1 1 true
//c안의 값1과 b안의 값 1이 숫자적으로 같으곳을 바라보고 있으므로 true 


//---------------------------------------------------------------

let a1 = { k: 1 }
let b1 = { k: 1 }

console.log(a1, b1, a1 == b1)
// 결과  {k: 1} {k: 1} false
// 각 변수의 k가 다른주소를 바라보므로 false

a1.k = 7
b1 = a1
console.log(a1, b1, a1 == b1)
// 결과  {k: 7} {k: 7} true
// a1의 k가 바라보는 곳을 b1도 바라보게하므로 true

a1.k = 2
console.log(a1, b1, a1 == b1)
// 결과  {k: 2} {k: 2} true
// b1은 a1과 똑같은 곳을 바라보므로 a1이 바뀌면 바뀐 값이 적용된다. true


let c1 = b1
console.log(a1, b1, c1, a1 == c1)
// 결과  {k: 2} {k: 2} {k: 2} true
// c1은 b1과 같은곳을 바라보고 b1은 a1과 같은곳을 바라보므로 true


//-----------------------------------------------------------------


//얕은복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
    name: 'Heropy',
    age: 85,
    emails: ['qwe123@naver.com']
}

//얕은복사1
const copyUser = Object.assign({}, user)

//얕은복사2
//const copyUser = {...user}
console.log(copyUser == user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('---------')
console.log('---------')


//얕은 복사3
user.emails.push('po123@gmail.com')
console.log(user.emails == copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)



//깊은 복사1
const copyUser2 = _.cloneDeep(user) 
//재귀적 값의 복사 ==> 반복실행 하면서 복사
user.emails.push('rtyry0000@gmail.com')
console.log(copyUser2 == user)
console.log('user', user)
console.log('copyUser', copyUser2)


