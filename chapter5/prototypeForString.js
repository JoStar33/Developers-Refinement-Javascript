//글자를 무조건 koko로 바꿔주는 프로토타입 함수를 만들어보자~~
String.prototype.replaceKoko = function () {
  //이거 별 난리를 다쳐봤는데 결론적으로 string의 this는 불변하기때문에 수정이 불가능하다.
  console.log(this);
}
const jojo = "jojo";
jojo.replaceKoko();

console.log(jojo);