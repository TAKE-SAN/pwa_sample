importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded`);
  // ファイルのキャッシュ
  workbox.precaching.precacheAndRoute([
    {
      url: '/index.html',
      revision: '12345'
    },
    {
      url: 'dist/app.js',
      revision: '12345'
    },
  ])

} else {
  console.log(`Workbox didn't load`);
}
