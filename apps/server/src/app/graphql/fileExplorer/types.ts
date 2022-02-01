import { gql } from "apollo-server-core";

const type = gql`
  extend type Query {
    files(offset: Int, limit: Int = 10): FilesPaginated
  }

  type FilesPaginated {
    entries: [FileNodes]!
    offset: Int!
    limit: Int!
    totalCount: Int!
  }

  type FileNodes {
    path: String!
    size: Int!
    isDirectory: Boolean!
    nodes: FileNode
  }

  type FileNode {
    path: String!
    size: Int!
    isDirectory: Boolean!
  }
`

export default type;
