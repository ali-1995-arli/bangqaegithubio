self.addEventListener('install', function(e) {
      e.waitUntil(
      caches.open('qwerty').then(function(cache) {
         return cache.addAll([
            '/',
            '/index.html',
            '/login.html',
            '/css/style.css',
            '/css/bootstrap.min.css',
            '/js/bootstrap.min.js',
            '/js/jquery-3.1.1.min.js',
            '/img/cover.jpg',
         ]);
      })
      );
});

self.addEventListener('fetch', function(event) {
   console.log(event.request.url);
   event.respondWith(

   caches.match(event.request).then(function(response) {
   return response || fetch(event.request);
   })

);
});