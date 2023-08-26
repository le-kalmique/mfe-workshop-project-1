const mount = (el) => {
  el.innerHTML = `
    <div>
      <h1>Calendar</h1>
      <div id="calendar"></div>
    </div>
    `;

  const calendar = document.querySelector("#calendar");
  for (let i = 1; i <= 31; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerText = i;
    calendar.appendChild(day);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    .day {
      border: 1px solid black;
      padding: 10px;
      margin: 10px;
      aspect-ratio: 1;
      display: inline-block;
    }

    #calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  `;
  el.appendChild(style);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-calendar");
  if (el) {
    mount(el);
  }
}

export { mount };
