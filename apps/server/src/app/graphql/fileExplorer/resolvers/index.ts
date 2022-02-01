import { queryFilesPaginated } from './files.query';

const resolvers = {
  Query: {
    files: queryFilesPaginated,
  },
};

export default resolvers;
