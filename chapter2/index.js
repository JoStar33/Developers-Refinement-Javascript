
//이렇게 함수앞에 *달기. 그러면 제네레이터 형성.
//제네레이터 안에는 yield를 통해 순회할 수 있는 요소들을 순서대로 작성.
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
};

const numberGenerator = generatorFunction();
//제네레이터를 순회할때에는 다음과 같이 next()를 작성해나가면서 순회할 수 있다.
/*반환되는 값은 객체이고 객체의 형태는 아래와 같다.
  {
    value: ~,
    done: ~
  }
*/
console.log(numberGenerator.next());
console.log(numberGenerator.next());
console.log(numberGenerator.next());
console.log(numberGenerator.next());
console.log(numberGenerator.next());
console.log(numberGenerator.next());
console.log(numberGenerator.next());


//결과값은 다음과 같다. 이터레이터랑 완전 동일하지?
/*
  { value: 1, done: false }
  { value: 2, done: false }
  { value: 3, done: false }
  { value: 4, done: false }
  { value: 5, done: false }
  { value: 6, done: false }
  { value: undefined, done: true }
*/
//어 그럼 이터레이터랑 제네레이터랑 무슨 차이에요?라고 생각할 수 있는데 이터레이터랑 제네레이터는 사실 같다. ???: 이터레이터는 제네레이터다.(회기성원리!!!)
//제네레이터는 이터레이터를 좀 더 쉽게 구현할 수 있도록 만들어주는 녀석이라고 생각하면 될듯.