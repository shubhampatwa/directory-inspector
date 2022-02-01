import { ApolloProvider } from "@apollo/client";
import { FileExplorer } from '@directory-inspector/file-explorer'
import apolloClient from "../config/apolloClient";

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <FileExplorer />
    </ApolloProvider>
  );
}

export default App;
