//참조타입은 단하나 object뿐이다. 참조타입은 말 그대로 메모리상에 주소를 참고하는 특징을 가진다.
//그럼 이제 아래와 같은 것들을 비교해보자.
//분명히 두 값은 동일한 객체이다 그럼에도 결과는 false. 이유는 간단하다.
//참조하고 있는 메모리 주소를 비교하는 것이기 때문에 결과가 다른것.
const newObject = {};
const newObject2 = {};
console.log(newObject === newObject2);

/*
  위에 이슈를 해결하기위해선 다음과 같은 과정을 거쳐서 비교해야한다.
*/
const object = {};
const copyObject = object;
console.log(object === copyObject);
//그러면 결과는 아무 이상없이 true!