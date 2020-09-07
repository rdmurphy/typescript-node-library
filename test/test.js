// packages
const { test } = require('uvu');
const assert = require('uvu/assert');

// local
const lib = require('../');

test('can import the library', () => {
	assert.ok(lib);
});

test('dummy function works', () => {
	assert.equal(lib.square(4), 16);
});

test.run();
