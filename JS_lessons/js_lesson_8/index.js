// const localUser = {
//  name: "John",
//  age: 18,
// };

// const adminData = {
//  adminName: "Admin",
//  adminSetting: {
//   name: "Tetst",
//   password: "123",
//  },
// };

// let array1 = [1, 2, 3];
// let array2 = ["test", "test"];

// array1 = array1.concat(array2);
// // console.log(array1);

// const obj1 = {
//  name: "Iskander",
// };
// const obj2 = {
//  age: 26,
// };

// // Object.assign(obj1, obj2);
// // console.log(obj1);
// // console.log(obj2);

// const copyObj1 = Object.assign({}, obj1);
// copyObj1.name = "test";

// console.log(copyObj1);
// console.log(obj1);

// // // Object.assign(localUser, adminData);

// // // adminData.adminSetting.name = "Я тут поменял";

// // // console.log(localUser, adminData);

// // const myNewObject = { ...adminData };

// // const myNewObjectKeys = Object.entries(myNewObject);

// // myNewObjectKeys.forEach((el) => {
// //  if (typeof el[1] === "object") {
// //   myNewObject[el[0]] = { ...myNewObject[el[0]] };
// //  }
// // });

// // adminData.adminSetting.name = "asd";

// // // console.log(myNewObject);
// // // console.log(adminData);

// // const frozenObject = Object.freeze(myNewObject);

// // frozenObject["test3"] = "test3";

// // myNewObject["test3"] = "test3";

// // console.log(frozenObject);
// // console.log(myNewObject);

// const obj1 = {
//  name: "Iskander",
//  age: 26,
// };

// const copyObj1 = {};
// Object.assign(copyObj1, copyObj1);

// copyObj1.age = 123;

// console.log(obj1);
// console.log(copyObj1);

// const myCustomMap = new Map();
// myCustomMap.set("myName", "asdasda");
// myCustomMap.set("myAge", "123");
// const res = myCustomMap.get("myName");
// myCustomMap.delete("myName");
// const hasMyName = myCustomMap.has("myName");
// const myMapSize = myCustomMap.size;

// const myObj = {
//  name: "test",
//  age: 12,
// };

// localStorage.setItem("myObj", true);
// const resFromLocalStorage = localStorage.getItem("myObj");

// console.log(typeof resFromLocalStorage);

// class Animal {
//  run = () => {
//   console.log("run");
//  };
// }

// class Rabit extends Animal {
//  jump = () => {
//   console.log("jump");
//  };
// }

// const rabit = new Rabit();

class Car {
 constructor(mark) {
  this.mark = mark;
 }

 getMark = () => {
  return this.mark;
 };
}

class Bmw extends Car {
 constructor(model) {
  super("BMW");
  this.model = model;
 }
 getModel = () => {
  return this.model;
 };

 getFullName = () => {
  const res = this.getMark() + " " + this.getModel();
  console.log(res);
 };

 static getStaticMethod = () => {
  console.log(123123);
 };
}

Bmw.getStaticMethod();

const bmwX5 = new Bmw("X5");

const bmwX6 = new Bmw("X6");
