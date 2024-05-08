// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';
//this imports the 5 functions that we are going to test, must have 4 test per with half failing half passing
// TODO - Part 2
test('Check valid phone number', () => {
  expect(isPhoneNumber('760-659-0098')).toBe(true);
});
test('Check another valid phone number', () => {
  expect(isPhoneNumber('760-659-0099')).toBe(true);
});
test('Check too short of a phone number', () => {
  expect(isPhoneNumber('760-659-009')).toBe(false);
});
test('Check too long of a phone number', () => {
  expect(isPhoneNumber('12309487123094871203497')).toBe(false);
});
//Email part
test('Check valid email', () => {
  expect(isEmail('example@gmail.com')).toBe(true);
});
test('Check another valid email', () => {
  expect(isEmail('test@other.com')).toBe(true);
});
test('Check invalid email', () => {
  expect(isEmail('thisIsNoEmail')).toBe(false);
});
test('Check invalid email', () => {
  expect(isEmail('123')).toBe(false);
});
//password tests
test('Check strong password', () => {
  expect(isStrongPassword('FJDLSEOCOQMCB')).toBe(true);
});
test('Check stronger password', () => {
  expect(isStrongPassword('AJSDJASJQCMDFD')).toBe(true);
});
test('Check weak password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});
test('Check another weak password', () => {
  expect(isStrongPassword('123')).toBe(false);
});
//test isDate
test('Check valid date', () => {
  expect(isDate('04/12/2023')).toBe(true);
});
test('Check valid date', () => {
  expect(isDate('06/21/2002')).toBe(true);
});
test('Check invalid date', () => {
  expect(isDate('abc')).toBe(false);
});
test('Check invalid date', () => {
  expect(isDate('123')).toBe(false);
});
//check isHexColor
test('Check valid date', () => {
  expect(isHexColor('#123452')).toBe(true);
});
test('Check valid date', () => {
  expect(isHexColor('#123')).toBe(true);
});
test('Check invalid date', () => {
  expect(isHexColor('bc')).toBe(false);
});
test('Check invalid date', () => {
  expect(isHexColor('1333')).toBe(false);
});
