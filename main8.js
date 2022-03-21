//JSON (JavaScript Object Notation)
//자바스크립트의 객체 표기법


import myData from './myData.json'

console.log(myData)

//json은 따옴표를 붙여도됨.
const user = {
    'name': 'HEROPY',
    'age': 85,
    emails: [ 
        'thesecon@gmail.com',
        'sun035@naver.com'
     ]
}

console.log('user', user)

//JSON.stringify 
//javascript 자료를 json의 자료로 바꿔줌
const str = JSON.stringify(user)

console.log('str',str)
console.log(typeof str)
//결과
//str {"name":"HEROPY","age":85,"emails":["thesecon@gmail.com","sun035@naver.com"]}


//JSON.parse 분석후 재조립
//json자료를 javascript의 자료로 바꿔줌
const obj = JSON.parse(str)
console.log('obj', obj)
//결과

// {name: 'HEROPY', age: 85, emails: Array(2)}
// age: 85
// emails: (2) ['thesecon@gmail.com', 'sun035@naver.com']
// name: "HEROPY"
// [[Prototype]]: Object
