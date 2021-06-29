/* eslint-disable no-undef */
import Validator from '../index';

const user1 = new Validator('You');
const user2 = new Validator('435_ewr');
const user3 = new Validator('asd-_435');
const user4 = new Validator('asd-_435555ewr');

test('only certain symbols', () => {
  expect(user1.validateUsername()).toBe(true);
});

test('does not start with a number or a symbol', () => {
  expect(user2.validateUsername()).toBe(false);
});

test('does not finish with a number or a symbol', () => {
  expect(user3.validateUsername()).toBe(false);
});

test('does not have more than 3 numbers in a row', () => {
  expect(user4.validateUsername()).toBe(false);
});
