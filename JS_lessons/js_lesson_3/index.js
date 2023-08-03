const userInfo = {
 name: "Iskander",
 age: 26,
};

function getMyElFromDom(myClass, myText) {
 document.querySelector("." + myClass).innerHTML = myText;
}

getMyElFromDom("my_age", userInfo.age);
getMyElFromDom("my_name", userInfo.name);
