import fs from 'fs';
import path from 'path';

import {} from '../number';
import {} from '../string';
import {} from '.';

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
