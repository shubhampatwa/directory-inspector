import { gql } from "apollo-server-core";

const type = gql`
  extend type Query {
    files(path: String!, offset: Int = 1, limit: Int = 10): FilesPaginated
  }

  type FilesPaginated {
    entries: [Files]!
    offset: Int!
    limit: Int!
    totalCount: Int!
  }

  type Files {
    id: String!
    path: String!
    size: Int!
    isDirectory: Boolean!
  }
`;

export default type;
