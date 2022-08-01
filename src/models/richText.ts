export type NodeType = "document" | "paragraph" | "heading-6";

interface Content {
  content: {
    value: string;
  };
  nodeType: NodeType;
}
export interface RichText {
  json: {
    content: Content[];
  };
}
