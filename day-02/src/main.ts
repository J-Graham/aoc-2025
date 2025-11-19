import { readInput } from '@aoc/input-utils';
import { solvePart1 } from './lib';

async function main() {
  try {
    const input = await readInput('day-02');
    console.log('Part 1:', solvePart1(input));
  } catch (e) {
    console.error(e);
  }
}

main();

