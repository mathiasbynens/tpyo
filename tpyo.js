/*! https://mths.be/tpyo v0.1.0 by @mathias | MIT license */
(function() {
	'use strict';

	require('harmony-reflect');
	const Levenshtein = require('levenshtein');

	// inspired by @ultror’s http://jsfiddle.net/vGt8v/
	const getProperties = function(object, map) {
		// TODO: should we support `__proto__`?
		map || (map = {});

		for (const property of Object.getOwnPropertyNames(object)) {
			// Any truthy value would work here, but when `property` is `__proto__`,
			// the value must be either `null` (which is falsy) or an object. Hence,
			// `new Boolean(true)`.
			map[property] = new Boolean(true);
		}

		const proto = object.__proto__;
		if (proto) {
			getProperties(proto, map);
		}

		return Object.keys(map);
	};

	const findSimilarProperty = function(property, properties) {
		let lowestDistance = Infinity;
		return properties.reduce(function(previousValue, currentValue) {
			const distance = (new Levenshtein(currentValue, property)).distance;
			if (distance < lowestDistance) {
				lowestDistance = distance;
				return currentValue;
			}
			return previousValue;
		}, '');
	};

	const getProperty = function(target, name, receiver) {
		if (name in target) {
			return target[name];
		}
		// Get all properties.
		const properties = getProperties(target);
		// Find the most similar-looking property name.
		const closestProperty = findSimilarProperty(name, properties);
		//console.log('%s \u2192 %s', name, closestProperty);
		return target[closestProperty];
	};

	const tpyo = function(something) {
		return Proxy(something, {
			'get': getProperty
		});
	};

	tpyo.version = '0.1.0';

	module.exports = tpyo;
}());
