// setTimeout(() => {
//  console.log("asked server");

//  setTimeout(() => {
//   const res = {
//    data: "test",
//   };

//   console.log("server answer", res);
//  }, 2000);
// }, 2000);

function throtleAsk(callBack, ms) {
 // myAsker - условный указател  для асинхронности setInterval
 let myAsker = setInterval(() => {
  // чему у меня равен stoper, callBack - универсал для прокидывания логики

  const stoper = callBack();

  // если stoper = true то myAsker будет остановлен
  if (stoper) clearInterval(myAsker);
 }, ms);
}

const order = new Promise((resolve, reject) => {
 const res = {
  productList: ["pizza", "cocacola"],
 };
 setTimeout(() => {
  resolve(res);
 }, 2000);

 setTimeout(() => {
  reject("ЗАКАЗ СЛИШКОМ ДОЛГО ДОСТАВЛЯЛИ");
 }, 3000);
});

let isWatting = false;

function getOrder() {
 isWatting = true;
 order
  .then((res) => console.log(res.productList))
  .catch((e) => console.log(e))
  .finally(() => {
   isWatting = false;
  });
}

const myStatus = () => {
 if (isWatting) {
  console.log("я ожидаю заказ");
 }
 return !isWatting;
};

const getOrder2 = async () => {
 try {
  isWatting = true;
  let res = await order;
  console.log(res);
  res = "test";
  console.log(res);
 } catch (error) {
  console.log(error);
 } finally {
  isWatting = false;
 }
};

getOrder2();
throtleAsk(myStatus, 250);

// new Promise(() => {
//  setTimeout(() => {
//   console.log("asked server promis");
//  }, 2000);
// })

// .then(() => {
//   setTimeout(() => {
//    const res = {
//     data: "test promis",
//    };

//    console.log("server answer promis", res);
//   }, 2000);
//  });
