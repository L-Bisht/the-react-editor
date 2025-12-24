import { TNode } from "../treeview.types";
import TreeItem from "../TreeItem";
import { Dispatch, SetStateAction } from "react";

type TProps = TNode & {
  expanded: Set<string>;
  parentId: string;
  depth: number;
  selected: string | null;
  toggle: (id: string) => void;
  select: Dispatch<SetStateAction<string | null>>;
  onNodeClick: (item?: TNode) => void;
};

const TreeNode = ({
  id,
  name,
  icon: icon,
  expandable,
  onNodeClick,
  parentId,
  depth,
  selected,
  childNodes,
  expanded,
  toggle,
  select,
}: TProps) => {
  const uniqueId = `${depth}-${parentId}-${id}`;
  const isExpanded = expanded.has(uniqueId);
  return (
    <>
      <TreeItem
        isExpanded={isExpanded}
        expandable={expandable}
        isSelected={uniqueId === selected}
        onClick={() => {
          toggle(uniqueId);
          select(uniqueId);
          onNodeClick();
        }}
        icon={icon}
        name={name}
        depth={depth}
      />

      {isExpanded &&
        childNodes?.map((node, i) => (
          <TreeNode
            parentId={id}
            depth={depth + 1}
            expanded={expanded}
            select={select}
            selected={selected}
            toggle={toggle}
            onNodeClick={(item) => onNodeClick(item || childNodes[i])}
            key={node.id}
            {...node}
          />
        ))}
    </>
  );
};

export default TreeNode;
