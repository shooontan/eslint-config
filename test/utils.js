import { ESLint } from 'eslint';
import fs from 'fs';
import path from 'path';

export class Tester {
  constructor(pkgType) {
    let pkgName = 'eslint-config';
    if (pkgType) {
      pkgName += `-${pkgType}`;
    }
    this.pkgName = pkgName;
    this.pkgTestDir = path.resolve(process.cwd(), 'packages', pkgName, 'test');
    this.eslint = this.setupESLint(this.pkgName);
  }

  setupESLint(pkgName) {
    const config = path.resolve(process.cwd(), 'packages', pkgName, 'index.js');
    const eslint = new ESLint({
      overrideConfigFile: config,
      ignore: false,
      useEslintrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    });
    return eslint;
  }

  async lintFile(testFile, extension = 'js') {
    const code = fs.readFileSync(
      path.resolve(this.pkgTestDir, `${testFile}.${extension}`),
      'utf8'
    );
    const res = await this.eslint.lintText(code);
    const messages = res.reduce((prev, curr) => {
      const messages = curr.messages.map((message) => message.ruleId);
      return [...prev, ...messages];
    }, []);
    return messages;
  }
}
