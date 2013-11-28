# tpyo [![Build status](https://travis-ci.org/mathiasbynens/tpyo.png?branch=master)](https://travis-ci.org/mathiasbynens/tpyo) [![Dependency status](https://gemnasium.com/mathiasbynens/tpyo.png)](https://gemnasium.com/mathiasbynens/tpyo)

Ever wanted to use `Math.SQUIRTLE` instead of `Math.SQRT2`? Think `Function.prototype.apple` looks shinier than `apply`? Or do you prefer `Array.prototype.faReech` over `forEach`? Look no further — _tpyo_’s got your back.

_tpyo_ is the result of combining the power of ES6 proxies with [Levenshtein string distance](https://github.com/gf3/Levenshtein). It’s a small script that enables you to make typos in JavaScript property names.

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install tpyo
```

In [Node.js](http://nodejs.org/):

```js
var tpyo = require('tpyo');
```

Make sure to run node with the `--harmony` flag:

```bash
node --harmony your-script-using-tpyo.js
```

## Examples

```js
var array = typo(['a', 'b', 'c']);
array.lnegth;
// → `3`
array.tosTr1ng();
// → `'a,b,c'`
array.fap(function(item) {
  return item + item;
});
// → `['aa', 'bb', 'cc']`
```

## Should I use this?

**Nope.** It’s just a fun example of what’s possible with ECMAScript 6 proxies.

## Acknowledgements

* Kudos to @gf3, whose [excellent implementation of the Levenshtein string difference algorithm](http://gf3.github.com/Levenshtein/) is being used in _tpyo_.
* Thanks to @tvcutsem for his work on ES6 proxies and for [his harmony-reflect shim](https://github.com/tvcutsem/harmony-reflect).
* Shout-out to [-ot](http://ot-crew.com/). ♥

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

_tpyo_ is available under the [MIT](http://mths.be/mit) license.
