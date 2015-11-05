/*! https://mths.be/tpyo v0.1.0 by @mathias | MIT license */
(function() {

	require('harmony-reflect');
	var Levenshtein = require('levenshtein');

	// inspired by @ultror’s http://jsfiddle.net/vGt8v/
	function getProperties(object, map) {
		// TODO: should we support `__proto__`?
		map || (map = {});

		Object.getOwnPropertyNames(object).forEach(function(property) {
			// Any truthy value would work here, but when `property` is `__proto__`,
			// the value must be either `null` (which is falsy) or an object. Hence,
			// `new Boolean(true)`.
			map[property] = new Boolean(true);
		});

		var proto = object.__proto__;
		if (proto) {
			getProperties(proto, map);
		}

		return Object.keys(map);
	}

	function findSimilarProperty(property, properties) {
		var lowestDistance = Infinity;
		return properties.reduce(function(previousValue, currentValue) {
			var distance = (new Levenshtein(currentValue, property)).distance;
			if (distance < lowestDistance) {
				lowestDistance = distance;
				return currentValue;
			}
			return previousValue;
		}, '');
	}

	function getProperty(target, name, receiver) {
		if (name in target) {
			return target[name];
		}
		// get all properties
		var properties = getProperties(target);
		// find the most similar-looking property name
		var closestProperty = findSimilarProperty(name, properties);
		//console.log('%s \u2192 %s', name, closestProperty);
		return target[closestProperty];
	}

	function tpyo(something) {
		return Proxy(something, {
			'get': getProperty
		});
	}

	tpyo.version = '0.1.0';

	module.exports = tpyo;
}());
