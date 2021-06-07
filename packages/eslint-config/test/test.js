import { Tester } from '../../../test/utils';

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
      'simple-import-sort/imports',
      'no-unused-vars',
      'no-unused-vars',
      'default-param-last',
      'no-unused-vars',
      'no-unused-vars',
      'simple-import-sort/imports',
      'import/first',
      'import/first',
      'no-unused-vars',
      'no-var',
      'no-unused-vars',
    ]);
  });
});
