/**
 * Rehype plugin: transforms blockquotes starting with "!pull" into pull quotes.
 *
 * Markdown input:
 *   > !pull
 *   > Alignment is a relation, not a property.
 */
import { visit } from 'unist-util-visit';
import { toText } from 'hast-util-to-text';

export default function rehypePullquotes() {
  return (tree: any) => {
    const bqs: any[] = [];
    visit(tree, 'element', (node: any) => {
      if (node.tagName === 'blockquote') bqs.push(node);
    });

    for (const node of bqs) {
      const text = toText(node).trim();
      if (!text.startsWith('!pull')) continue;

      // Remove the "!pull" marker from content
      for (const child of node.children) {
        if (child.type !== 'element' || child.tagName !== 'p') continue;
        for (let i = 0; i < child.children.length; i++) {
          const tn = child.children[i];
          if (tn.type === 'text' && tn.value.includes('!pull')) {
            tn.value = tn.value.replace(/^!pull\s*\n?/, '').replace(/!pull\s*/, '');
            if (!tn.value) child.children.splice(i, 1);
            break;
          }
        }
        break;
      }

      node.tagName = 'aside';
      node.properties = { className: ['pull-quote'] };
    }
  };
}
