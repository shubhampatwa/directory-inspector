import { resolve, sep } from 'path';
import { GQL_Files } from '@directory-inspector/typedefs';
import { lstat, readDir } from '../../utils/fsPromisified';

class FileExplorerService {
  static listFiles = async (filePath: string): Promise<GQL_Files[]> => {
    const files = await readDir(filePath);

    const promises: Promise<GQL_Files>[] = files.map(async (file: string) => {
      const path = resolve(filePath, file);
      const stats = await lstat(path);

      return {
        id: path,
        path,
        fileName: file,
        parsedPath: path.split(sep).filter(Boolean),
        size: stats.size,
        isDirectory: stats.isDirectory(),
      };
    });

    const allFiles = await Promise.all(promises);
    return allFiles;
  }
};

export default FileExplorerService;
