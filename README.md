# How different import declarations affect the tree shaking

This is a playground that shows the different bundle result with different import declarations.

## [Named import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#named_import): `import { export1, export2 } from "module-name";`

```js
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
```

## [Default import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#default_import): `import defaultExport from "module-name";`


```js
(function () {
  'use strict';

  function add(n) {
    return (m) => n + m;
  }

  function subtract(n) {
    return (m) => n - m;
  }

  const basic = {
    add,
    subtract,
  };

  const app = document.createElement("div");
  app.innerHTML = `
<div>
  5 + 6 = ${basic.add(5)(6)}
</div>
`;

  const dom = document.querySelector("#app");
  dom.append(app);

})();
```


## [Namespace import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import): `import * as name from "module-name";`


```js
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
```