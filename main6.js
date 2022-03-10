let str =`
010-1234-5678
test1234@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:12345
동해물과 백두산이 마르고 닳도록
`
//console.log(str.match(/\.$/gim))

console.log(
    str.match(/d$/g)  //한줄의 끝부분이 소문자 d인것 m을 추가해줘야 정상출력
)

console.log(
    str.match(/^t/gim)  //T, t로 시작하는 알파벳의 모든 문장
)

console.log(
    str.match(/./g)  //문자데이터에서 사용하는 대부분의 글자들과 일치함.
)

console.log(
    str.match(/h..p/g)  //h로 시작해서 p로 끝나는 문장을 찾는다.
)

console.log(
    str.match(/fox|dog/g)  //['fox', 'dog'] => 먼저찾아지는게 먼저반환됨
)

console.log(
    str.match(/https?/g)  //  ['https', 'http'] => s가 있을수 있고 없을수도 있다.
)


console.log(
    str.match(/d{2}/g)  //  d라는 글자가 2번 반복되는 내용 모두 찾기
)

console.log(
    str.match(/d{2,}/g)  //  d라는 글자가 2개이상 반복되는 내용 모두 찾기
)

console.log(
    str.match(/d{2,3}/g)  //  d라는 글자가 2개이상 3개이하 반복되는 내용 모두 찾기
)


console.log(
    str.match(/\w{2,3}/g)  //  2개이상 3개이하 반복되는 내용 모두 찾기(규칙성x)
)


console.log(
    str.match(/\b\w{2,3}\b/g)  //  2개이상 3개이하 반복되는 단어 모두찾기(규칙성o)
)

console.log(
    str.match(/[0-9]{1,}/g)  //  2개이상 3개이하 반복되는 단어 모두찾기(규칙성o)
)


console.log(
    str.match(/[가-힣]{1,}/g)  //  1개 이상의 연속되는 모든한글을 찾겠다. 
)


console.log(
    str.match(/\w/g)  //  영어의 소문자, 대문자, 언더바, 숫자를 모두 출력
)

console.log(
    str.match(/\bf\w{1,}\b/g)  // 소문자 f로 시작하는 모든 영단어 검색 
)


console.log(
    str.match(/\d/g)  // 모든숫자에 일치
)


console.log(
    str.match(/\d{1,}/g)  // 모든 1개이상의 숫자에 일치
)

const h=`    the hello world     `

console.log(
    h.match(/\s/g)  // 모든 공백문자에 일치
)

console.log(
    h.replace(/\s/g, '')  // 모든 공백문자를 찾아서 빈문자 데이터 할당
    //결과:  thehelloworld
)

console.log(
    str.match(/.{1,}(?=@)/g)  // @앞쪽의 1개 이상 일치하는 자료 출력
)

console.log(
    str.match(/(?<=@).{1,}/g)  // @뒤쪽의 1개 이상 일치하는 자료 출력
)






