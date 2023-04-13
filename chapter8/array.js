//Array.prototype.concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
//console.log(newArr);
//이젠 걍 이렇게 하는게 나은듯...
const newArr2 = [...arr1, ...arr2];
//console.log(newArr2);




//Array.prototype.entries()
const arr3 = [1, 2, 3, 4, 5, 6];
//이터레이터를 쉽게 사용할 수 있는 방법이 있었네..!
//이터레이터 사용법은 총 2가지가 있는거겠군.
const iterator = arr3.entries();
const iterator2 = arr3[Symbol.iterator]();
/*
{ value: [ 0, 1 ], done: false }
{ value: [ 1, 2 ], done: false }
{ value: [ 2, 3 ], done: false }
*/
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());




const isEntitiesDog = (element) => element.includes("dog");
const arr4 = ["fundog", "kickdog", "minidog"];
//true
//console.log(arr4.every(isEntitiesDog));
const arr4_1 = ["fundog", "kickdog", "minicat"];
//false
//console.log(arr4_1.every(isEntitiesDog));




//Array.prototype.fill()
const arr5 = [
  {
    id: 23,
    name: "james"
  }, {
    id: 24,
    name: "park"
  }, {
    id: 25,
    name: "lonoo"
  }, {
    id: 26,
    name: "koko"
  }, {
    id: 27,
    name: "pin"
  }
];
//fill의 매개변수로 배열을 모두 채워버린다.
//이때 fill을 쓰게되면 배열이 완전히 바뀐상태가 된다는 특징이 있다.
/*
[
  { id: 0, name: '' },
  { id: 0, name: '' },
  { id: 0, name: '' },
  { id: 0, name: '' },
  { id: 0, name: '' }
],
[
  { id: 0, name: '' },
  { id: 0, name: '' },
  { id: 0, name: '' },
  { id: 0, name: '' },
  { id: 0, name: '' }
]
*/
// console.log(arr5.fill({id: 0, name: ""}));
// console.log(arr5);




//Array.prototype.filter()
//얜 진짜 생략... 너무많이써서 쓰는것도 귀찮을 정도...




//Array.prototype.find()
//얘도 지긋지긋하게 써대서 또 못쓰겠음...




//Array.prototype.findIndex()
//find랑 비슷하거든? 근데 얜 살짝 다르게 인덱스 정보를 반환함.
const arr6 = ["a", "b", "c", "d", "e"];
//1
//console.log(arr6.findIndex(element => element === "b"));



//Array.prototype.findLast()
const arr7 = [5, 12, 50, 130, 44];
//조건에 충족되는 마지막 요소를 반환하는 기능.......인데
//이자식 엄청 최근에 나온 문법임. 노드 18버전 이상부터 사용가능한 문법임. 따라서 사용불가능.
//console.log(arr7.findLast((element) => element > 49));