//String.prototype.replace()
//이건 잘알지? 문자열을 다른 문자열 혹은 정규식으로 치환하는 거지. 단! 한번만 동작한다는거.
const str10 = "first third third fourth";
//first second third fourth
//console.log(str10.replace("third", "second"));



//String.prototype.replaceAll()
//이것도 잘알지? 문자열내에 조건에 해당하는 부분을 "모두" 치환시켜준다는 특징이 있어.
//코테할때 유용하게 써먹었던 기억이 난다ㅎㅎ
const str11 = "dog dog dog dog dog";
//cat cat cat cat cat
//console.log(str11.replaceAll("dog", "cat"));



//String.prototype.search()
//정규 표현식에 처음으로 매칭되는 값의 인덱스를 반환한다.
const str12 = "hello, funny dog"
// const regex = /dog/i;
// 13
// console.log(str12.search(regex));




//String.prototype.slice()
const str13 = "the world";
// console.log(str13.slice(0, 3)); // the
// console.log(str13.slice(4)); // world




//String.prototype.split()
//특정 단어가 들어올때 그 부분을 때어서 배열로 저장하는 방식
const str14 = "dog dog dog dog dog cat cat cat cat pig pig";
const words = str14.split(' ');
//console.log(words[8]);




//String.prototype.toLowerCase()
//전부 소문자로
const kor = "HELLO KOREA";
//console.log(kor.toLowerCase()); 




//String.prototype.toLowerCase()
//전부 대문자로
const kor2 = "hello korea";
//console.log(kor.toUpperCase());




//String.prototype.toString()
//객체형태의 스트링을 문자열로 반환.
const stringObj = new String('foo');
console.log(stringObj);
console.log(stringObj.toString());




//String.prototype.trim()
//공백을 제거한다.
const trimString = "yyyy yyy yy yy yy yyyy                "
console.log(trimString);
console.log(trimString.trim());