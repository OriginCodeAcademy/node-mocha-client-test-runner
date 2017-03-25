# Node Test Runner

This is an example of loading client side script into a JSDOM and testing on a node server.

---

## Installation

Installation: `npm install`

---

## Usage

* Run the index.js using babel node: `babel-node .`
* It will load the script in the `src` folder and then all the `*spec.js` files in the `test` folder.
* Events will be emitted that could be used to calculate pass and fails.
* JQuery or other libraries could be added to make more complex assertions.

---

## Tests

Run tests using Mocha: `npm test`

---

## Helpful References

[Setting up JSDOM context](https://github.com/tmpvar/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global)
[Mocha Programmatically](https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically)
[Babel](http://jamesknelson.com/writing-npm-packages-with-es6-using-the-babel-6-cli/)
