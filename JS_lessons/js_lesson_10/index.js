// const debouncer = (callBack, timer) => {
//  let timeOutFunc;
//  return function () {
//   clearTimeout(timeOutFunc);
//   timeOutFunc = setTimeout(
//    () => callBack.apply(this, arguments),
//    timer
//   );
//  };
// };

// function getAnswer(value) {
//  console.log("answer for: ", value);
// }

// const myDebouncedAnswer = debouncer(getAnswer, 1000);

// const MyInput = document.getElementById("MyInput");

// const Test = document.getElementById("Test");

// MyInput.addEventListener("input", () => {
//  const myDataFromInput = MyInput.value;
//  Test.innerText = myDataFromInput;
//  //  getAnswer(myDataFromInput);

//  myDebouncedAnswer(myDataFromInput);
// });

let test = setInterval(() => console.log(123), 1000);
let test2 = setTimeout(() => console.log("test2"), 1000);
clearTimeout(test2, 500);
setTimeout(() => console.log("timeout 0"), 0);
setTimeout(() => clearInterval(test), 6000);

console.log("test");
console.log("test");
console.log("test");
console.log("test");
console.log("test");

/* ===================== HELPER CONTROLLER START ===================== */

function throtleAsk(callBack) {
 // myAsker - условный указател  для асинхронности setInterval
 let myAsker = setInterval(() => {
  // чему у меня равен stoper, callBack - универсал для прокидывания логики

  const stoper = callBack();

  // если stoper = true то myAsker будет остановлен
  if (stoper) clearInterval(myAsker);
 }, 1000);
}

/* ===================== HELPER CONTROLLER START ===================== */

/* ===================== ORDER CONTROLLER START ===================== */

// state values
const orderStatusReady = "ready";
const orderStatusNotReady = "not ready";

// state
let orderStatus = orderStatusNotReady;

// method
const setOrderStatusReady = () => {
 orderStatus = orderStatusReady;
};

const getOrderStatus = () => {
 return orderStatus;
};

/* ===================== ORDER CONTROLLER END ===================== */

/* ===================== ABSTACTS CONTROLLER START ===================== */

class Povar {
 orderHandler() {
  console.log("povar did:");
  setOrderStatusReady();
 }
}

class User {
 checkOrder() {
  console.log("user did:");
  return getOrderStatus();
 }
}

/* ===================== ABSTACTS CONTROLLER END ===================== */

/* ===================== LOGIC CONTROLLER START ===================== */

const myPovar = new Povar();

const myUser = new User();

setTimeout(() => {
 myPovar.orderHandler();
}, 5000);

const checkingLogic = () => {
 // то что мне нужно что бы крутилось
 let result = myUser.checkOrder();
 console.log(result);
 //  логика для остановки тротлинга
 if (result === orderStatusReady) return true;
 return false;
};

throtleAsk(checkingLogic);

/* ===================== LOGIC CONTROLLER START ===================== */
