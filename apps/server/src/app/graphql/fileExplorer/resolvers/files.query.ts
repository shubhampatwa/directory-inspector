import { LocalCache } from '@directory-inspector/local-cache';
import { GQL_FilesPaginated, GQL_QueryFilesArgs, GQL_Files } from '@directory-inspector/typedefs';
import FileExplorerService from '../../../services/fileExplorer/FileExplorer.service';
import preparePaginatedResponse from '../../../utils/preparePaginatedResponse';


export const queryFilesPaginated = async (
  _,
  { path, offset, limit }: GQL_QueryFilesArgs
): Promise<GQL_FilesPaginated> => {
  if (offset < 0) {
    throw new Error('Invalid offset: Can\'t be a negative value');
  }

  if (limit < 1) {
    throw new Error('Invalid limit: Can\'t be `0` or Negative value');
  }

  const cache = LocalCache.getInstance();
  let allFiles = cache.get<GQL_Files[]>(path);

  console.debug('Cache Hit? => ', !!allFiles);
  if (!allFiles?.length) {
    allFiles = await FileExplorerService.listFiles(path);
    try {
      cache.set<GQL_Files[]>(path, allFiles);
    } catch (error) {
      console.debug(`Writing to cached failed for path: ${path}`);
      console.error(error);
    }
  }

  const files = allFiles.slice();
  return preparePaginatedResponse(files, offset, limit);
};
