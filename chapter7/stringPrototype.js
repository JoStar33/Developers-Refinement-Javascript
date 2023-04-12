//String.prototype[@@iterator]()
const str = "kjdfkgjdfdufgyuisgh;eghnrlkhgn";
const strIterator = str[Symbol.iterator]();
//이를통해 문자열 또한 순회가 가능하다는걸 알게됐다.
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());




//String.prototype.at()
//아래처럼 3개모두 같은 결과를 배출한다.
//charAt을 많이썼었는데
const str2 = "fadsf;o;fhiofgdfd8ej";
// console.log(str2.at(1));
// console.log(str2.charAt(1));
// console.log(str2[1]);




//String.prototype.charCodeAt()
//아스키 코드값으로 스트링을 반환하는것 같은데, 구체적인 사용처는 솔직히 아직 잘 모르겠다.
const str3 = "fd;gfdgfdyjkewbwebe";
// console.log(str3.charCodeAt(2));
// console.log(str3.charCodeAt(3));
// console.log(str3.charCodeAt(4));
// console.log(str3.charCodeAt(5));




//String.prototype.concat()
//객체에서 흔히 접했던 concat이다. 잘알지 이건?
const str4 = "hjoif dvbheearh";
const helloText = "hello, "
//hello, jose hjoif dvbheearh
//console.log(helloText.concat(str4));
//hello, jose testText hjoif dvbheearh
//console.log(helloText.concat('jose ', 'testText ', str4));




//String.prototype.endsWith()
//endWith에 넣은 매개변수가 스트링 마지막을 구성하고 있는지 확인해볼 수 있는 함수다.
const str5 = "hello, my name is koko. nice to meet you~";
//true
//console.log(str5.endsWith("you~"));
//끝나는 길이를 임의로 지정이 가능하다.
//이렇게 물결을 없애버리고 체크해보면 결과는 true가 나온다.
//true
//console.log(str5.endsWith("you", 40));





//String.fromCharCode()
//아스키 코드값을 스트링으로 반환해주는 함수이다.
//결과는 아래와 같은데 이게 뭔질 모르겠네... 좀 무섭기도하다.
//
//console.log(String.fromCharCode(1, 2, 3, 4, 5, 6, 7));





//String.prototype.includes()
//너무 많이써봐서 잘아는 그녀석, includes다. 말이 필요없다. 써보자.
const str7 = "opgfuifghjkfnf";
//true
//이렇게 포함된 단어를 가지고있으면 true 아니면 false를 리턴해주는 함수이다.
//console.log(str7.includes("opg"));




//String.prototype.indexOf()
//매개변수로 받은 문자가 문자열에 포함되어있다면 문자열의 몇번째에 포함되어있는지 확인하는 함수이며
//포함되어있지 않다면 -1을 리턴한다.
const str8 = "oigyrebfguhdfndg";
//0
//console.log(str8.indexOf("oig"));
//13
//console.log(str8.indexOf("ndg"));
//-1
//console.log(str8.indexOf("z"));




//String.prototype.substring()
//다음과 같이 추출하고싶은 문자열의 위치를 입력해주면 원하는 결과를 얻어낼 수 있다.
// first
// second
// third
const str9 = "first second third";
// console.log(str9.substring(0, 5));
// console.log(str9.substring(6, 12));
// console.log(str9.substring(13, 18));