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
