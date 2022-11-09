(function () {
  'use strict';

  function add(n) {
    return (m) => n + m;
  }

  const app = document.createElement("div");
  app.innerHTML = `
<div>
  5 + 6 = ${add(5)(6)}
</div>
`;

  const dom = document.querySelector("#app");
  dom.append(app);

})();
