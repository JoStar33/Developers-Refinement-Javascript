//실행 컨텍스트가 식별자들을 쭉 읽고 environmentRecord에 기록해둔다.
//이렇게 기록을 할때 var로 되어있는 경우는 undefined로 초기화해둔다.
console.log(number);
var number = 2;

/*
ReferenceError: Cannot access 'number2' before initialization
  at Object.<anonymous> (c:\Users\INSoft\Desktop\workSpace\developers-refinement-javascript\chapter4\hoisting.js:5:13)
  at Module._compile (node:internal/modules/cjs/loader:1126:14)
  at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
  at Module.load (node:internal/modules/cjs/loader:1004:32)
  at Function.Module._load (node:internal/modules/cjs/loader:839:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  at node:internal/main/run_main_module:17:47
환경레코드에 기록된 값이 없는 상태에서 number2라는 값을 사용하려고 했으므로 에러.
*/

console.log(number2); //일시적 사각지대!
const number2 = 2;

//다음과 같은 경우에도 위와 동일한 에러 발생 초기화가 안되었다는 에러 발생. 이렇게 동일한 변수가 있다면 스코프 내에 변수가 우선순위로 잡힌다.
//그 우선순위로 잡힌 변수에 대해 초기화가 안되어있는 상태에서 사용되었으므로 오류가 나야하는거지.
let foo = 1;
{
  console.log(foo);
  let foo = 2;
}


/*
순서를 쭉 정리해보자~
1. 실행 컨텍스트 생성단계를 거쳐 environment Record를 통해 식별자들을 쭉 콜스택상에 기록해둔다.
2. var의 경우는 undefined로 기록, const와 let은 초기화를 하지 않는다.
3. 실행 컨텍스트 실행단계를 거쳐 선언문 외 나머지 코드를 순차적으로 실행한다.
오케이?
*/