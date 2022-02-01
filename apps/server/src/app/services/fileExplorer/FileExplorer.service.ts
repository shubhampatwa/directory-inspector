import { resolve } from 'path';
import { lstat, readDir } from '../../utils/fsPromisified';

class FileExplorerService {
  static listFiles = async (filePath: string) => {
    const files = await readDir(filePath);

    const promises = files.map(async (file) => {
      const path = resolve(filePath, file);
      const stats = await lstat(path);

      return {
        path,
        size: stats.size,
        isDirectory: stats.isDirectory(),
      };
    });

    const allFiles = await Promise.all(promises);
    return {
      files: allFiles,
      total: allFiles.length,
    };
  }
};

export default FileExplorerService;
