//Object.assign()
//객체를 붙여넣기하는 함수라고 생각하면 된다.
const object1 = {
  name: "kayne"
};
const object2 = {
  age: 23
}
/*
아래 모두 결과는 같다. 하지만 아래와 같이 스프레드 문법을 활용하면 훨씬 간단하게 복사가 가능하다.
{ name: 'kayne', age: 23 }
{ name: 'kayne', age: 23 }
*/
// console.log(Object.assign(object1, object2));
// console.log({...object1, ...object2});




//Object.defineProperty()
//객체의 프로퍼티를 추가하거나 수정이 가능하다.
const object3 = {};
Object.defineProperty(object3, 'name', {
  value: "오브젝트",
  writable: false
});
//오브젝트
console.log(object3.name);
object3.name = "수정";
//다음과 같이 프로퍼티를 수정하면 writable false로 설정했기에 변경되지 않는다.
//오브젝트
console.log(object3.name);



//super
//다음과 같이 객체를 생성시에 constructor를 통해 매개변수를 받는 class가 아래와 같이 있다고 치자.
class Polygon {
  constructor(width = 20, height = 20) {
    this.width = width;
    this.height = height;
  }
  getValue() {
    return {
      width: this.width,
      height: this.height
    }
  }
}
//이를 상속하는 class가 있다면 이때 super를 통해 상속받은 class의 매개변수를 받을 수 있다.
class Square extends Polygon {
  constructor(length) {
    super(length, length);
  }
}
class Section extends Polygon {
  constructor() {
    super();
  }
}
//20
const newSquare = new Square(20);
const newSection = new Section();
console.log(newSquare.getValue().width);
//다음과 같이 디폴트 매개변수를 받아 사용하는것 또한 가능하다.
console.log(newSection.getValue().width);