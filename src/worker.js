import astro from '@astrojs/cloudflare/entrypoints/server';
import {securityHeaders} from './security.js';

// This entry runs before the adapter's static-asset fast path.
export async function handleRequest(request, env, context, render = astro.fetch) {
  const url = new URL(request.url);
  if (url.hostname === 'www.martiuspark.com' ||
      (url.hostname === 'martiuspark.com' && url.protocol === 'http:')) {
    url.hostname = 'martiuspark.com'; url.protocol = 'https:'; url.port = '';
    return new Response(null, {status:308, headers:{location:url.toString(),'cache-control':'no-store',...securityHeaders}});
  }
  if (['/directory','/the-rink','/dining','/parking','/privacy'].includes(url.pathname)) {
    url.pathname += '/';
    return new Response(null, {status:308,headers:{location:url.toString(),'cache-control':'no-store',...securityHeaders}});
  }
  const response = await render(request, env, context);
  const headers = new Headers(response.headers);
  for (const [name,value] of Object.entries(securityHeaders)) headers.set(name,value);
  if (response.status === 404) {
    headers.set('x-robots-tag','noindex'); headers.set('cache-control','no-store');
  }
  return new Response(request.method === 'HEAD' ? null : response.body, {
    status:response.status,statusText:response.statusText,headers
  });
}
export default {fetch:handleRequest};
