//this란 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다.

//다음과 같은 객체가 있다고 치자. 그럼 해당 객체의 this는 어떻게 되어있을까?
class Student {
  name;
  phoneNumber;
  constructor(name, phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.name = name;
  };
  //메서드를 구성하고 다음과 같은 메서드를 통해 this를 확인해보도록 하자.
  showThis() {
    console.log(this);
  }
}



const student = new Student("jojo", "010333333333");
//해당 객체의 this는 아래와 같다.
//Student { name: 'jojo', phoneNumber: '010333333333' }
//student.showThis();

//전역 컨텍스트에서 this를 찍어보자. 여기서의 this는 뭘까?
//{} 글로벌이 찍힌다.
//Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this);





//this는 함수의 선언에 따라 달라진다. 먼저 아래와 같이 함수 선언식에서 this를 찍어보도록 하겠다.
function fun1() {
  console.log(this);
};
//여기서 fun1을 찍으면 this는 글로벌이 찍힌다. 왜? 지금 fun1의 this라는게 없으니까!
fun1();
//그럼 좀 생각을 바꿔서, 만약에 this를 bind해주면 어케될까?
//{ a: 3 } 이때에는 이게 찍힌다.
fun1.bind({a: 3})();



//하나만 더해보자. 다음과 같이 함수내부에 this를 통해 값을 지정해줬을 경우 어떤 결과가 나올까?
function fun2() {
  this.name = "fun2함수입니다."
  console.log(this);
};

const fun2Element = new fun2();
//fun2는 자신만의 this를 가지는 특성이 있기에 결과를 찍었을때 딱히 특별한점이 발견되지 않는다?
//fun2 { name: 'fun2함수입니다.' }
fun2Element;




//그럼 다음, 화살표 함수에서 this를 찍어보자.
const fun3 = () => {
  console.log(this);
};
//{} 마찬가지 글로벌을 가진다.
fun3();




//자 그럼 fun3에 this를 지정해보자
const fun4 = () => {
  this.name = "fun4함수입니다."
  console.log(this);
}
//Window {0: Window, window: Window, self: Window, document: document, name: 'fun4함수입니다.', location: Location, …}
//자!! 이녀석은 다음과 같이 글로벌상에 this에 값을 저장한다. 즉, 자신만의 this를 가지지않음.
fun4();