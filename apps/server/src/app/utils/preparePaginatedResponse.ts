import { GQL_Files, GQL_FilesPaginated } from "@directory-inspector/typedefs";

/**
 * This function prepares pagination details
 *
 * @param {GQL_Files[]} files Number of the page
 * @param {Number} offset Number of entries to skip
 * @param {Number} limit Max number of entries to return
 */
 const preparePaginatedResponse = (files: GQL_Files[], offset: number, limit: number): GQL_FilesPaginated => {
    return {
      limit,
      offset,
      entries: files.slice(offset, offset + limit),
      totalCount: files.length,
    };
  };

  export default preparePaginatedResponse;
