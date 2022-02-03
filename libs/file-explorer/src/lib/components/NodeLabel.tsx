import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NodeLabelProps, FileNode } from '../types'

const prepareNodeLabel = (node: FileNode, parent?: FileNode) => node.path.replace(`${parent?.path}/` || '', '')

const NodeLabel = (props: NodeLabelProps) => (
  <Box display='flex'>
    <Box flexGrow={1} component={Typography}>{prepareNodeLabel(props.node, props.parent)}</Box>
    {!!props.node.size && <Box mr={1} component={Typography}>{props.node.size}</Box>}
  </Box>
);

export default NodeLabel;
