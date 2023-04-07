// 배열을 이터러블하게 만들어보자
const arr = ['first', 'second', 'third'];
const iterateArr = arr[Symbol.iterator]();

console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());



//배열은 정상 동작한다. 그럼 과연 객체는 순회가능할까?
const object = {
  value0: "0",
  value1: "1",
  value2: "2",
  value3: "3",
}
/*
const iterateObject = object[Symbol.iterator]();

TypeError: object[Symbol.iterator] is not a function
    at Object.<anonymous> (workSpace\developers-refinement-javascript\chapter1\index.js:18:46)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
예상대로 안된다. 객체는 순회가 불가능.
*/

const iterateObject = object[Symbol.iterator]();

console.log(iterateObject.next());
console.log(iterateObject.next());
console.log(iterateObject.next());
console.log(iterateObject.next());
/*
- 이터러블한 배열을 만들었을때 순회를 하면 리턴되는 값은 아래와 같은 형태를 가진다.
  {
    value: string;
    done: boolean;
  }

- 위에 코드를 실행시켰을 경우 결과는 아래와 같다.
  { value: 'first', done: false }
  { value: 'second', done: false }
  { value: 'third', done: false }
  { value: undefined, done: true }
*/

// 스프레드 연산자는 배열을 전개해서 인자를 전달한다. 즉, 이터러블하게 인자를 전달한다는 특징이 있다.