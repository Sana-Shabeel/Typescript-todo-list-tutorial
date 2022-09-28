const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null; // we have to specify the element
const input = document.querySelector<HTMLInputElement>("#new-task-title");
