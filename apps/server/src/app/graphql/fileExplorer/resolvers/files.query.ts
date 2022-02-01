import FileExplorerService from '../../../services/fileExplorer/FileExplorer.service';

export const queryFilesPaginated = async (_, { path, pageNo, limit }) => {
  if (pageNo < 1) {
    throw new Error('Invalid pageNo: Can\'t be `0` or Negative value');
  }

  if (limit < 1) {
    throw new Error('Invalid limit: Can\'t be `0` or Negative value');
  }

  const { files, total } = await FileExplorerService.listFiles(path);
  return {
    entries: files,
    totalCount: total,
  };
};
