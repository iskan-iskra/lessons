// const elContainer = document.querySelector(".container");
// const elMyBtn = document.querySelector(".myBtn");

// elContainer.addEventListener("click", () => {
//  console.log("container clicked");
// });

// elMyBtn.addEventListener("click", (event) => {
//  console.log("myBtn clicked");
//  event.stopPropagation();
// });

// document.addEventListener("click", () => {
//  console.log("click on browser");
// });

// const btnAdd = document.querySelector(".add");
// const btnRemove = document.querySelector(".remove");

// const elMyTodoContainer = document.querySelector(
//  ".myTodoContainer"
// );
// let counter = 0;

// const createEl = () => {
//  // ================
//  counter++;
//  const newEl = document.createElement("div");
//  newEl.innerText = "test" + counter;
//  newEl.classList.add("test");
//  elMyTodoContainer.prepend(newEl);

//  // ================
// };

// const removeEl = () => {
//  const reqElArray = document.querySelectorAll(".test");
//  reqElArray.forEach((el) => {
//   el.remove();
//  });
//  //  for (let i = 0; i < reqElArray.length; i++) {
//  //   elMyTodoContainer.remove(reqElArray[i]);
//  //  }
// };

// btnAdd.addEventListener("click", createEl);
// btnRemove.addEventListener("click", removeEl);

const elInput = document.querySelector(".myInput");

elInput.addEventListener("input", () => {
 console.log(elInput.value);
});

с;
