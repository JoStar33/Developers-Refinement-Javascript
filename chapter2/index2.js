function* gen1() {
  yield "j";
  yield "a";
  yield "v";
  yield "a";
  yield "s";
  yield "c";
  yield "r";
  yield "i";
  yield "p";
  yield "t";
};


//이렇게 다른 제네레이터를 집어넣는것도 가능.
function* gen2() {
  yield "hello";
  yield* gen1();
  yield "~";
};

const gen2Function = gen2();

/*
{ value: 'hello', done: false }
{ value: 'j', done: false }
{ value: 'a', done: false }
{ value: 'v', done: false }


Generator<"hello" | "j" | "a" | "v" | "s" | "c" | "r" | "i" | "p" | "t" | "~", void, unknown>
*/
console.log(gen2Function.next());
console.log(gen2Function.next());
console.log(gen2Function.next());
console.log(gen2Function.next());
