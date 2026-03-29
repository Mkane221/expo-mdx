import type { Element, Root } from "hast";
import { visit, SKIP } from "unist-util-visit";

/**
 * Rename `<code>` elements that are NOT inside a `<pre>` to `inlineCode`.
 * This allows MDX consumers to style inline code differently from block code
 * without relying on the removed `parentName` prop from MDX v1/v2.
 */
export function rehypeInlineCode() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, _index, parent) => {
      if (
        node.tagName === "code" &&
        (parent as Element | undefined)?.tagName !== "pre"
      ) {
        node.tagName = "inlineCode";
        return SKIP;
      }
      return undefined;
    });
  };
}
