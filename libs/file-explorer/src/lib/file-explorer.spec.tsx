import { render } from '@testing-library/react';

import FileExplorer from './file-explorer';

describe('FileExplorer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileExplorer />);
    expect(baseElement).toBeTruthy();
  });
});
