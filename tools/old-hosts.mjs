// Rewrite links to the dead (ta)spring.clan-sy.com hosts in converted markdown.
// Old wiki pages and images become internal links where we have them. Any
// other old wiki link is dropped, keeping its text, because those pages were deleted
// before the 2025 dump. Everything else moves to springrts.com, which kept the same
// forum topic and Mantis IDs.
// Shared by tools/fix-old-hosts.mjs and tools/import-userspace.mjs.

const OLD = /https?:\/\/(?:ta)?spring\.clan-sy\.com/i;
const OLD_G = /https?:\/\/(?:ta)?spring\.clan-sy\.com[^\s)"<>]*/gi;

export function safeImageName(name) {
  return name.replace(/ /g, '_').replace(/[&'"#?%]/g, '_').replace(/\.([^.]+)$/, (m, e) => '.' + e.toLowerCase());
}
// MediaWiki anchor (".2F" escapes, underscores) -> VitePress heading slug
function anchorSlug(a) {
  const text = a.replace(/\.([0-9A-F]{2})/g, (m, h) => String.fromCharCode(parseInt(h, 16))).replace(/_/g, ' ');
  return text.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, '-').replace(/^-+|-+$/g, '');
}
function decode(s) { try { return decodeURIComponent(s); } catch { return s; } }
function onSpringrts(url) {
  return url.replace(OLD, 'https://springrts.com').replace(/^(https:\/\/springrts\.com)\/w\//, '$1/mediawiki/');
}

// resolveTitle(title) -> site url or null. imagesOnDisk: Set of mirrored image names.
function internalTarget(url, resolveTitle, imagesOnDisk) {
  const u = url.replace(/&amp;/g, '&');
  let m = u.match(/^https?:\/\/[^/]+\/w\/images\/(?:.+\/)?([^/]+)$/i);
  if (m) {
    const safe = safeImageName(decode(m[1]));
    return imagesOnDisk.has(safe) ? { url: '/images/' + safe, text: safe } : null;
  }
  let title, anchor = '';
  m = u.match(/^https?:\/\/[^/]+\/wiki\/([^#?]+)(?:#(.*))?$/i) || u.match(/^https?:\/\/[^/]+\/w\/index\.php\?title=([^&#]+)(?:#(.*))?$/i);
  if (m) { title = decode(m[1]).replace(/_/g, ' '); anchor = m[2] || ''; }
  if (!title) return null;
  const page = resolveTitle(title.charAt(0).toUpperCase() + title.slice(1));
  if (!page) return null;
  return { url: page + (anchor ? '#' + anchorSlug(anchor) : ''), text: title };
}

export function fixOldHosts(md, resolveTitle, imagesOnDisk) {
  let internal = 0, external = 0, unlinked = 0;
  md = md.replace(/<a href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (full, href, attrs, inner) => {
    if (!OLD.test(href)) return full;
    const target = internalTarget(href, resolveTitle, imagesOnDisk);
    if (target) {
      internal++;
      return `<a href="${target.url}">${inner === href ? target.text : inner}</a>`;
    }
    // Old wiki pages and files we do not have no longer exist anywhere: keep the text, drop the link.
    const wiki = href.match(/^https?:\/\/[^/]+\/(?:wiki\/([^#?]+)|w\/)/i);
    if (wiki) {
      unlinked++;
      return inner === href && wiki[1] ? decode(wiki[1]).replace(/_/g, ' ') : inner;
    }
    external++;
    const url = onSpringrts(href);
    return `<a href="${url}"${attrs}>${inner === href ? url : inner}</a>`;
  });
  md = md.replace(OLD_G, m => { external++; return onSpringrts(m); });
  return { md, internal, external, unlinked };
}
