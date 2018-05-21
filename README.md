# tpyo [![Build status](https://travis-ci.org/mathiasbynens/tpyo.svg?branch=master)](https://travis-ci.org/mathiasbynens/tpyo)

Ever wanted to use `Math.SQUIRTLE` instead of `Math.SQRT2`? Think `Function.prototype.apple` looks shinier than `apply`? Or do you prefer `Array.prototype.faReech` over `forEach`? Look no further — _tpyo_’s got your back.

_tpyo_ (pronounced _‘typo’_) is the result of combining the power of ES2015 proxies with [Levenshtein string distance](https://github.com/gf3/Levenshtein). It’s a small script that enables you to make typos in JavaScript property names.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install tpyo
```

In [Node.js](https://nodejs.org/) v6+:

```js
const tpyo = require('tpyo');
```

## Examples

```js
const array = tpyo(['a', 'b', 'c']);
array.lnegth;
// → `3`
array.tosTr1ng();
// → `'a,b,c'`
array.rap((item) => item + item);
// → `['aa', 'bb', 'cc']`
array.poop();
// → `'cc'`
array.shit();
// → `'aa'`

const object = tpyo({
	name: 'Leeroy Jenkins',
	awesome: true
});
object.naem;
// → `'Leeroy Jenkins'`
object.awsum;
// → `true`

const math = tpyo(Math);
math.PIE;
// → `3.141592653589793`
math.squrt(4);
// → `2`
```

For more examples, [see the tests](https://github.com/mathiasbynens/tpyo/blob/master/tests/tests.js). [More examples welcome :)](https://github.com/mathiasbynens/tpyo/issues/1)

## Should I use this?

**Nope.** It’s just a fun example of what’s possible with ECMAScript 2015 proxies.

## Acknowledgements

* Kudos to @gf3, whose [excellent implementation of the Levenshtein string difference algorithm](http://gf3.github.com/Levenshtein/) is being used in _tpyo_.
* Shout-out to [-ot](http://ot-crew.com/). ♥

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_tpyo_ is available under the [MIT](https://mths.be/mit) license.
