// Shadowrocket response-body adapter for FFXC.
// Original onRequest(a,b) returns b unchanged; no request rewrite is needed.
let body = $response.body;
try {
  const path = new URL($request.url).pathname;
  if (path.indexOf('/live') === 0) {
    const s = body || '';
    if (s.indexOf('abhotupdate_cdn_url') >= 0) {
      const o = JSON.parse(s);
      o.abhotupdate_cdn_url = 'https://sophiacheat.com/ffproxy?p=/';
      body = JSON.stringify(o);
    }
  }
} catch (e) {
  // Preserve the original response when parsing or rewriting fails.
}
$done({body});
