
//내보내는 저장함수 export
//getType() 특정한 데이터의 타입을 알아낼때 유용하게 사용하는 함수
export default function getType(data){
    return Object.prototype.toString.call(data)
    }

