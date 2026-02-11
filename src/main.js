const URL = "https://v1.appbackend.io/v1/rows/ho6ZgFFSDulF";

async function getData(URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function main() {
  const todos = await getData(URL);

  if (todos.data.length === 0) {
    const info = document.createElement("h1");
    info.textContent = "No todos found";
    document.body.append(info);
  }
  todos.data.forEach((todo) => {
    const todoContainer = document.createElement("div");
    const nameContainer = document.createElement("h3");
    const ageContainer = document.createElement("h5");
    // const imageContainer = document.createElement("img");

    nameContainer.textContent = todo.name;
    ageContainer.textContent = todo.age;
    // imageContainer.src = todo.attachment;
    todoContainer.append(nameContainer, ageContainer);

    document.body.append(todoContainer);
  });
}

main();
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async () => {
  const nameValue = nameInput.value;
  const ageValue = ageInput.value;

  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ name: nameValue, age: ageValue }]),
  });
// fetch("https://v1.appbackend.io/v1/rows/ho6ZgFFSDulF", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify([{ name: "", age: "", attachment: "" }]),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

  window.location.reload();
});
