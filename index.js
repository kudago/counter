/**
 * Module dependencies.
 */

var domify = require('domify')
  , digit = require('./digit.html');

/**
 * Expose `Counter`.
 */

module.exports = Counter;


/**
 * Initialize a new `Counter`.
 *
 * @api public
 */

function Counter(el, options) {
  if (!(this instanceof Counter)) return new Counter(el, options);

  options = options || {};

  //container
  this.el = el || domify('<div class="counter"></div>');

  //save options
  this.digitClass = options.digitClass;

  //list of digit elements
  this._digits = [];

  //display value
  this.n = 0;

  //ensure two digits by default
  this.digits(options.digits || 2);
}


/**
 * Set the total number of digits to `n`.
 *
 * @param {Number} n
 * @return {Counter}
 * @api public
 */

Counter.prototype.digits = function(n){
  this.total = n;
  this.ensureDigits(n);
  return this;
};

/**
 * Add a digit element.
 *
 * @api private
 */

Counter.prototype.addDigit = function(){
  var el = domify(digit);

  if (this.digitClass) el.classList.add(this.digitClass);

  this._digits.push(el);
  this.el.appendChild(el);
};

/**
 * Ensure at least `n` digits are available.
 *
 * @param {Number} n
 * @api private
 */

Counter.prototype.ensureDigits = function(n){
  while (this._digits.length < n) {
    this.addDigit();
  }
};

/**
 * Update digit `i` with `val`.
 *
 * @param {Number} i
 * @param {String} val
 * @api private
 */

Counter.prototype.updateDigit = function(i, val){
  var el = this._digits[i];
  var n = parseInt(val, 10) + 1;
  if (n > 9) n = 0;

  el.textContent = val;
};

/**
 * Update count to `n`.
 *
 * @param {Number} n
 * @return {Counter}
 * @api public
 */

Counter.prototype.update = function(n){
  this.n = n;
  var str = n.toString();
  var len = str.length;
  var digits = Math.max(len, this.total);

  this.ensureDigits(len);
  for (var i = 0; i < len; ++i) {
    this.updateDigit(digits - i - 1, str[len - i - 1]);
  }

  return this;
};
