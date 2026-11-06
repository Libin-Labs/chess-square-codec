import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('maps a1 to zero', () => {
  assert.equal(api.squareToIndex('a1'), 0);
});
test('maps h8 to sixty-three', () => {
  assert.equal(api.squareToIndex('h8'), 63);
});
test('round trips all board squares', () => {
  for (let i = 0; i < 64; i++) assert.equal(api.squareToIndex(api.indexToSquare(i)), i);
});
test('accepts uppercase file', () => {
  assert.equal(api.squareToIndex('E4'), api.squareToIndex('e4'));
});
test('mirrors both board axes', () => {
  assert.equal(api.mirrorSquare('e4'), 'd5');
});
test('rejects outside coordinate', () => {
  assert.throws(() => api.squareToIndex('i9'), TypeError);
});
