const fs = require('fs');
const path = require('path');

const { ESLint } = require('eslint');

class Tester {
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
    const eslint = new ESLint({
      overrideConfigFile: path.resolve(
        process.cwd(),
        'packages',
        pkgName,
        'index.js'
      ),
      ignore: false,
      useEslintrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    });
    return eslint;
  }

  async lintFile(testFile) {
    const code = fs.readFileSync(
      path.resolve(this.pkgTestDir, `${testFile}.js`),
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

module.exports = {
  Tester,
};
