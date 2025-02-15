// In strict mode - fxs are block scoped - printSomething call fails.
// In sloppy mode - fxs are fx scoped - printSomething call succeeds.
"use strict";

{
  function printSomething() {
    console.log("Something to print");
  }
}

printSomething();
