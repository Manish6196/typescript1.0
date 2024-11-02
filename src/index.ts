import { sum } from './utils/sum';
import config from './data.json';

try {
  console.log(sum(1, 3), config.version);
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}
