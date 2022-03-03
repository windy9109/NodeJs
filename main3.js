import _, {countBy, identity, replace} from 'lodash';
import getType from './getType';
import random from './getRandom';


const pi = 3.14159265358979
console.log(pi)

//.toFixed => 인수의 몇번째 자리까지 유지시켜줄것인지
const str = pi.toFixed(2) //문자 데이터로 반환함.
console.log(str)
console.log(typeof str)

//parseInt, parseFloat => 대표적인 전역함수들
const integer = parseInt(str) //정수값만 추출해서 반환함 
const float = parseFloat(str) //소숫점 자리를 유지하면서 문자데이터를 숫자로 변환해주는 
console.log(integer)
console.log(float) 
console.log(typeof integer, typeof float)



console.log('abs: ', Math.abs(-12)) //음수 제거 => 12
console.log('min: ', Math.min(2,8)) //가장작은값 확인 => 2
console.log('max: ', Math.max(2,8)) //가장큰값 확인 => 8
console.log('ceil: ', Math.ceil(3.14)) //반드시 값올림 => 4
console.log('floor: ', Math.floor(3.14)) //반드시 값버림 => 3
console.log('round: ', Math.round(3.14)) //반올림 => 3
console.log('random: ', Math.random()) //랜덤한 값

//10~100까지의 난수
console.log('random: ', Math.floor(Math.random()*(100-10+1)+10))

//검사
let count = 0;
for(var i=0; i<500; i++){
  const random = Math.floor(Math.random()*(100-10+1)+10)
  if( random >= 10 ){
   count++;
  }
}

console.log(count);

const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)


//console,log([].length) -> 빈배열
//.concat() -> 원본이 수정없이 배열이 합쳐짐
console.log(numbers.concat(fruits)) 
console.log(numbers)
console.log(fruits)

//fruits만큼 실행된다.
//방법1
// fruits.forEach(function(element, index, array){ 
//   console.log(element, index, array)
// })
//결과
// Apple 0 (3) ['Apple', 'Banana', 'Cherry']
// Banana 1 (3) ['Apple', 'Banana', 'Cherry']
// Cherry 2 (3) ['Apple', 'Banana', 'Cherry']


//fruits만큼 실행된다.
//방법2
fruits.forEach(function(fruits, i){ 
  console.log(fruits, i)
})
// Apple 0
// Banana 1
// Cherry 2




//forEach
const a1 = fruits.forEach(function(fruit, index){ 
  console.log(`${fruit}-${index}`)
})
console.log(a1) //따로반환되는 값 없음



//forEach 화살표함수
const a11 = fruits.forEach((fruit, index)=>{ 
  console.log(`${fruit}-${index}`)
})
console.log(a11) //따로반환되는 값 없음


//Map
const b1 = fruits.map(function(fruit, index){ 
  return `${fruit}-${index}` //반환됨
  // ['Apple-0', 'Banana-1', 'Cherry-2']
})
console.log(b1)




const b2 = fruits.map(function(fruit, index){ 
  return {
    id: index,
    name: fruit
  }
})
console.log(b2)


//map화살표 함수
const b3 = fruits.map((fruit, index) => ({  id: index, name: fruit})
)
console.log(b3)



const numbers2 = [1,2,3,4]
const fruits2 = ['Apple','Banana','cherry']



//[true, true, false, false]
const a7 = numbers.map(number => {
  return number < 3 //3보다 작은 배열을 boolean으로 출력
})
console.log(a7)



// [1, 2]
const b4 = numbers.filter(number => {
  return number < 3
})
console.log(b4)




