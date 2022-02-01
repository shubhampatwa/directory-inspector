import { readdir, lstat as fsLstat } from 'fs';
import { promisify } from 'util'

export const readDir = promisify(readdir);
export const lstat = promisify(fsLstat);
