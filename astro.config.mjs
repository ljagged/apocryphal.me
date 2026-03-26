// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypeEpigraphs from './src/plugins/rehype-epigraphs.ts';
import rehypePullquotes from './src/plugins/rehype-pullquotes.ts';
import rehypeSidenotes from './src/plugins/rehype-sidenotes.ts';

export default defineConfig({
  site: 'https://apocryphal.me',
  adapter: cloudflare(),
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeEpigraphs, rehypePullquotes, rehypeSidenotes],
  },
});
