import _ from 'lodash' // From `node_modules`!
import getType from './getType' // getType.js
import { random, user as heropy } from './getRandom' //getRandom.js
import * as R from './getRandom'
//*(와일드카드)는 모든 내보내기되는 데이터를 의미함

console.log(_.camelCase('the hello world'))
console.log(getType([1,2,3]))
console.log(random(), random())
console.log(heropy)


console.log(R)
//  결과: 
//  default: 123
//   random: ƒ random()
//   user: {name: 'HEROPY', age: 85}
//   __esModule: true
//   [[Prototype]]: Object

