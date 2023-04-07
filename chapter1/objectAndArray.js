/*객체와 배열의 공통점: 
  1. 둘다 객체임. 
  2. 변수명[] 의 형태로 내부값 접근이 가능함.
  3. for...in을 통해 내부값 접근이 가능함.(for...in의 경우 객체에서만 사용이 가능. 근데 배열은 객체이므로 사용가능.)
*/
const arr = [1, 2, 3, 4, 5]
const object = {
  1: 1,
  2: 2,
  3: 3
};
console.log(arr[1]);
console.log(object[1]);

for(const arrElement in arr) {
  console.log(arrElement);
}

for(const objectElement in object) {
  console.log(objectElement);
}

//그렇다면 객체와 배열의 구체적인 차이점은 뭘까?
/*객체와 배열의 차이점
  1. 배열은 이터레이터를 통해 이터러블하게 만들 수 있으나, 객체는 불가능함.
  2. for...of는 이터러블한 객체에만 사용이 가능하기에, 평범한 객체는 사용이 불가능함.
*/

//Good
const arrIterator = arr[Symbol.iterator];
//Bad
const objectIterator = object[Symbol.iterator];

for(const arrElement of arr) {
  console.log(arrElement);
}

/*
TypeError: object is not iterable
  at Object.<anonymous> (workSpace\developers-refinement-javascript\chapter1\objectAndArray.js:38:28)
  at Module._compile (node:internal/modules/cjs/loader:1126:14)
  at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
  at Module.load (node:internal/modules/cjs/loader:1004:32)
  at Function.Module._load (node:internal/modules/cjs/loader:839:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  at node:internal/main/run_main_module:17:47
*/
for(const objectElement of object) {
  console.log(objectElement);
}
