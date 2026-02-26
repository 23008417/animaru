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
exports.id = "app/api/provider/aniwatch/episodes/route";
exports.ids = ["app/api/provider/aniwatch/episodes/route"];
exports.modules = {

/***/ "(rsc)/./app/api/provider/aniwatch/episodes/route.js":
/*!*****************************************************!*\
  !*** ./app/api/provider/aniwatch/episodes/route.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst runtime = 'nodejs';\nlet hiAnimeModulePromise;\nfunction applyThreadStreamOverride() {\n    const workerPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), 'node_modules', 'thread-stream', 'lib', 'worker.js');\n    const existingOverrides = globalThis.__bundlerPathsOverrides || {};\n    globalThis.__bundlerPathsOverrides = {\n        ...existingOverrides,\n        'thread-stream-worker': workerPath\n    };\n}\nasync function getHiAnimeModule() {\n    applyThreadStreamOverride();\n    if (!hiAnimeModulePromise) {\n        hiAnimeModulePromise = Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/form-data\"), __webpack_require__.e(\"vendor-chunks/axios\"), __webpack_require__.e(\"vendor-chunks/follow-redirects\"), __webpack_require__.e(\"vendor-chunks/debug\"), __webpack_require__.e(\"vendor-chunks/get-intrinsic\"), __webpack_require__.e(\"vendor-chunks/asynckit\"), __webpack_require__.e(\"vendor-chunks/combined-stream\"), __webpack_require__.e(\"vendor-chunks/proxy-from-env\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/supports-color\"), __webpack_require__.e(\"vendor-chunks/has-symbols\"), __webpack_require__.e(\"vendor-chunks/delayed-stream\"), __webpack_require__.e(\"vendor-chunks/function-bind\"), __webpack_require__.e(\"vendor-chunks/es-set-tostringtag\"), __webpack_require__.e(\"vendor-chunks/get-proto\"), __webpack_require__.e(\"vendor-chunks/call-bind-apply-helpers\"), __webpack_require__.e(\"vendor-chunks/dunder-proto\"), __webpack_require__.e(\"vendor-chunks/math-intrinsics\"), __webpack_require__.e(\"vendor-chunks/es-errors\"), __webpack_require__.e(\"vendor-chunks/has-flag\"), __webpack_require__.e(\"vendor-chunks/gopd\"), __webpack_require__.e(\"vendor-chunks/es-define-property\"), __webpack_require__.e(\"vendor-chunks/hasown\"), __webpack_require__.e(\"vendor-chunks/has-tostringtag\"), __webpack_require__.e(\"vendor-chunks/es-object-atoms\"), __webpack_require__.e(\"vendor-chunks/undici\"), __webpack_require__.e(\"vendor-chunks/crypto-js\"), __webpack_require__.e(\"vendor-chunks/iconv-lite\"), __webpack_require__.e(\"vendor-chunks/parse5\"), __webpack_require__.e(\"vendor-chunks/cheerio\"), __webpack_require__.e(\"vendor-chunks/pino\"), __webpack_require__.e(\"vendor-chunks/css-select\"), __webpack_require__.e(\"vendor-chunks/entities\"), __webpack_require__.e(\"vendor-chunks/domutils\"), __webpack_require__.e(\"vendor-chunks/fast-redact\"), __webpack_require__.e(\"vendor-chunks/pino-std-serializers\"), __webpack_require__.e(\"vendor-chunks/whatwg-mimetype\"), __webpack_require__.e(\"vendor-chunks/thread-stream\"), __webpack_require__.e(\"vendor-chunks/nth-check\"), __webpack_require__.e(\"vendor-chunks/htmlparser2\"), __webpack_require__.e(\"vendor-chunks/cheerio-select\"), __webpack_require__.e(\"vendor-chunks/whatwg-encoding\"), __webpack_require__.e(\"vendor-chunks/encoding-sniffer\"), __webpack_require__.e(\"vendor-chunks/domhandler\"), __webpack_require__.e(\"vendor-chunks/dom-serializer\"), __webpack_require__.e(\"vendor-chunks/css-what\"), __webpack_require__.e(\"vendor-chunks/parse5-parser-stream\"), __webpack_require__.e(\"vendor-chunks/parse5-htmlparser2-tree-adapter\"), __webpack_require__.e(\"vendor-chunks/domelementtype\"), __webpack_require__.e(\"vendor-chunks/aniwatch\"), __webpack_require__.e(\"vendor-chunks/sonic-boom\"), __webpack_require__.e(\"vendor-chunks/safer-buffer\"), __webpack_require__.e(\"vendor-chunks/safe-stable-stringify\"), __webpack_require__.e(\"vendor-chunks/quick-format-unescaped\"), __webpack_require__.e(\"vendor-chunks/on-exit-leak-free\"), __webpack_require__.e(\"vendor-chunks/boolbase\"), __webpack_require__.e(\"vendor-chunks/atomic-sleep\")]).then(__webpack_require__.bind(__webpack_require__, /*! aniwatch */ \"(rsc)/./node_modules/aniwatch/dist/index.js\"));\n    }\n    return hiAnimeModulePromise;\n}\nfunction dedupeEpisodes(items) {\n    const seen = new Set();\n    const unique = [];\n    for (const item of items || []){\n        const rawId = item?.episodeId ?? item?.id;\n        if (!rawId) {\n            unique.push(item);\n            continue;\n        }\n        const episodeId = String(rawId);\n        if (seen.has(episodeId)) {\n            continue;\n        }\n        seen.add(episodeId);\n        unique.push(item);\n    }\n    return unique;\n}\nfunction normalizeEpisodeId(value) {\n    if (!value) return '';\n    const raw = String(value);\n    try {\n        if (raw.startsWith('http://') || raw.startsWith('https://')) {\n            const urlObj = new URL(raw);\n            return `${urlObj.pathname.replace('/watch/', '')}${urlObj.search}`;\n        }\n        if (raw.includes('$episode$')) {\n            const [slug, episodePart] = raw.split('$episode$');\n            return `${slug}?ep=${episodePart}`;\n        }\n        return raw;\n    } catch  {\n        return raw;\n    }\n}\nfunction normalizeTitle(value) {\n    return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();\n}\nfunction extractSeasonFromText(value) {\n    if (!value) return null;\n    const text = String(value).toLowerCase();\n    let match = text.match(/(\\d+)(?:st|nd|rd|th)\\s*season/);\n    if (match) return Number(match[1]);\n    match = text.match(/season\\s*(\\d+)/);\n    if (match) return Number(match[1]);\n    match = text.match(/\\bs\\s*(\\d{1,2})\\b/);\n    if (match) return Number(match[1]);\n    return null;\n}\nfunction hasSeasonHint(value, seasonNumber) {\n    if (!value || !Number.isFinite(seasonNumber) || seasonNumber <= 0) return false;\n    const text = String(value).toLowerCase();\n    const patterns = [\n        new RegExp(`\\\\bseason\\\\s*${seasonNumber}\\\\b`),\n        new RegExp(`\\\\b${seasonNumber}(?:st|nd|rd|th)\\\\s*season\\\\b`),\n        new RegExp(`\\\\bs\\\\s*${seasonNumber}\\\\b`),\n        new RegExp(`\\\\bseason-${seasonNumber}\\\\b`),\n        new RegExp(`\\\\bseason_${seasonNumber}\\\\b`)\n    ];\n    return patterns.some((pattern)=>pattern.test(text));\n}\nfunction getPreferredSeasonNumber(titles) {\n    for (const title of titles){\n        const season = extractSeasonFromText(title);\n        if (Number.isFinite(season) && season > 0) {\n            return season;\n        }\n    }\n    return null;\n}\nfunction getCandidateTitles(api2Data) {\n    const titles = api2Data?.titles || {};\n    const rawTitles = [\n        titles.en,\n        titles['x-jat'],\n        titles.ja,\n        titles['zh-Hans'],\n        titles['zh-Hant']\n    ].filter(Boolean);\n    const unique = [];\n    const seen = new Set();\n    for (const title of rawTitles){\n        const key = normalizeTitle(title);\n        if (!key || seen.has(key)) continue;\n        seen.add(key);\n        unique.push(String(title));\n    }\n    return unique.sort((a, b)=>{\n        const aHasSeason = extractSeasonFromText(a) ? 1 : 0;\n        const bHasSeason = extractSeasonFromText(b) ? 1 : 0;\n        return bHasSeason - aHasSeason;\n    });\n}\nfunction pickBestAnimeResult(results, title, preferredSeasonNumber) {\n    if (!Array.isArray(results) || !results.length) return null;\n    const normalizedQuery = normalizeTitle(title);\n    const ranked = results.map((item, index)=>{\n        const name = String(item?.name || '');\n        const id = String(item?.id || '');\n        const normalizedName = normalizeTitle(name);\n        const normalizedId = normalizeTitle(id);\n        let score = 0;\n        if (normalizedName === normalizedQuery) {\n            score += 200;\n        }\n        if (normalizedName.includes(normalizedQuery) || normalizedQuery.includes(normalizedName)) {\n            score += 80;\n        }\n        if (normalizedId.includes(normalizedQuery) || normalizedQuery.includes(normalizedId)) {\n            score += 40;\n        }\n        const candidateSeason = extractSeasonFromText(`${name} ${id}`);\n        if (Number.isFinite(preferredSeasonNumber) && preferredSeasonNumber > 0) {\n            if (hasSeasonHint(name, preferredSeasonNumber) || hasSeasonHint(id, preferredSeasonNumber)) {\n                score += 220;\n            } else if (Number.isFinite(candidateSeason) && candidateSeason > 0 && candidateSeason !== preferredSeasonNumber) {\n                score -= 120;\n            }\n        }\n        if (normalizedName.includes('special') || normalizedId.includes('special')) {\n            score -= 120;\n        }\n        return {\n            item,\n            score,\n            index\n        };\n    });\n    ranked.sort((a, b)=>b.score - a.score || a.index - b.index);\n    return ranked[0]?.item || results[0];\n}\nasync function fetchAniwatchEpisodes(api2Data) {\n    const titles = getCandidateTitles(api2Data);\n    if (!titles.length) return null;\n    const preferredSeasonNumber = getPreferredSeasonNumber(titles);\n    try {\n        const { HiAnime } = await getHiAnimeModule();\n        const hianime = new HiAnime.Scraper();\n        for (const title of titles){\n            const search = await hianime.search(title, 1, {});\n            const result = pickBestAnimeResult(search?.animes, title, preferredSeasonNumber);\n            if (!result?.id) continue;\n            const episodesResponse = await hianime.getEpisodes(result.id);\n            const episodes = episodesResponse?.episodes;\n            if (!Array.isArray(episodes) || !episodes.length) continue;\n            return episodes;\n        }\n    } catch  {\n        return null;\n    }\n    return null;\n}\nasync function fetchPrimaryEpisodes(animeId) {\n    const candidates = [\n        `https://no-drab.vercel.app/meta/anilist/info/${animeId}`,\n        `https://api.consumet.org/meta/anilist/info/${animeId}`\n    ];\n    for (const url of candidates){\n        try {\n            const res = await fetch(url);\n            if (!res.ok) continue;\n            const data = await res.json();\n            if (Array.isArray(data?.episodes) && data.episodes.length > 0) {\n                return data.episodes;\n            }\n        } catch  {\n            continue;\n        }\n    }\n    return null;\n}\nfunction resolveMapperBaseUrl() {\n    const raw = \"https://raw.githubusercontent.com/anime-kun32/hianime-mapper/main/mapper.json\";\n    const defaultBase = \"https://hianime-mapper-iv3g.vercel.app\";\n    if (!raw) {\n        return defaultBase;\n    }\n    const normalized = raw.trim().replace(/\\/+$/, '');\n    if (normalized.endsWith('.json')) {\n        return defaultBase;\n    }\n    return normalized;\n}\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const animeId = searchParams.get(\"animeId\");\n    if (!animeId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing animeId\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Fetch the mappings from Ani.zip\n        const api2Res = await fetch(`https://api.ani.zip/mappings?anilist_id=${animeId}`);\n        const api2Data = await api2Res.json();\n        if (!api2Data?.episodes) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid response from API 2\"\n            }, {\n                status: 500\n            });\n        }\n        const buildMergedEpisodes = (episodes)=>{\n            return episodes.map((ep)=>{\n                const number = Number(ep?.number) > 0 ? Number(ep.number) : 0;\n                const detailsFromApi2 = api2Data.episodes[number] || {};\n                return {\n                    episodeId: normalizeEpisodeId(ep?.url || ep?.episodeId || ep?.id),\n                    title: ep?.title || detailsFromApi2.title?.en || `Episode ${number || '?'}`,\n                    synopsis: detailsFromApi2.summary || detailsFromApi2.overview || \"No synopsis available.\",\n                    image: detailsFromApi2.image || ep?.image || \"/placeholder.jpg\",\n                    airDate: ep?.createdAt || detailsFromApi2.airDate || \"Unknown Air Date\",\n                    number\n                };\n            }).filter((item)=>item.episodeId);\n        };\n        const primaryEpisodes = await fetchPrimaryEpisodes(animeId);\n        if (primaryEpisodes) {\n            const mergedData = buildMergedEpisodes(primaryEpisodes);\n            if (mergedData.length) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    episodes: dedupeEpisodes(mergedData)\n                });\n            }\n        }\n        const aniwatchEpisodes = await fetchAniwatchEpisodes(api2Data);\n        if (aniwatchEpisodes) {\n            const mergedData = buildMergedEpisodes(aniwatchEpisodes);\n            if (mergedData.length) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    episodes: dedupeEpisodes(mergedData)\n                });\n            }\n        }\n        // Fetch from mapper API and merge with Ani.zip episode metadata\n        const mapperBase = resolveMapperBaseUrl();\n        if (!mapperBase) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Episode provider fallback is not configured\"\n            }, {\n                status: 500\n            });\n        }\n        const res1 = await fetch(`${mapperBase}/anime/info/${animeId}`);\n        const api1Data = await res1.json();\n        if (!Array.isArray(api1Data?.data?.episodesList)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid response from API 1\"\n            }, {\n                status: 500\n            });\n        }\n        const mergedData = api1Data.data.episodesList.map((episode)=>{\n            const detailsFromApi2 = api2Data.episodes[episode.number] || {};\n            return {\n                episodeId: normalizeEpisodeId(episode.id),\n                title: detailsFromApi2.title?.en || `Episode ${episode.number}`,\n                synopsis: detailsFromApi2.summary || \"No synopsis available.\",\n                image: detailsFromApi2.image || \"/placeholder.jpg\",\n                airDate: detailsFromApi2.airDate || \"Unknown Air Date\",\n                number: episode.number\n            };\n        }).filter((item)=>item.episodeId);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            episodes: dedupeEpisodes(mergedData)\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch episode data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb3ZpZGVyL2FuaXdhdGNoL2VwaXNvZGVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ25CO0FBRWpCLE1BQU1FLFVBQVUsU0FBUztBQUVoQyxJQUFJQztBQUVKLFNBQVNDO0lBQ1AsTUFBTUMsYUFBYUosbURBQVksQ0FBQ00sUUFBUUMsR0FBRyxJQUFJLGdCQUFnQixpQkFBaUIsT0FBTztJQUN2RixNQUFNQyxvQkFBb0JDLFdBQVdDLHVCQUF1QixJQUFJLENBQUM7SUFFakVELFdBQVdDLHVCQUF1QixHQUFHO1FBQ25DLEdBQUdGLGlCQUFpQjtRQUNwQix3QkFBd0JKO0lBQzFCO0FBQ0Y7QUFFQSxlQUFlTztJQUNiUjtJQUNBLElBQUksQ0FBQ0Qsc0JBQXNCO1FBQ3pCQSx1QkFBdUIsa21HQUFrQjtJQUMzQztJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTVSxlQUFlQyxLQUFLO0lBQzNCLE1BQU1DLE9BQU8sSUFBSUM7SUFDakIsTUFBTUMsU0FBUyxFQUFFO0lBRWpCLEtBQUssTUFBTUMsUUFBUUosU0FBUyxFQUFFLENBQUU7UUFDOUIsTUFBTUssUUFBUUQsTUFBTUUsYUFBYUYsTUFBTUc7UUFDdkMsSUFBSSxDQUFDRixPQUFPO1lBQ1ZGLE9BQU9LLElBQUksQ0FBQ0o7WUFDWjtRQUNGO1FBRUEsTUFBTUUsWUFBWUcsT0FBT0o7UUFDekIsSUFBSUosS0FBS1MsR0FBRyxDQUFDSixZQUFZO1lBQ3ZCO1FBQ0Y7UUFFQUwsS0FBS1UsR0FBRyxDQUFDTDtRQUNUSCxPQUFPSyxJQUFJLENBQUNKO0lBQ2Q7SUFFQSxPQUFPRDtBQUNUO0FBRUEsU0FBU1MsbUJBQW1CQyxLQUFLO0lBQy9CLElBQUksQ0FBQ0EsT0FBTyxPQUFPO0lBQ25CLE1BQU1DLE1BQU1MLE9BQU9JO0lBRW5CLElBQUk7UUFDRixJQUFJQyxJQUFJQyxVQUFVLENBQUMsY0FBY0QsSUFBSUMsVUFBVSxDQUFDLGFBQWE7WUFDM0QsTUFBTUMsU0FBUyxJ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cEIscURBQVlBLENBQUN1RyxJQUFJLENBQUM7WUFBRVQsVUFBVWpGLGVBQWVtSDtRQUFZO0lBQ2xFLEVBQUUsT0FBT2QsT0FBTztRQUNkLE9BQU9sSCxxREFBWUEsQ0FBQ3VHLElBQUksQ0FBQztZQUFFVyxPQUFPO1FBQStCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMjMwMDg0MTdcXERvY3VtZW50c1xcR2l0SHViXFxBbmlUZWFtc1xcYXBwXFxhcGlcXHByb3ZpZGVyXFxhbml3YXRjaFxcZXBpc29kZXNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSAnbm9kZWpzJztcclxuXHJcbmxldCBoaUFuaW1lTW9kdWxlUHJvbWlzZTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VGhyZWFkU3RyZWFtT3ZlcnJpZGUoKSB7XHJcbiAgY29uc3Qgd29ya2VyUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzJywgJ3RocmVhZC1zdHJlYW0nLCAnbGliJywgJ3dvcmtlci5qcycpO1xyXG4gIGNvbnN0IGV4aXN0aW5nT3ZlcnJpZGVzID0gZ2xvYmFsVGhpcy5fX2J1bmRsZXJQYXRoc092ZXJyaWRlcyB8fCB7fTtcclxuXHJcbiAgZ2xvYmFsVGhpcy5fX2J1bmRsZXJQYXRoc092ZXJyaWRlcyA9IHtcclxuICAgIC4uLmV4aXN0aW5nT3ZlcnJpZGVzLFxyXG4gICAgJ3RocmVhZC1zdHJlYW0td29ya2VyJzogd29ya2VyUGF0aCxcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRIaUFuaW1lTW9kdWxlKCkge1xyXG4gIGFwcGx5VGhyZWFkU3RyZWFtT3ZlcnJpZGUoKTtcclxuICBpZiAoIWhpQW5pbWVNb2R1bGVQcm9taXNlKSB7XHJcbiAgICBoaUFuaW1lTW9kdWxlUHJvbWlzZSA9IGltcG9ydCgnYW5pd2F0Y2gnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBoaUFuaW1lTW9kdWxlUHJvbWlzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVkdXBlRXBpc29kZXMoaXRlbXMpIHtcclxuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xyXG4gIGNvbnN0IHVuaXF1ZSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMgfHwgW10pIHtcclxuICAgIGNvbnN0IHJhd0lkID0gaXRlbT8uZXBpc29kZUlkID8/IGl0ZW0/LmlkO1xyXG4gICAgaWYgKCFyYXdJZCkge1xyXG4gICAgICB1bmlxdWUucHVzaChpdGVtKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXBpc29kZUlkID0gU3RyaW5nKHJhd0lkKTtcclxuICAgIGlmIChzZWVuLmhhcyhlcGlzb2RlSWQpKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlZW4uYWRkKGVwaXNvZGVJZCk7XHJcbiAgICB1bmlxdWUucHVzaChpdGVtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1bmlxdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUVwaXNvZGVJZCh2YWx1ZSkge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICBjb25zdCByYXcgPSBTdHJpbmcodmFsdWUpO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKHJhdy5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgcmF3LnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChyYXcpO1xyXG4gICAgICByZXR1cm4gYCR7dXJsT2JqLnBhdGhuYW1lLnJlcGxhY2UoJy93YXRjaC8nLCAnJyl9JHt1cmxPYmouc2VhcmNofWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJhdy5pbmNsdWRlcygnJGVwaXNvZGUkJykpIHtcclxuICAgICAgY29uc3QgW3NsdWcsIGVwaXNvZGVQYXJ0XSA9IHJhdy5zcGxpdCgnJGVwaXNvZGUkJyk7XHJcbiAgICAgIHJldHVybiBgJHtzbHVnfT9lcD0ke2VwaXNvZGVQYXJ0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJhdztcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiByYXc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVUaXRsZSh2YWx1ZSkge1xyXG4gIHJldHVybiBTdHJpbmcodmFsdWUgfHwgJycpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnJlcGxhY2UoL1teYS16MC05XSsvZywgJyAnKVxyXG4gICAgLnRyaW0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFNlYXNvbkZyb21UZXh0KHZhbHVlKSB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgbGV0IG1hdGNoID0gdGV4dC5tYXRjaCgvKFxcZCspKD86c3R8bmR8cmR8dGgpXFxzKnNlYXNvbi8pO1xyXG4gIGlmIChtYXRjaCkgcmV0dXJuIE51bWJlcihtYXRjaFsxXSk7XHJcblxyXG4gIG1hdGNoID0gdGV4dC5tYXRjaCgvc2Vhc29uXFxzKihcXGQrKS8pO1xyXG4gIGlmIChtYXRjaCkgcmV0dXJuIE51bWJlcihtYXRjaFsxXSk7XHJcblxyXG4gIG1hdGNoID0gdGV4dC5tYXRjaCgvXFxic1xccyooXFxkezEsMn0pXFxiLyk7XHJcbiAgaWYgKG1hdGNoKSByZXR1cm4gTnVtYmVyKG1hdGNoWzFdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1NlYXNvbkhpbnQodmFsdWUsIHNlYXNvbk51bWJlcikge1xyXG4gIGlmICghdmFsdWUgfHwgIU51bWJlci5pc0Zpbml0ZShzZWFzb25OdW1iZXIpIHx8IHNlYXNvbk51bWJlciA8PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgY29uc3QgcGF0dGVybnMgPSBbXHJcbiAgICBuZXcgUmVnRXhwKGBcXFxcYnNlYXNvblxcXFxzKiR7c2Vhc29uTnVtYmVyfVxcXFxiYCksXHJcbiAgICBuZXcgUmVnRXhwKGBcXFxcYiR7c2Vhc29uTnVtYmVyfSg/OnN0fG5kfHJkfHRoKVxcXFxzKnNlYXNvblxcXFxiYCksXHJcbiAgICBuZXcgUmVnRXhwKGBcXFxcYnNcXFxccyoke3NlYXNvbk51bWJlcn1cXFxcYmApLFxyXG4gICAgbmV3IFJlZ0V4cChgXFxcXGJzZWFzb24tJHtzZWFzb25OdW1iZXJ9XFxcXGJgKSxcclxuICAgIG5ldyBSZWdFeHAoYFxcXFxic2Vhc29uXyR7c2Vhc29uTnVtYmVyfVxcXFxiYCksXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdCh0ZXh0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByZWZlcnJlZFNlYXNvbk51bWJlcih0aXRsZXMpIHtcclxuICBmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xyXG4gICAgY29uc3Qgc2Vhc29uID0gZXh0cmFjdFNlYXNvbkZyb21UZXh0KHRpdGxlKTtcclxuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoc2Vhc29uKSAmJiBzZWFzb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiBzZWFzb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlVGl0bGVzKGFwaTJEYXRhKSB7XHJcbiAgY29uc3QgdGl0bGVzID0gYXBpMkRhdGE/LnRpdGxlcyB8fCB7fTtcclxuICBjb25zdCByYXdUaXRsZXMgPSBbXHJcbiAgICB0aXRsZXMuZW4sXHJcbiAgICB0aXRsZXNbJ3gtamF0J10sXHJcbiAgICB0aXRsZXMuamEsXHJcbiAgICB0aXRsZXNbJ3poLUhhbnMnXSxcclxuICAgIHRpdGxlc1snemgtSGFudCddLFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICBjb25zdCB1bmlxdWUgPSBbXTtcclxuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xyXG5cclxuICBmb3IgKGNvbnN0IHRpdGxlIG9mIHJhd1RpdGxlcykge1xyXG4gICAgY29uc3Qga2V5ID0gbm9ybWFsaXplVGl0bGUodGl0bGUpO1xyXG4gICAgaWYgKCFrZXkgfHwgc2Vlbi5oYXMoa2V5KSkgY29udGludWU7XHJcbiAgICBzZWVuLmFkZChrZXkpO1xyXG4gICAgdW5pcXVlLnB1c2goU3RyaW5nKHRpdGxlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5pcXVlLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGFIYXNTZWFzb24gPSBleHRyYWN0U2Vhc29uRnJvbVRleHQoYSkgPyAxIDogMDtcclxuICAgIGNvbnN0IGJIYXNTZWFzb24gPSBleHRyYWN0U2Vhc29uRnJvbVRleHQoYikgPyAxIDogMDtcclxuICAgIHJldHVybiBiSGFzU2Vhc29uIC0gYUhhc1NlYXNvbjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGlja0Jlc3RBbmltZVJlc3VsdChyZXN1bHRzLCB0aXRsZSwgcHJlZmVycmVkU2Vhc29uTnVtYmVyKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3VsdHMpIHx8ICFyZXN1bHRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gbm9ybWFsaXplVGl0bGUodGl0bGUpO1xyXG5cclxuICBjb25zdCByYW5rZWQgPSByZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBTdHJpbmcoaXRlbT8ubmFtZSB8fCAnJyk7XHJcbiAgICBjb25zdCBpZCA9IFN0cmluZyhpdGVtPy5pZCB8fCAnJyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZVRpdGxlKG5hbWUpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZElkID0gbm9ybWFsaXplVGl0bGUoaWQpO1xyXG4gICAgbGV0IHNjb3JlID0gMDtcclxuXHJcbiAgICBpZiAobm9ybWFsaXplZE5hbWUgPT09IG5vcm1hbGl6ZWRRdWVyeSkge1xyXG4gICAgICBzY29yZSArPSAyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSkgfHwgbm9ybWFsaXplZFF1ZXJ5LmluY2x1ZGVzKG5vcm1hbGl6ZWROYW1lKSkge1xyXG4gICAgICBzY29yZSArPSA4MDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9ybWFsaXplZElkLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSkgfHwgbm9ybWFsaXplZFF1ZXJ5LmluY2x1ZGVzKG5vcm1hbGl6ZWRJZCkpIHtcclxuICAgICAgc2NvcmUgKz0gNDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FuZGlkYXRlU2Vhc29uID0gZXh0cmFjdFNlYXNvbkZyb21UZXh0KGAke25hbWV9ICR7aWR9YCk7XHJcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHByZWZlcnJlZFNlYXNvbk51bWJlcikgJiYgcHJlZmVycmVkU2Vhc29uTnVtYmVyID4gMCkge1xyXG4gICAgICBpZiAoaGFzU2Vhc29uSGludChuYW1lLCBwcmVmZXJyZWRTZWFzb25OdW1iZXIpIHx8IGhhc1NlYXNvbkhpbnQoaWQsIHByZWZlcnJlZFNlYXNvbk51bWJlcikpIHtcclxuICAgICAgICBzY29yZSArPSAyMjA7XHJcbiAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzRmluaXRlKGNhbmRpZGF0ZVNlYXNvbikgJiYgY2FuZGlkYXRlU2Vhc29uID4gMCAmJiBjYW5kaWRhdGVTZWFzb24gIT09IHByZWZlcnJlZFNlYXNvbk51bWJlcikge1xyXG4gICAgICAgIHNjb3JlIC09IDEyMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnc3BlY2lhbCcpIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnc3BlY2lhbCcpKSB7XHJcbiAgICAgIHNjb3JlIC09IDEyMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtLFxyXG4gICAgICBzY29yZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByYW5rZWQuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUgfHwgYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gIHJldHVybiByYW5rZWRbMF0/Lml0ZW0gfHwgcmVzdWx0c1swXTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbml3YXRjaEVwaXNvZGVzKGFwaTJEYXRhKSB7XHJcbiAgY29uc3QgdGl0bGVzID0gZ2V0Q2FuZGlkYXRlVGl0bGVzKGFwaTJEYXRhKTtcclxuICBpZiAoIXRpdGxlcy5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHByZWZlcnJlZFNlYXNvbk51bWJlciA9IGdldFByZWZlcnJlZFNlYXNvbk51bWJlcih0aXRsZXMpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBIaUFuaW1lIH0gPSBhd2FpdCBnZXRIaUFuaW1lTW9kdWxlKCk7XHJcbiAgICBjb25zdCBoaWFuaW1lID0gbmV3IEhpQW5pbWUuU2NyYXBlcigpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGl0bGUgb2YgdGl0bGVzKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGF3YWl0IGhpYW5pbWUuc2VhcmNoKHRpdGxlLCAxLCB7fSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBpY2tCZXN0QW5pbWVSZXN1bHQoc2VhcmNoPy5hbmltZXMsIHRpdGxlLCBwcmVmZXJyZWRTZWFzb25OdW1iZXIpO1xyXG4gICAgICBpZiAoIXJlc3VsdD8uaWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgY29uc3QgZXBpc29kZXNSZXNwb25zZSA9IGF3YWl0IGhpYW5pbWUuZ2V0RXBpc29kZXMocmVzdWx0LmlkKTtcclxuICAgICAgY29uc3QgZXBpc29kZXMgPSBlcGlzb2Rlc1Jlc3BvbnNlPy5lcGlzb2RlcztcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVwaXNvZGVzKSB8fCAhZXBpc29kZXMubGVuZ3RoKSBjb250aW51ZTtcclxuXHJcbiAgICAgIHJldHVybiBlcGlzb2RlcztcclxuICAgIH1cclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoUHJpbWFyeUVwaXNvZGVzKGFuaW1lSWQpIHtcclxuICBjb25zdCBjYW5kaWRhdGVzID0gW1xyXG4gICAgYGh0dHBzOi8vbm8tZHJhYi52ZXJjZWwuYXBwL21ldGEvYW5pbGlzdC9pbmZvLyR7YW5pbWVJZH1gLFxyXG4gICAgYGh0dHBzOi8vYXBpLmNvbnN1bWV0Lm9yZy9tZXRhL2FuaWxpc3QvaW5mby8ke2FuaW1lSWR9YCxcclxuICBdO1xyXG5cclxuICBmb3IgKGNvbnN0IHVybCBvZiBjYW5kaWRhdGVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICBpZiAoIXJlcy5vaykgY29udGludWU7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhPy5lcGlzb2RlcykgJiYgZGF0YS5lcGlzb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZXBpc29kZXM7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlTWFwcGVyQmFzZVVybCgpIHtcclxuICBjb25zdCByYXcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ISUFOSU1FX01BUFBFUl9VUkw7XHJcbiAgY29uc3QgZGVmYXVsdEJhc2UgPSBcImh0dHBzOi8vaGlhbmltZS1tYXBwZXItaXYzZy52ZXJjZWwuYXBwXCI7XHJcblxyXG4gIGlmICghcmF3KSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdEJhc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBub3JtYWxpemVkID0gcmF3LnRyaW0oKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcclxuICBpZiAobm9ybWFsaXplZC5lbmRzV2l0aCgnLmpzb24nKSkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRCYXNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgYW5pbWVJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJhbmltZUlkXCIpO1xyXG5cclxuICBpZiAoIWFuaW1lSWQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgYW5pbWVJZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2ggdGhlIG1hcHBpbmdzIGZyb20gQW5pLnppcFxyXG4gICAgY29uc3QgYXBpMlJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hbmkuemlwL21hcHBpbmdzP2FuaWxpc3RfaWQ9JHthbmltZUlkfWApO1xyXG4gICAgY29uc3QgYXBpMkRhdGEgPSBhd2FpdCBhcGkyUmVzLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIWFwaTJEYXRhPy5lcGlzb2Rlcykge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gQVBJIDJcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkTWVyZ2VkRXBpc29kZXMgPSAoZXBpc29kZXMpID0+IHtcclxuICAgICAgcmV0dXJuIGVwaXNvZGVzLm1hcCgoZXApID0+IHtcclxuICAgICAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZXA/Lm51bWJlcikgPiAwID8gTnVtYmVyKGVwLm51bWJlcikgOiAwO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHNGcm9tQXBpMiA9IGFwaTJEYXRhLmVwaXNvZGVzW251bWJlcl0gfHwge307XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBlcGlzb2RlSWQ6IG5vcm1hbGl6ZUVwaXNvZGVJZChlcD8udXJsIHx8IGVwPy5lcGlzb2RlSWQgfHwgZXA/LmlkKSxcclxuICAgICAgICAgIHRpdGxlOiBlcD8udGl0bGUgfHwgZGV0YWlsc0Zyb21BcGkyLnRpdGxlPy5lbiB8fCBgRXBpc29kZSAke251bWJlciB8fCAnPyd9YCxcclxuICAgICAgICAgIHN5bm9wc2lzOiBkZXRhaWxzRnJvbUFwaTIuc3VtbWFyeSB8fCBkZXRhaWxzRnJvbUFwaTIub3ZlcnZpZXcgfHwgXCJObyBzeW5vcHNpcyBhdmFpbGFibGUuXCIsXHJcbiAgICAgICAgICBpbWFnZTogZGV0YWlsc0Zyb21BcGkyLmltYWdlIHx8IGVwPy5pbWFnZSB8fCBcIi9wbGFjZWhvbGRlci5qcGdcIixcclxuICAgICAgICAgIGFpckRhdGU6IGVwPy5jcmVhdGVkQXQgfHwgZGV0YWlsc0Zyb21BcGkyLmFpckRhdGUgfHwgXCJVbmtub3duIEFpciBEYXRlXCIsXHJcbiAgICAgICAgICBudW1iZXIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmVwaXNvZGVJZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByaW1hcnlFcGlzb2RlcyA9IGF3YWl0IGZldGNoUHJpbWFyeUVwaXNvZGVzKGFuaW1lSWQpO1xyXG4gICAgaWYgKHByaW1hcnlFcGlzb2Rlcykge1xyXG4gICAgICBjb25zdCBtZXJnZWREYXRhID0gYnVpbGRNZXJnZWRFcGlzb2RlcyhwcmltYXJ5RXBpc29kZXMpO1xyXG4gICAgICBpZiAobWVyZ2VkRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcGlzb2RlczogZGVkdXBlRXBpc29kZXMobWVyZ2VkRGF0YSkgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbml3YXRjaEVwaXNvZGVzID0gYXdhaXQgZmV0Y2hBbml3YXRjaEVwaXNvZGVzKGFwaTJEYXRhKTtcclxuICAgIGlmIChhbml3YXRjaEVwaXNvZGVzKSB7XHJcbiAgICAgIGNvbnN0IG1lcmdlZERhdGEgPSBidWlsZE1lcmdlZEVwaXNvZGVzKGFuaXdhdGNoRXBpc29kZXMpO1xyXG4gICAgICBpZiAobWVyZ2VkRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcGlzb2RlczogZGVkdXBlRXBpc29kZXMobWVyZ2VkRGF0YSkgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGZXRjaCBmcm9tIG1hcHBlciBBUEkgYW5kIG1lcmdlIHdpdGggQW5pLnppcCBlcGlzb2RlIG1ldGFkYXRhXHJcbiAgICBjb25zdCBtYXBwZXJCYXNlID0gcmVzb2x2ZU1hcHBlckJhc2VVcmwoKTtcclxuICAgIGlmICghbWFwcGVyQmFzZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFcGlzb2RlIHByb3ZpZGVyIGZhbGxiYWNrIGlzIG5vdCBjb25maWd1cmVkXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goYCR7bWFwcGVyQmFzZX0vYW5pbWUvaW5mby8ke2FuaW1lSWR9YCk7XHJcbiAgICBjb25zdCBhcGkxRGF0YSA9IGF3YWl0IHJlczEuanNvbigpO1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcGkxRGF0YT8uZGF0YT8uZXBpc29kZXNMaXN0KSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gQVBJIDFcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lcmdlZERhdGEgPSBhcGkxRGF0YS5kYXRhLmVwaXNvZGVzTGlzdC5tYXAoKGVwaXNvZGUpID0+IHtcclxuICAgICAgY29uc3QgZGV0YWlsc0Zyb21BcGkyID0gYXBpMkRhdGEuZXBpc29kZXNbZXBpc29kZS5udW1iZXJdIHx8IHt9O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcGlzb2RlSWQ6IG5vcm1hbGl6ZUVwaXNvZGVJZChlcGlzb2RlLmlkKSxcclxuICAgICAgICB0aXRsZTogZGV0YWlsc0Zyb21BcGkyLnRpdGxlPy5lbiB8fCBgRXBpc29kZSAke2VwaXNvZGUubnVtYmVyfWAsXHJcbiAgICAgICAgc3lub3BzaXM6IGRldGFpbHNGcm9tQXBpMi5zdW1tYXJ5IHx8IFwiTm8gc3lub3BzaXMgYXZhaWxhYmxlLlwiLFxyXG4gICAgICAgIGltYWdlOiBkZXRhaWxzRnJvbUFwaTIuaW1hZ2UgfHwgXCIvcGxhY2Vob2xkZXIuanBnXCIsXHJcbiAgICAgICAgYWlyRGF0ZTogZGV0YWlsc0Zyb21BcGkyLmFpckRhdGUgfHwgXCJVbmtub3duIEFpciBEYXRlXCIsXHJcbiAgICAgICAgbnVtYmVyOiBlcGlzb2RlLm51bWJlcixcclxuICAgICAgfTtcclxuICAgIH0pLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5lcGlzb2RlSWQpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVwaXNvZGVzOiBkZWR1cGVFcGlzb2RlcyhtZXJnZWREYXRhKSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGVwaXNvZGUgZGF0YVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwYXRoIiwicnVudGltZSIsImhpQW5pbWVNb2R1bGVQcm9taXNlIiwiYXBwbHlUaHJlYWRTdHJlYW1PdmVycmlkZSIsIndvcmtlclBhdGgiLCJyZXNvbHZlIiwicHJvY2VzcyIsImN3ZCIsImV4aXN0aW5nT3ZlcnJpZGVzIiwiZ2xvYmFsVGhpcyIsIl9fYnVuZGxlclBhdGhzT3ZlcnJpZGVzIiwiZ2V0SGlBbmltZU1vZHVsZSIsImRlZHVwZUVwaXNvZGVzIiwiaXRlbXMiLCJzZWVuIiwiU2V0IiwidW5pcXVlIiwiaXRlbSIsInJhd0lkIiwiZXBpc29kZUlkIiwiaWQiLCJwdXNoIiwiU3RyaW5nIiwiaGFzIiwiYWRkIiwibm9ybWFsaXplRXBpc29kZUlkIiwidmFsdWUiLCJyYXciLCJzdGFydHNXaXRoIiwidXJsT2JqIiwiVVJMIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJzbHVnIiwiZXBpc29kZVBhcnQiLCJzcGxpdCIsIm5vcm1hbGl6ZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwiZXh0cmFjdFNlYXNvbkZyb21UZXh0IiwidGV4dCIsIm1hdGNoIiwiTnVtYmVyIiwiaGFzU2Vhc29uSGludCIsInNlYXNvbk51bWJlciIsImlzRmluaXRlIiwicGF0dGVybnMiLCJSZWdFeHAiLCJzb21lIiwicGF0dGVybiIsInRlc3QiLCJnZXRQcmVmZXJyZWRTZWFzb25OdW1iZXIiLCJ0aXRsZXMiLCJ0aXRsZSIsInNlYXNvbiIsImdldENhbmRpZGF0ZVRpdGxlcyIsImFwaTJEYXRhIiwicmF3VGl0bGVzIiwiZW4iLCJqYSIsImZpbHRlciIsIkJvb2xlYW4iLCJrZXkiLCJzb3J0IiwiYSIsImIiLCJhSGFzU2Vhc29uIiwiYkhhc1NlYXNvbiIsInBpY2tCZXN0QW5pbWVSZXN1bHQiLCJyZXN1bHRzIiwicHJlZmVycmVkU2Vhc29uTnVtYmVyIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibm9ybWFsaXplZFF1ZXJ5IiwicmFua2VkIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwibm9ybWFsaXplZE5hbWUiLCJub3JtYWxpemVkSWQiLCJzY29yZSIsImNhbmRpZGF0ZVNlYXNvbiIsImZldGNoQW5pd2F0Y2hFcGlzb2RlcyIsIkhpQW5pbWUiLCJoaWFuaW1lIiwiU2NyYXBlciIsInJlc3VsdCIsImFuaW1lcyIsImVwaXNvZGVzUmVzcG9uc2UiLCJnZXRFcGlzb2RlcyIsImVwaXNvZGVzIiwiZmV0Y2hQcmltYXJ5RXBpc29kZXMiLCJhbmltZUlkIiwiY2FuZGlkYXRlcyIsInVybCIsInJlcyIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsInJlc29sdmVNYXBwZXJCYXNlVXJsIiwiZW52IiwiTkVYVF9QVUJMSUNfSElBTklNRV9NQVBQRVJfVVJMIiwiZGVmYXVsdEJhc2UiLCJub3JtYWxpemVkIiwiZW5kc1dpdGgiLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJlcnJvciIsInN0YXR1cyIsImFwaTJSZXMiLCJidWlsZE1lcmdlZEVwaXNvZGVzIiwiZXAiLCJudW1iZXIiLCJkZXRhaWxzRnJvbUFwaTIiLCJzeW5vcHNpcyIsInN1bW1hcnkiLCJvdmVydmlldyIsImltYWdlIiwiYWlyRGF0ZSIsImNyZWF0ZWRBdCIsInByaW1hcnlFcGlzb2RlcyIsIm1lcmdlZERhdGEiLCJhbml3YXRjaEVwaXNvZGVzIiwibWFwcGVyQmFzZSIsInJlczEiLCJhcGkxRGF0YSIsImVwaXNvZGVzTGlzdCIsImVwaXNvZGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/provider/aniwatch/episodes/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_23008417_Documents_GitHub_AniTeams_app_api_provider_aniwatch_episodes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/provider/aniwatch/episodes/route.js */ \"(rsc)/./app/api/provider/aniwatch/episodes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/provider/aniwatch/episodes/route\",\n        pathname: \"/api/provider/aniwatch/episodes\",\n        filename: \"route\",\n        bundlePath: \"app/api/provider/aniwatch/episodes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\23008417\\\\Documents\\\\GitHub\\\\AniTeams\\\\app\\\\api\\\\provider\\\\aniwatch\\\\episodes\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_23008417_Documents_GitHub_AniTeams_app_api_provider_aniwatch_episodes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm92aWRlciUyRmFuaXdhdGNoJTJGZXBpc29kZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb3ZpZGVyJTJGYW5pd2F0Y2glMkZlcGlzb2RlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb3ZpZGVyJTJGYW5pd2F0Y2glMkZlcGlzb2RlcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUMyMzAwODQxNyU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q0FuaVRlYW1zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrRDtBQUMvSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcMjMwMDg0MTdcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBbmlUZWFtc1xcXFxhcHBcXFxcYXBpXFxcXHByb3ZpZGVyXFxcXGFuaXdhdGNoXFxcXGVwaXNvZGVzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm92aWRlci9hbml3YXRjaC9lcGlzb2Rlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb3ZpZGVyL2FuaXdhdGNoL2VwaXNvZGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm92aWRlci9hbml3YXRjaC9lcGlzb2Rlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXDIzMDA4NDE3XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcQW5pVGVhbXNcXFxcYXBwXFxcXGFwaVxcXFxwcm92aWRlclxcXFxhbml3YXRjaFxcXFxlcGlzb2Rlc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&page=%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprovider%2Faniwatch%2Fepisodes%2Froute.js&appDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23008417%5CDocuments%5CGitHub%5CAniTeams&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();