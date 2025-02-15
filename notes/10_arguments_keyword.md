# arguments keyword

```javascript
const greet = function (firstName, lastName) {
  console.log(arguments);
  console.log(firstName + " " + lastName);
};
greet("Georgia", "Barrington-Smith");
```

<details>
  <summary>Arguments</summary>

```json
[Arguments] { '0': 'Georgia', '1': 'Barrington-Smith' }
```

</details>
<br />
<br />

```javascript
const greet = (firstName, lastName) => {
  console.log(arguments);
  console.log(firstName + " " + lastName);
};
```

<details>
  <summary>Arrow Fx Arguments - surrounding scope arguments</summary>

```json
[Arguments] {
'0': {},
'1': [Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/Users/legoman/code/javascript_course/notes',
    exports: {},
    filename: '/Users/legoman/code/javascript_course/notes/var_undefined_upon_initialisation.js',
    loaded: false,
    children: [],
    paths: [Array]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    '/Users/legoman/code/javascript_course/notes/var_undefined_upon_initialisation.js': [Module]
  }
},
'2': Module {
  id: '.',
  path: '/Users/legoman/code/javascript_course/notes',
  exports: {},
  filename: '/Users/legoman/code/javascript_course/notes/var_undefined_upon_initialisation.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/legoman/code/javascript_course/notes/node_modules',
    '/Users/legoman/code/javascript_course/node_modules',
    '/Users/legoman/code/node_modules',
    '/Users/legoman/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
},
'3': '/Users/legoman/code/javascript_course/notes/var_undefined_upon_initialisation.js',
'4': '/Users/legoman/code/javascript_course/notes'
}
```

</details>
