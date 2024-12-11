const nameInputField = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");
const deleteButton = document.getElementById("delete-btn");

const previousName = document.getElementById("previous-name");

const saveName = function () {
  const namevalue = nameInputField.value;

  localStorage.setItem("saved", namevalue);

  previousName.innerText = localStorage.getItem("saved");

  nameInputField.value = "";
};

saveButton.addEventListener("click", saveName);

const deleteItem = function () {
  if (localStorage.getItem("saved")) {
    localStorage.removeItem("saved");
    nameInputField.value = "";
    previousName.innerText = "";
  } else {
    alert("non hai alcun nome salvato!");
  }
};

deleteButton.addEventListener("click", deleteItem);

previousName.innerText = localStorage.getItem("saved");

//es2

const counterText = document.getElementById("counter");

let counter = sessionStorage.getItem("counter");

const timefunction = function () {
  counter++;

  sessionStorage.setItem("counter", counter);

  counterText.innerText = counter;
};

setInterval(timefunction, 1000);