fun1();

var fun1 = () => {
  console.log("show");
}

/*
fun1();
^

TypeError: fun1 is not a function
undefined는 함수가 아니므로 에러 발생.
*/
fun2();

const fun2 = () => {
  console.log("show");
}

/*
ReferenceError: Cannot access 'fun2' before initialization
  at Object.<anonymous> (c:\Users\INSoft\Desktop\workSpace\developers-refinement-javascript\chapter4\functionHoisting.js:13:1)
  at Module._compile (node:internal/modules/cjs/loader:1126:14)
  at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
  at Module.load (node:internal/modules/cjs/loader:1004:32)
  at Function.Module._load (node:internal/modules/cjs/loader:839:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  at node:internal/main/run_main_module:17:47
환경레코드에 기록된 값이 없는 상태이므로 레퍼런스 에러 발생.
*/

fun3();

function fun3() {
  console.log("show");
}

//it works!
//얘는 함수 선언문이라 정상동작한다.