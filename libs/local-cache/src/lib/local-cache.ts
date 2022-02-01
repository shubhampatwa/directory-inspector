import * as NodeCache from 'node-cache';
import { TTL } from './constants';

export class LocalCache extends NodeCache {
  constructor(options: NodeCache.Options) {
    super({
      stdTTL: TTL,
      ...options
    })
  }
}
