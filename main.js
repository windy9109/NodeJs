import _, { countBy, identity } from 'lodash';
import getType from './getType'
import random from './getRandom'

//helloWorld
console.log(_.camelCase('hello world'))
//string
console.log(typeof 'Hellworld');
//number
console.log(typeof 123);
//boolean
console.log(typeof true);
//undefined
console.log(typeof undefined);
//object
console.log(typeof null);
//object
console.log(typeof {});
//object
console.log(typeof []);


// function getType(data){
//     return Object.prototype.toString.call(data).slice(8,-1)
// }



//Number
console.log(getType(123))
//Boolean
console.log(getType(false))
//Null
console.log(getType(null))
//Object
console.log(getType({}))
//Array
console.log(getType([]))



//산술연산자(arithmetic operator)

console.timeLog( 1 + 2 )
console.log( 5 - 7 )
console.log( 3 * 4 )
console.log( 10 / 2 )
console.log( 7 % 5 ) //나머지 연산자


//할당연산자(assignment operator)

//const a =2 //상수 => 변경불가
let a =2 //let는 변경가능
//a = a+1
a += 1
a -= 1
a /= 1
a %= 1

console.log(a)




//비교연산자(comparison operator)

const c = 1
const b = 3

console.log( c == b ) //false

function isEqual(x,y){
return x == y
}

console.log(isEqual(1,1)) // 1과 1을 비교해서 반환함 => true
console.log(isEqual(2,'2')) //다른 타입이므로 false


console.log( c != b ) //true
console.log(c < b) //c가 b보다 작은가? => true
console.log(c > b) //c가 b보다 큰가? => false
console.log(c <= b) //c가 b보다 같거나 작은가?
console.log(c >= b) //c가 b보다 같거나 큰가?


//논리연산자()
const q = 1===1
const w = 'AB' === 'ABC'
const e = true

console.log(q)
console.log(w)
console.log(e)

//세값이 모두 true 일경우 true
console.log('&&: ', q && w && e )

//값중 하나 이상 true일 경우 true
console.log('||: ', q || w || e)

//not연산자
console.log('!: ', !q)




//삼항연산자

const a1 = 1 < 2
if(a1){
    console.log('참')
}else{
    console.log('거짓')
}

console.log(a1 ? '참' : '거짓')





//조건문(if)

const a2 = random()

if(a2 === 0){
console.log('a is 0')
}else if( a2 === 2 ){
console.log('a is 2')
}else if(a2 === 4 ){
console.log('a is 4')
}
else{
    console.log('rest....')
}



//조건문(switch)

const a3 = random()

switch(a3){
case 0: 
    console.log('a is 0'); break;
case 2: 
    console.log('a is 2'); break;
case 4: 
    console.log('a is 4'); break;
default: 
    console.log('rest....')
}




//반복문(for statement)
// for (시작조건; 종료조건; 변화조건){}

const ulel = document.querySelector('ul')
//console.log(ulel)


for(let i =0; i<10; i +=1){
    const li = document.createElement('li') //메모리상의 li태그
    li.textContent = `list-${i+1}`  //문자데이터 할당 (보관처리)
    if( (i+1) % 2 === 0) { 
            li.addEventListener('click', function(){ //이벤트연결후 익명의 함수실행
            console.log(li.textContent) // li출력
        })
    }
    ulel.appendChild(li)
}


//변수 유효범위(Variable Scope)
//var, let, const
//var 보다는 let과 const를 이용하여 사용한다.

function scope(){

    if(true){
        let a4 = 123
        console.log(a4)
    }
}
scope()


//형변환 (Type conversion)

const a5 =1
const b5 = '1'

console.log( a5 === b5 ) //false
console.log( a5 == b5 ) //true
//동등연산자는 ==로 표현한다. 되도록 쓰지않는게 좋음




if(true){ //true이므로 출력됨
    console.log(123)
}

//형변환
if('true'){ //출력됨
    console.log(12345)
}


if(false){ //false이므로 출력되지 않음
    console.log(123)
}


if('false'){ //출력됨
    console.log(123450+'-')
}




//Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'...

//Falsy(거짓같은값)
// false, '', null, undefined, 0, -0, NaN

if(0){ //출력되지 않음
    console.log(123450)
}

if(undefined){ //출력되지 않음
    console.log(123450)
}



//함수복습

function sum(x,y){
    console.log(x + y)
    return x + y
}

const a6 = sum(1,3) //1과 3이 더해진 값이 sum으로 반환됨
const b6 = sum(4,12)

console.log(sum(1,3))
console.log(sum(4,12))
console.log(sum(1,3)+ sum(4,12))

console.log(sum(7,3))


function sum2(x,y){
console.log(arguments) //arguments는 매개변수들을 말함
    // if(x<2){
    //     return
    // }
    return arguments[0] + arguments[1]
}
console.log('함수복습')
console.log(sum2(7,3))




//화살표 함수
//() => {} vs function(){}

const double = function(x){
return x * 2
}

console.log('double: ', double(7))

const doubleArrow = (x,y) => { return x * 2 }
console.log('doubleArrow', doubleArrow(7))



//즉시 실행함수
//IIFE, Immediately-Invoked Function Expression

const a8 = 7
function double2(){
    console.log(a8*2)
}
double2(); //즉시실행함수를 시작하거나 끝낼때는 세미콜론을 반드시쓴다.

(function(){ //즉시실행함수 - 함수명 없이 바로실행 할때는 괄호로 묶어준다()
    console.log(a8*2)
})();


(function(){ //즉시실행함수
    console.log(a8*2)
}()); //이 방법을 추천



//호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const a9 = 5
double3()

function double3 (){
    console.log(a9*2)
}


//타이머함수
//setTimeout(함수, 시간): 일정 시간후 함수 실행
//setInterval(함수, 시간): 시간 간격마다 함수 실행
//clearTimeout(): 설정된 Timeout 함수를 종료
//clearInterval(): 설정된 Interval 함수를 종료





//*** setTimeout ***
setTimeout(function(){
    console.log('Hello!')
}, 3000)


// const timer = setTimeout(() => {
//     console.log('Hello!')
// }, 3000)
//3초뒤 나타남


// const h1el = document.querySelector('h1')
// h1el.addEventListener('click', () => {
// clearTimeout(timer)
// }) //h1태그를 클릭하면 타이머꺼짐





//*** setInterval ***
const timer = setInterval(() => { 
    // setInterval 은 지속적으로 시간간격마다 함수를 실행함
    console.log('Hello!')
}, 3000)
//3초마다 지속적으로 증가


const h1el = document.querySelector('h1')
h1el.addEventListener('click', () => {
clearInterval(timer)
}) //h1태그를 클릭하면 더이상 증가하지않음







//콜백(Callback)
//함수의 인수로 사용되는 함수
//setTimeout(함수, 시간)

function timeout(Callback){
    setTimeout(() =>{
        console.log('Heropy!')
         Callback()
    }, 5000)
  }
    timeout(() => { //익명함수 호출
        console.log('Done!')
    })




    const heropy = {
        firstName: 'Heropy',
        lastName: 'Park',
        getFullName: function(){
            return `${this.firstName} ${this.lastName}`  //this는 객체인 const feropy를 뜻함
        }
    }
    console.log(heropy)
    console.log(heropy.getFullName()) //Heropy Park



    const neo = {
        firstName: 'Neo',
        lastName: 'Smith',
        getFullName2: function(){
            return `${this.firstName} ${this.lastName}`  //this는 객체인 const neo를 뜻함
        }
    }
    console.log(neo.getFullName2())




function User(first1, last1){
    this.firstName = first1
    this.lastName = last1
}

User.prototype.getFullName = function(){ //prototype은 한번만 만들어져도 참조할수있게 하는것
    return `${this.firstName} ${this.lastName}`
}

const heropy2 = new User('Heropy22','Park')
const amy = new User('Amy22','Clarke')
const neo2 = new User('Neo22','Smith')

console.log(heropy2.getFullName())
console.log(amy.getFullName())
console.log(neo2.getFullName())

//const heropy3 = { } //리터럴방식

//a.includes(4) => a라는 변수에 4가 있는지 검사해주는 메소드



// new Swiper('.notice-line .swiper-container',{
//     direction: 'vertical',  //수직 슬라이드
//     autoplay: true,  //자동 재생 여부
//     loop:ture //반복 재생 여부
// })

// new Swiper('.promotion .swiper-container',{
//     //direction" 'horizontal',  //수평슬라이드
//     autoplay:{ //자동 재생 여부
//         delay: 5000 //5초마다 슬라이드 바뀜
//     },
//     loop: true, //반복재생여부
//     slidesPerview: 3, //한번에 보여줄 슬라이드 개수
//     spaceBetween: 10, //슬라이드 사이 여백
//     centeredSlides: true, //1번 슬라이드가 가운데보이기
//     pagiation:{ //페이지 번호 사용여부
//         el: '.promotion .swiper-pagination', //페이지 번호 요소선택
//         clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
//     }
// })



//this
//일반(Normal)함수는 호출 위치에 따라 this정의!
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this정의




const heropy5 = {
    name0:'heropy',
    normal: function(){
        console.log(this.name0)
    },
    // arrow: () => { // => 일경우 그 위치에서 찾으므로 호출위치 알수없음
    //     console.log(this.name0)
    // }
}

heropy5.normal()
//heropy5.arrow()

const amy5={
    name0: 'Amy',
    normal: heropy5.normal,
 //   arrow: heropy5.arrow
}

amy5.normal()
//amy5.arrow()



function User1(name2){
    this.name2 = name2
}
User1.prototype.normal = function(){
    console.log(this.name2)
}
// User1.prototype.arrow = () => {
//     console.log(this.name2)
// }


const heropy6 = new User1('Heropy6')

heropy6.normal()
//heropy6.arrow()


const timer2 = {
name: 'Heropy000!',
timeout: function(){
        //setTimeout(함수, 시간)
        setTimeout(() => {
            console.log(this.name)
// function() 일경우 timeout안에 있는 name의 this를 찾는다. 
//따라서 () => 로 바꿔 주면 오류해결!


        }, 2000)

    }
}
console.log(timer2.timeout())








