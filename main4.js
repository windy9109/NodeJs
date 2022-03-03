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