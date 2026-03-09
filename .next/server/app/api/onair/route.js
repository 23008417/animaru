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
exports.id = "app/api/onair/route";
exports.ids = ["app/api/onair/route"];
exports.modules = {

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fonair%2Froute&page=%2Fapi%2Fonair%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonair%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fonair%2Froute&page=%2Fapi%2Fonair%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonair%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_23008417_Documents_GitHub_animaru_app_api_onair_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/onair/route.js */ \"(rsc)/./app/api/onair/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/onair/route\",\n        pathname: \"/api/onair\",\n        filename: \"route\",\n        bundlePath: \"app/api/onair/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\23008417\\\\Documents\\\\GitHub\\\\animaru\\\\app\\\\api\\\\onair\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_23008417_Documents_GitHub_animaru_app_api_onair_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvbmFpciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGb25haXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZvbmFpciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2FuaW1hcnUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1QzIzMDA4NDE3JTVDRG9jdW1lbnRzJTVDR2l0SHViJTVDYW5pbWFydSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXDIzMDA4NDE3XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcYW5pbWFydVxcXFxhcHBcXFxcYXBpXFxcXG9uYWlyXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9vbmFpci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29uYWlyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vbmFpci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXDIzMDA4NDE3XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcYW5pbWFydVxcXFxhcHBcXFxcYXBpXFxcXG9uYWlyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fonair%2Froute&page=%2Fapi%2Fonair%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonair%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/onair/route.js":
/*!********************************!*\
  !*** ./app/api/onair/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\nasync function POST() {\n    const now = new Date();\n    const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));\n    const endOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59));\n    const query = {\n        query: `\n      query ($start: Int, $end: Int) {\n        Page(perPage: 50) {\n          airingSchedules(airingAt_greater: $start, airingAt_lesser: $end, sort: TIME) {\n            id\n            airingAt\n            timeUntilAiring\n            episode\n            mediaId\n            media {\n              id\n              title {\n                romaji\n                english\n              }\n              episodes\n            }\n          }\n        }\n      }\n    `,\n        variables: {\n            start: Math.floor(startOfDay.getTime() / 1000),\n            end: Math.floor(endOfDay.getTime() / 1000)\n        }\n    };\n    try {\n        const res = await fetch('https://graphql.anilist.co', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(query)\n        });\n        const data = await res.json();\n        const schedules = data?.data?.Page?.airingSchedules || [];\n        return new Response(JSON.stringify(schedules), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (err) {\n        console.error(\"AniList query failed:\", err);\n        return new Response(JSON.stringify({\n            error: 'AniList fetch failed'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29uYWlyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQTtJQUNwQixNQUFNQyxNQUFNLElBQUlDO0lBQ2hCLE1BQU1DLGFBQWEsSUFBSUQsS0FBS0EsS0FBS0UsR0FBRyxDQUFDSCxJQUFJSSxjQUFjLElBQUlKLElBQUlLLFdBQVcsSUFBSUwsSUFBSU0sVUFBVSxJQUFJLEdBQUcsR0FBRztJQUN0RyxNQUFNQyxXQUFXLElBQUlOLEtBQUtBLEtBQUtFLEdBQUcsQ0FBQ0gsSUFBSUksY0FBYyxJQUFJSixJQUFJSyxXQUFXLElBQUlMLElBQUlNLFVBQVUsSUFBSSxJQUFJLElBQUk7SUFFdEcsTUFBTUUsUUFBUTtRQUNaQSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JSLENBQUM7UUFDREMsV0FBVztZQUNUQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNWLFdBQVdXLE9BQU8sS0FBSztZQUN6Q0MsS0FBS0gsS0FBS0MsS0FBSyxDQUFDTCxTQUFTTSxPQUFPLEtBQUs7UUFDdkM7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNRSxNQUFNLE1BQU1DLE1BQU0sOEJBQThCO1lBQ3BEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNiO1FBQ3ZCO1FBRUEsTUFBTWMsT0FBTyxNQUFNUCxJQUFJUSxJQUFJO1FBQzNCLE1BQU1DLFlBQVlGLE1BQU1BLE1BQU1HLE1BQU1DLG1CQUFtQixFQUFFO1FBRXpELE9BQU8sSUFBSUMsU0FBU1AsS0FBS0MsU0FBUyxDQUFDRyxZQUFZO1lBQzdDSSxRQUFRO1lBQ1JWLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBQ0YsRUFBRSxPQUFPVyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQyx5QkFBeUJGO1FBQ3ZDLE9BQU8sSUFBSUYsU0FBU1AsS0FBS0MsU0FBUyxDQUFDO1lBQUVVLE9BQU87UUFBdUIsSUFBSTtZQUNyRUgsUUFBUTtRQUNWO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFwyMzAwODQxN1xcRG9jdW1lbnRzXFxHaXRIdWJcXGFuaW1hcnVcXGFwcFxcYXBpXFxvbmFpclxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBzdGFydE9mRGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMobm93LmdldFVUQ0Z1bGxZZWFyKCksIG5vdy5nZXRVVENNb250aCgpLCBub3cuZ2V0VVRDRGF0ZSgpLCAwLCAwLCAwKSk7XHJcbiAgY29uc3QgZW5kT2ZEYXkgPSBuZXcgRGF0ZShEYXRlLlVUQyhub3cuZ2V0VVRDRnVsbFllYXIoKSwgbm93LmdldFVUQ01vbnRoKCksIG5vdy5nZXRVVENEYXRlKCksIDIzLCA1OSwgNTkpKTtcclxuXHJcbiAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICBxdWVyeTogYFxyXG4gICAgICBxdWVyeSAoJHN0YXJ0OiBJbnQsICRlbmQ6IEludCkge1xyXG4gICAgICAgIFBhZ2UocGVyUGFnZTogNTApIHtcclxuICAgICAgICAgIGFpcmluZ1NjaGVkdWxlcyhhaXJpbmdBdF9ncmVhdGVyOiAkc3RhcnQsIGFpcmluZ0F0X2xlc3NlcjogJGVuZCwgc29ydDogVElNRSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBhaXJpbmdBdFxyXG4gICAgICAgICAgICB0aW1lVW50aWxBaXJpbmdcclxuICAgICAgICAgICAgZXBpc29kZVxyXG4gICAgICAgICAgICBtZWRpYUlkXHJcbiAgICAgICAgICAgIG1lZGlhIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHJvbWFqaVxyXG4gICAgICAgICAgICAgICAgZW5nbGlzaFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlcGlzb2Rlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHN0YXJ0OiBNYXRoLmZsb29yKHN0YXJ0T2ZEYXkuZ2V0VGltZSgpIC8gMTAwMCksXHJcbiAgICAgIGVuZDogTWF0aC5mbG9vcihlbmRPZkRheS5nZXRUaW1lKCkgLyAxMDAwKSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2dyYXBocWwuYW5pbGlzdC5jbycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShxdWVyeSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnN0IHNjaGVkdWxlcyA9IGRhdGE/LmRhdGE/LlBhZ2U/LmFpcmluZ1NjaGVkdWxlcyB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHNjaGVkdWxlcyksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQW5pTGlzdCBxdWVyeSBmYWlsZWQ6XCIsIGVycik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdBbmlMaXN0IGZldGNoIGZhaWxlZCcgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBPU1QiLCJub3ciLCJEYXRlIiwic3RhcnRPZkRheSIsIlVUQyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZW5kT2ZEYXkiLCJxdWVyeSIsInZhcmlhYmxlcyIsInN0YXJ0IiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsImVuZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJzY2hlZHVsZXMiLCJQYWdlIiwiYWlyaW5nU2NoZWR1bGVzIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/onair/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fonair%2Froute&page=%2Fapi%2Fonair%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonair%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5Canimaru&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();