import { Route, Link } from 'react-router-dom';
import { FileExplorer } from '@directory-inspector/file-explorer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';


export function App() {
  return (
    <FileExplorer />
  );
}

export default App;
