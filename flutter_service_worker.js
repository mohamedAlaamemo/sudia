'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "faaf94fc04f324a0249191c79977f7f0",
"assets/AssetManifest.json": "852ed877bf0003118042eeefbaa1cb3b",
"assets/assets/fonts/29ltbukra-bold.ttf": "a1c38193bcbeec87253eada26c3c6dc8",
"assets/assets/fonts/29ltbukra-Medium.ttf": "41db0a1456c6f5553a23137851d3f37a",
"assets/assets/fonts/29ltbukra-SemiBold.ttf": "a1c38193bcbeec87253eada26c3c6dc8",
"assets/assets/fonts/29ltbukralight_0.ttf": "456579cade68bfe1896ebf7087db072c",
"assets/assets/fonts/29ltbukraregular_0.ttf": "e050d364fd222620de26f7ad06aa5b64",
"assets/assets/images/1.5x/logo.png": "6f1d602402baa9e50350bc6d04b18e41",
"assets/assets/images/2.0x/logo.png": "c90c6d92165807f3edb113fbab5da193",
"assets/assets/images/24hour.png": "f844f99923635c9f3841a62081df69f2",
"assets/assets/images/3.0x/logo.png": "1ee50caf3be86e54b7df9fac28c2b708",
"assets/assets/images/4.0x/logo.png": "c0cacad1ec20ba8a32a36d1807b09833",
"assets/assets/images/app_bar_icon.png": "cdcf5510ba47c61ee85f2ea948e53a5e",
"assets/assets/images/clock.png": "127111712d2a56a13f33224eb9637e5f",
"assets/assets/images/data.png": "37c8ed4ad7c1d879a30fc580a2541b66",
"assets/assets/images/date_icon.png": "cf15900f0468edd0d78df7d29e64feed",
"assets/assets/images/file_upload.png": "c19ec2b438242edab407add63b006dd9",
"assets/assets/images/home.png": "4cfe7a5074657f0f6f44a79feb3b5175",
"assets/assets/images/Icon_true.png": "16f21e25c381b6daef0bf2035200f736",
"assets/assets/images/image_photo.png": "843b00835ae8d415c2b60b3046a82b0f",
"assets/assets/images/logo.png": "a5cb9a2085ba383a04a54a15e9d08ab9",
"assets/assets/images/logout.png": "efbc454cc4e0335693117d60b9e2ba64",
"assets/assets/images/min.png": "a08f2be530590a715a21498eac8262b9",
"assets/assets/images/ok.png": "afd9d780086478508bb7daa8dc79641a",
"assets/assets/images/profile_photo.png": "7c9de6d4654620f8b365553b69b1bcca",
"assets/assets/images/save_ok.png": "e38059a6d556190c6ff5b6caa8bd6917",
"assets/assets/images/scan.png": "ccd20cec63698a7078e3fd738450887e",
"assets/assets/images/search.png": "4a9e8275fa558ff03c6f482a6da04fc4",
"assets/assets/images/select_time.png": "2bc2e5a1d8060a813c34d8d144a050cc",
"assets/assets/images/splash.png": "aca2efa73db8d2b268245ef0a7b8c119",
"assets/assets/images/time_work.png": "dadcaa6d0b18f8ded412177e1bc6f98a",
"assets/assets/images/true.png": "6bf08c19b7de48e2d8fefb19414a349c",
"assets/assets/images/true_image.png": "46daaadc78dcf0cdf3edc58de966eb8f",
"assets/assets/translations/ar-SA.json": "f7553e404d6078d4c21b7c970c83329a",
"assets/assets/translations/en-US.json": "a853879001d142ce1f83e6e281accce8",
"assets/FontManifest.json": "622fbf936b1c51ebdc93e0cacb38c186",
"assets/fonts/MaterialIcons-Regular.otf": "6ad347237aca263000875fb69ea618c0",
"assets/NOTICES": "4e7431712e318c4a36a952c877dc260f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9037d2cfd7f9951043a549476c4068e7",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "55dd479b440ade30760a1b3a4db300f1",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "157c564823c850c8832b8bc75b392526",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bca46c90a14337e452af8e9a35b8ca09",
"/": "bca46c90a14337e452af8e9a35b8ca09",
"main.dart.js": "3e3f56d8e5d270af6c2ab530af345c6e",
"manifest.json": "87227666169b625a64de81d3ab69547d",
"version.json": "ae1df72330926da94d3e9ba6a47e38fe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
