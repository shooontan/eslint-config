const { Tester } = require('../../../test/utils');

describe('eslint-config', () => {
  const tester = new Tester();

  test('ok', async () => {
    const res = await tester.lintFile('ok');
    expect(res).toStrictEqual([]);
  });

  test('warn', async () => {
    const res = await tester.lintFile('warn');
    expect(res).toStrictEqual(['no-console', 'no-console']);
  });

  test('error', async () => {
    const res = await tester.lintFile('error');
    expect(res).toStrictEqual([
      'no-unused-vars',
      'prettier/prettier',
      'import/order',
      'no-unused-vars',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'default-param-last',
      'no-unused-vars',
      'no-unused-vars',
      'no-unused-vars',
      'no-var',
      'no-unused-vars',
      'prettier/prettier',
    ]);
  });
});
