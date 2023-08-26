import faker from "faker";

const mount = (el) => {
  el.innerHTML = `
    <div>
      <h1>To-do List</h1>
      <ul id="list"></ul>
    </div>
    `;

  const list = document.querySelector("#list");
  for (let i = 1; i <= 10; i++) {
    const event = document.createElement("li");
    event.classList.add("event");
    event.innerText = faker.company.bs();
    list.appendChild(event);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    .event {
      border: 1px solid black;
      padding: 10px;
      margin: 10px;
      aspect-ratio: 1;
      display: inline-block;
    }
  `;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-list");
  if (el) {
    mount(el);
  }
}

export { mount };
