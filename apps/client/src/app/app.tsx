import { ApolloProvider } from "@apollo/client";
import apolloClient from "../config/apolloClient";
import Landing from "./pages/Landing";

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Landing />
    </ApolloProvider>
  );
}

export default App;
