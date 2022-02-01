import * as NodeCache from 'node-cache';
import { TTL } from './constants';

let instance: LocalCache;

export class LocalCache extends NodeCache {
  constructor(options: NodeCache.Options = {}) {
    super({
      stdTTL: TTL,
      ...options
    });
  }

  static getInstance = (): LocalCache => {
    if (!instance) {
      instance =  new LocalCache();
    }

    return instance;
  };
}
