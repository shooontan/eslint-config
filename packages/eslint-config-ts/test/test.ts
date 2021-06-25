import { Tester } from '../../../test/utils';

describe('eslint-config-ts', () => {
  const type = 'ts';
  const extension = 'ts';

  const tester = new Tester(type);

  test('ok', async () => {
    const res = await tester.lintFile('ok', extension);
    expect(res).toStrictEqual([]);
  });

  test('warn', async () => {
    const res = await tester.lintFile('warn', extension);
    expect(res).toStrictEqual(['no-console', 'no-console']);
  });

  test('error', async () => {
    const res = await tester.lintFile('error', extension);
    expect(res).toStrictEqual([
      'simple-import-sort/imports',
      '@typescript-eslint/no-unused-vars',
      '@typescript-eslint/no-unused-vars',
      'default-param-last',
      '@typescript-eslint/no-unused-vars',
      '@typescript-eslint/no-unused-vars',
      'simple-import-sort/imports',
      'import/first',
      'import/first',
      '@typescript-eslint/no-unused-vars',
      'no-var',
      '@typescript-eslint/no-unused-vars',
    ]);
  });
});
