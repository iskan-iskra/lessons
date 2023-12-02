const getUserUrl =
 "https://jsonplaceholder.typicode.com/users";

const loader = document.getElementById("Loader");

const button = document.getElementById("Button");

const wrapper = document.getElementById("Wrapper");

const loaderStatusLaoding = "Ожидаю ответ от сервера";

const loaderStatusNotLoading = "Нечего не ожидаю";

const loaderStatusError = "Ошибка";

loader.innerText = loaderStatusNotLoading;

const getUserData = async () => {
 try {
  wrapper.innerHTML = "";

  button.disabled = true;

  loader.innerText = loaderStatusLaoding;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(getUserUrl);

  if (res.status !== 200) {
   throw new Error("Error with server");
  }

  const resultData = await res.json();

  myCustomRender(resultData);

  loader.innerText = loaderStatusNotLoading;
 } catch (error) {
  console.log(error);

  loader.innerText = loaderStatusError;
 } finally {
  button.disabled = false;
 }
};

const myCustomRender = (userArray) => {
 userArray.forEach((user) => {
  const el = document.createElement("div");
  el.innerHTML = `<div><span>Имя: </span>${user.name}</div><div><span>Почта: </span>${user.email}</div><div><span>Телефон: </span>${user.phone}</div>`;
  wrapper.appendChild(el);
 });
};

button.addEventListener("click", getUserData);
