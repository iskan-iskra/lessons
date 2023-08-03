// const user = {
//  name: "Iskander",
//  age: 27,
// };

// const admin = {
//  name: "Not Iskander",
//  age: 45,
// };

// function getName(title, title2, title3) {
//  console.log("the title2 is ", title2);
//  console.log('title3": ', title3);
//  console.log(title, this.name);
// }

// const userGetName = getName.bind(
//  user,
//  "The name of user is ",
//  "test"
// );
// const adminGetName = getName.bind(
//  admin,
//  "The name of admin is ",
//  "test2"
// );

// userGetName();
// adminGetName();
// const myArgumentsArray = ["the name of user is", "test"];
// myArgumentsArray.push("test3");

// getName.apply(user, myArgumentsArray);

// getName.call(
//  admin,
//  "the name of admin is ",
//  "test2",
//  "123"
// );

// const myObject = {
//  name: "test",

//  findName() {
//   console.log(this.name);
//  },
// };

// function getObjectName() {
//  console.log(this.name);
// }

// const getMyObjectName = getObjectName.bind(myObject);

// getMyObjectName();

// getObjectName.apply(myObject);

// myFunction.bind(myObj)();
/* =================== ARGUMENTS =================== */

// const myFunction = ({ name, age }) => {
//  console.log("name", name);
//  console.log("age", age);
// };

// const iskander = {
//  name: "iskander",
//  age: 26,
// };
// myFunction(iskander);
/* =================== CALLBACK =================== */

const myCar = (engine) => {
 let resFromBack = "This is car and it uses ";
 if (engine) return engine(resFromBack);
 return "this car has not got engine";
};

const oilEngine = (text) => {
 // some mech
 return text + "oil";
};

const electrickEngine = (text) => {
 // some mech
 return text + "electricity";
};

const emptyCar = myCar();
const iskandersCar = myCar(oilEngine);
const alikhansCar = myCar(electrickEngine);

const myArray = [1, 2, 3, 4, 5];

const everyElemntHandler = (elemnt) => elemnt + 1;

const myCustomMap = (array, callback) => {
 const result = [];
 for (let i = 0; i < array.length; i++) {
  result.push(callback(array[i]));
 }
 return result;
};

const resultArray = myCustomMap(
 myArray,
 everyElemntHandler
);

const everyElemntHandler2 = (elemnt) => elemnt + 10;
const resultArray2 = myCustomMap(
 myArray,
 everyElemntHandler2
);

console.log(resultArray);
console.log(resultArray2);
// console.log(emptyCar);
// console.log(iskandersCar);
// console.log(alikhansCar);

/* =================== КОРРИРОВАНИЕ =================== */

/* =================== ЗАМЫКАНИЕ =================== */
