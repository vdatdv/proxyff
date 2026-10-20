// Proxy Sophia V4 response adapter for Shadowrocket.
// Original onRequest returns the request unchanged (or null for non-/live paths).
// Neither case changes the outgoing request, so no request rewrite is required.
let body = $response.body;
try {
  const s = body || '';
  if (s.indexOf('abhotupdate_cdn_url') >= 0) {
    const o = JSON.parse(s);
    o.abhotupdate_cdn_url = 'https://sophiacheat.com/ffproxy?p=/';
    body = JSON.stringify(o);
  }
} catch (e) {
  // Keep original response on errors, as in V4.
}
$done({body});
