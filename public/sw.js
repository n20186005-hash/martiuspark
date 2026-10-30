// Retire this guide's former offline cache; never intercept navigation or unrelated caches.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys()){if(key.startsWith('martiuspark-'))await caches.delete(key);}await self.registration.unregister();await self.clients.claim();})()));
