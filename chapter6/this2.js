class Student {
  name;
  phoneNumber;
  constructor(name, phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.name = name;
  }
  showThis() {
    setTimeout(function () {
      console.log(this);
    }, 0);
  }
  showThis2() {
    setTimeout(() => {
      console.log(this);
    }, 0);
  }
}

const newStudent = new Student("joose", "010102203120");
//Window {0: Window, window: Window, self: Window, document: document, name: 'fun4함수입니다.', location: Location, …}
//자신만의 this를 가지려는 특성으로 인해 글로벌을 가진다.
newStudent.showThis();
//Student {name: 'joose', phoneNumber: '010102203120'}
//자신만의 this를 가지지 않으니 외부의 this를 참조하게 되고, 이로인해 자연스럽게 Student 객체의 this를 참조한다.
newStudent.showThis2();
