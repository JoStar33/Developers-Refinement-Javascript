
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

//오케이. 하나만 더보자. 다음과 같이 코드가 작성되어있다면 콘솔은 어떻게 찍힐까?
function* generatorFunction2() {
  const newString = "hoho";
  console.log(newString);
  yield 1;
  console.log("yield2 start");
  yield 2;
  for(let i = 0; i < 3; i++) {
    console.log("yield3 start. number: ", i);
  }
  yield 3;
};

const testGenerator = generatorFunction2();

/*
아래와 같이, yield의 도달하기전까지의 콘솔을 찍는다.
    hoho
  { value: 1, done: false }
    yield2 start
  { value: 2, done: false }
    yield3 start. number:  0
    yield3 start. number:  1
    yield3 start. number:  2
  { value: 3, done: false }
*/

console.log(testGenerator.next());
console.log(testGenerator.next());
console.log(testGenerator.next());

//마지막으로 return문까지 확인해보자.

function* generatorFunction3() {
  yield 1;
  yield 2;
  return "finish";
};

const testGenerator2 = generatorFunction3();
/*
  { value: 1, done: false }
  { value: 2, done: false }
  { value: 'finish', done: true }
  마지막 value자리에 return값이 들어간걸 볼 수 있다.
*/
console.log(testGenerator2.next());
console.log(testGenerator2.next());
console.log(testGenerator2.next());
//어 그럼 이터레이터랑 제네레이터랑 무슨 차이에요?라고 생각할 수 있는데 이터레이터랑 제네레이터는 사실 같다. ???: 이터레이터는 제네레이터다.(회기성원리!!!)
/*
재밌는건 제네레이터는 값을 미리 만들어두는 개념이 아니다. 메모리 관리에 무척 효율적이라는거.
*/
//제네레이터는 이터레이터를 좀 더 쉽게 구현할 수 있도록 만들어주는 녀석이라고 생각하면 될듯.