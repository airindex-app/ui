/* eslint-disable no-console */
/* eslint-disable no-undef */
import { build } from 'esbuild';

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/') {
      const html = await Bun.file('./playground/index-jsx.html').text();

      return new Response(html, {
        headers: { 'Content-Type': 'text/html' }
      });
    }

    if (url.pathname === '/demos/bundle.js') {
      try {
        const result = await build({
          bundle: true,
          define: {
            'process.env.NODE_ENV': '"development"'
          },
          entryPoints: ['./playground/index.tsx'],
          external: ['react', 'react-dom', 'react-dom/client'],
          format: 'esm',
          jsx: 'automatic',
          target: 'es2022',
          write: false
        });

        const js = result.outputFiles[0].text;

        return new Response(js, {
          headers: { 'Content-Type': 'application/javascript' }
        });
      } catch (error) {
        console.error('Playground transpilation error:', error);

        return new Response(`// Playground transpilation failed: ${error}`, {
          headers: { 'Content-Type': 'application/javascript' },
          status: 500
        });
      }
    }

    if (url.pathname === '/dist/index.js') {
      try {
        const js = await Bun.file('./dist/index.js').text();

        return new Response(js, {
          headers: { 'Content-Type': 'application/javascript' }
        });
      } catch {
        return new Response('Library not built. Run `bun run build` first.', { status: 404 });
      }
    }

    if (url.pathname.startsWith('/dist/')) {
      try {
        const file = Bun.file(`.${url.pathname}`);

        return new Response(file);
      } catch {
        return new Response('File not found', { status: 404 });
      }
    }

    return new Response('Not found', { status: 404 });
  },
  port: 420
});

console.log(`🚀 Playground server running at http://localhost:${server.port}`);
console.log('📦 Run `bun run build` first to build the library');
console.log('✨ Using Bun + esbuild for fast bundling');
