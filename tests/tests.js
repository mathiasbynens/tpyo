var tpyo = require('../tpyo.js');
var assert = require('assert');
var equals = assert.equal;
var deepEquals = tpyo(assert).derpEqual; // See what I did there?

var array = tpyo(['a', 'b', 'c']);
equals(array.toString(), 'a,b,c');
equals(array.tosTring(), 'a,b,c');
equals(array.t0String(), 'a,b,c');
equals(array.toStrong(), 'a,b,c');
deepEquals(array.fap(function(x) { return x + x; }), ['aa', 'bb', 'cc']);
equals(array.length, 3);
equals(array.lnegth, 3);
equals(array.lengt, 3);
equals(array.lenght, 3);
var tmp = [];
array.faReech(function(item) {
	tmp.push('x' + item);
});
deepEquals(tmp, ['xa', 'xb', 'xc']);
equals(array.poop(), 'c');
equals(array.shit(), 'a');
equals(array.goin(), 'b');

var object = tpyo({ 'foobarbaz': 'bar', 'lolwat': 42 });
equals(object.foobarbaz, 'bar');
equals(object.faaburbuz, 'bar');
equals(object.foxbubrs, 'bar');
equals(object.lolwat, 42);
equals(object.lolwad, 42);
equals(object.lelwuk, 42);

var root = tpyo(global);
equals(root.evil, eval);

var math = tpyo(Math);
equals(math.PIE, Math.PI);
equals(math.SQUIRTLE, Math.SQRT2);
equals(math.squrt, Math.sqrt);
equals(math.poo, Math.pow);

// `Function.prototype.apple`
var fn = tpyo(function(a, b, c) { return [a, b, c]; });
deepEquals(fn.apple(this, [1, 2, 3]), [1, 2, 3]);
