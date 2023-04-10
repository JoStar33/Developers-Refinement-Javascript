//내친김에 자바스크립트 원시타입들에 대해 알아보자.
/*
  자바스크립트 원시타입들
  - number
  - string
  - boolean
  - undefined
  - null
  - Symbol
*/
//원시타입들은 다음과 같이 값을 복사하여 비교하면 같다는 결과를 배출한다.
const privateType1 = 3;
const privateType2 = 3;
console.log(privateType1 === privateType2); //true

/*
하나만 더 확인해보자.
boolean값으로 비교해보도록 하자.
*/
const privateBoolean = true;
const privateBoolean2 = true;
console.log(privateBoolean === privateBoolean2); //true