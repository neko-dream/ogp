import Card from './components/Card';
import { headers } from './libs/headers';
import { createSVG } from './libs/satori';

export default {
  async fetch(req: Request): Promise<Response> {
    let cache = await caches.open('custom:cache');

    // if super reload clear cache
    if (req.headers.get('Cache-Control') === 'no-cache') {
      await cache.delete(req);
    }

    const cachedResponse = await cache.match(req);
    if (cachedResponse) return cachedResponse;

    // create assets card
    const SVG = await createSVG(Card());

    // response cached
    cache.put(req, new Response(SVG, { headers }));

    return new Response(SVG, { headers });
  },
};
