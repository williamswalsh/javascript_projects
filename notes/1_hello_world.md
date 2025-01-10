

######### Google Chrome Console
alert("Hello World!")

######### Alert if value is "amazing"
let js = "amazing"
if(js === 'amazing') alert(js)


ES6 -> Ecmascript 6 -> Biggest update


### Calling JS from HTML file
```javascript
// Method 1 - inline script:
<script>
    console.log("Hello World!");
</script>

// Method 2 - script file - same folder:
<script src="script.js"></script>
```

### Types
- Number -> Float
- String -> "hi"
- Boolean -> true|false
- undefined -> let car; -> no value defined for variable
- null -> like undefined
- Symbol -> Unique value that can't be changed(Constant)
- BigInt -> for large integers

### Dynamic Typing
- **N.B.: A value has a type not the variable**
- variables don't have a type -> variable values can be changed(therefore the type can be changed)

### Template Literals (``)
const georgiaIntro = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;    

### Multi-line string with template literal
const multiLineString = `I am
a
multi-line
string.`;