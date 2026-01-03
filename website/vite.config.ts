import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import rehypePrism from '@mapbox/rehype-prism';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import valibotPackageJson from '../library/package.json';

function withQuote(value: unknown): string {
  return `"${value}"`;
}

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [
      qwikCity({
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: false,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          providerImportSource: '~/hooks/useMDXComponents.tsx',
          rehypePlugins: [
            // @ts-expect-error
            rehypePrism,
            [rehypeExternalLinks, { rel: 'noreferrer', target: '_blank' }],
          ],
        },
      }),
      qwikVite(),
      tsconfigPaths(),
      !isSsrBuild && nodePolyfills(),
      tailwindcss(),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    define: {
      'process.env.MY_UPDATED': withQuote(new Date().toISOString()),
      'process.env.MY_VERSION': withQuote(valibotPackageJson.version),
    },
  };
});
