/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/provider/aniwatch/player/route";
exports.ids = ["app/api/provider/aniwatch/player/route"];
exports.modules = {

/***/ "(rsc)/./app/api/provider/aniwatch/player/route.js":
/*!***************************************************!*\
  !*** ./app/api/provider/aniwatch/player/route.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet hiAnimeModulePromise;\nfunction applyThreadStreamOverride() {\n    const workerPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), 'node_modules', 'thread-stream', 'lib', 'worker.js');\n    const existingOverrides = globalThis.__bundlerPathsOverrides || {};\n    globalThis.__bundlerPathsOverrides = {\n        ...existingOverrides,\n        'thread-stream-worker': workerPath\n    };\n}\nasync function getHiAnimeModule() {\n    applyThreadStreamOverride();\n    if (!hiAnimeModulePromise) {\n        hiAnimeModulePromise = Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/form-data\"), __webpack_require__.e(\"vendor-chunks/axios\"), __webpack_require__.e(\"vendor-chunks/follow-redirects\"), __webpack_require__.e(\"vendor-chunks/debug\"), __webpack_require__.e(\"vendor-chunks/get-intrinsic\"), __webpack_require__.e(\"vendor-chunks/asynckit\"), __webpack_require__.e(\"vendor-chunks/combined-stream\"), __webpack_require__.e(\"vendor-chunks/proxy-from-env\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/supports-color\"), __webpack_require__.e(\"vendor-chunks/has-symbols\"), __webpack_require__.e(\"vendor-chunks/delayed-stream\"), __webpack_require__.e(\"vendor-chunks/function-bind\"), __webpack_require__.e(\"vendor-chunks/es-set-tostringtag\"), __webpack_require__.e(\"vendor-chunks/get-proto\"), __webpack_require__.e(\"vendor-chunks/call-bind-apply-helpers\"), __webpack_require__.e(\"vendor-chunks/dunder-proto\"), __webpack_require__.e(\"vendor-chunks/math-intrinsics\"), __webpack_require__.e(\"vendor-chunks/es-errors\"), __webpack_require__.e(\"vendor-chunks/has-flag\"), __webpack_require__.e(\"vendor-chunks/gopd\"), __webpack_require__.e(\"vendor-chunks/es-define-property\"), __webpack_require__.e(\"vendor-chunks/hasown\"), __webpack_require__.e(\"vendor-chunks/has-tostringtag\"), __webpack_require__.e(\"vendor-chunks/es-object-atoms\"), __webpack_require__.e(\"vendor-chunks/undici\"), __webpack_require__.e(\"vendor-chunks/crypto-js\"), __webpack_require__.e(\"vendor-chunks/iconv-lite\"), __webpack_require__.e(\"vendor-chunks/parse5\"), __webpack_require__.e(\"vendor-chunks/cheerio\"), __webpack_require__.e(\"vendor-chunks/pino\"), __webpack_require__.e(\"vendor-chunks/css-select\"), __webpack_require__.e(\"vendor-chunks/entities\"), __webpack_require__.e(\"vendor-chunks/domutils\"), __webpack_require__.e(\"vendor-chunks/fast-redact\"), __webpack_require__.e(\"vendor-chunks/pino-std-serializers\"), __webpack_require__.e(\"vendor-chunks/whatwg-mimetype\"), __webpack_require__.e(\"vendor-chunks/thread-stream\"), __webpack_require__.e(\"vendor-chunks/nth-check\"), __webpack_require__.e(\"vendor-chunks/htmlparser2\"), __webpack_require__.e(\"vendor-chunks/cheerio-select\"), __webpack_require__.e(\"vendor-chunks/whatwg-encoding\"), __webpack_require__.e(\"vendor-chunks/encoding-sniffer\"), __webpack_require__.e(\"vendor-chunks/domhandler\"), __webpack_require__.e(\"vendor-chunks/dom-serializer\"), __webpack_require__.e(\"vendor-chunks/css-what\"), __webpack_require__.e(\"vendor-chunks/parse5-parser-stream\"), __webpack_require__.e(\"vendor-chunks/parse5-htmlparser2-tree-adapter\"), __webpack_require__.e(\"vendor-chunks/domelementtype\"), __webpack_require__.e(\"vendor-chunks/aniwatch\"), __webpack_require__.e(\"vendor-chunks/sonic-boom\"), __webpack_require__.e(\"vendor-chunks/safer-buffer\"), __webpack_require__.e(\"vendor-chunks/safe-stable-stringify\"), __webpack_require__.e(\"vendor-chunks/quick-format-unescaped\"), __webpack_require__.e(\"vendor-chunks/on-exit-leak-free\"), __webpack_require__.e(\"vendor-chunks/boolbase\"), __webpack_require__.e(\"vendor-chunks/atomic-sleep\")]).then(__webpack_require__.bind(__webpack_require__, /*! aniwatch */ \"(rsc)/./node_modules/aniwatch/dist/index.js\"));\n    }\n    return hiAnimeModulePromise;\n}\nconst sourceCache = new Map();\nconst CACHE_TTL_MS = 10 * 60 * 1000;\nfunction getCacheKey(id, server, category) {\n    return `${id}::${server}::${category}`;\n}\nfunction getFallbackCacheKey(id, category) {\n    return `${id}::any::${category}`;\n}\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    const server = searchParams.get('server');\n    const category = searchParams.get('category'); // This will be passed as \"type\" to aniwatch\n    if (!id || !server || !category) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Missing query parameters'\n        }, {\n            status: 400\n        });\n    }\n    const cacheKey = getCacheKey(id, server, category);\n    const fallbackCacheKey = getFallbackCacheKey(id, category);\n    const cached = sourceCache.get(cacheKey);\n    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(cached.data);\n    }\n    const fallbackCached = sourceCache.get(fallbackCacheKey);\n    if (fallbackCached && Date.now() - fallbackCached.timestamp < CACHE_TTL_MS) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(fallbackCached.data);\n    }\n    try {\n        for(let attempt = 1; attempt <= 2; attempt++){\n            try {\n                const { HiAnime } = await getHiAnimeModule();\n                const hianime = new HiAnime.Scraper();\n                const data = await hianime.getEpisodeSources(id, server, category);\n                if (data?.sources?.length) {\n                    sourceCache.set(cacheKey, {\n                        data,\n                        timestamp: Date.now()\n                    });\n                    sourceCache.set(fallbackCacheKey, {\n                        data,\n                        timestamp: Date.now()\n                    });\n                }\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n            } catch (innerError) {\n                if (attempt === 2) {\n                    throw innerError;\n                }\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch episode sources'\n        }, {\n            status: 500\n        });\n    } catch (error) {\n        console.error(\"Failed to get episode sources:\", error);\n        if (cached?.data || fallbackCached?.data) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(cached?.data || fallbackCached?.data);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch episode sources\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb3ZpZGVyL2FuaXdhdGNoL3BsYXllci9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ25CO0FBRXhCLElBQUlFO0FBRUosU0FBU0M7SUFDUCxNQUFNQyxhQUFhSCxtREFBWSxDQUFDSyxRQUFRQyxHQUFHLElBQUksZ0JBQWdCLGlCQUFpQixPQUFPO0lBQ3ZGLE1BQU1DLG9CQUFvQkMsV0FBV0MsdUJBQXVCLElBQUksQ0FBQztJQUVqRUQsV0FBV0MsdUJBQXVCLEdBQUc7UUFDbkMsR0FBR0YsaUJBQWlCO1FBQ3BCLHdCQUF3Qko7SUFDMUI7QUFDRjtBQUVBLGVBQWVPO0lBQ2JSO0lBQ0EsSUFBSSxDQUFDRCxzQkFBc0I7UUFDekJBLHVCQUF1QixrbUdBQWtCO0lBQzNDO0lBRUEsT0FBT0E7QUFDVDtBQUVBLE1BQU1VLGNBQWMsSUFBSUM7QUFDeEIsTUFBTUMsZUFBZSxLQUFLLEtBQUs7QUFFL0IsU0FBU0MsWUFBWUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7SUFDdkMsT0FBTyxHQUFHRixHQUFHLEVBQUUsRUFBRUMsT0FBTyxFQUFFLEVBQUVDLFVBQVU7QUFDeEM7QUFFQSxTQUFTQyxvQkFBb0JILEVBQUUsRUFBRUUsUUFBUTtJQUN2QyxPQUFPLEdBQUdGLEdBQUcsT0FBTyxFQUFFRSxVQUFVO0FBQ2xDO0FBRU8sZUFBZUUsSUFBSUMsR0FBRztJQUMzQixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7SUFDeEMsTUFBTVIsS0FBS00sYUFBYUcsR0FBRyxDQUFDO0lBQzVCLE1BQU1SLFNBQVNLLGFBQWFHLEdBQUcsQ0FBQztJQUNoQyxNQUFNUCxXQUFXSSxhQUFhRyxHQUFHLENBQUMsYUFBYSw0Q0FBNEM7SUFFM0YsSUFBSSxDQUFDVCxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsVUFBVTtRQUMvQixPQUFPbEIscURBQVlBLENBQUMwQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEyQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNoRjtJQUVBLE1BQU1DLFdBQVdkLFlBQVlDLElBQUlDLFFBQVFDO0lBQ3pDLE1BQU1ZLG1CQUFtQlgsb0JBQW9CSCxJQUFJRTtJQUNqRCxNQUFNYSxTQUFTbkIsWUFBWWEsR0FBRyxDQUFDSTtJQUMvQixJQUFJRSxVQUFVQyxLQUFLQyxHQUFHLEtBQUtGLE9BQU9HLFNBQVMsR0FBR3BCLGNBQWM7UUFDMUQsT0FBT2QscURBQVlBLENBQUMwQixJQUFJLENBQUNLLE9BQU9JLElBQUk7SUFDdEM7SUFFQSxNQUFNQyxpQkFBaUJ4QixZQUFZYSxHQUFHLENBQUNLO0lBQ3ZDLElBQUlNLGtCQUFrQkosS0FBS0MsR0FBRyxLQUFLRyxlQUFlRixTQUFTLEdBQUdwQixjQUFjO1FBQzFFLE9BQU9kLHFEQUFZQSxDQUFDMEIsSUFBSSxDQUFDVSxlQUFlRCxJQUFJO0lBQzlDO0lBRUEsSUFBSTtRQUNGLElBQUssSUFBSUUsVUFBVSxHQUFHQSxXQUFXLEdBQUdBLFVBQVc7WUFDN0MsSUFBSTtnQkFDRixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU0zQjtnQkFDMUIsTUFBTTRCLFVBQVUsSUFBSUQsUUFBUUUsT0FBTztnQkFDbkMsTUFBTUwsT0FBTyxNQUFNSSxRQUFRRSxpQkFBaUIsQ0FBQ3pCLElBQUlDLFFBQVFDO2dCQUV6RCxJQUFJaUIsTUFBTU8sU0FBU0MsUUFBUTtvQkFDekIvQixZQUFZZ0MsR0FBRyxDQUFDZixVQUFVO3dCQUN4Qk07d0JBQ0FELFdBQVdGLEtBQUtDLEdBQUc7b0JBQ3JCO29CQUVBckIsWUFBWWdDLEdBQUcsQ0FBQ2Qsa0JBQWtCO3dCQUNoQ0s7d0JBQ0FELFdBQVdGLEtBQUtDLEdBQUc7b0JBQ3JCO2dCQUNGO2dCQUVBLE9BQU9qQyxxREFBWUEsQ0FBQzBCLElBQUksQ0FBQ1M7WUFDM0IsRUFBRSxPQUFPVSxZQUFZO2dCQUNuQixJQUFJUixZQUFZLEdBQUc7b0JBQ2pCLE1BQU1RO2dCQUNSO1lBQ0Y7UUFDRjtRQUVBLE9BQU83QyxxREFBWUEsQ0FBQzBCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWtDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3ZGLEVBQUUsT0FBT0QsT0FBTztRQUNkbUIsUUFBUW5CLEtBQUssQ0FBQyxrQ0FBa0NBO1FBRWhELElBQUlJLFFBQVFJLFFBQVFDLGdCQUFnQkQsTUFBTTtZQUN4QyxPQUFPbkMscURBQVlBLENBQUMwQixJQUFJLENBQUNLLFFBQVFJLFFBQVFDLGdCQUFnQkQ7UUFDM0Q7UUFFQSxPQUFPbkMscURBQVlBLENBQUMwQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFrQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN2RjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDIzMDA4NDE3XFxEb2N1bWVudHNcXEdpdEh1YlxcQW5pVGVhbXNcXGFwcFxcYXBpXFxwcm92aWRlclxcYW5pd2F0Y2hcXHBsYXllclxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmxldCBoaUFuaW1lTW9kdWxlUHJvbWlzZTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VGhyZWFkU3RyZWFtT3ZlcnJpZGUoKSB7XHJcbiAgY29uc3Qgd29ya2VyUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzJywgJ3RocmVhZC1zdHJlYW0nLCAnbGliJywgJ3dvcmtlci5qcycpO1xyXG4gIGNvbnN0IGV4aXN0aW5nT3ZlcnJpZGVzID0gZ2xvYmFsVGhpcy5fX2J1bmRsZXJQYXRoc092ZXJyaWRlcyB8fCB7fTtcclxuXHJcbiAgZ2xvYmFsVGhpcy5fX2J1bmRsZXJQYXRoc092ZXJyaWRlcyA9IHtcclxuICAgIC4uLmV4aXN0aW5nT3ZlcnJpZGVzLFxyXG4gICAgJ3RocmVhZC1zdHJlYW0td29ya2VyJzogd29ya2VyUGF0aCxcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRIaUFuaW1lTW9kdWxlKCkge1xyXG4gIGFwcGx5VGhyZWFkU3RyZWFtT3ZlcnJpZGUoKTtcclxuICBpZiAoIWhpQW5pbWVNb2R1bGVQcm9taXNlKSB7XHJcbiAgICBoaUFuaW1lTW9kdWxlUHJvbWlzZSA9IGltcG9ydCgnYW5pd2F0Y2gnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBoaUFuaW1lTW9kdWxlUHJvbWlzZTtcclxufVxyXG5cclxuY29uc3Qgc291cmNlQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IENBQ0hFX1RUTF9NUyA9IDEwICogNjAgKiAxMDAwO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q2FjaGVLZXkoaWQsIHNlcnZlciwgY2F0ZWdvcnkpIHtcclxuICByZXR1cm4gYCR7aWR9Ojoke3NlcnZlcn06OiR7Y2F0ZWdvcnl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsbGJhY2tDYWNoZUtleShpZCwgY2F0ZWdvcnkpIHtcclxuICByZXR1cm4gYCR7aWR9Ojphbnk6OiR7Y2F0ZWdvcnl9YDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgY29uc3Qgc2VydmVyID0gc2VhcmNoUGFyYW1zLmdldCgnc2VydmVyJyk7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdjYXRlZ29yeScpOyAvLyBUaGlzIHdpbGwgYmUgcGFzc2VkIGFzIFwidHlwZVwiIHRvIGFuaXdhdGNoXHJcblxyXG4gIGlmICghaWQgfHwgIXNlcnZlciB8fCAhY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBxdWVyeSBwYXJhbWV0ZXJzJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShpZCwgc2VydmVyLCBjYXRlZ29yeSk7XHJcbiAgY29uc3QgZmFsbGJhY2tDYWNoZUtleSA9IGdldEZhbGxiYWNrQ2FjaGVLZXkoaWQsIGNhdGVnb3J5KTtcclxuICBjb25zdCBjYWNoZWQgPSBzb3VyY2VDYWNoZS5nZXQoY2FjaGVLZXkpO1xyXG4gIGlmIChjYWNoZWQgJiYgRGF0ZS5ub3coKSAtIGNhY2hlZC50aW1lc3RhbXAgPCBDQUNIRV9UVExfTVMpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjYWNoZWQuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmYWxsYmFja0NhY2hlZCA9IHNvdXJjZUNhY2hlLmdldChmYWxsYmFja0NhY2hlS2V5KTtcclxuICBpZiAoZmFsbGJhY2tDYWNoZWQgJiYgRGF0ZS5ub3coKSAtIGZhbGxiYWNrQ2FjaGVkLnRpbWVzdGFtcCA8IENBQ0hFX1RUTF9NUykge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGZhbGxiYWNrQ2FjaGVkLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGZvciAobGV0IGF0dGVtcHQgPSAxOyBhdHRlbXB0IDw9IDI7IGF0dGVtcHQrKykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgSGlBbmltZSB9ID0gYXdhaXQgZ2V0SGlBbmltZU1vZHVsZSgpO1xyXG4gICAgICAgIGNvbnN0IGhpYW5pbWUgPSBuZXcgSGlBbmltZS5TY3JhcGVyKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGhpYW5pbWUuZ2V0RXBpc29kZVNvdXJjZXMoaWQsIHNlcnZlciwgY2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YT8uc291cmNlcz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzb3VyY2VDYWNoZS5zZXQoY2FjaGVLZXksIHtcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc291cmNlQ2FjaGUuc2V0KGZhbGxiYWNrQ2FjaGVLZXksIHtcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGlubmVyRXJyb3IpIHtcclxuICAgICAgICBpZiAoYXR0ZW1wdCA9PT0gMikge1xyXG4gICAgICAgICAgdGhyb3cgaW5uZXJFcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBlcGlzb2RlIHNvdXJjZXMnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGVwaXNvZGUgc291cmNlczpcIiwgZXJyb3IpO1xyXG5cclxuICAgIGlmIChjYWNoZWQ/LmRhdGEgfHwgZmFsbGJhY2tDYWNoZWQ/LmRhdGEpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGNhY2hlZD8uZGF0YSB8fCBmYWxsYmFja0NhY2hlZD8uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGVwaXNvZGUgc291cmNlc1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwYXRoIiwiaGlBbmltZU1vZHVsZVByb21pc2UiLCJhcHBseVRocmVhZFN0cmVhbU92ZXJyaWRlIiwid29ya2VyUGF0aCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwiZXhpc3RpbmdPdmVycmlkZXMiLCJnbG9iYWxUaGlzIiwiX19idW5kbGVyUGF0aHNPdmVycmlkZXMiLCJnZXRIaUFuaW1lTW9kdWxlIiwic291cmNlQ2FjaGUiLCJNYXAiLCJDQUNIRV9UVExfTVMiLCJnZXRDYWNoZUtleSIsImlkIiwic2VydmVyIiwiY2F0ZWdvcnkiLCJnZXRGYWxsYmFja0NhY2hlS2V5IiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiY2FjaGVLZXkiLCJmYWxsYmFja0NhY2hlS2V5IiwiY2FjaGVkIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsImRhdGEiLCJmYWxsYmFja0NhY2hlZCIsImF0dGVtcHQiLCJIaUFuaW1lIiwiaGlhbmltZSIsIlNjcmFwZXIiLCJnZXRFcGlzb2RlU291cmNlcyIsInNvdXJjZXMiLCJsZW5ndGgiLCJzZXQiLCJpbm5lckVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/provider/aniwatch/player/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_23008417_Documents_GitHub_AniTeams_app_api_provider_aniwatch_player_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/provider/aniwatch/player/route.js */ \"(rsc)/./app/api/provider/aniwatch/player/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/provider/aniwatch/player/route\",\n        pathname: \"/api/provider/aniwatch/player\",\n        filename: \"route\",\n        bundlePath: \"app/api/provider/aniwatch/player/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\23008417\\\\Documents\\\\GitHub\\\\AniTeams\\\\app\\\\api\\\\provider\\\\aniwatch\\\\player\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_23008417_Documents_GitHub_AniTeams_app_api_provider_aniwatch_player_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm92aWRlciUyRmFuaXdhdGNoJTJGcGxheWVyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm92aWRlciUyRmFuaXdhdGNoJTJGcGxheWVyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvdmlkZXIlMkZhbml3YXRjaCUyRnBsYXllciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcMjMwMDg0MTdcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBbmlUZWFtc1xcXFxhcHBcXFxcYXBpXFxcXHByb3ZpZGVyXFxcXGFuaXdhdGNoXFxcXHBsYXllclxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvdmlkZXIvYW5pd2F0Y2gvcGxheWVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvdmlkZXIvYW5pd2F0Y2gvcGxheWVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm92aWRlci9hbml3YXRjaC9wbGF5ZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFwyMzAwODQxN1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXEFuaVRlYW1zXFxcXGFwcFxcXFxhcGlcXFxccHJvdmlkZXJcXFxcYW5pd2F0Y2hcXFxccGxheWVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:assert":
/*!******************************!*\
  !*** external "node:assert" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:assert");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:console":
/*!*******************************!*\
  !*** external "node:console" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:console");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "node:dns":
/*!***************************!*\
  !*** external "node:dns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:dns");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:http2":
/*!*****************************!*\
  !*** external "node:http2" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http2");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:perf_hooks":
/*!**********************************!*\
  !*** external "node:perf_hooks" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:perf_hooks");

/***/ }),

/***/ "node:querystring":
/*!***********************************!*\
  !*** external "node:querystring" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:querystring");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:tls");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:util/types":
/*!**********************************!*\
  !*** external "node:util/types" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util/types");

/***/ }),

/***/ "node:worker_threads":
/*!**************************************!*\
  !*** external "node:worker_threads" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fplayer%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();