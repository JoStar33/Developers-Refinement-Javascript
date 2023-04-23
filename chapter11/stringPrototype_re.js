const regexText = "popoKokoJojo";
//정규식이 스트링에 어느 위치에서 첫번째로 만족되는지를 검출하는 함수이다.
const regex = /Jojo/i;
//8
console.log(regexText.search(regex));




//문자열을 추출할때 사용하는 함수이다.
//첫번째 문자열부터 끝나는 문자열을 명시하며 숫자 하나만 매개변수로 전달하게되면
//해당 매개변수부터 문자열의 끝까지를 반환하게 된다.
const sliceText = "kanye love";
//kanye
console.log(sliceText.slice(0, 5));
//love
console.log(sliceText.slice(6, 10));
//love
console.log(sliceText.slice(6));





//대문자를 소문자로 바꿔주는 함수이다.
//the most important thing is make good code
const message = "The Most Important Thing is make good Code";
console.log(message.toLowerCase());






//소문자를 대문자로 바꿔주는 함수이다.
const name = "jose";
//JOSE
console.log(name.toUpperCase());





//문자열에 공백을 제거시켜주는 함수이다.
//sdfhksafsf123
const password = "sdfhksafsf123         ";
console.log(password.trim());




//문자가 포함되어있는지 아닌지 확인해주는 함수.
//true
const passText = "is Pass";
console.log(passText.includes("Pass"));