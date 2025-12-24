import { useState } from "react";

export default function useTreeState() {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((pre) => {
      const newSet = new Set(pre);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return {
    expanded,
    selected: selectedItemId,
    toggle,
    select: setSelectedItemId,
  };
}
