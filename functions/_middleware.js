/**
 * Cloudflare Pages Middleware — sensitive-file guard (Layer 2 of 2).
 *
 * Keeps The Equation Agency's internal work private. Source docs, handoffs,
 * build config, DB schema, dependency manifests, internal tooling, and dotfiles
 * must never be publicly downloadable from the deployed site. This runs before
 * the static asset server on every request and hard-404s any such path — a
 * defense-in-depth backstop behind .assetsignore (Layer 1).
 *
 * Legitimate public assets pass straight through untouched: *.html, css, js,
 * images, fonts, robots.txt, sitemap.xml, web manifests, and /.well-known/*.
 */

// Internal-only file extensions — never served publicly.
const BLOCKED_EXT = /\.(md|markdown|mdx|toml|ya?ml|ini|conf|cfg|env|lock|log|bak|old|orig|swp|sql|example|sample|dist|tmpl|template|py|pyc|rb|sh|bash|zsh|pl|php|ps1|bat|cmd)$/i;

// Internal-only path segments — VCS, dependencies, CI, build tooling, tests.
const BLOCKED_SEGMENT = /(^|\/)(\.git|\.github|node_modules|__pycache__|scripts|tests?)(\/|$)/i;

// Exact internal filenames that have an otherwise-public extension.
const BLOCKED_EXACT = new Set([
  '/package.json', '/package-lock.json', '/yarn.lock', '/pnpm-lock.yaml',
  '/wrangler.toml', '/schema.sql', '/dockerfile', '/makefile', '/procfile',
]);

export async function onRequest(context) {
  const { request, next } = context;
  const path = new URL(request.url).pathname;
  const lower = path.toLowerCase();
  const seg = lower.split('/').pop() || '';

  // Preserve ACME / domain-verification challenges.
  if (lower.startsWith('/.well-known/')) return next();

  // Dotfiles (.env, .gitignore, .dev.vars, .stylelintrc.json, .DS_Store, …).
  if (seg.startsWith('.')) return notFound();

  if (BLOCKED_EXACT.has(lower) || BLOCKED_EXT.test(lower) || BLOCKED_SEGMENT.test(lower)) {
    return notFound();
  }

  return next();
}

function notFound() {
  return new Response('Not Found', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow',
      'cache-control': 'no-store',
    },
  });
}
