// function testHandler() {
//  const myLocalVar = "test";
//  function getTets() {
//   console.log(myLocalVar);
//  }

//  getTets();
// }

// testHandler();

// const counterHandler = () => {
//  let localCounter = 0;
//  function counterincrease() {
//   return localCounter++;
//  }
//  return counterincrease;
// };

// const myCounter = counterHandler();
// const res1 = myCounter();
// const res2 = myCounter();
// const res3 = myCounter();

// console.log(myCounter);

// function useCounter() {
//  let counter = 0;

//  const counterIncrease = () => {
//   counter++;
//   console.log("in process", counter);
//  };

//  const getCounter = () => {
//   return counter;
//  };

//  return {
//   getCounter,
//   counterIncrease,
//  };
// }

// const myLocalCounter = useCounter();

// const myAnotherCounter = useCounter();

// myLocalCounter.counterIncrease();
// myLocalCounter.counterIncrease();
// myLocalCounter.counterIncrease();

// myAnotherCounter.counterIncrease();
// myAnotherCounter.counterIncrease();
// const res = myLocalCounter.getCounter();
// const res2 = myAnotherCounter.getCounter();
// console.log("counter1", res);

// console.log("counter2", res2);

// console.log(res1, res2, res3);

// const counter = {
//  counter: 0,
//  counterIncrease() {
//   return this.counter++;
//  },
// };

// const objRes1 = counter.counterIncrease();
// const objRes2 = counter.counterIncrease();
// const objRes3 = counter.counterIncrease();

// console.log(objRes1, objRes2, objRes3);

// CACH
let counter = 0;

const fibo = (n) => {
 counter++;
 if (n < 2) {
  return n;
 }
 return fibo(n - 1) + fibo(n - 2);
};

const res = fibo(10);
console.log(
 "value: ",
 res,
 " function run times: ",
 counter
);

function cachValue(callback) {
 const localCach = {};

 return function () {
  const key = JSON.stringify(arguments);
  if (localCach[key]) {
   return localCach[key];
  } else {
   let val = callback.apply(null, arguments);
   localCach[key] = val;
   return val;
  }
 };
}

let counter2 = 0;

const fibo2 = cachValue((n) => {
 counter2++;
 if (n < 2) {
  return n;
 }
 return fibo2(n - 1) + fibo2(n - 2);
});

const res2 = fibo2(10);
console.log(
 "value: ",
 res,
 " function run times: ",
 counter2
);
