/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/bootstrap.css","abbbbf46899e2080b11893577e475985"],["css/bootstrap.min.css","bb884d3b6b6b09481c5dc25fb4fac7e5"],["css/carousel.css","e02ec15bd6f97c68609c3984c80f3a7d"],["css/grayscale.css","56a6cf2386a9009b9f447869e2f38be0"],["img/UWICS Logo Pro.jpg","3a6bfbc1affc1ca0b141eaa93198928a"],["img/aap1.png","26096f67dd2cc1cabb437581c3c84619"],["img/aap2.png","1c685c68ef055aa7450504b26a2582ce"],["img/aap3.png","8a931fa14977724cb82f40d2fc00fdae"],["img/aap4.png","e70ca25a9e041cafa6006d61fa039e00"],["img/aap5.png","3c02a51ad50f30e3b22e2eb391a0442d"],["img/aap6.png","b4d2ba3ecc629ae129fa144a303c19c8"],["img/aap7.png","0c79fe2b6133575a4642a466eb42bbca"],["img/aap8.png","5a379b7e21165c655e972744e64d9a0e"],["img/android-icon-144x144.png","eec3dd0983e5eceeeaa61a3b2a45e25a"],["img/android-icon-192x192.png","e8d58928cdffa72a2a7be522491232ed"],["img/android-icon-36x36.png","8eff0cbb7ce5d935924ff7f79b928899"],["img/android-icon-48x48.png","9df7c0d30eb61a72e9620cac96b21607"],["img/android-icon-72x72.png","8ee294658743b9ae2a2a66eac7b0ba24"],["img/android-icon-96x96.png","bb35b47608dccfc13e6adc00e46f56fc"],["img/apple-icon-114x114.png","8f7cb605e294ab6b1ccbf73f2144c520"],["img/apple-icon-120x120.png","122d84c0b0bb5fc90f09e5fbe21257d1"],["img/apple-icon-144x144.png","eec3dd0983e5eceeeaa61a3b2a45e25a"],["img/apple-icon-152x152.png","5b47f9f03db786cb2ebcbe84997c6377"],["img/apple-icon-180x180.png","7dae0b5cbc6e3c1669be6c95305950da"],["img/apple-icon-57x57.png","74d8bb20126cb18c5b47f070a52d02e1"],["img/apple-icon-60x60.png","2cb490e165b11fe3f6d5a74c3fc1443c"],["img/apple-icon-72x72.png","8ee294658743b9ae2a2a66eac7b0ba24"],["img/apple-icon-76x76.png","59db87e15d5c85ce6933765fe4300a25"],["img/apple-icon-precomposed.png","194c15679792f035907f0243536504c5"],["img/apple-icon.png","194c15679792f035907f0243536504c5"],["img/budget.png","6ec31e309657264c8549a456ed680b43"],["img/coder dojo.jpg","64f251998fc59c059a508634a39c87a0"],["img/diet.png","d68ea7c80aab3144babe015e2936c4d5"],["img/example.png","edff085f00ed82b05dc11336b70dda12"],["img/favicon-16x16.png","a38aef93234599367a7be4698396e7ca"],["img/favicon-32x32.png","23065a2d0ef516f54adba7c5d35d2201"],["img/favicon-96x96.png","bb35b47608dccfc13e6adc00e46f56fc"],["img/favicon.ico","09ad303c97e229280ae8ee64c5c8f5ca"],["img/grp1.png","3709ae3f2a0b23d14e396bbbd11d81b0"],["img/grp2.png","056ff218065afced2bfa84c89586029c"],["img/ito1.png","a0d3dcd9d92c815ca9383a371fd21d6b"],["img/ito2.png","de2f04f79e04d2cdb3b72f21d137ed23"],["img/ito3.png","dedeaa7aa5b2f7d342749d395b723251"],["img/jammers.jpg","d66dc659d53d3b3825776333e3a6f682"],["img/list.png","617246fab13f37491726c04f894784c8"],["img/login.png","ccf84d81588b4de22a961a6173c71fd3"],["img/ms-icon-144x144.png","eec3dd0983e5eceeeaa61a3b2a45e25a"],["img/ms-icon-150x150.png","4be80dad2f3a22809b93587ea70820ec"],["img/ms-icon-310x310.png","323597efbb744bc0f071eb063ac5a8ff"],["img/ms-icon-70x70.png","b53b3f60dc597c4987369abb92b4c184"],["img/tcj.jpg","543ad293f3eef5dfeb468f5c704ac8b0"],["img/tg1.png","53c1c1b62eb5728db0af5f97181b39e3"],["img/tg2.png","6eef67010daa787f3f58c0c4368a4101"],["img/tg3.png","336b14b80c4f827f85d5a0fd1a4970d7"],["index.html","dc6be19694995f0f02292dd53c693f18"],["js/grayscale.js","11cda34ac5cb424530ea21336a6d499d"],["manifest.json","38f5d42ca9400e555bcb417d9f9a1368"],["resume.pdf","2723e2b5de57c04b7ff4ce354c80f7d5"],["vendor/bootstrap.js","964bfad71509fd1e87e9349e3f277f6c"],["vendor/bootstrap.min.js","1ae0e64754a542cbea996dec63c326fd"],["vendor/font-awesome/css/font-awesome.css","d747d5b755b138af0a6d94af2d894169"],["vendor/font-awesome/css/font-awesome.min.css","ed05bfd415df47c95c9f655b7a1fc6d4"],["vendor/font-awesome/fonts/FontAwesome.otf","19231917733e2bcdf257c9be99cdbaf1"],["vendor/font-awesome/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["vendor/font-awesome/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["vendor/font-awesome/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["vendor/font-awesome/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["vendor/font-awesome/less/bordered-pulled.less","4925fc43b419f65e2414602456dbf023"],["vendor/font-awesome/less/core.less","95cf7203ed5844fd9556ba9777896300"],["vendor/font-awesome/less/fixed-width.less","6799c9cf7edf54b7432cca85854b0abf"],["vendor/font-awesome/less/font-awesome.less","ae363e1b463f24917e00e11b6d755c3c"],["vendor/font-awesome/less/icons.less","60a111b643374cb1ca2870cd4f69809a"],["vendor/font-awesome/less/larger.less","f588164c1a95535137186bbdb0d236c8"],["vendor/font-awesome/less/list.less","abcbffd56677821190cf4dc72f660dd9"],["vendor/font-awesome/less/mixins.less","36f4ce87f1732dbfc3b84ddbe655a7dc"],["vendor/font-awesome/less/path.less","4a6a37851203b84b2f82a92811298428"],["vendor/font-awesome/less/rotated-flipped.less","2088e18f446fcf2fe91e5293fc7f2847"],["vendor/font-awesome/less/spinning.less","466d266c98e48b91427f0f4a7a9db4e7"],["vendor/font-awesome/less/stacked.less","8b7e28e004c785a0a1a73afde547b9e7"],["vendor/font-awesome/less/variables.less","20ed667bbdd63a64aba5ded893c515d2"],["vendor/font-awesome/scss/_bordered-pulled.scss","62fb8dfc9428c1e885aa7c5ecd9d66c6"],["vendor/font-awesome/scss/_core.scss","5be68123fa4579ce9b2e37d5829f17a7"],["vendor/font-awesome/scss/_fixed-width.scss","e6fac8be09e2d3dc38fe9248b2eb0472"],["vendor/font-awesome/scss/_icons.scss","3162cce68fa81677c6da72596a071c17"],["vendor/font-awesome/scss/_larger.scss","8b00a4d732107fc1844ea18314c3cff9"],["vendor/font-awesome/scss/_list.scss","c33b069275c5877a4b3f144684664bf5"],["vendor/font-awesome/scss/_mixins.scss","fad03232d6597d082973834695dffb60"],["vendor/font-awesome/scss/_path.scss","d1f4a7059f76fdb43500af9061bba0ad"],["vendor/font-awesome/scss/_rotated-flipped.scss","9a3f214edda562bf122802da5c686a12"],["vendor/font-awesome/scss/_spinning.scss","ac1bc4945b70d7dfd5e54ac44bad30b9"],["vendor/font-awesome/scss/_stacked.scss","638e8ae84e80a3428e9446578a7ed6a0"],["vendor/font-awesome/scss/_variables.scss","d6d9fe566a6d94f3ad8d701752b46c9b"],["vendor/font-awesome/scss/font-awesome.scss","e7b7385db37ce72ebc6e6ef0c0d393f5"],["vendor/jquery.easing.min.js","cb13ce6e9b41da9553d9d9266dcb6f62"],["vendor/jquery.js","ee092541bc79668e3e0a7b76d2faf00c"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







