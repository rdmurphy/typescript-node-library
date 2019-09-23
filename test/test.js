// native
const assert = require('assert').strict;

// local
const lib = require('../');

describe('project', () => {
  it('can import the library', () => {
    assert.ok(lib);
  });

  it('dummy function works', () => {
    assert.strictEqual(lib.square(4), 16);
  });
});
