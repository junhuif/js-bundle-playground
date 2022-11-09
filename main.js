import * as lib from "./lib";

const app = document.createElement("div");
app.innerHTML = `
<div>
  5 + 6 = ${lib.add(5)(6)}
</div>
`;

const dom = document.querySelector("#app");
dom.append(app);
