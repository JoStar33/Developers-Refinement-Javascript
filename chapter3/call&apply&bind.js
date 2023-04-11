function bindFunction() {
  return this;
}
/*
[ 1, 2, 3 ]
[Number: 1]
배어리콜~
배열 어플라이 리스트 콜
*/
console.log(bindFunction.apply([1, 2, 3]));
console.log(bindFunction.call(1, 2, 3));

/*
바인드는 다음과 같이 함수를 실행시키지 않기때문에 ()를 붙여줘야한다.
[Function: bound bindFunction]
[Number: 1]
*/
console.log(bindFunction.bind(1));
console.log(bindFunction.bind(1)());