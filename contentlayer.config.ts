// contentlayer.config.js

import { remarkCodeHike } from '@code-hike/mdx';
import rehypeToc from '@jsdevtools/rehype-toc';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import theme from './src/theme/dracula';

export const Draft = defineDocumentType(() => ({
  name: 'Draft',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  computedFields: {
    url: {
      type: 'string',
      resolve: (draft) => {
        if (draft._raw.flattenedPath === 'guide') return '/';
        return `/${draft._raw.flattenedPath}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/draft',
  documentTypes: [Draft],
  mdx: {
    remarkPlugins: [
      [remarkCodeHike, { theme, lineNumbers: false, showCopyButton: true }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        // @ts-ignore
        rehypeToc,
        {
          headings: ['h2', 'h3'],
        },
      ],
    ],
  },
});
