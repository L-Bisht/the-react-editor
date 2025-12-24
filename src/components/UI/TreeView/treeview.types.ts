import { LucideIcon } from "lucide-react";

export type TNodeMetaData = {
  [key: string]: unknown;
};

export type TNode = {
  id: string;
  name: string;
  icon?: LucideIcon;
  expandable?: boolean;
  childNodes?: TNode[];
  metaData?: TNodeMetaData;
};
