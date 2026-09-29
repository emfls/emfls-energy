import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const read = (path) => readFile(join(dist, path), 'utf8');
const readExpected = async (path) => {
  try {
    return await read(path);
  } catch (error) {
    if (error.code === 'ENOENT') {
      assert.fail('Expected Foundation output file was not generated: ' + path);
    }
    throw error;
  }
};

const pages = [
  ['index.html', 'https://energy.emfls.com/'],
  ['about/index.html', 'https://energy.emfls.com/about/'],
  ['privacy/index.html', 'https://energy.emfls.com/privacy/'],
  ['contact/index.html', 'https://energy.emfls.com/contact/'],
  ['editorial-policy/index.html', 'https://energy.emfls.com/editorial-policy/'],
  ['404.html', null],
];

test('homepage explains household energy use with a bounded kWh example', async () => {
  const html = await readExpected('index.html');

  assert.match(html, /EMFLS Energy/);
  assert.match(html, /와트/);
  assert.match(html, /킬로와트시/);
  assert.match(html, /1,000 W/);
  assert.doesNotMatch(html, /initial technical bootstrap|lorem ipsum|TODO|fake data/i);
});

test('all foundation pages have a canonical URL and remain noindex before launch gate', async () => {
  for (const [file, canonical] of pages) {
    const html = await readExpected(file);
    if (canonical) {
      assert.ok(html.includes('<link rel="canonical" href="' + canonical + '"'), file + ' canonical');
      assert.ok(html.includes('<meta property="og:url" content="' + canonical + '"'), file + ' social URL');
    } else {
      assert.doesNotMatch(html, /rel="canonical"/i, file + ' should not advertise a canonical');
      assert.doesNotMatch(html, /property="og:url"/i, file + ' should not advertise a social URL');
    }
    assert.match(html, /<meta name="robots" content="noindex,\s*follow"/i, file + ' robots');
    assert.match(html, /<meta name="description" content="[^"]+"/i, file + ' description');
  }
});

test('robots allows verification crawlers and references the only sitemap', async () => {
  const robots = await readExpected('robots.txt');

  assert.match(robots, /User-agent:\s*\*/i);
  assert.match(robots, /Allow:\s*\//i);
  assert.match(robots, /Sitemap:\s*https:\/\/energy\.emfls\.com\/sitemap\.xml/i);
});

test('IndexNow ownership key is published at the host root with matching content', async () => {
  const files = await readdir(dist);
  const keyFiles = files.filter((file) => /^[a-f0-9]{32}\.txt$/i.test(file));

  assert.equal(keyFiles.length, 1, 'publish one Site18-specific root key file');
  const key = keyFiles[0].slice(0, -4);
  assert.equal((await readExpected(keyFiles[0])).trim(), key);
});

test('single sitemap contains only canonical foundation URLs, not the 404 route', async () => {
  const sitemap = await readExpected('sitemap.xml');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

  assert.deepEqual(urls, pages.filter(([, canonical]) => canonical).map(([, canonical]) => canonical));
  assert.equal((sitemap.match(/<urlset\b/g) ?? []).length, 1);
  assert.doesNotMatch(sitemap, /404/);
});

test('every page has one main landmark, one heading, and working local links', async () => {
  for (const [file] of pages) {
    const html = await readExpected(file);
    assert.match(html, /<main id="main-content"/i, file + ' main landmark');
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, file + ' heading count');

    for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
      const url = new URL(href, 'https://energy.emfls.com/');
      if (url.origin !== 'https://energy.emfls.com') continue;
      const output = url.pathname === '/'
        ? 'index.html'
        : url.pathname.endsWith('/')
          ? url.pathname.slice(1) + 'index.html'
          : url.pathname.slice(1);
      await readExpected(output);
    }
  }
});
