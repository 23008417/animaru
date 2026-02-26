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
exports.id = "app/api/server/route";
exports.ids = ["app/api/server/route"];
exports.modules = {

/***/ "(rsc)/./app/api/server/route.js":
/*!*********************************!*\
  !*** ./app/api/server/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet hiAnimeModulePromise;\nfunction applyThreadStreamOverride() {\n    const workerPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), \"node_modules\", \"thread-stream\", \"lib\", \"worker.js\");\n    const existingOverrides = globalThis.__bundlerPathsOverrides || {};\n    globalThis.__bundlerPathsOverrides = {\n        ...existingOverrides,\n        \"thread-stream-worker\": workerPath\n    };\n}\nasync function getHiAnimeModule() {\n    applyThreadStreamOverride();\n    if (!hiAnimeModulePromise) {\n        hiAnimeModulePromise = Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/form-data\"), __webpack_require__.e(\"vendor-chunks/axios\"), __webpack_require__.e(\"vendor-chunks/follow-redirects\"), __webpack_require__.e(\"vendor-chunks/debug\"), __webpack_require__.e(\"vendor-chunks/get-intrinsic\"), __webpack_require__.e(\"vendor-chunks/asynckit\"), __webpack_require__.e(\"vendor-chunks/combined-stream\"), __webpack_require__.e(\"vendor-chunks/proxy-from-env\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/supports-color\"), __webpack_require__.e(\"vendor-chunks/has-symbols\"), __webpack_require__.e(\"vendor-chunks/delayed-stream\"), __webpack_require__.e(\"vendor-chunks/function-bind\"), __webpack_require__.e(\"vendor-chunks/es-set-tostringtag\"), __webpack_require__.e(\"vendor-chunks/get-proto\"), __webpack_require__.e(\"vendor-chunks/call-bind-apply-helpers\"), __webpack_require__.e(\"vendor-chunks/dunder-proto\"), __webpack_require__.e(\"vendor-chunks/math-intrinsics\"), __webpack_require__.e(\"vendor-chunks/es-errors\"), __webpack_require__.e(\"vendor-chunks/has-flag\"), __webpack_require__.e(\"vendor-chunks/gopd\"), __webpack_require__.e(\"vendor-chunks/es-define-property\"), __webpack_require__.e(\"vendor-chunks/hasown\"), __webpack_require__.e(\"vendor-chunks/has-tostringtag\"), __webpack_require__.e(\"vendor-chunks/es-object-atoms\"), __webpack_require__.e(\"vendor-chunks/undici\"), __webpack_require__.e(\"vendor-chunks/crypto-js\"), __webpack_require__.e(\"vendor-chunks/iconv-lite\"), __webpack_require__.e(\"vendor-chunks/parse5\"), __webpack_require__.e(\"vendor-chunks/cheerio\"), __webpack_require__.e(\"vendor-chunks/pino\"), __webpack_require__.e(\"vendor-chunks/css-select\"), __webpack_require__.e(\"vendor-chunks/entities\"), __webpack_require__.e(\"vendor-chunks/domutils\"), __webpack_require__.e(\"vendor-chunks/fast-redact\"), __webpack_require__.e(\"vendor-chunks/pino-std-serializers\"), __webpack_require__.e(\"vendor-chunks/whatwg-mimetype\"), __webpack_require__.e(\"vendor-chunks/thread-stream\"), __webpack_require__.e(\"vendor-chunks/nth-check\"), __webpack_require__.e(\"vendor-chunks/htmlparser2\"), __webpack_require__.e(\"vendor-chunks/cheerio-select\"), __webpack_require__.e(\"vendor-chunks/whatwg-encoding\"), __webpack_require__.e(\"vendor-chunks/encoding-sniffer\"), __webpack_require__.e(\"vendor-chunks/domhandler\"), __webpack_require__.e(\"vendor-chunks/dom-serializer\"), __webpack_require__.e(\"vendor-chunks/css-what\"), __webpack_require__.e(\"vendor-chunks/parse5-parser-stream\"), __webpack_require__.e(\"vendor-chunks/parse5-htmlparser2-tree-adapter\"), __webpack_require__.e(\"vendor-chunks/domelementtype\"), __webpack_require__.e(\"vendor-chunks/aniwatch\"), __webpack_require__.e(\"vendor-chunks/sonic-boom\"), __webpack_require__.e(\"vendor-chunks/safer-buffer\"), __webpack_require__.e(\"vendor-chunks/safe-stable-stringify\"), __webpack_require__.e(\"vendor-chunks/quick-format-unescaped\"), __webpack_require__.e(\"vendor-chunks/on-exit-leak-free\"), __webpack_require__.e(\"vendor-chunks/boolbase\"), __webpack_require__.e(\"vendor-chunks/atomic-sleep\")]).then(__webpack_require__.bind(__webpack_require__, /*! aniwatch */ \"(rsc)/./node_modules/aniwatch/dist/index.js\"));\n    }\n    return hiAnimeModulePromise;\n}\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const episodeId = searchParams.get(\"episodeId\");\n    if (!episodeId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing episodeId parameter\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        for(let attempt = 1; attempt <= 2; attempt++){\n            try {\n                const { HiAnime } = await getHiAnimeModule();\n                const hianime = new HiAnime.Scraper();\n                const data = await hianime.getEpisodeServers(episodeId);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n                    status: 200\n                });\n            } catch (innerError) {\n                if (attempt === 2) {\n                    throw innerError;\n                }\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 500,\n            scraper: \"getEpisodeServers\",\n            message: \"getEpisodeServers: fetchError: Something went wrong\"\n        }, {\n            status: 500\n        });\n    } catch (error) {\n        console.error(\"Error in getEpisodeServers:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 500,\n            scraper: \"getEpisodeServers\",\n            message: \"getEpisodeServers: fetchError: Something went wrong\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlcnZlci9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBQ25CO0FBRXhCLElBQUlFO0FBRUosU0FBU0M7SUFDUCxNQUFNQyxhQUFhSCxtREFBWSxDQUFDSyxRQUFRQyxHQUFHLElBQUksZ0JBQWdCLGlCQUFpQixPQUFPO0lBQ3ZGLE1BQU1DLG9CQUFvQkMsV0FBV0MsdUJBQXVCLElBQUksQ0FBQztJQUVqRUQsV0FBV0MsdUJBQXVCLEdBQUc7UUFDbkMsR0FBR0YsaUJBQWlCO1FBQ3BCLHdCQUF3Qko7SUFDMUI7QUFDRjtBQUVBLGVBQWVPO0lBQ2JSO0lBQ0EsSUFBSSxDQUFDRCxzQkFBc0I7UUFDekJBLHVCQUF1QixrbUdBQWtCO0lBQzNDO0lBRUEsT0FBT0E7QUFDVDtBQUVPLGVBQWVVLElBQUlDLEdBQUc7SUFDM0IsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLFlBQVlILGFBQWFJLEdBQUcsQ0FBQztJQUVuQyxJQUFJLENBQUNELFdBQVc7UUFDZCxPQUFPakIscURBQVlBLENBQUNtQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE4QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRjtJQUVBLElBQUk7UUFDRixJQUFLLElBQUlDLFVBQVUsR0FBR0EsV0FBVyxHQUFHQSxVQUFXO1lBQzdDLElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNWjtnQkFDMUIsTUFBTWEsVUFBVSxJQUFJRCxRQUFRRSxPQUFPO2dCQUNuQyxNQUFNQyxPQUFPLE1BQU1GLFFBQVFHLGlCQUFpQixDQUFDVjtnQkFDN0MsT0FBT2pCLHFEQUFZQSxDQUFDbUIsSUFBSSxDQUFDTyxNQUFNO29CQUFFTCxRQUFRO2dCQUFJO1lBQy9DLEVBQUUsT0FBT08sWUFBWTtnQkFDbkIsSUFBSU4sWUFBWSxHQUFHO29CQUNqQixNQUFNTTtnQkFDUjtZQUNGO1FBQ0Y7UUFFQSxPQUFPNUIscURBQVlBLENBQUNtQixJQUFJLENBQ3RCO1lBQ0VFLFFBQVE7WUFDUlEsU0FBUztZQUNUQyxTQUFTO1FBQ1gsR0FDQTtZQUFFVCxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPRCxPQUFPO1FBQ2RXLFFBQVFYLEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU9wQixxREFBWUEsQ0FBQ21CLElBQUksQ0FDdEI7WUFDRUUsUUFBUTtZQUNSUSxTQUFTO1lBQ1RDLFNBQVM7UUFDWCxHQUNBO1lBQUVULFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDIzMDA4NDE3XFxEb2N1bWVudHNcXEdpdEh1YlxcQW5pVGVhbXNcXGFwcFxcYXBpXFxzZXJ2ZXJcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmxldCBoaUFuaW1lTW9kdWxlUHJvbWlzZTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VGhyZWFkU3RyZWFtT3ZlcnJpZGUoKSB7XHJcbiAgY29uc3Qgd29ya2VyUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcIm5vZGVfbW9kdWxlc1wiLCBcInRocmVhZC1zdHJlYW1cIiwgXCJsaWJcIiwgXCJ3b3JrZXIuanNcIik7XHJcbiAgY29uc3QgZXhpc3RpbmdPdmVycmlkZXMgPSBnbG9iYWxUaGlzLl9fYnVuZGxlclBhdGhzT3ZlcnJpZGVzIHx8IHt9O1xyXG5cclxuICBnbG9iYWxUaGlzLl9fYnVuZGxlclBhdGhzT3ZlcnJpZGVzID0ge1xyXG4gICAgLi4uZXhpc3RpbmdPdmVycmlkZXMsXHJcbiAgICBcInRocmVhZC1zdHJlYW0td29ya2VyXCI6IHdvcmtlclBhdGgsXHJcbiAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SGlBbmltZU1vZHVsZSgpIHtcclxuICBhcHBseVRocmVhZFN0cmVhbU92ZXJyaWRlKCk7XHJcbiAgaWYgKCFoaUFuaW1lTW9kdWxlUHJvbWlzZSkge1xyXG4gICAgaGlBbmltZU1vZHVsZVByb21pc2UgPSBpbXBvcnQoXCJhbml3YXRjaFwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBoaUFuaW1lTW9kdWxlUHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCBlcGlzb2RlSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZXBpc29kZUlkXCIpO1xyXG5cclxuICBpZiAoIWVwaXNvZGVJZCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTWlzc2luZyBlcGlzb2RlSWQgcGFyYW1ldGVyXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBmb3IgKGxldCBhdHRlbXB0ID0gMTsgYXR0ZW1wdCA8PSAyOyBhdHRlbXB0KyspIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IEhpQW5pbWUgfSA9IGF3YWl0IGdldEhpQW5pbWVNb2R1bGUoKTtcclxuICAgICAgICBjb25zdCBoaWFuaW1lID0gbmV3IEhpQW5pbWUuU2NyYXBlcigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoaWFuaW1lLmdldEVwaXNvZGVTZXJ2ZXJzKGVwaXNvZGVJZCk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGlubmVyRXJyb3IpIHtcclxuICAgICAgICBpZiAoYXR0ZW1wdCA9PT0gMikge1xyXG4gICAgICAgICAgdGhyb3cgaW5uZXJFcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgICBzY3JhcGVyOiBcImdldEVwaXNvZGVTZXJ2ZXJzXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJnZXRFcGlzb2RlU2VydmVyczogZmV0Y2hFcnJvcjogU29tZXRoaW5nIHdlbnQgd3JvbmdcIixcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0RXBpc29kZVNlcnZlcnM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgIHNjcmFwZXI6IFwiZ2V0RXBpc29kZVNlcnZlcnNcIixcclxuICAgICAgICBtZXNzYWdlOiBcImdldEVwaXNvZGVTZXJ2ZXJzOiBmZXRjaEVycm9yOiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwYXRoIiwiaGlBbmltZU1vZHVsZVByb21pc2UiLCJhcHBseVRocmVhZFN0cmVhbU92ZXJyaWRlIiwid29ya2VyUGF0aCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwiZXhpc3RpbmdPdmVycmlkZXMiLCJnbG9iYWxUaGlzIiwiX19idW5kbGVyUGF0aHNPdmVycmlkZXMiLCJnZXRIaUFuaW1lTW9kdWxlIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZXBpc29kZUlkIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYXR0ZW1wdCIsIkhpQW5pbWUiLCJoaWFuaW1lIiwiU2NyYXBlciIsImRhdGEiLCJnZXRFcGlzb2RlU2VydmVycyIsImlubmVyRXJyb3IiLCJzY3JhcGVyIiwibWVzc2FnZSIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/server/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fserver%2Froute&page=%2Fapi%2Fserver%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fserver%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fserver%2Froute&page=%2Fapi%2Fserver%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fserver%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_23008417_Documents_GitHub_AniTeams_app_api_server_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/server/route.js */ \"(rsc)/./app/api/server/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/server/route\",\n        pathname: \"/api/server\",\n        filename: \"route\",\n        bundlePath: \"app/api/server/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\23008417\\\\Documents\\\\GitHub\\\\AniTeams\\\\app\\\\api\\\\server\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_23008417_Documents_GitHub_AniTeams_app_api_server_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZXJ2ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlcnZlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlcnZlciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcMjMwMDg0MTdcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBbmlUZWFtc1xcXFxhcHBcXFxcYXBpXFxcXHNlcnZlclxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VydmVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VydmVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZXJ2ZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFwyMzAwODQxN1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXEFuaVRlYW1zXFxcXGFwcFxcXFxhcGlcXFxcc2VydmVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fserver%2Froute&page=%2Fapi%2Fserver%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fserver%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fserver%2Froute&page=%2Fapi%2Fserver%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fserver%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();