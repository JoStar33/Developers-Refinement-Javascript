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