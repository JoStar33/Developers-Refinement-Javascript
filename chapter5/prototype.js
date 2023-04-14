const numbers = [1, 2, 3, 4, 5];

Array.prototype.jojo = () => {
  //이렇게 하면 this가 전역일 수 밖에 없지 생각해보니까...
  //함수 표현식은 this를 가지지않는 특성을 가지니까 여기서 가리키는 this는 글로벌일 수 밖에.
  console.log(this);
}

//나만의 필터맵 함수를 만들어보자~
Array.prototype.filterMap = function (callbackFilter, callbackMap) {
  const arr = [];
  for (const value of this) {
    if (callbackFilter(value)) {
      arr.push(callbackMap(value));
    }
  }
  return arr;
};

console.log(
  numbers.filterMap(
    (arr) => {
      if (arr > 3) return arr;
    },
    (arr) => {
      if (arr > 4) return arr * 4;
      return arr;
    }
  )
);