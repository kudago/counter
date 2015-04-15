# Counter

  Counter component.

  ![js apple style countdown counter component](http://f.cl.ly/items/2z262b1p0o2O08381N25/Screen%20Shot%202012-08-12%20at%205.42.56%20PM.png)

## Installation

```
$ npm i component-counter
```

## API

### new Counter([element], [options])

Initialize a new counter on an optional element with optional options.

```js
var Counter = require('component-counter');
var counter = new Counter();
document.documentElement.appendChild(counter.el);
```

#### Options

##### digitClass

A class to add to each digit.

### digits

Initial digits number to create.


### Counter.prototype.digits(n)

Set the total number of digits to `n`.


### Counter.prototype.addDigit()

Add a digit element.


### Counter.prototype.ensureDigits()

Ensure at least `n` digits are available.


### Counter.prototype.updateDigit(i, val)

Update digit `i` with `val`.


### Counter.prototype.update(n)

Update count to `n`.


## License

  MIT