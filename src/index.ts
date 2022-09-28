import { v4 as uuidV4 } from "uuid"; // 'uuidV4' is declared but its value is never read.' not every library is written in ts so it will throw an that error.  Try `npm i --save-dev @types/uuid` to get types if there are any for the library

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null; // we have to specify the type of element
const input = document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  console.log(input.value);
  console.log(uuidV4());
});
