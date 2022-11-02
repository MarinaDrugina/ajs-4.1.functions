import checkHealth from '../app.js';

test('good health checking', () => {
  const characters = { name: 'Маг', health: 90 };
  const result = checkHealth(characters);
  expect(result).toBe('healthy');
});

test('normal health checking', () => {
  const characters = { name: 'Мечник', health: 10 };
  const result = checkHealth(characters);
  expect(result).toBe('critical');
});

test('bad health checking', () => {
  const characters = { name: 'Лучник', health: 45 };
  const result = checkHealth(characters);
  expect(result).toBe('wounded');
});
