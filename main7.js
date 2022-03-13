import _ from 'lodash'

const usersA = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' }
]

const usersB = [
    { userId: '1', name: 'HEROPY' },
    { userId: '3', name: 'Amy' }
]

/////////////////// _.uniqBy  _.unionBy /////////////////////

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
//결과: 중복제거 안함
// 0: {userId: '1', name: 'HEROPY'}
// 1: {userId: '2', name: 'Neo'}
// 2: {userId: '1', name: 'HEROPY'}
// 3: {userId: '3', name: 'Amy'}

console.log('uniqBy', _.uniqBy(usersC, 'userId')) 
//_.uniqBy( , )중복제거하여 출력
//결과
// 0: {userId: '1', name: 'HEROPY'}
// 1: {userId: '2', name: 'Neo'}
// 2: {userId: '3', name: 'Amy'}


const usersD = _.unionBy(usersA, usersB, 'userId')
//_.unionBy( , )중복제거하여 변수에 할당
console.log('unionBy', usersD)
//결과
// 0: {userId: '1', name: 'HEROPY'}
// 1: {userId: '2', name: 'Neo'}
// 2: {userId: '3', name: 'Amy'}

///////////////////// _.find  _.findIndex  _.remove  /////////////////
const users = [
    { userId:'1', name: 'HEROPY' },
    { userId:'2', name: 'Neo' },
    { userId:'3', name: 'Amy' },
    { userId:'4', name: 'Evan' },
    { userId:'5', name: 'Lewis' }
]

const foundUser = _.find(users, {name:'Amy'})
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser)
//결과: 
// {userId: '3', name: 'Amy'}

console.log(foundUserIndex)
//결과: 2


_.remove(users, { name: 'HEROPY' })
console.log(users)

// 0: {userId: '2', name: 'Neo'}
// 1: {userId: '3', name: 'Amy'}
// 2: {userId: '4', name: 'Evan'}
// 3: {userId: '5', name: 'Lewis'}
// length: 4
// [[Prototype]]: Array(0)


