import { localCache } from './local-cache';

describe('localCache', () => {
  it('should work', () => {
    expect(localCache()).toEqual('local-cache');
  });
});
