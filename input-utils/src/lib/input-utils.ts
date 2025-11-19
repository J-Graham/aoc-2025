import { readFile } from 'fs/promises';
import { join } from 'path';

export async function readInput(day: string): Promise<string> {
  // Assuming data is stored in a 'data' directory at the workspace root
  const path = join(process.cwd(), 'data', `${day}.txt`);
  return readFile(path, 'utf-8');
}

export function parseLines(input: string): string[] {
  return input.trim().split('\n');
}

export function parseInts(input: string): number[] {
  return parseLines(input).map((line) => parseInt(line, 10));
}
