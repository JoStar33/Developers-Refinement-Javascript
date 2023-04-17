//Array.prototype.flat()
//지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성한다.
const arr8 = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]];
//console.log(arr8.flat(Infinity));




//Array.prototype.includes()
const arr9 = [1, 2, 3, 4, 5, 6, 7];
//매개변수값이 배열에 포함되어있는지 아닌지 확인해보는 함수다.
//console.log(arr9.includes(6));




//Array.isArray()
const arr10 = [];
//배열인지 아닌지 확인해보는 방법이다.
//true
//console.log(Array.isArray(arr10));




//Array.prototype.join()
const arr11 = ["jose", "want", "to", "be", "best", "developer"];
//이렇게 배열내에 요소들을 합쳐 하나로 만들어주는게 join이다.
//jose want to be best developer
//console.log(arr11.join(" "));




//Array.prototype.keys()
const arr12 = ["jose", "want", "to", "be", "best", "developer"];
//배열의 키값을 조회하는 기능이다.
const keys = arr12.keys();
//이거 안먹음. keys는 이터레이터 객체를 반환하기때문에 안먹는거임.
// keys.forEach(element => {
//   console.log(element)
// })
//따라서 next();를 통한 접근을 시도하던지 아니면 for of를 사용해야한다.
// for(const element of keys) {
//   console.log(element);
// }




//Array.prototype.reduce()
const arr13 = [1, 2, 3, 4, 5];
const initValue = 0;
//누산기 역할을 수행하는 reduce
const sum = arr13.reduce((a, b) => a + b, initValue);
//console.log(sum);




//Array.prototype.reverse()
//말 그대로 순서를 뒤집음. 배열자체에 영향을 주는 녀석이니 신중하게 사용해야겠지?
const arr14 = [1, 2, 3, 4, 5];
arr14.reverse();
// console.log(arr14);




//Array.prototype.slice()
//배열 일부 요소만 잘라내어 반환한다.
const arr15 = ["jack", "koko", "lee", "james"]
//[ 'lee', 'james' ]
//console.log(arr15.slice(2));
//배열에 영향을 주지않음.
//console.log(arr15);




//Array.prototype.some()
const arr16 = [1, 2, 3, 4, 5];
//조건에 일치하는 녀석이 하나라도 있는지 검사하는 배열이다.
//true
//console.log(arr16.some(element => element % 2 === 0));




//Array.prototype.splice()
const arr17 = [1, 2, 4, 5];
arr17.splice(2, 0, 3);
//마찬가지로 배열에 직접적 영향을 주는 녀석이니 사용에 신중해야한다.
//[ 1, 2, 3, 4, 5 ]
console.log(arr17);
arr17.splice(1, 2);
//[ 1, 4, 5 ]
console.log(arr17);
arr17.splice(1, 1, 2, 3);
//[ 1, 2, 3, 5 ]
console.log(arr17);




const arr18 = ["jose", "want", "to", "be", "best", "developer"];
const valueIterator = arr18.values();
/*
  jose
  want
  to
  be
  best
  developer
*/
for(const value of valueIterator) {
  console.log(value);
}