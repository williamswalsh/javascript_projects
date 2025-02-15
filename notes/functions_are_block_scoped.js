// Toggle strict mode to see changing behavior
"use strict";

{
  const a = 10;

  function test() {
    console.log("This fx is not block scoped when strict mode is disabled.");
  }
}

// This fx is block scoped when strict mode is enabled
test(); // ReferenceError when 'use strict';

// ----------------------------------------------------------------
let out = 1;
{
  //   var out = 1; // fx scoped -> no fx -> ends up being global scoped - variable collision
  const out = 1; // block scoped no collision
}
