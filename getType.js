
//내보내는 저장함수 export
//getType() 특정한 데이터의 타입을 알아낼때 유용하게 사용하는 함수
export default function (data){ 
    //기본통로를 활용할때는 getType를 생략해도 된다.
    //단, default는 1개만 내보낼수있다.
    return Object.prototype.toString.call(data)
    }

// export default 123  => 불가능: 1개의 모듈에서는 1개의 default만 가능함.

