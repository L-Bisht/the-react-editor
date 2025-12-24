import { TNode } from "./treeview.types";
import TreeNode from "./TreeNode";
import useTreeState from "./useTreeState";

type TProps = {
  nodes: TNode[];
  onNodeClick: (node: TNode) => void;
};

const TreeView = ({ nodes, onNodeClick }: TProps) => {
  const { expanded, toggle, select, selected } = useTreeState();
  return (
    <div className="w-full h-full overflow-y-auto">
      {nodes.map((node, i) => (
        <TreeNode
          expanded={expanded}
          toggle={toggle}
          select={select}
          selected={selected}
          key={node.id}
          parentId="0"
          depth={1}
          onNodeClick={(item) => onNodeClick(item || nodes[i])}
          {...node}
        />
      ))}
    </div>
  );
};

export default TreeView;
