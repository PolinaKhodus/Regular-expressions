import Validator from '../Nicknames';

test('подтверждение 0-9 a-z _ -', () => {
  const username = 'instance1for_unit-test';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('подтверждение 3 цифр', () => {
  const username = 'instance123for_unit-test';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('4 цифры должны быть ложными', () => {
  const username = 'instance1234for_unit-test';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['example%test'],
  ['example!test'],
  ['example;test'],
  ['example.test']])(
  ('спецификации должны быть ложными'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);

test.each([
  ['0instance1for_unit-test'],
  ['instance1for_unit-test1'],
  ['-instance1for_unit-test'],
  ['instance1for_unit-test-'],
  ['_instance1for_unit-test'],
  ['instance1for_unit-test_']])(('не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире'), (str) => {
  expect(Validator.validateUsername(str)).toBeFalsy();
});
