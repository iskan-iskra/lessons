const initialArray = [
 {
  product: "Test1",
  price: 23,
 },
 {
  product: "error",
  price: 25,
 },
 {
  product: "Test3",
  price: 21,
 },
];

const arrayOfNames = initialArray.map((el) => el.product);
const arrayOfCosts = initialArray.map((el) => el.price);

// initialArray.forEach((el) => {
//  const newDiv = document.createElement("div");
//  newDiv.innerText = el.name;
//  const domBody = document.querySelector("body");
//  domBody.appendChild(newDiv);
// });

const totalCost = arrayOfCosts.reduce((acc, cur) => {
 return acc + cur;
}, 0);

const filteredArray = initialArray.filter(
 (el) => el.product !== "error"
);

initialArray.sort((a, b) => b.price - a.price);

// console.log(initialArray);

const arrayOfFilers = [
 {
  filterName: "byCost1",
  isActive: false,
 },
 {
  filterName: "byCost2",
  isActive: false,
 },
 {
  filterName: "byCost3",
  isActive: true,
 },
 {
  filterName: "byCost4",
  isActive: false,
 },
 {
  filterName: "byCost5",
  isActive: false,
 },
];

const isFilterActivated = arrayOfFilers.some(
 (el) => el.isActive === true
);
// console.log(isFilterActivated);

const isAllFiltersActivated = arrayOfFilers.every(
 (el) => el.isActive === true
);

// console.log(isAllFiltersActivated);
const arrayOfStudents = ["Adasdsd", "Ssdasd", "Bfdgdg"];

const reqStringOfStudentsName = arrayOfStudents.join(" & ");

const reqEl = arrayOfFilers.find(
 (el) => el.isActive === true
).filterName;

console.log(arrayOfFilers);
console.log(reqEl);
