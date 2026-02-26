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
exports.id = "app/api/consumet/[...path]/route";
exports.ids = ["app/api/consumet/[...path]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/consumet/[...path]/route.js":
/*!*********************************************!*\
  !*** ./app/api/consumet/[...path]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nfunction normalizeBase(baseUrl) {\n    return (baseUrl || \"\").trim().replace(/\\/+$/, \"\");\n}\nfunction getBaseUrls() {\n    const configured = normalizeBase(\"https://api.consumet.org\");\n    const fallbacks = [\n        \"https://no-drab.vercel.app\",\n        \"https://api.consumet.org\"\n    ];\n    const candidates = [\n        configured,\n        ...fallbacks\n    ].filter(Boolean);\n    return [\n        ...new Set(candidates)\n    ];\n}\nfunction isInvalidApiPayload(data) {\n    if (!data || typeof data !== \"object\") {\n        return true;\n    }\n    if (data?.payload?.repo || data?.payload?.allShortcutsEnabled) {\n        return true;\n    }\n    return false;\n}\nasync function GET(req, context) {\n    const params = await context.params;\n    const pathSegments = params?.path || [];\n    if (!pathSegments.length) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing Consumet path\"\n        }, {\n            status: 400\n        });\n    }\n    const url = new URL(req.url);\n    const search = url.search || \"\";\n    const bases = getBaseUrls();\n    for (const base of bases){\n        const target = `${base}/${pathSegments.join(\"/\")}${search}`;\n        try {\n            const upstream = await fetch(target, {\n                cache: \"no-store\",\n                headers: {\n                    Accept: \"application/json\"\n                }\n            });\n            if (!upstream.ok) {\n                continue;\n            }\n            const body = await upstream.text();\n            let parsed;\n            try {\n                parsed = JSON.parse(body);\n            } catch  {\n                continue;\n            }\n            if (isInvalidApiPayload(parsed)) {\n                continue;\n            }\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(parsed, {\n                status: 200\n            });\n        } catch  {\n            continue;\n        }\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Failed to fetch from Consumet upstreams\"\n    }, {\n        status: 502\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnN1bWV0L1suLi5wYXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxTQUFTQyxjQUFjQyxPQUFPO0lBQzVCLE9BQU8sQ0FBQ0EsV0FBVyxFQUFDLEVBQUdDLElBQUksR0FBR0MsT0FBTyxDQUFDLFFBQVE7QUFDaEQ7QUFFQSxTQUFTQztJQUNQLE1BQU1DLGFBQWFMLGNBQWNNLDBCQUF5QztJQUMxRSxNQUFNRyxZQUFZO1FBQUM7UUFBOEI7S0FBMkI7SUFDNUUsTUFBTUMsYUFBYTtRQUFDTDtXQUFlSTtLQUFVLENBQUNFLE1BQU0sQ0FBQ0M7SUFDckQsT0FBTztXQUFJLElBQUlDLElBQUlIO0tBQVk7QUFDakM7QUFFQSxTQUFTSSxvQkFBb0JDLElBQUk7SUFDL0IsSUFBSSxDQUFDQSxRQUFRLE9BQU9BLFNBQVMsVUFBVTtRQUNyQyxPQUFPO0lBQ1Q7SUFFQSxJQUFJQSxNQUFNQyxTQUFTQyxRQUFRRixNQUFNQyxTQUFTRSxxQkFBcUI7UUFDN0QsT0FBTztJQUNUO0lBRUEsT0FBTztBQUNUO0FBRU8sZUFBZUMsSUFBSUMsR0FBRyxFQUFFQyxPQUFPO0lBQ3BDLE1BQU1DLFNBQVMsTUFBTUQsUUFBUUMsTUFBTTtJQUNuQyxNQUFNQyxlQUFlRCxRQUFRRSxRQUFRLEVBQUU7SUFFdkMsSUFBSSxDQUFDRCxhQUFhRSxNQUFNLEVBQUU7UUFDeEIsT0FBTzFCLHFEQUFZQSxDQUFDMkIsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7SUFFQSxNQUFNQyxNQUFNLElBQUlDLElBQUlWLElBQUlTLEdBQUc7SUFDM0IsTUFBTUUsU0FBU0YsSUFBSUUsTUFBTSxJQUFJO0lBQzdCLE1BQU1DLFFBQVE1QjtJQUVkLEtBQUssTUFBTTZCLFFBQVFELE1BQU87UUFDeEIsTUFBTUUsU0FBUyxHQUFHRCxLQUFLLENBQUMsRUFBRVYsYUFBYVksSUFBSSxDQUFDLE9BQU9KLFFBQVE7UUFFM0QsSUFBSTtZQUNGLE1BQU1LLFdBQVcsTUFBTUMsTUFBTUgsUUFBUTtnQkFDbkNJLE9BQU87Z0JBQ1BDLFNBQVM7b0JBQ1BDLFFBQVE7Z0JBQ1Y7WUFDRjtZQUVBLElBQUksQ0FBQ0osU0FBU0ssRUFBRSxFQUFFO2dCQUNoQjtZQUNGO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDLElBQUlDO1lBRUosSUFBSTtnQkFDRkEsU0FBU0MsS0FBS0MsS0FBSyxDQUFDSjtZQUN0QixFQUFFLE9BQU07Z0JBQ047WUFDRjtZQUVBLElBQUk1QixvQkFBb0I4QixTQUFTO2dCQUMvQjtZQUNGO1lBRUEsT0FBTzdDLHFEQUFZQSxDQUFDMkIsSUFBSSxDQUFDa0IsUUFBUTtnQkFBRWhCLFFBQVE7WUFBSTtRQUNqRCxFQUFFLE9BQU07WUFDTjtRQUNGO0lBQ0Y7SUFFQSxPQUFPN0IscURBQVlBLENBQUMyQixJQUFJLENBQUM7UUFBRUMsT0FBTztJQUEwQyxHQUFHO1FBQUVDLFFBQVE7SUFBSTtBQUMvRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFwyMzAwODQxN1xcRG9jdW1lbnRzXFxHaXRIdWJcXEFuaVRlYW1zXFxhcHBcXGFwaVxcY29uc3VtZXRcXFsuLi5wYXRoXVxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlKGJhc2VVcmwpIHtcclxuICByZXR1cm4gKGJhc2VVcmwgfHwgXCJcIikudHJpbSgpLnJlcGxhY2UoL1xcLyskLywgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJhc2VVcmxzKCkge1xyXG4gIGNvbnN0IGNvbmZpZ3VyZWQgPSBub3JtYWxpemVCYXNlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlNVTUVUX0JBU0VfVVJMKTtcclxuICBjb25zdCBmYWxsYmFja3MgPSBbXCJodHRwczovL25vLWRyYWIudmVyY2VsLmFwcFwiLCBcImh0dHBzOi8vYXBpLmNvbnN1bWV0Lm9yZ1wiXTtcclxuICBjb25zdCBjYW5kaWRhdGVzID0gW2NvbmZpZ3VyZWQsIC4uLmZhbGxiYWNrc10uZmlsdGVyKEJvb2xlYW4pO1xyXG4gIHJldHVybiBbLi4ubmV3IFNldChjYW5kaWRhdGVzKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSW52YWxpZEFwaVBheWxvYWQoZGF0YSkge1xyXG4gIGlmICghZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YT8ucGF5bG9hZD8ucmVwbyB8fCBkYXRhPy5wYXlsb2FkPy5hbGxTaG9ydGN1dHNFbmFibGVkKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEsIGNvbnRleHQpIHtcclxuICBjb25zdCBwYXJhbXMgPSBhd2FpdCBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCBwYXRoU2VnbWVudHMgPSBwYXJhbXM/LnBhdGggfHwgW107XHJcblxyXG4gIGlmICghcGF0aFNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTWlzc2luZyBDb25zdW1ldCBwYXRoXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3Qgc2VhcmNoID0gdXJsLnNlYXJjaCB8fCBcIlwiO1xyXG4gIGNvbnN0IGJhc2VzID0gZ2V0QmFzZVVybHMoKTtcclxuXHJcbiAgZm9yIChjb25zdCBiYXNlIG9mIGJhc2VzKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBgJHtiYXNlfS8ke3BhdGhTZWdtZW50cy5qb2luKFwiL1wiKX0ke3NlYXJjaH1gO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVwc3RyZWFtID0gYXdhaXQgZmV0Y2godGFyZ2V0LCB7XHJcbiAgICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF1cHN0cmVhbS5vaykge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgdXBzdHJlYW0udGV4dCgpO1xyXG4gICAgICBsZXQgcGFyc2VkO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJzZWQgPSBKU09OLnBhcnNlKGJvZHkpO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzSW52YWxpZEFwaVBheWxvYWQocGFyc2VkKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocGFyc2VkLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGZyb20gQ29uc3VtZXQgdXBzdHJlYW1zXCIgfSwgeyBzdGF0dXM6IDUwMiB9KTtcclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJub3JtYWxpemVCYXNlIiwiYmFzZVVybCIsInRyaW0iLCJyZXBsYWNlIiwiZ2V0QmFzZVVybHMiLCJjb25maWd1cmVkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NPTlNVTUVUX0JBU0VfVVJMIiwiZmFsbGJhY2tzIiwiY2FuZGlkYXRlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJTZXQiLCJpc0ludmFsaWRBcGlQYXlsb2FkIiwiZGF0YSIsInBheWxvYWQiLCJyZXBvIiwiYWxsU2hvcnRjdXRzRW5hYmxlZCIsIkdFVCIsInJlcSIsImNvbnRleHQiLCJwYXJhbXMiLCJwYXRoU2VnbWVudHMiLCJwYXRoIiwibGVuZ3RoIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXJsIiwiVVJMIiwic2VhcmNoIiwiYmFzZXMiLCJiYXNlIiwidGFyZ2V0Iiwiam9pbiIsInVwc3RyZWFtIiwiZmV0Y2giLCJjYWNoZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJvayIsImJvZHkiLCJ0ZXh0IiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/consumet/[...path]/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&page=%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&page=%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_23008417_Documents_GitHub_AniTeams_app_api_consumet_path_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/consumet/[...path]/route.js */ \"(rsc)/./app/api/consumet/[...path]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/consumet/[...path]/route\",\n        pathname: \"/api/consumet/[...path]\",\n        filename: \"route\",\n        bundlePath: \"app/api/consumet/[...path]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\23008417\\\\Documents\\\\GitHub\\\\AniTeams\\\\app\\\\api\\\\consumet\\\\[...path]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_23008417_Documents_GitHub_AniTeams_app_api_consumet_path_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb25zdW1ldCUyRiU1Qi4uLnBhdGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNvbnN1bWV0JTJGJTVCLi4ucGF0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNvbnN1bWV0JTJGJTVCLi4ucGF0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5QztBQUN0SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcMjMwMDg0MTdcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBbmlUZWFtc1xcXFxhcHBcXFxcYXBpXFxcXGNvbnN1bWV0XFxcXFsuLi5wYXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29uc3VtZXQvWy4uLnBhdGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29uc3VtZXQvWy4uLnBhdGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb25zdW1ldC9bLi4ucGF0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFwyMzAwODQxN1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXEFuaVRlYW1zXFxcXGFwcFxcXFxhcGlcXFxcY29uc3VtZXRcXFxcWy4uLnBhdGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&page=%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&page=%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconsumet%2F%5B...path%5D%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();