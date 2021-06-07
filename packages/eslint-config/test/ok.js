import {} from 'eslint';
import fs from 'fs';
import path from 'path';

import {} from '../../../test/fixtures/number';
import {} from '../../../test/fixtures/string';

fs.readFileSync(path.resolve(__dirname, 'string.js'));

export function noop() {}

const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

(async () => {
  await sleep(100);
})();
