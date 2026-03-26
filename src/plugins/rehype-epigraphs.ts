/**
 * Rehype plugin: transforms blockquotes with em-dash attribution into epigraphs.
 */
import { visit } from 'unist-util-visit';

export default function rehypeEpigraphs() {
  return (tree: any) => {
    const bqs: any[] = [];
    visit(tree, 'element', (node: any) => {
      if (node.tagName === 'blockquote') bqs.push(node);
    });

    for (const node of bqs) {
      for (const child of node.children) {
        if (child.type !== 'element' || child.tagName !== 'p') continue;

        for (let i = child.children.length - 1; i >= 0; i--) {
          const tn = child.children[i];
          if (tn.type !== 'text') continue;

          const val: string = tn.value;
          const idx = val.lastIndexOf('\n\u2014');
          if (idx === -1) continue;

          const attribution = val.substring(idx + 1).replace(/^\u2014\s*/, '').trim();
          if (!attribution) continue;

          tn.value = val.substring(0, idx).trimEnd();
          if (!tn.value) child.children.splice(i, 1);

          const quoteKids = node.children.filter(
            (c: any) => !(c.type === 'text' && !c.value.trim())
          );

          node.tagName = 'div';
          node.properties = { className: ['epigraph'] };
          node.children = [
            {
              type: 'element',
              tagName: 'blockquote',
              properties: {},
              children: [
                ...quoteKids,
                {
                  type: 'element',
                  tagName: 'footer',
                  properties: { className: ['epigraph-attribution'] },
                  children: [{ type: 'text', value: `\u2014 ${attribution}` }],
                },
              ],
            },
          ];
          break;
        }
      }
    }
  };
}
