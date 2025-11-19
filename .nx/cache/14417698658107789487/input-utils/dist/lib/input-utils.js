import { readFile } from 'fs/promises';
import { join } from 'path';
export async function readInput(day) {
    // Assuming data is stored in a 'data' directory at the workspace root
    const path = join(process.cwd(), 'data', `${day}.txt`);
    return readFile(path, 'utf-8');
}
export function parseLines(input) {
    return input.trim().split('\n');
}
export function parseInts(input) {
    return parseLines(input).map((line) => parseInt(line, 10));
}
