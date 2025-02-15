# Javascript

### Language description

Javascript is a dynamically typed language.  
It runs on a single thread and it has an event loop.  
It supports OOP, functional programming & procedural programming.  
Its a interpreted or JIT compiled language.

JS used to be interpreted but is now JIT compiled.

### Structure

- Browser Runtime

  - JS Engine - V8
  - Web APIs
    - DOM
    - Timers
    - Fetch API
  - Callback Queue/event handler queue -> also called a callback
  - Event Loop
    - Takes callbacks from the callback queue -> puts them on call stack

- Node JS Runtime
  - JS Engine - Node
  - ~~Web APIs~~
    - ~~DOM~~
    - Timers
    - Fetch API
  - Callback Queue/event handler queue -> also called a callback
  - Event Loop
    - Takes callbacks from the callback queue -> puts them on call stack

### JS Engine

Executes JavaScript code.  
Each browser has its own JavaScript engine.  
Node has its own JavaScript engine.

Examples:

- V8 - Chrome
- Node.js

**Structure:**

- Call Stack
  - execution context
  - where the code is executed
- Heap - stores objects in memory

**Process:**

1. Code is submitted to engine
2. Engine parses code - creating an Abstract Syntax Tree(AST)
3. Compilation
   - AST is converted into machine code
4. Machine code is executed

Modern browsers create very unoptimized machine code is executed at beginning so that it can be executed.  
Then in background code is optimized and recompiled during the already running execution.
The more optimized machine code is then swapped with the less optimized.

## Execution context

Created during the creation phase:

- Has a **variable env**:
  - let, const, var
  - Fxs
  - 'arguments' object -> arguments = [7, 9];
- has a **Scope chain**
  - Contains references to vars outside of this scope
- Reference to the **this** keyword

## How is JS code executed?

1. Compilation:
2. Creation of global execution context -> top level code -> not code in function
   e.g. const name = "Georgia";  
    Execution context -> Evironment where JS is executed - stores necessary info for code execution.  
    Only ever 1 global context -> its where all top-level code executes
3. Execution of code in top level
4. Execution of fxs & waiting for callbacks
   - For each fx call -> new execution context is created
   - Event loop provides callback to call stack
5.

E
