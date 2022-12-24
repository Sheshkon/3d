// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8qw7y":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "54f1c6afa2a37aa4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3rz9v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _sphereObj = require("bundle-text:../src/obj/sphere.obj");
var _sphereObjDefault = parcelHelpers.interopDefault(_sphereObj);
var _drawer = require("./core/drawer");
var _matrix = require("./core/matrix");
var _objParser = require("./core/obj.parser");
const canvas = document.getElementById("canvas");
const WIDTH = 800;
const HEIGHT = 800;
const PIXEL_SIZE = 1;
let alpha = 0;
let drawer = new (0, _drawer.Drawer)(canvas, WIDTH, HEIGHT, PIXEL_SIZE);
let model = (0, _objParser.ObjParser).parse((0, _sphereObjDefault.default));
drawModel();
function drawModel() {
    drawer.setUpdate(update);
    drawer.setFpsLimit(60);
    drawer.startAnimation();
}
function update() {
    drawer.setColor(30, 30, 30);
    drawer.clear();
    drawer.setColor(200, 0, 0);
    for (const triangle of model.faces){
        let a = rotateY(triangle.a, alpha);
        let b = rotateY(triangle.b, alpha);
        let c = rotateY(triangle.c, alpha);
        let dx = WIDTH / 2;
        let dy = HEIGHT / 2;
        let objZoom = 200;
        drawer.addTriangle(Math.round(a.x * objZoom + dx), Math.round(a.y * objZoom + dy), Math.round(b.x * objZoom + dx), Math.round(b.y * objZoom + dy), Math.round(c.x * objZoom + dx), Math.round(c.y * objZoom + dy));
    }
    drawer.show();
    alpha += Math.PI / 180;
    if (alpha > 2 * Math.PI) alpha = 0;
}
function rotateY(vec, alpha) {
    let m = new (0, _matrix.Matrix3x3)([
        [
            Math.cos(alpha),
            0,
            Math.sin(alpha)
        ],
        [
            0,
            1,
            0
        ],
        [
            -Math.sin(alpha),
            0,
            Math.cos(alpha)
        ]
    ]);
    return m.multiplyVector(vec);
}

},{"./core/drawer":"4QRgo","./core/obj.parser":"54YVj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./core/matrix":"bjz3Y","bundle-text:../src/obj/sphere.obj":"6eoKl"}],"4QRgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Drawer", ()=>Drawer);
let stopAnimation = false;
let frameCount = 0;
let fps = 10, fpsInterval, startTime, now, then, elapsed;
class Color {
    constructor(r, g, b, a = 255){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
class Drawer {
    constructor(canvas, width, height, pixelSize){
        this.canvas = canvas;
        this.width = width * pixelSize;
        this.height = height * pixelSize;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.pixelSize = pixelSize;
        this.context = this.canvas.getContext("2d");
        this.imageData = this.context.createImageData(this.width, this.height);
        this.currentColor = new Color(0, 0, 0);
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
        this.pixels = [];
        for(let i = 0; i < this.width; i++){
            let cols = [];
            for(let j = 0; j < this.height; j++)cols.push(new Color(0, 0, 0));
            this.pixels.push(cols);
        }
        this.buf = new ArrayBuffer(this.width * this.height * 4);
        this.buf8 = new Uint8ClampedArray(this.buf);
        this.data = new Uint32Array(this.buf);
        fpsInterval = 1000 / fps;
        then = Date.now();
        startTime = then;
        this.update = ()=>{};
    }
    setColor(r, g, b, a = 255) {
        this.currentColor = new Color(r, g, b, a);
        this.int24Color = -16777216 | b << 16 | g << 8 | r;
    }
    addPoint(x, y) {
        let canvasX = x;
        let canvasY = this.canvasHeight - y - 1;
        if (this.pixelSize == 1) {
            let pixelIndex = canvasY * this.width + canvasX;
            this.data[pixelIndex] = this.int24Color;
            return;
        }
        const canvasStartX = canvasX * this.pixelSize;
        const canvasStartY = canvasY * this.pixelSize;
        for(var dx = 0; dx < this.pixelSize; dx++)for(var dy = 0; dy < this.pixelSize; dy++){
            let pixelIndex1 = (canvasStartY + dy) * this.width + canvasStartX + dx;
            this.data[pixelIndex1] = this.int24Color;
        }
    }
    addLine(x0, y0, x1, y1) {
        // y = kx + b
        // setpY = k = (y1 - y0) / (x1 - x0)
        // b = y0 - kx0
        // Bresenham's line algorithm
        let isInvert = false;
        if (Math.abs(y1 - y0) > Math.abs(x1 - x0)) {
            [x0, y0] = [
                y0,
                x0
            ];
            [x1, y1] = [
                y1,
                x1
            ];
            isInvert = true;
        }
        if (x1 < x0) {
            [x0, x1] = [
                x1,
                x0
            ];
            [y0, y1] = [
                y1,
                y0
            ];
        }
        let xLength = x1 - x0;
        let deltaY = 0;
        let stepY = 2 * Math.abs(y1 - y0);
        let y = y0;
        let dy = y1 > y0 ? 1 : -1;
        let doubleXLenght = 2 * xLength;
        for(let x = x0; x <= x1; x++){
            this.addPoint(isInvert ? y : x, isInvert ? x : y);
            deltaY += stepY;
            if (deltaY > xLength) {
                y += dy;
                deltaY -= doubleXLenght;
            }
        }
    }
    addTriangle(x0, y0, x1, y1, x2, y2) {
        this.addLine(x0, y0, x1, y1);
        this.addLine(x1, y1, x2, y2);
        this.addLine(x2, y2, x0, y0);
    }
    clear() {
        for(let x = 0; x < this.width; x++)for(let y = 0; y < this.height; y++)this.data[y * this.width + x] = this.int24Color;
    }
    show() {
        this.imageData.data.set(this.buf8);
        this.context.putImageData(this.imageData, 0, 0);
    }
    startDraw() {}
    endDraw() {}
    setFpsLimit(fps) {
        fpsInterval = 1000 / fps;
    }
    startAnimation() {
        requestAnimationFrame(this.startAnimation.bind(this));
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - elapsed % fpsInterval;
            this.update();
        }
    }
    setUpdate(update) {
        this.update = update;
    }
    endAnimation() {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"54YVj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjParser", ()=>ObjParser);
var _triangle = require("./triangle");
var _vector3D = require("./vector3D");
class ObjParser {
    static parse(obj) {
        let _obj = obj.split("\n");
        let _vertices = [];
        let _faces = [];
        let lineItems = [];
        for(let i = 0; i < _obj.length; i++){
            let line = _obj[i];
            console.log(line);
            switch(line[0]){
                case "v":
                    lineItems = line.split(" ");
                    _vertices.push(new (0, _vector3D.Vector3D)(parseFloat(lineItems[1]), parseFloat(lineItems[2]), parseFloat(lineItems[3])));
                    break;
                case "f":
                    lineItems = line.split(" ");
                    let point1Info = lineItems[1].split("/");
                    let point2Info = lineItems[2].split("/");
                    let point3Info = lineItems[3].split("/");
                    _faces.push(new (0, _triangle.Triangle)(_vertices[parseInt(point1Info[0]) - 1], _vertices[parseInt(point2Info[0]) - 1], _vertices[parseInt(point3Info[0]) - 1]));
                    break;
            }
        }
        let _model = {
            vertices: _vertices,
            faces: _faces
        };
        console.log(_model);
        return _model;
    }
}

},{"./triangle":"kNDWy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./vector3D":"fsKYE"}],"kNDWy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Triangle", ()=>Triangle);
var _vector3D = require("./vector3D");
class Triangle {
    constructor(p1, p2, p3){
        this.a = new (0, _vector3D.Vector3D)(p1.x, p1.y, p1.z);
        this.b = new (0, _vector3D.Vector3D)(p2.x, p2.y, p2.z);
        this.c = new (0, _vector3D.Vector3D)(p3.x, p3.y, p3.z);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./vector3D":"fsKYE"}],"fsKYE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector3D", ()=>Vector3D);
class Vector3D {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    crossProduct(v) {
        return new Vector3D(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
    dotProduct(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    subtract(v) {
        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    normolize() {
        let length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        if (length != 0) {
            this.x /= length;
            this.y /= length;
            this.z /= length;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjz3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix3x3", ()=>Matrix3x3);
var _vector3D = require("./vector3D");
class Matrix3x3 {
    constructor(m){
        this.m = [];
        for(let i = 0; i < 3; i++){
            this.m[i] = [];
            for(let j = 0; j < 3; j++)this.m[i][j] = m[i][j];
        }
    }
    multiplyVector(vec) {
        let newVector = new (0, _vector3D.Vector3D)(this.m[0][0] * vec.x + this.m[0][1] * vec.y + this.m[0][2] * vec.z, this.m[1][0] * vec.x + this.m[1][1] * vec.y + this.m[1][2] * vec.z, this.m[2][0] * vec.x + this.m[2][1] * vec.y + this.m[2][2] * vec.z);
        return newVector;
    }
}

},{"./vector3D":"fsKYE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eoKl":[function(require,module,exports) {
module.exports = "# Blender v3.4.1 OBJ File: ''\n# www.blender.org\nmtllib sphere.mtl\no Sphere\nv 0.000000 0.831470 -0.555570\nv 0.000000 0.555570 -0.831470\nv 0.000000 0.195090 -0.980785\nv 0.000000 0.000000 -1.000000\nv 0.000000 -0.195090 -0.980785\nv 0.000000 -0.555570 -0.831470\nv 0.038060 0.980785 -0.191342\nv 0.074658 0.923880 -0.375330\nv 0.108386 0.831470 -0.544895\nv 0.137950 0.707107 -0.693520\nv 0.162212 0.555570 -0.815493\nv 0.180240 0.382683 -0.906127\nv 0.191342 0.195090 -0.961940\nv 0.195090 0.000000 -0.980785\nv 0.191342 -0.195090 -0.961940\nv 0.180240 -0.382683 -0.906127\nv 0.162212 -0.555570 -0.815493\nv 0.137950 -0.707107 -0.693520\nv 0.108386 -0.831470 -0.544895\nv 0.074658 -0.923880 -0.375330\nv 0.038060 -0.980785 -0.191342\nv 0.074658 0.980785 -0.180240\nv 0.146447 0.923880 -0.353553\nv 0.212608 0.831470 -0.513280\nv 0.270598 0.707107 -0.653281\nv 0.318190 0.555570 -0.768178\nv 0.353553 0.382683 -0.853553\nv 0.375330 0.195090 -0.906127\nv 0.382683 0.000000 -0.923879\nv 0.375330 -0.195090 -0.906127\nv 0.353553 -0.382683 -0.853553\nv 0.318190 -0.555570 -0.768178\nv 0.270598 -0.707107 -0.653281\nv 0.212608 -0.831470 -0.513280\nv 0.146447 -0.923880 -0.353553\nv 0.074658 -0.980785 -0.180240\nv 0.108386 0.980785 -0.162212\nv 0.212608 0.923880 -0.318190\nv 0.308658 0.831470 -0.461940\nv 0.392847 0.707107 -0.587938\nv 0.461940 0.555570 -0.691342\nv 0.513280 0.382683 -0.768178\nv 0.544895 0.195090 -0.815493\nv 0.555570 0.000000 -0.831469\nv 0.544895 -0.195090 -0.815493\nv 0.513280 -0.382683 -0.768178\nv 0.461940 -0.555570 -0.691342\nv 0.392847 -0.707107 -0.587938\nv 0.308658 -0.831470 -0.461940\nv 0.212608 -0.923880 -0.318190\nv 0.108386 -0.980785 -0.162212\nv 0.137950 0.980785 -0.137950\nv 0.270598 0.923880 -0.270598\nv 0.392847 0.831470 -0.392847\nv 0.500000 0.707107 -0.500000\nv 0.587938 0.555570 -0.587938\nv 0.653281 0.382683 -0.653281\nv 0.693520 0.195090 -0.693520\nv 0.707107 0.000000 -0.707107\nv 0.693520 -0.195090 -0.693520\nv 0.653281 -0.382683 -0.653281\nv 0.587938 -0.555570 -0.587938\nv 0.500000 -0.707107 -0.500000\nv 0.392847 -0.831470 -0.392847\nv 0.270598 -0.923880 -0.270598\nv 0.137950 -0.980785 -0.137950\nv 0.162212 0.980785 -0.108386\nv 0.318190 0.923880 -0.212608\nv 0.461940 0.831470 -0.308658\nv 0.587938 0.707107 -0.392847\nv 0.691342 0.555570 -0.461940\nv 0.768178 0.382683 -0.513280\nv 0.815493 0.195090 -0.544895\nv 0.831470 0.000000 -0.555570\nv 0.815493 -0.195090 -0.544895\nv 0.768178 -0.382683 -0.513280\nv 0.691342 -0.555570 -0.461940\nv 0.587938 -0.707107 -0.392847\nv 0.461940 -0.831470 -0.308658\nv 0.318190 -0.923880 -0.212608\nv 0.162212 -0.980785 -0.108386\nv 0.000000 1.000000 0.000000\nv 0.180240 0.980785 -0.074658\nv 0.353553 0.923880 -0.146447\nv 0.513280 0.831470 -0.212607\nv 0.653281 0.707107 -0.270598\nv 0.768178 0.555570 -0.318190\nv 0.853553 0.382683 -0.353553\nv 0.906127 0.195090 -0.375330\nv 0.923879 0.000000 -0.382683\nv 0.906127 -0.195090 -0.375330\nv 0.853553 -0.382683 -0.353553\nv 0.768178 -0.555570 -0.318190\nv 0.653281 -0.707107 -0.270598\nv 0.513280 -0.831470 -0.212607\nv 0.353553 -0.923880 -0.146447\nv 0.180240 -0.980785 -0.074658\nv 0.191342 0.980785 -0.038060\nv 0.375330 0.923880 -0.074658\nv 0.544895 0.831470 -0.108386\nv 0.693520 0.707107 -0.137950\nv 0.815493 0.555570 -0.162212\nv 0.906127 0.382683 -0.180240\nv 0.961940 0.195090 -0.191342\nv 0.980785 0.000000 -0.195090\nv 0.961940 -0.195090 -0.191342\nv 0.906127 -0.382683 -0.180240\nv 0.815493 -0.555570 -0.162212\nv 0.693520 -0.707107 -0.137950\nv 0.544895 -0.831470 -0.108386\nv 0.375330 -0.923880 -0.074658\nv 0.191342 -0.980785 -0.038060\nv 0.195090 0.980785 0.000000\nv 0.382683 0.923880 0.000000\nv 0.555570 0.831470 0.000000\nv 0.707107 0.707107 -0.000000\nv 0.831469 0.555570 0.000000\nv 0.923879 0.382683 -0.000000\nv 0.980785 0.195090 0.000000\nv 1.000000 0.000000 0.000000\nv 0.980785 -0.195090 0.000000\nv 0.923879 -0.382683 -0.000000\nv 0.831469 -0.555570 0.000000\nv 0.707107 -0.707107 -0.000000\nv 0.555570 -0.831470 0.000000\nv 0.382683 -0.923880 0.000000\nv 0.195090 -0.980785 0.000000\nv 0.191342 0.980785 0.038060\nv 0.375330 0.923880 0.074658\nv 0.544895 0.831470 0.108386\nv 0.693520 0.707107 0.137950\nv 0.815493 0.555570 0.162212\nv 0.906127 0.382683 0.180240\nv 0.961940 0.195090 0.191342\nv 0.980785 0.000000 0.195090\nv 0.961940 -0.195090 0.191342\nv 0.906127 -0.382683 0.180240\nv 0.815493 -0.555570 0.162212\nv 0.693520 -0.707107 0.137950\nv 0.544895 -0.831470 0.108386\nv 0.375330 -0.923880 0.074658\nv 0.191342 -0.980785 0.038060\nv 0.180240 0.980785 0.074658\nv 0.353553 0.923880 0.146447\nv 0.513280 0.831470 0.212608\nv 0.653281 0.707107 0.270598\nv 0.768178 0.555570 0.318190\nv 0.853553 0.382683 0.353553\nv 0.906127 0.195090 0.375330\nv 0.923879 0.000000 0.382683\nv 0.906127 -0.195090 0.375330\nv 0.853553 -0.382683 0.353553\nv 0.768178 -0.555570 0.318190\nv 0.653281 -0.707107 0.270598\nv 0.513280 -0.831470 0.212608\nv 0.353553 -0.923880 0.146447\nv 0.180240 -0.980785 0.074658\nv 0.162212 0.980785 0.108386\nv 0.318190 0.923880 0.212608\nv 0.461940 0.831470 0.308658\nv 0.587938 0.707107 0.392847\nv 0.691341 0.555570 0.461940\nv 0.768178 0.382683 0.513280\nv 0.815493 0.195090 0.544895\nv 0.831469 0.000000 0.555570\nv 0.815493 -0.195090 0.544895\nv 0.768178 -0.382683 0.513280\nv 0.691341 -0.555570 0.461940\nv 0.587938 -0.707107 0.392847\nv 0.461940 -0.831470 0.308658\nv 0.318190 -0.923880 0.212608\nv 0.162212 -0.980785 0.108386\nv 0.137950 0.980785 0.137950\nv 0.270598 0.923880 0.270598\nv 0.392847 0.831470 0.392847\nv 0.500000 0.707107 0.500000\nv 0.587938 0.555570 0.587938\nv 0.653281 0.382683 0.653281\nv 0.693520 0.195090 0.693520\nv 0.707106 0.000000 0.707107\nv 0.693520 -0.195090 0.693520\nv 0.653281 -0.382683 0.653281\nv 0.587938 -0.555570 0.587938\nv 0.500000 -0.707107 0.500000\nv 0.392847 -0.831470 0.392847\nv 0.270598 -0.923880 0.270598\nv 0.137950 -0.980785 0.137950\nv 0.108386 0.980785 0.162212\nv 0.212607 0.923880 0.318190\nv 0.308658 0.831470 0.461940\nv 0.392847 0.707107 0.587938\nv 0.461940 0.555570 0.691342\nv 0.513280 0.382683 0.768178\nv 0.544895 0.195090 0.815493\nv 0.555570 0.000000 0.831469\nv 0.544895 -0.195090 0.815493\nv 0.513280 -0.382683 0.768178\nv 0.461940 -0.555570 0.691342\nv 0.392847 -0.707107 0.587938\nv 0.308658 -0.831470 0.461940\nv 0.212607 -0.923880 0.318190\nv 0.108386 -0.980785 0.162212\nv 0.074658 0.980785 0.180240\nv 0.146447 0.923880 0.353553\nv 0.212607 0.831470 0.513280\nv 0.270598 0.707107 0.653281\nv 0.318189 0.555570 0.768178\nv 0.353553 0.382683 0.853553\nv 0.375330 0.195090 0.906127\nv 0.382683 0.000000 0.923879\nv 0.375330 -0.195090 0.906127\nv 0.353553 -0.382683 0.853553\nv 0.318189 -0.555570 0.768178\nv 0.270598 -0.707107 0.653281\nv 0.212607 -0.831470 0.513280\nv 0.146447 -0.923880 0.353553\nv 0.074658 -0.980785 0.180240\nv 0.038060 0.980785 0.191342\nv 0.074658 0.923880 0.375330\nv 0.108386 0.831470 0.544895\nv 0.137950 0.707107 0.693520\nv 0.162212 0.555570 0.815493\nv 0.180240 0.382683 0.906127\nv 0.191342 0.195090 0.961939\nv 0.195090 0.000000 0.980785\nv 0.191342 -0.195090 0.961939\nv 0.180240 -0.382683 0.906127\nv 0.162212 -0.555570 0.815493\nv 0.137950 -0.707107 0.693520\nv 0.108386 -0.831470 0.544895\nv 0.074658 -0.923880 0.375330\nv 0.038060 -0.980785 0.191342\nv -0.000000 0.980785 0.195090\nv -0.000000 0.923880 0.382683\nv -0.000000 0.831470 0.555570\nv -0.000000 0.707107 0.707107\nv -0.000000 0.555570 0.831469\nv 0.000000 0.382683 0.923879\nv -0.000000 0.195090 0.980785\nv -0.000000 0.000000 0.999999\nv -0.000000 -0.195090 0.980785\nv 0.000000 -0.382683 0.923879\nv -0.000000 -0.555570 0.831469\nv -0.000000 -0.707107 0.707107\nv -0.000000 -0.831470 0.555570\nv -0.000000 -0.923880 0.382683\nv -0.000000 -0.980785 0.195090\nv -0.038060 0.980785 0.191342\nv -0.074658 0.923880 0.375330\nv -0.108386 0.831470 0.544895\nv -0.137950 0.707107 0.693520\nv -0.162212 0.555570 0.815493\nv -0.180240 0.382683 0.906127\nv -0.191342 0.195090 0.961939\nv -0.195091 0.000000 0.980785\nv -0.191342 -0.195090 0.961939\nv -0.180240 -0.382683 0.906127\nv -0.162212 -0.555570 0.815493\nv -0.137950 -0.707107 0.693520\nv -0.108386 -0.831470 0.544895\nv -0.074658 -0.923880 0.375330\nv -0.038060 -0.980785 0.191342\nv -0.074658 0.980785 0.180240\nv -0.146447 0.923880 0.353553\nv -0.212608 0.831470 0.513280\nv -0.270598 0.707107 0.653281\nv -0.318190 0.555570 0.768177\nv -0.353553 0.382683 0.853553\nv -0.375330 0.195090 0.906127\nv -0.382683 0.000000 0.923879\nv -0.375330 -0.195090 0.906127\nv -0.353553 -0.382683 0.853553\nv -0.318190 -0.555570 0.768177\nv -0.270598 -0.707107 0.653281\nv -0.212608 -0.831470 0.513280\nv -0.146447 -0.923880 0.353553\nv -0.074658 -0.980785 0.180240\nv -0.108386 0.980785 0.162212\nv -0.212608 0.923880 0.318190\nv -0.308658 0.831470 0.461939\nv -0.392847 0.707107 0.587938\nv -0.461940 0.555570 0.691341\nv -0.513280 0.382683 0.768178\nv -0.544895 0.195090 0.815493\nv -0.555570 0.000000 0.831469\nv -0.544895 -0.195090 0.815493\nv -0.513280 -0.382683 0.768178\nv -0.461940 -0.555570 0.691341\nv -0.392847 -0.707107 0.587938\nv -0.308658 -0.831470 0.461939\nv -0.212608 -0.923880 0.318190\nv -0.108386 -0.980785 0.162212\nv -0.137950 0.980785 0.137950\nv -0.270598 0.923880 0.270598\nv -0.392847 0.831470 0.392847\nv -0.500000 0.707107 0.500000\nv -0.587938 0.555570 0.587937\nv -0.653281 0.382683 0.653281\nv -0.693520 0.195090 0.693520\nv -0.707106 0.000000 0.707106\nv -0.693520 -0.195090 0.693520\nv -0.653281 -0.382683 0.653281\nv -0.587938 -0.555570 0.587937\nv -0.500000 -0.707107 0.500000\nv -0.392847 -0.831470 0.392847\nv -0.270598 -0.923880 0.270598\nv -0.137950 -0.980785 0.137950\nv 0.000000 -1.000000 0.000000\nv -0.162212 0.980785 0.108386\nv -0.318190 0.923880 0.212607\nv -0.461940 0.831470 0.308658\nv -0.587938 0.707107 0.392847\nv -0.691341 0.555570 0.461939\nv -0.768177 0.382683 0.513280\nv -0.815493 0.195090 0.544895\nv -0.831469 0.000000 0.555569\nv -0.815493 -0.195090 0.544895\nv -0.768177 -0.382683 0.513280\nv -0.691341 -0.555570 0.461939\nv -0.587938 -0.707107 0.392847\nv -0.461940 -0.831470 0.308658\nv -0.318190 -0.923880 0.212607\nv -0.162212 -0.980785 0.108386\nv -0.180240 0.980785 0.074658\nv -0.353553 0.923880 0.146447\nv -0.513280 0.831470 0.212607\nv -0.653281 0.707107 0.270598\nv -0.768177 0.555570 0.318189\nv -0.853553 0.382683 0.353553\nv -0.906127 0.195090 0.375330\nv -0.923879 0.000000 0.382683\nv -0.906127 -0.195090 0.375330\nv -0.853553 -0.382683 0.353553\nv -0.768177 -0.555570 0.318189\nv -0.653281 -0.707107 0.270598\nv -0.513280 -0.831470 0.212607\nv -0.353553 -0.923880 0.146447\nv -0.180240 -0.980785 0.074658\nv -0.191342 0.980785 0.038060\nv -0.375330 0.923880 0.074658\nv -0.544895 0.831470 0.108386\nv -0.693520 0.707107 0.137950\nv -0.815493 0.555570 0.162211\nv -0.906127 0.382683 0.180240\nv -0.961939 0.195090 0.191341\nv -0.980784 0.000000 0.195090\nv -0.961939 -0.195090 0.191341\nv -0.906127 -0.382683 0.180240\nv -0.815493 -0.555570 0.162211\nv -0.693520 -0.707107 0.137950\nv -0.544895 -0.831470 0.108386\nv -0.375330 -0.923880 0.074658\nv -0.191342 -0.980785 0.038060\nv -0.195090 0.980785 -0.000000\nv -0.382683 0.923880 -0.000000\nv -0.555570 0.831470 -0.000000\nv -0.707107 0.707107 -0.000000\nv -0.831469 0.555570 -0.000000\nv -0.923879 0.382683 -0.000000\nv -0.980785 0.195090 -0.000000\nv -0.999999 0.000000 -0.000000\nv -0.980785 -0.195090 -0.000000\nv -0.923879 -0.382683 -0.000000\nv -0.831469 -0.555570 -0.000000\nv -0.707107 -0.707107 -0.000000\nv -0.555570 -0.831470 -0.000000\nv -0.382683 -0.923880 -0.000000\nv -0.195090 -0.980785 -0.000000\nv -0.191342 0.980785 -0.038060\nv -0.375330 0.923880 -0.074658\nv -0.544895 0.831470 -0.108386\nv -0.693520 0.707107 -0.137950\nv -0.815493 0.555570 -0.162212\nv -0.906127 0.382683 -0.180240\nv -0.961939 0.195090 -0.191342\nv -0.980784 0.000000 -0.195091\nv -0.961939 -0.195090 -0.191342\nv -0.906127 -0.382683 -0.180240\nv -0.815493 -0.555570 -0.162212\nv -0.693520 -0.707107 -0.137950\nv -0.544895 -0.831470 -0.108386\nv -0.375330 -0.923880 -0.074658\nv -0.191342 -0.980785 -0.038060\nv -0.180240 0.980785 -0.074658\nv -0.353553 0.923880 -0.146447\nv -0.513279 0.831470 -0.212607\nv -0.653281 0.707107 -0.270598\nv -0.768177 0.555570 -0.318190\nv -0.853553 0.382683 -0.353553\nv -0.906127 0.195090 -0.375330\nv -0.923878 0.000000 -0.382683\nv -0.906127 -0.195090 -0.375330\nv -0.853553 -0.382683 -0.353553\nv -0.768177 -0.555570 -0.318190\nv -0.653281 -0.707107 -0.270598\nv -0.513279 -0.831470 -0.212607\nv -0.353553 -0.923880 -0.146447\nv -0.180240 -0.980785 -0.074658\nv -0.162212 0.980785 -0.108386\nv -0.318189 0.923880 -0.212607\nv -0.461939 0.831470 -0.308658\nv -0.587938 0.707107 -0.392847\nv -0.691341 0.555570 -0.461940\nv -0.768177 0.382683 -0.513280\nv -0.815493 0.195090 -0.544895\nv -0.831468 0.000000 -0.555570\nv -0.815493 -0.195090 -0.544895\nv -0.768177 -0.382683 -0.513280\nv -0.691341 -0.555570 -0.461940\nv -0.587938 -0.707107 -0.392847\nv -0.461939 -0.831470 -0.308658\nv -0.318189 -0.923880 -0.212607\nv -0.162212 -0.980785 -0.108386\nv -0.137950 0.980785 -0.137950\nv -0.270598 0.923880 -0.270598\nv -0.392847 0.831470 -0.392847\nv -0.500000 0.707107 -0.500000\nv -0.587937 0.555570 -0.587938\nv -0.653281 0.382683 -0.653281\nv -0.693519 0.195090 -0.693520\nv -0.707106 0.000000 -0.707106\nv -0.693519 -0.195090 -0.693520\nv -0.653281 -0.382683 -0.653281\nv -0.587937 -0.555570 -0.587938\nv -0.500000 -0.707107 -0.500000\nv -0.392847 -0.831470 -0.392847\nv -0.270598 -0.923880 -0.270598\nv -0.137950 -0.980785 -0.137950\nv -0.108386 0.980785 -0.162212\nv -0.212607 0.923880 -0.318190\nv -0.308658 0.831470 -0.461939\nv -0.392847 0.707107 -0.587938\nv -0.461939 0.555570 -0.691341\nv -0.513280 0.382683 -0.768177\nv -0.544895 0.195090 -0.815493\nv -0.555569 0.000000 -0.831469\nv -0.544895 -0.195090 -0.815493\nv -0.513280 -0.382683 -0.768177\nv -0.461939 -0.555570 -0.691341\nv -0.392847 -0.707107 -0.587938\nv -0.308658 -0.831470 -0.461939\nv -0.212607 -0.923880 -0.318190\nv -0.108386 -0.980785 -0.162212\nv -0.074658 0.980785 -0.180240\nv -0.146446 0.923880 -0.353553\nv -0.212607 0.831470 -0.513279\nv -0.270598 0.707107 -0.653281\nv -0.318189 0.555570 -0.768177\nv -0.353553 0.382683 -0.853553\nv -0.375330 0.195090 -0.906127\nv -0.382683 0.000000 -0.923879\nv -0.375330 -0.195090 -0.906127\nv -0.353553 -0.382683 -0.853553\nv -0.318189 -0.555570 -0.768177\nv -0.270598 -0.707107 -0.653281\nv -0.212607 -0.831470 -0.513279\nv -0.146446 -0.923880 -0.353553\nv -0.074658 -0.980785 -0.180240\nv -0.038060 0.980785 -0.191342\nv -0.074658 0.923880 -0.375330\nv -0.108386 0.831470 -0.544895\nv -0.137950 0.707107 -0.693520\nv -0.162211 0.555570 -0.815493\nv -0.180240 0.382683 -0.906127\nv -0.191341 0.195090 -0.961939\nv -0.195090 0.000000 -0.980784\nv -0.191341 -0.195090 -0.961939\nv -0.180240 -0.382683 -0.906127\nv -0.162211 -0.555570 -0.815493\nv -0.137950 -0.707107 -0.693520\nv -0.108386 -0.831470 -0.544895\nv -0.074658 -0.923880 -0.375330\nv -0.038060 -0.980785 -0.191342\nv 0.000000 0.980785 -0.195090\nv 0.000000 0.923880 -0.382683\nv 0.000000 0.707107 -0.707107\nv 0.000000 0.382683 -0.923879\nv 0.000000 -0.382683 -0.923879\nv 0.000000 -0.707107 -0.707107\nv 0.000000 -0.831470 -0.555570\nv 0.000000 -0.923880 -0.382683\nv 0.000000 -0.980785 -0.195090\nvt 0.750000 0.187500\nvt 0.718750 0.125000\nvt 0.750000 0.125000\nvt 0.750000 0.562500\nvt 0.718750 0.625000\nvt 0.718750 0.562500\nvt 0.718750 0.062500\nvt 0.750000 0.062500\nvt 0.718750 0.500000\nvt 0.750000 0.500000\nvt 0.750000 0.937500\nvt 0.734375 1.000000\nvt 0.718750 0.937500\nvt 0.734375 0.000000\nvt 0.718750 0.437500\nvt 0.750000 0.437500\nvt 0.750000 0.875000\nvt 0.718750 0.875000\nvt 0.718750 0.375000\nvt 0.750000 0.375000\nvt 0.750000 0.812500\nvt 0.718750 0.812500\nvt 0.718750 0.312500\nvt 0.750000 0.312500\nvt 0.750000 0.750000\nvt 0.718750 0.750000\nvt 0.718750 0.250000\nvt 0.750000 0.250000\nvt 0.750000 0.687500\nvt 0.718750 0.687500\nvt 0.718750 0.187500\nvt 0.750000 0.625000\nvt 0.687500 0.250000\nvt 0.687500 0.187500\nvt 0.687500 0.625000\nvt 0.687500 0.125000\nvt 0.687500 0.562500\nvt 0.687500 0.062500\nvt 0.687500 0.500000\nvt 0.703125 1.000000\nvt 0.687500 0.937500\nvt 0.703125 0.000000\nvt 0.687500 0.437500\nvt 0.687500 0.875000\nvt 0.687500 0.375000\nvt 0.687500 0.812500\nvt 0.687500 0.312500\nvt 0.687500 0.750000\nvt 0.687500 0.687500\nvt 0.656250 0.875000\nvt 0.656250 0.375000\nvt 0.656250 0.812500\nvt 0.656250 0.312500\nvt 0.656250 0.750000\nvt 0.656250 0.250000\nvt 0.656250 0.687500\nvt 0.656250 0.187500\nvt 0.656250 0.625000\nvt 0.656250 0.125000\nvt 0.656250 0.562500\nvt 0.656250 0.062500\nvt 0.656250 0.500000\nvt 0.671875 1.000000\nvt 0.656250 0.937500\nvt 0.671875 0.000000\nvt 0.656250 0.437500\nvt 0.625000 0.625000\nvt 0.625000 0.125000\nvt 0.625000 0.562500\nvt 0.625000 0.062500\nvt 0.625000 0.500000\nvt 0.640625 1.000000\nvt 0.625000 0.937500\nvt 0.640625 0.000000\nvt 0.625000 0.437500\nvt 0.625000 0.875000\nvt 0.625000 0.375000\nvt 0.625000 0.812500\nvt 0.625000 0.312500\nvt 0.625000 0.750000\nvt 0.625000 0.250000\nvt 0.625000 0.687500\nvt 0.625000 0.187500\nvt 0.593750 0.375000\nvt 0.593750 0.812500\nvt 0.593750 0.312500\nvt 0.593750 0.750000\nvt 0.593750 0.250000\nvt 0.593750 0.687500\nvt 0.593750 0.187500\nvt 0.593750 0.625000\nvt 0.593750 0.125000\nvt 0.593750 0.562500\nvt 0.593750 0.062500\nvt 0.593750 0.500000\nvt 0.609375 1.000000\nvt 0.593750 0.937500\nvt 0.609375 0.000000\nvt 0.593750 0.437500\nvt 0.593750 0.875000\nvt 0.562500 0.125000\nvt 0.562500 0.625000\nvt 0.562500 0.562500\nvt 0.562500 0.062500\nvt 0.562500 0.500000\nvt 0.578125 1.000000\nvt 0.562500 0.937500\nvt 0.578125 0.000000\nvt 0.562500 0.437500\nvt 0.562500 0.875000\nvt 0.562500 0.375000\nvt 0.562500 0.812500\nvt 0.562500 0.312500\nvt 0.562500 0.750000\nvt 0.562500 0.250000\nvt 0.562500 0.687500\nvt 0.562500 0.187500\nvt 0.531250 0.375000\nvt 0.531250 0.312500\nvt 0.531250 0.750000\nvt 0.531250 0.250000\nvt 0.531250 0.687500\nvt 0.531250 0.187500\nvt 0.531250 0.625000\nvt 0.531250 0.125000\nvt 0.531250 0.562500\nvt 0.531250 0.062500\nvt 0.531250 0.500000\nvt 0.546875 1.000000\nvt 0.531250 0.937500\nvt 0.546875 0.000000\nvt 0.531250 0.437500\nvt 0.531250 0.875000\nvt 0.531250 0.812500\nvt 0.500000 0.062500\nvt 0.500000 0.562500\nvt 0.500000 0.500000\nvt 0.515625 1.000000\nvt 0.500000 0.937500\nvt 0.515625 0.000000\nvt 0.500000 0.437500\nvt 0.500000 0.875000\nvt 0.500000 0.375000\nvt 0.500000 0.812500\nvt 0.500000 0.312500\nvt 0.500000 0.750000\nvt 0.500000 0.250000\nvt 0.500000 0.687500\nvt 0.500000 0.187500\nvt 0.500000 0.625000\nvt 0.500000 0.125000\nvt 0.468750 0.750000\nvt 0.468750 0.250000\nvt 0.468750 0.687500\nvt 0.468750 0.187500\nvt 0.468750 0.625000\nvt 0.468750 0.125000\nvt 0.468750 0.562500\nvt 0.468750 0.062500\nvt 0.468750 0.500000\nvt 0.484375 1.000000\nvt 0.468750 0.937500\nvt 0.484375 0.000000\nvt 0.468750 0.437500\nvt 0.468750 0.875000\nvt 0.468750 0.375000\nvt 0.468750 0.812500\nvt 0.468750 0.312500\nvt 0.437500 0.562500\nvt 0.437500 0.500000\nvt 0.453125 1.000000\nvt 0.437500 0.937500\nvt 0.453125 0.000000\nvt 0.437500 0.062500\nvt 0.437500 0.437500\nvt 0.437500 0.875000\nvt 0.437500 0.375000\nvt 0.437500 0.812500\nvt 0.437500 0.312500\nvt 0.437500 0.750000\nvt 0.437500 0.250000\nvt 0.437500 0.687500\nvt 0.437500 0.187500\nvt 0.437500 0.625000\nvt 0.437500 0.125000\nvt 0.406250 0.250000\nvt 0.406250 0.750000\nvt 0.406250 0.687500\nvt 0.406250 0.187500\nvt 0.406250 0.625000\nvt 0.406250 0.125000\nvt 0.406250 0.562500\nvt 0.406250 0.062500\nvt 0.406250 0.500000\nvt 0.421875 1.000000\nvt 0.406250 0.937500\nvt 0.421875 0.000000\nvt 0.406250 0.437500\nvt 0.406250 0.875000\nvt 0.406250 0.375000\nvt 0.406250 0.812500\nvt 0.406250 0.312500\nvt 0.390625 1.000000\nvt 0.375000 0.937500\nvt 0.390625 0.000000\nvt 0.375000 0.062500\nvt 0.375000 0.437500\nvt 0.375000 0.875000\nvt 0.375000 0.375000\nvt 0.375000 0.812500\nvt 0.375000 0.312500\nvt 0.375000 0.750000\nvt 0.375000 0.250000\nvt 0.375000 0.687500\nvt 0.375000 0.187500\nvt 0.375000 0.625000\nvt 0.375000 0.125000\nvt 0.375000 0.562500\nvt 0.375000 0.500000\nvt 0.343750 0.750000\nvt 0.343750 0.687500\nvt 0.343750 0.250000\nvt 0.343750 0.187500\nvt 0.343750 0.625000\nvt 0.343750 0.125000\nvt 0.343750 0.562500\nvt 0.343750 0.062500\nvt 0.343750 0.500000\nvt 0.359375 1.000000\nvt 0.343750 0.937500\nvt 0.359375 0.000000\nvt 0.343750 0.437500\nvt 0.343750 0.875000\nvt 0.343750 0.375000\nvt 0.343750 0.812500\nvt 0.343750 0.312500\nvt 0.312500 0.437500\nvt 0.312500 0.875000\nvt 0.312500 0.375000\nvt 0.312500 0.812500\nvt 0.312500 0.312500\nvt 0.312500 0.750000\nvt 0.312500 0.250000\nvt 0.312500 0.687500\nvt 0.312500 0.187500\nvt 0.312500 0.625000\nvt 0.312500 0.125000\nvt 0.312500 0.562500\nvt 0.312500 0.062500\nvt 0.312500 0.500000\nvt 0.328125 1.000000\nvt 0.312500 0.937500\nvt 0.328125 0.000000\nvt 0.281250 0.250000\nvt 0.281250 0.187500\nvt 0.281250 0.625000\nvt 0.281250 0.125000\nvt 0.281250 0.562500\nvt 0.281250 0.062500\nvt 0.281250 0.500000\nvt 0.296875 1.000000\nvt 0.281250 0.937500\nvt 0.296875 0.000000\nvt 0.281250 0.437500\nvt 0.281250 0.875000\nvt 0.281250 0.375000\nvt 0.281250 0.812500\nvt 0.281250 0.312500\nvt 0.281250 0.750000\nvt 0.281250 0.687500\nvt 0.250000 0.375000\nvt 0.250000 0.875000\nvt 0.250000 0.812500\nvt 0.250000 0.312500\nvt 0.250000 0.750000\nvt 0.250000 0.250000\nvt 0.250000 0.687500\nvt 0.250000 0.187500\nvt 0.250000 0.625000\nvt 0.250000 0.125000\nvt 0.250000 0.562500\nvt 0.250000 0.062500\nvt 0.250000 0.500000\nvt 0.265625 1.000000\nvt 0.250000 0.937500\nvt 0.265625 0.000000\nvt 0.250000 0.437500\nvt 0.218750 0.125000\nvt 0.218750 0.625000\nvt 0.218750 0.562500\nvt 0.218750 0.062500\nvt 0.218750 0.500000\nvt 0.234375 1.000000\nvt 0.218750 0.937500\nvt 0.234375 0.000000\nvt 0.218750 0.437500\nvt 0.218750 0.875000\nvt 0.218750 0.375000\nvt 0.218750 0.812500\nvt 0.218750 0.312500\nvt 0.218750 0.750000\nvt 0.218750 0.250000\nvt 0.218750 0.687500\nvt 0.218750 0.187500\nvt 0.187500 0.812500\nvt 0.187500 0.375000\nvt 0.187500 0.312500\nvt 0.187500 0.750000\nvt 0.187500 0.250000\nvt 0.187500 0.687500\nvt 0.187500 0.187500\nvt 0.187500 0.625000\nvt 0.187500 0.125000\nvt 0.187500 0.562500\nvt 0.187500 0.062500\nvt 0.187500 0.500000\nvt 0.203125 1.000000\nvt 0.187500 0.937500\nvt 0.203125 0.000000\nvt 0.187500 0.437500\nvt 0.187500 0.875000\nvt 0.156250 0.625000\nvt 0.156250 0.562500\nvt 0.156250 0.125000\nvt 0.156250 0.062500\nvt 0.156250 0.500000\nvt 0.171875 1.000000\nvt 0.156250 0.937500\nvt 0.171875 0.000000\nvt 0.156250 0.437500\nvt 0.156250 0.875000\nvt 0.156250 0.375000\nvt 0.156250 0.812500\nvt 0.156250 0.312500\nvt 0.156250 0.750000\nvt 0.156250 0.250000\nvt 0.156250 0.687500\nvt 0.156250 0.187500\nvt 0.125000 0.375000\nvt 0.125000 0.312500\nvt 0.125000 0.750000\nvt 0.125000 0.250000\nvt 0.125000 0.687500\nvt 0.125000 0.187500\nvt 0.125000 0.625000\nvt 0.125000 0.125000\nvt 0.125000 0.562500\nvt 0.125000 0.062500\nvt 0.125000 0.500000\nvt 0.140625 1.000000\nvt 0.125000 0.937500\nvt 0.140625 0.000000\nvt 0.125000 0.437500\nvt 0.125000 0.875000\nvt 0.125000 0.812500\nvt 0.093750 0.062500\nvt 0.093750 0.562500\nvt 0.093750 0.500000\nvt 0.109375 1.000000\nvt 0.093750 0.937500\nvt 0.109375 0.000000\nvt 0.093750 0.437500\nvt 0.093750 0.875000\nvt 0.093750 0.375000\nvt 0.093750 0.812500\nvt 0.093750 0.312500\nvt 0.093750 0.750000\nvt 0.093750 0.250000\nvt 0.093750 0.687500\nvt 0.093750 0.187500\nvt 0.093750 0.625000\nvt 0.093750 0.125000\nvt 0.062500 0.750000\nvt 0.062500 0.250000\nvt 0.062500 0.687500\nvt 0.062500 0.187500\nvt 0.062500 0.625000\nvt 0.062500 0.125000\nvt 0.062500 0.562500\nvt 0.062500 0.062500\nvt 0.062500 0.500000\nvt 0.078125 1.000000\nvt 0.062500 0.937500\nvt 0.078125 0.000000\nvt 0.062500 0.437500\nvt 0.062500 0.875000\nvt 0.062500 0.375000\nvt 0.062500 0.812500\nvt 0.062500 0.312500\nvt 0.031250 0.562500\nvt 0.031250 0.500000\nvt 0.046875 1.000000\nvt 0.031250 0.937500\nvt 0.046875 0.000000\nvt 0.031250 0.062500\nvt 0.031250 0.437500\nvt 0.031250 0.875000\nvt 0.031250 0.375000\nvt 0.031250 0.812500\nvt 0.031250 0.312500\nvt 0.031250 0.750000\nvt 0.031250 0.250000\nvt 0.031250 0.687500\nvt 0.031250 0.187500\nvt 0.031250 0.625000\nvt 0.031250 0.125000\nvt 0.000000 0.250000\nvt 0.000000 0.750000\nvt 0.000000 0.687500\nvt 0.000000 0.187500\nvt 0.000000 0.625000\nvt 0.000000 0.125000\nvt 0.000000 0.562500\nvt 0.000000 0.062500\nvt 0.000000 0.500000\nvt 0.015625 1.000000\nvt 0.000000 0.937500\nvt 0.015625 0.000000\nvt 0.000000 0.437500\nvt 0.000000 0.875000\nvt 0.000000 0.375000\nvt 0.000000 0.812500\nvt 0.000000 0.312500\nvt 0.984375 0.000000\nvt 1.000000 0.062500\nvt 0.968750 0.062500\nvt 1.000000 0.500000\nvt 0.968750 0.437500\nvt 1.000000 0.437500\nvt 1.000000 0.937500\nvt 0.968750 0.875000\nvt 1.000000 0.875000\nvt 0.968750 0.375000\nvt 1.000000 0.375000\nvt 1.000000 0.812500\nvt 0.968750 0.812500\nvt 1.000000 0.312500\nvt 0.968750 0.312500\nvt 0.968750 0.750000\nvt 1.000000 0.750000\nvt 0.968750 0.250000\nvt 1.000000 0.250000\nvt 1.000000 0.687500\nvt 0.968750 0.687500\nvt 1.000000 0.187500\nvt 0.968750 0.187500\nvt 0.968750 0.625000\nvt 1.000000 0.625000\nvt 0.968750 0.125000\nvt 1.000000 0.125000\nvt 1.000000 0.562500\nvt 0.968750 0.562500\nvt 0.968750 0.500000\nvt 0.984375 1.000000\nvt 0.968750 0.937500\nvt 0.937500 0.250000\nvt 0.937500 0.187500\nvt 0.937500 0.625000\nvt 0.937500 0.125000\nvt 0.937500 0.562500\nvt 0.937500 0.062500\nvt 0.937500 0.500000\nvt 0.953125 1.000000\nvt 0.937500 0.937500\nvt 0.953125 0.000000\nvt 0.937500 0.437500\nvt 0.937500 0.875000\nvt 0.937500 0.375000\nvt 0.937500 0.812500\nvt 0.937500 0.312500\nvt 0.937500 0.750000\nvt 0.937500 0.687500\nvt 0.906250 0.937500\nvt 0.906250 0.875000\nvt 0.906250 0.375000\nvt 0.906250 0.812500\nvt 0.906250 0.312500\nvt 0.906250 0.750000\nvt 0.906250 0.250000\nvt 0.906250 0.687500\nvt 0.906250 0.187500\nvt 0.906250 0.625000\nvt 0.906250 0.125000\nvt 0.906250 0.562500\nvt 0.906250 0.062500\nvt 0.906250 0.500000\nvt 0.921875 1.000000\nvt 0.921875 0.000000\nvt 0.906250 0.437500\nvt 0.875000 0.625000\nvt 0.875000 0.125000\nvt 0.875000 0.562500\nvt 0.875000 0.062500\nvt 0.875000 0.500000\nvt 0.890625 1.000000\nvt 0.875000 0.937500\nvt 0.890625 0.000000\nvt 0.875000 0.437500\nvt 0.875000 0.875000\nvt 0.875000 0.375000\nvt 0.875000 0.812500\nvt 0.875000 0.312500\nvt 0.875000 0.750000\nvt 0.875000 0.250000\nvt 0.875000 0.687500\nvt 0.875000 0.187500\nvt 0.843750 0.375000\nvt 0.843750 0.875000\nvt 0.843750 0.812500\nvt 0.843750 0.312500\nvt 0.843750 0.750000\nvt 0.843750 0.250000\nvt 0.843750 0.687500\nvt 0.843750 0.187500\nvt 0.843750 0.625000\nvt 0.843750 0.125000\nvt 0.843750 0.562500\nvt 0.843750 0.062500\nvt 0.843750 0.500000\nvt 0.859375 1.000000\nvt 0.843750 0.937500\nvt 0.859375 0.000000\nvt 0.843750 0.437500\nvt 0.812500 0.125000\nvt 0.812500 0.625000\nvt 0.812500 0.562500\nvt 0.812500 0.062500\nvt 0.812500 0.500000\nvt 0.828125 1.000000\nvt 0.812500 0.937500\nvt 0.828125 0.000000\nvt 0.812500 0.437500\nvt 0.812500 0.875000\nvt 0.812500 0.375000\nvt 0.812500 0.812500\nvt 0.812500 0.312500\nvt 0.812500 0.750000\nvt 0.812500 0.250000\nvt 0.812500 0.687500\nvt 0.812500 0.187500\nvt 0.781250 0.875000\nvt 0.781250 0.812500\nvt 0.781250 0.375000\nvt 0.781250 0.312500\nvt 0.781250 0.750000\nvt 0.781250 0.250000\nvt 0.781250 0.687500\nvt 0.781250 0.187500\nvt 0.781250 0.625000\nvt 0.781250 0.125000\nvt 0.781250 0.562500\nvt 0.781250 0.062500\nvt 0.781250 0.500000\nvt 0.796875 1.000000\nvt 0.781250 0.937500\nvt 0.796875 0.000000\nvt 0.781250 0.437500\nvt 0.765625 1.000000\nvt 0.765625 0.000000\nvn 0.0464 -0.8810 -0.4709\nvn 0.0938 0.2890 -0.9527\nvn 0.0286 -0.9565 -0.2902\nvn 0.0975 0.0975 -0.9904\nvn 0.0097 0.9951 -0.0980\nvn 0.0097 -0.9951 -0.0980\nvn 0.0975 -0.0975 -0.9904\nvn 0.0286 0.9565 -0.2902\nvn 0.0938 -0.2890 -0.9527\nvn 0.0464 0.8810 -0.4709\nvn 0.0865 -0.4696 -0.8786\nvn 0.0624 0.7715 -0.6332\nvn 0.0759 -0.6326 -0.7708\nvn 0.0759 0.6326 -0.7708\nvn 0.0624 -0.7715 -0.6332\nvn 0.0865 0.4696 -0.8786\nvn 0.1847 -0.7715 -0.6088\nvn 0.2563 0.4696 -0.8448\nvn 0.1374 -0.8810 -0.4528\nvn 0.2779 0.2890 -0.9161\nvn 0.0846 -0.9565 -0.2790\nvn 0.2889 0.0975 -0.9524\nvn 0.0286 0.9951 -0.0942\nvn 0.0286 -0.9951 -0.0942\nvn 0.2889 -0.0975 -0.9524\nvn 0.0846 0.9565 -0.2790\nvn 0.2779 -0.2890 -0.9161\nvn 0.1374 0.8810 -0.4528\nvn 0.2563 -0.4696 -0.8448\nvn 0.1847 0.7715 -0.6088\nvn 0.2248 -0.6326 -0.7412\nvn 0.2248 0.6326 -0.7412\nvn 0.1374 0.9565 -0.2571\nvn 0.4513 -0.2890 -0.8443\nvn 0.2230 0.8810 -0.4173\nvn 0.4162 -0.4696 -0.7786\nvn 0.2999 0.7715 -0.5611\nvn 0.3651 -0.6326 -0.6831\nvn 0.3651 0.6326 -0.6831\nvn 0.2999 -0.7715 -0.5611\nvn 0.4162 0.4696 -0.7786\nvn 0.2230 -0.8810 -0.4173\nvn 0.4513 0.2890 -0.8443\nvn 0.1374 -0.9565 -0.2571\nvn 0.4691 0.0975 -0.8777\nvn 0.0464 0.9951 -0.0869\nvn 0.0464 -0.9951 -0.0869\nvn 0.4691 -0.0975 -0.8777\nvn 0.5601 0.4696 -0.6825\nvn 0.3002 -0.8810 -0.3658\nvn 0.6073 0.2890 -0.7400\nvn 0.1850 -0.9565 -0.2254\nvn 0.6314 0.0975 -0.7693\nvn 0.0625 0.9951 -0.0761\nvn 0.0625 -0.9951 -0.0761\nvn 0.6314 -0.0975 -0.7693\nvn 0.1850 0.9565 -0.2254\nvn 0.6073 -0.2890 -0.7400\nvn 0.3002 0.8810 -0.3658\nvn 0.5601 -0.4696 -0.6825\nvn 0.4036 0.7715 -0.4918\nvn 0.4913 -0.6326 -0.5987\nvn 0.4913 0.6326 -0.5987\nvn 0.4036 -0.7715 -0.4918\nvn 0.7400 -0.2890 -0.6073\nvn 0.3658 0.8810 -0.3002\nvn 0.6825 -0.4696 -0.5601\nvn 0.4918 0.7715 -0.4036\nvn 0.5987 -0.6326 -0.4913\nvn 0.5987 0.6326 -0.4913\nvn 0.4918 -0.7715 -0.4036\nvn 0.6825 0.4696 -0.5601\nvn 0.3658 -0.8810 -0.3002\nvn 0.7400 0.2890 -0.6073\nvn 0.2254 -0.9565 -0.1850\nvn 0.7693 0.0975 -0.6314\nvn 0.0761 0.9951 -0.0625\nvn 0.0761 -0.9951 -0.0625\nvn 0.7693 -0.0976 -0.6314\nvn 0.2254 0.9565 -0.1850\nvn 0.4173 -0.8810 -0.2231\nvn 0.8443 0.2890 -0.4513\nvn 0.2571 -0.9565 -0.1374\nvn 0.8777 0.0975 -0.4691\nvn 0.0869 0.9951 -0.0464\nvn 0.0869 -0.9951 -0.0464\nvn 0.8777 -0.0975 -0.4691\nvn 0.2571 0.9565 -0.1374\nvn 0.8443 -0.2890 -0.4513\nvn 0.4173 0.8810 -0.2231\nvn 0.7786 -0.4696 -0.4162\nvn 0.5611 0.7715 -0.2999\nvn 0.6831 -0.6326 -0.3651\nvn 0.6831 0.6326 -0.3651\nvn 0.5611 -0.7715 -0.2999\nvn 0.7786 0.4696 -0.4162\nvn 0.8448 -0.4696 -0.2563\nvn 0.6088 0.7715 -0.1847\nvn 0.7412 -0.6326 -0.2248\nvn 0.7412 0.6326 -0.2248\nvn 0.6088 -0.7715 -0.1847\nvn 0.8448 0.4696 -0.2563\nvn 0.4528 -0.8810 -0.1374\nvn 0.9161 0.2890 -0.2779\nvn 0.2790 -0.9565 -0.0846\nvn 0.9524 0.0975 -0.2889\nvn 0.0942 0.9951 -0.0286\nvn 0.0942 -0.9951 -0.0286\nvn 0.9524 -0.0975 -0.2889\nvn 0.2790 0.9565 -0.0846\nvn 0.9161 -0.2890 -0.2779\nvn 0.4528 0.8810 -0.1374\nvn 0.2902 -0.9565 -0.0286\nvn 0.9904 0.0975 -0.0975\nvn 0.0980 0.9951 -0.0097\nvn 0.0980 -0.9951 -0.0097\nvn 0.9904 -0.0976 -0.0975\nvn 0.2902 0.9565 -0.0286\nvn 0.9527 -0.2890 -0.0938\nvn 0.4709 0.8810 -0.0464\nvn 0.8786 -0.4696 -0.0865\nvn 0.6332 0.7715 -0.0624\nvn 0.7708 -0.6326 -0.0759\nvn 0.7708 0.6326 -0.0759\nvn 0.6332 -0.7715 -0.0624\nvn 0.8786 0.4696 -0.0865\nvn 0.4709 -0.8810 -0.0464\nvn 0.9527 0.2890 -0.0938\nvn 0.6332 0.7715 0.0624\nvn 0.7708 -0.6326 0.0759\nvn 0.7708 0.6326 0.0759\nvn 0.6332 -0.7715 0.0624\nvn 0.8786 0.4696 0.0865\nvn 0.4709 -0.8810 0.0464\nvn 0.9527 0.2890 0.0938\nvn 0.2902 -0.9565 0.0286\nvn 0.9904 0.0975 0.0976\nvn 0.0980 0.9951 0.0097\nvn 0.0980 -0.9951 0.0097\nvn 0.9904 -0.0975 0.0975\nvn 0.2902 0.9565 0.0286\nvn 0.9527 -0.2890 0.0938\nvn 0.4709 0.8810 0.0464\nvn 0.8786 -0.4696 0.0865\nvn 0.9524 0.0975 0.2889\nvn 0.0942 0.9951 0.0286\nvn 0.0942 -0.9951 0.0286\nvn 0.9524 -0.0975 0.2889\nvn 0.2790 0.9565 0.0846\nvn 0.9161 -0.2890 0.2779\nvn 0.4528 0.8810 0.1374\nvn 0.8448 -0.4696 0.2563\nvn 0.6088 0.7715 0.1847\nvn 0.7412 -0.6326 0.2248\nvn 0.7412 0.6326 0.2248\nvn 0.6088 -0.7715 0.1847\nvn 0.8448 0.4696 0.2563\nvn 0.4528 -0.8810 0.1374\nvn 0.9161 0.2890 0.2779\nvn 0.2790 -0.9565 0.0846\nvn 0.6831 -0.6326 0.3651\nvn 0.6831 0.6326 0.3651\nvn 0.5611 -0.7715 0.2999\nvn 0.7786 0.4696 0.4162\nvn 0.4173 -0.8810 0.2230\nvn 0.8443 0.2890 0.4513\nvn 0.2571 -0.9565 0.1374\nvn 0.8777 0.0975 0.4691\nvn 0.0869 0.9951 0.0464\nvn 0.0869 -0.9951 0.0464\nvn 0.8777 -0.0975 0.4691\nvn 0.2571 0.9565 0.1374\nvn 0.8443 -0.2890 0.4513\nvn 0.4173 0.8810 0.2231\nvn 0.7786 -0.4696 0.4162\nvn 0.5611 0.7715 0.2999\nvn 0.0761 0.9951 0.0625\nvn 0.0761 -0.9951 0.0625\nvn 0.7693 -0.0975 0.6314\nvn 0.2254 0.9565 0.1850\nvn 0.7400 -0.2890 0.6073\nvn 0.3658 0.8810 0.3002\nvn 0.6825 -0.4696 0.5601\nvn 0.4918 0.7715 0.4036\nvn 0.5987 -0.6326 0.4913\nvn 0.5987 0.6326 0.4913\nvn 0.4918 -0.7715 0.4036\nvn 0.6825 0.4696 0.5601\nvn 0.3658 -0.8810 0.3002\nvn 0.7400 0.2890 0.6073\nvn 0.2254 -0.9566 0.1850\nvn 0.7693 0.0975 0.6314\nvn 0.4913 0.6326 0.5987\nvn 0.4036 -0.7715 0.4918\nvn 0.5601 0.4696 0.6825\nvn 0.3002 -0.8810 0.3658\nvn 0.6073 0.2890 0.7400\nvn 0.1850 -0.9565 0.2254\nvn 0.6314 0.0975 0.7693\nvn 0.0625 0.9951 0.0761\nvn 0.0625 -0.9951 0.0761\nvn 0.6314 -0.0975 0.7693\nvn 0.1850 0.9565 0.2254\nvn 0.6073 -0.2890 0.7400\nvn 0.3002 0.8810 0.3658\nvn 0.5601 -0.4696 0.6825\nvn 0.4036 0.7715 0.4918\nvn 0.4913 -0.6326 0.5987\nvn 0.4691 -0.0975 0.8777\nvn 0.1374 0.9565 0.2571\nvn 0.4513 -0.2890 0.8443\nvn 0.2230 0.8810 0.4173\nvn 0.4162 -0.4696 0.7786\nvn 0.2999 0.7715 0.5611\nvn 0.3651 -0.6326 0.6831\nvn 0.3651 0.6326 0.6831\nvn 0.2999 -0.7715 0.5611\nvn 0.4162 0.4696 0.7786\nvn 0.2230 -0.8810 0.4173\nvn 0.4513 0.2890 0.8443\nvn 0.1374 -0.9565 0.2571\nvn 0.4691 0.0975 0.8777\nvn 0.0464 0.9951 0.0869\nvn 0.0464 -0.9951 0.0869\nvn 0.1847 -0.7715 0.6088\nvn 0.2563 0.4696 0.8448\nvn 0.1374 -0.8810 0.4528\nvn 0.2779 0.2890 0.9161\nvn 0.0846 -0.9565 0.2790\nvn 0.2889 0.0975 0.9524\nvn 0.0286 0.9951 0.0942\nvn 0.0286 -0.9951 0.0942\nvn 0.2889 -0.0975 0.9524\nvn 0.0846 0.9565 0.2790\nvn 0.2779 -0.2890 0.9161\nvn 0.1374 0.8810 0.4528\nvn 0.2563 -0.4696 0.8448\nvn 0.1847 0.7715 0.6088\nvn 0.2248 -0.6326 0.7412\nvn 0.2248 0.6326 0.7412\nvn 0.0938 -0.2890 0.9527\nvn 0.0464 0.8810 0.4709\nvn 0.0865 -0.4696 0.8786\nvn 0.0624 0.7715 0.6332\nvn 0.0759 -0.6326 0.7708\nvn 0.0759 0.6326 0.7708\nvn 0.0624 -0.7715 0.6332\nvn 0.0865 0.4696 0.8786\nvn 0.0464 -0.8810 0.4709\nvn 0.0938 0.2890 0.9527\nvn 0.0286 -0.9565 0.2902\nvn 0.0975 0.0975 0.9904\nvn 0.0097 0.9951 0.0980\nvn 0.0097 -0.9951 0.0980\nvn 0.0976 -0.0975 0.9904\nvn 0.0286 0.9565 0.2902\nvn -0.0464 -0.8810 0.4709\nvn -0.0938 0.2890 0.9527\nvn -0.0286 -0.9565 0.2902\nvn -0.0975 0.0975 0.9904\nvn -0.0097 0.9951 0.0980\nvn -0.0097 -0.9951 0.0980\nvn -0.0976 -0.0975 0.9904\nvn -0.0286 0.9565 0.2902\nvn -0.0938 -0.2890 0.9527\nvn -0.0464 0.8810 0.4709\nvn -0.0865 -0.4696 0.8786\nvn -0.0624 0.7715 0.6332\nvn -0.0759 -0.6326 0.7708\nvn -0.0759 0.6326 0.7708\nvn -0.0624 -0.7715 0.6332\nvn -0.0865 0.4696 0.8786\nvn -0.1374 0.8810 0.4528\nvn -0.2563 -0.4696 0.8448\nvn -0.1847 0.7715 0.6088\nvn -0.2248 -0.6326 0.7412\nvn -0.2248 0.6326 0.7412\nvn -0.1847 -0.7715 0.6088\nvn -0.2563 0.4696 0.8448\nvn -0.1374 -0.8810 0.4528\nvn -0.2779 0.2890 0.9161\nvn -0.0846 -0.9565 0.2790\nvn -0.2889 0.0975 0.9524\nvn -0.0286 0.9951 0.0942\nvn -0.0286 -0.9951 0.0942\nvn -0.2889 -0.0975 0.9524\nvn -0.0846 0.9565 0.2790\nvn -0.2779 -0.2890 0.9161\nvn -0.4513 0.2890 0.8443\nvn -0.1374 -0.9566 0.2571\nvn -0.4691 0.0975 0.8777\nvn -0.0464 0.9951 0.0869\nvn -0.0464 -0.9951 0.0869\nvn -0.4691 -0.0975 0.8777\nvn -0.1374 0.9565 0.2571\nvn -0.4513 -0.2890 0.8443\nvn -0.2231 0.8810 0.4173\nvn -0.4162 -0.4696 0.7786\nvn -0.2999 0.7715 0.5611\nvn -0.3651 -0.6326 0.6831\nvn -0.3651 0.6326 0.6831\nvn -0.2999 -0.7715 0.5611\nvn -0.4162 0.4696 0.7786\nvn -0.2230 -0.8810 0.4173\nvn -0.5601 -0.4696 0.6825\nvn -0.4036 0.7715 0.4918\nvn -0.4913 -0.6326 0.5987\nvn -0.4913 0.6326 0.5987\nvn -0.4036 -0.7715 0.4918\nvn -0.5601 0.4696 0.6825\nvn -0.3002 -0.8810 0.3658\nvn -0.6073 0.2890 0.7400\nvn -0.1850 -0.9565 0.2254\nvn -0.6314 0.0975 0.7693\nvn -0.0625 0.9951 0.0761\nvn -0.0625 -0.9951 0.0761\nvn -0.6314 -0.0975 0.7693\nvn -0.1850 0.9565 0.2254\nvn -0.6073 -0.2890 0.7400\nvn -0.3002 0.8810 0.3658\nvn -0.2254 -0.9565 0.1850\nvn -0.7693 0.0975 0.6314\nvn -0.0761 0.9951 0.0625\nvn -0.0761 -0.9951 0.0625\nvn -0.7693 -0.0975 0.6314\nvn -0.2254 0.9565 0.1850\nvn -0.7400 -0.2890 0.6073\nvn -0.3658 0.8810 0.3002\nvn -0.6825 -0.4696 0.5601\nvn -0.4918 0.7715 0.4036\nvn -0.5987 -0.6326 0.4913\nvn -0.5987 0.6326 0.4913\nvn -0.4918 -0.7715 0.4036\nvn -0.6825 0.4696 0.5601\nvn -0.3658 -0.8810 0.3002\nvn -0.7400 0.2890 0.6073\nvn -0.5611 0.7715 0.2999\nvn -0.6831 -0.6326 0.3651\nvn -0.6831 0.6326 0.3651\nvn -0.5611 -0.7715 0.2999\nvn -0.7786 0.4696 0.4162\nvn -0.4173 -0.8810 0.2231\nvn -0.8443 0.2890 0.4513\nvn -0.2571 -0.9565 0.1374\nvn -0.8777 0.0975 0.4691\nvn -0.0869 0.9951 0.0464\nvn -0.0869 -0.9951 0.0464\nvn -0.8777 -0.0975 0.4691\nvn -0.2571 0.9565 0.1374\nvn -0.8443 -0.2890 0.4513\nvn -0.4173 0.8810 0.2230\nvn -0.7786 -0.4696 0.4162\nvn -0.9524 0.0975 0.2889\nvn -0.0942 0.9951 0.0286\nvn -0.0942 -0.9951 0.0286\nvn -0.9524 -0.0975 0.2889\nvn -0.2790 0.9565 0.0846\nvn -0.9161 -0.2890 0.2779\nvn -0.4528 0.8810 0.1374\nvn -0.8448 -0.4696 0.2563\nvn -0.6088 0.7715 0.1847\nvn -0.7412 -0.6326 0.2248\nvn -0.7412 0.6326 0.2248\nvn -0.6088 -0.7715 0.1847\nvn -0.8448 0.4696 0.2563\nvn -0.4528 -0.8810 0.1374\nvn -0.9161 0.2890 0.2779\nvn -0.2790 -0.9565 0.0846\nvn -0.7708 -0.6326 0.0759\nvn -0.7708 0.6326 0.0759\nvn -0.6332 -0.7715 0.0624\nvn -0.8786 0.4696 0.0865\nvn -0.4709 -0.8810 0.0464\nvn -0.9527 0.2890 0.0938\nvn -0.2902 -0.9565 0.0286\nvn -0.9904 0.0975 0.0975\nvn -0.0980 0.9951 0.0097\nvn -0.0980 -0.9951 0.0097\nvn -0.9904 -0.0975 0.0975\nvn -0.2902 0.9565 0.0286\nvn -0.9527 -0.2890 0.0938\nvn -0.4709 0.8810 0.0464\nvn -0.8786 -0.4696 0.0865\nvn -0.6332 0.7715 0.0624\nvn -0.0980 -0.9951 -0.0097\nvn -0.9904 -0.0975 -0.0976\nvn -0.2902 0.9565 -0.0286\nvn -0.9527 -0.2890 -0.0938\nvn -0.4709 0.8810 -0.0464\nvn -0.8786 -0.4696 -0.0865\nvn -0.6332 0.7715 -0.0624\nvn -0.7708 -0.6326 -0.0759\nvn -0.7708 0.6326 -0.0759\nvn -0.6332 -0.7715 -0.0624\nvn -0.8786 0.4696 -0.0865\nvn -0.4709 -0.8810 -0.0464\nvn -0.9527 0.2890 -0.0938\nvn -0.2902 -0.9565 -0.0286\nvn -0.9904 0.0975 -0.0976\nvn -0.0980 0.9951 -0.0097\nvn -0.6088 -0.7715 -0.1847\nvn -0.8448 0.4696 -0.2563\nvn -0.4528 -0.8810 -0.1374\nvn -0.9161 0.2890 -0.2779\nvn -0.2790 -0.9565 -0.0846\nvn -0.9524 0.0975 -0.2889\nvn -0.0942 0.9951 -0.0286\nvn -0.0942 -0.9951 -0.0286\nvn -0.9524 -0.0975 -0.2889\nvn -0.2790 0.9565 -0.0846\nvn -0.9161 -0.2890 -0.2779\nvn -0.4528 0.8810 -0.1374\nvn -0.8448 -0.4696 -0.2563\nvn -0.6088 0.7715 -0.1847\nvn -0.7412 -0.6326 -0.2248\nvn -0.7412 0.6326 -0.2248\nvn -0.2571 0.9565 -0.1374\nvn -0.8443 -0.2890 -0.4513\nvn -0.4173 0.8810 -0.2231\nvn -0.7786 -0.4696 -0.4162\nvn -0.5611 0.7715 -0.2999\nvn -0.6831 -0.6326 -0.3651\nvn -0.6831 0.6326 -0.3651\nvn -0.5611 -0.7715 -0.2999\nvn -0.7786 0.4696 -0.4162\nvn -0.4173 -0.8810 -0.2230\nvn -0.8443 0.2890 -0.4513\nvn -0.2571 -0.9565 -0.1374\nvn -0.8777 0.0975 -0.4691\nvn -0.0869 0.9951 -0.0464\nvn -0.0869 -0.9951 -0.0464\nvn -0.8777 -0.0975 -0.4691\nvn -0.6825 0.4696 -0.5601\nvn -0.3658 -0.8810 -0.3002\nvn -0.7400 0.2890 -0.6073\nvn -0.2254 -0.9565 -0.1850\nvn -0.7693 0.0975 -0.6314\nvn -0.0761 0.9951 -0.0625\nvn -0.0761 -0.9951 -0.0625\nvn -0.7693 -0.0975 -0.6314\nvn -0.2254 0.9565 -0.1850\nvn -0.7400 -0.2890 -0.6073\nvn -0.3658 0.8810 -0.3002\nvn -0.6825 -0.4696 -0.5601\nvn -0.4918 0.7715 -0.4036\nvn -0.5987 -0.6326 -0.4913\nvn -0.5987 0.6326 -0.4913\nvn -0.4918 -0.7715 -0.4036\nvn -0.6073 -0.2890 -0.7400\nvn -0.3002 0.8810 -0.3658\nvn -0.5601 -0.4696 -0.6825\nvn -0.4036 0.7715 -0.4918\nvn -0.4913 -0.6326 -0.5987\nvn -0.4913 0.6326 -0.5987\nvn -0.4036 -0.7715 -0.4918\nvn -0.5601 0.4696 -0.6825\nvn -0.3002 -0.8810 -0.3658\nvn -0.6073 0.2890 -0.7400\nvn -0.1850 -0.9565 -0.2254\nvn -0.6314 0.0975 -0.7693\nvn -0.0625 0.9951 -0.0761\nvn -0.0625 -0.9951 -0.0761\nvn -0.6314 -0.0975 -0.7693\nvn -0.1850 0.9565 -0.2254\nvn -0.2230 -0.8810 -0.4173\nvn -0.4513 0.2890 -0.8443\nvn -0.1374 -0.9565 -0.2571\nvn -0.4691 0.0975 -0.8777\nvn -0.0464 0.9951 -0.0869\nvn -0.0464 -0.9951 -0.0869\nvn -0.4691 -0.0975 -0.8777\nvn -0.1374 0.9565 -0.2571\nvn -0.4513 -0.2890 -0.8443\nvn -0.2230 0.8810 -0.4173\nvn -0.4162 -0.4696 -0.7786\nvn -0.2999 0.7715 -0.5611\nvn -0.3651 -0.6326 -0.6831\nvn -0.3651 0.6326 -0.6831\nvn -0.2999 -0.7715 -0.5611\nvn -0.4162 0.4696 -0.7786\nvn -0.1374 0.8810 -0.4528\nvn -0.2563 -0.4696 -0.8448\nvn -0.1847 0.7715 -0.6088\nvn -0.2248 -0.6326 -0.7412\nvn -0.2248 0.6326 -0.7412\nvn -0.1847 -0.7715 -0.6088\nvn -0.2563 0.4696 -0.8448\nvn -0.1374 -0.8810 -0.4528\nvn -0.2779 0.2890 -0.9161\nvn -0.0846 -0.9565 -0.2790\nvn -0.2889 0.0975 -0.9524\nvn -0.0286 0.9951 -0.0942\nvn -0.0286 -0.9951 -0.0942\nvn -0.2889 -0.0975 -0.9524\nvn -0.0846 0.9565 -0.2790\nvn -0.2779 -0.2890 -0.9161\nvn -0.0938 0.2890 -0.9527\nvn -0.0286 -0.9565 -0.2902\nvn -0.0976 0.0975 -0.9904\nvn -0.0097 0.9951 -0.0980\nvn -0.0097 -0.9951 -0.0980\nvn -0.0976 -0.0975 -0.9904\nvn -0.0286 0.9565 -0.2902\nvn -0.0938 -0.2890 -0.9527\nvn -0.0464 0.8810 -0.4709\nvn -0.0865 -0.4696 -0.8786\nvn -0.0624 0.7715 -0.6332\nvn -0.0759 -0.6326 -0.7708\nvn -0.0759 0.6326 -0.7708\nvn -0.0624 -0.7715 -0.6332\nvn -0.0865 0.4696 -0.8786\nvn -0.0464 -0.8810 -0.4709\nvn 0.0976 0.0975 -0.9904\nvn 0.0976 -0.0975 -0.9904\nvn 0.2231 0.8810 -0.4173\nvn 0.2231 -0.8810 -0.4173\nvn 0.7693 0.0976 -0.6314\nvn 0.7693 -0.0975 -0.6314\nvn 0.4173 0.8810 -0.2230\nvn 0.9904 0.0976 -0.0975\nvn 0.9904 -0.0975 -0.0975\nvn 0.9904 0.0975 0.0975\nvn 0.9904 -0.0975 0.0976\nvn 0.4173 -0.8810 0.2231\nvn 0.4173 0.8810 0.2230\nvn 0.2254 0.9566 0.1850\nvn 0.2254 -0.9565 0.1850\nvn 0.0976 0.0975 0.9904\nvn 0.0975 -0.0975 0.9904\nvn -0.0976 0.0975 0.9904\nvn -0.0975 -0.0975 0.9904\nvn -0.1374 -0.9565 0.2571\nvn -0.2231 -0.8810 0.4173\nvn -0.4173 -0.8810 0.2230\nvn -0.4173 0.8810 0.2231\nvn -0.4173 0.8810 -0.2230\nvn -0.4173 -0.8810 -0.2231\nvn -0.2254 0.9566 -0.1850\nvn -0.2231 0.8810 -0.4173\nusemtl None\ns off\nf 480/1/1 20/2/1 481/3/1\nf 3/4/2 12/5/2 13/6/2\nf 481/3/3 21/7/3 482/8/3\nf 3/4/4 14/9/4 4/10/4\nf 474/11/5 82/12/5 7/13/5\nf 308/14/6 482/8/6 21/7/6\nf 4/10/7 15/15/7 5/16/7\nf 475/17/8 7/13/8 8/18/8\nf 5/16/9 16/19/9 478/20/9\nf 1/21/10 8/18/10 9/22/10\nf 478/20/11 17/23/11 6/24/11\nf 476/25/12 9/22/12 10/26/12\nf 6/24/13 18/27/13 479/28/13\nf 2/29/14 10/26/14 11/30/14\nf 479/28/15 19/31/15 480/1/15\nf 477/32/16 11/30/16 12/5/16\nf 19/31/17 33/33/17 34/34/17\nf 11/30/18 27/35/18 12/5/18\nf 20/2/19 34/34/19 35/36/19\nf 13/6/20 27/35/20 28/37/20\nf 20/2/21 36/38/21 21/7/21\nf 13/6/22 29/39/22 14/9/22\nf 7/13/23 82/40/23 22/41/23\nf 308/42/24 21/7/24 36/38/24\nf 14/9/25 30/43/25 15/15/25\nf 7/13/26 23/44/26 8/18/26\nf 15/15/27 31/45/27 16/19/27\nf 8/18/28 24/46/28 9/22/28\nf 16/19/29 32/47/29 17/23/29\nf 9/22/30 25/48/30 10/26/30\nf 17/23/31 33/33/31 18/27/31\nf 10/26/32 26/49/32 11/30/32\nf 22/41/33 38/50/33 23/44/33\nf 30/43/34 46/51/34 31/45/34\nf 23/44/35 39/52/35 24/46/35\nf 32/47/36 46/51/36 47/53/36\nf 24/46/37 40/54/37 25/48/37\nf 33/33/38 47/53/38 48/55/38\nf 25/48/39 41/56/39 26/49/39\nf 34/34/40 48/55/40 49/57/40\nf 26/49/41 42/58/41 27/35/41\nf 34/34/42 50/59/42 35/36/42\nf 27/35/43 43/60/43 28/37/43\nf 35/36/44 51/61/44 36/38/44\nf 28/37/45 44/62/45 29/39/45\nf 22/41/46 82/63/46 37/64/46\nf 308/65/47 36/38/47 51/61/47\nf 30/43/48 44/62/48 45/66/48\nf 41/56/49 57/67/49 42/58/49\nf 49/57/50 65/68/50 50/59/50\nf 43/60/51 57/67/51 58/69/51\nf 50/59/52 66/70/52 51/61/52\nf 44/62/53 58/69/53 59/71/53\nf 37/64/54 82/72/54 52/73/54\nf 308/74/55 51/61/55 66/70/55\nf 44/62/56 60/75/56 45/66/56\nf 37/64/57 53/76/57 38/50/57\nf 45/66/58 61/77/58 46/51/58\nf 38/50/59 54/78/59 39/52/59\nf 47/53/60 61/77/60 62/79/60\nf 39/52/61 55/80/61 40/54/61\nf 47/53/62 63/81/62 48/55/62\nf 40/54/63 56/82/63 41/56/63\nf 48/55/64 64/83/64 49/57/64\nf 60/75/65 76/84/65 61/77/65\nf 53/76/66 69/85/66 54/78/66\nf 62/79/67 76/84/67 77/86/67\nf 54/78/68 70/87/68 55/80/68\nf 62/79/69 78/88/69 63/81/69\nf 56/82/70 70/87/70 71/89/70\nf 63/81/71 79/90/71 64/83/71\nf 56/82/72 72/91/72 57/67/72\nf 65/68/73 79/90/73 80/92/73\nf 58/69/74 72/91/74 73/93/74\nf 65/68/75 81/94/75 66/70/75\nf 59/71/76 73/93/76 74/95/76\nf 52/73/77 82/96/77 67/97/77\nf 308/98/78 66/70/78 81/94/78\nf 59/71/79 75/99/79 60/75/79\nf 52/73/80 68/100/80 53/76/80\nf 79/90/81 96/101/81 80/92/81\nf 73/93/82 88/102/82 89/103/82\nf 81/94/83 96/101/83 97/104/83\nf 74/95/84 89/103/84 90/105/84\nf 67/97/85 82/106/85 83/107/85\nf 308/108/86 81/94/86 97/104/86\nf 74/95/87 91/109/87 75/99/87\nf 67/97/88 84/110/88 68/100/88\nf 75/99/89 92/111/89 76/84/89\nf 68/100/90 85/112/90 69/85/90\nf 77/86/91 92/111/91 93/113/91\nf 69/85/92 86/114/92 70/87/92\nf 77/86/93 94/115/93 78/88/93\nf 71/89/94 86/114/94 87/116/94\nf 78/88/95 95/117/95 79/90/95\nf 71/89/96 88/102/96 72/91/96\nf 93/113/97 107/118/97 108/119/97\nf 85/112/98 101/120/98 86/114/98\nf 93/113/99 109/121/99 94/115/99\nf 87/116/100 101/120/100 102/122/100\nf 95/117/101 109/121/101 110/123/101\nf 87/116/102 103/124/102 88/102/102\nf 96/101/103 110/123/103 111/125/103\nf 89/103/104 103/124/104 104/126/104\nf 96/101/105 112/127/105 97/104/105\nf 90/105/106 104/126/106 105/128/106\nf 83/107/107 82/129/107 98/130/107\nf 308/131/108 97/104/108 112/127/108\nf 90/105/109 106/132/109 91/109/109\nf 84/110/110 98/130/110 99/133/110\nf 91/109/111 107/118/111 92/111/111\nf 84/110/112 100/134/112 85/112/112\nf 111/125/113 127/135/113 112/127/113\nf 105/128/114 119/136/114 120/137/114\nf 98/130/115 82/138/115 113/139/115\nf 308/140/116 112/127/116 127/135/116\nf 105/128/117 121/141/117 106/132/117\nf 99/133/118 113/139/118 114/142/118\nf 106/132/119 122/143/119 107/118/119\nf 99/133/120 115/144/120 100/134/120\nf 108/119/121 122/143/121 123/145/121\nf 100/134/122 116/146/122 101/120/122\nf 108/119/123 124/147/123 109/121/123\nf 102/122/124 116/146/124 117/148/124\nf 110/123/125 124/147/125 125/149/125\nf 102/122/126 118/150/126 103/124/126\nf 110/123/127 126/151/127 111/125/127\nf 104/126/128 118/150/128 119/136/128\nf 115/144/129 131/152/129 116/146/129\nf 123/145/130 139/153/130 124/147/130\nf 117/148/131 131/152/131 132/154/131\nf 125/149/132 139/153/132 140/155/132\nf 117/148/133 133/156/133 118/150/133\nf 125/149/134 141/157/134 126/151/134\nf 119/136/135 133/156/135 134/158/135\nf 126/151/136 142/159/136 127/135/136\nf 120/137/137 134/158/137 135/160/137\nf 113/139/138 82/161/138 128/162/138\nf 308/163/139 127/135/139 142/159/139\nf 120/137/140 136/164/140 121/141/140\nf 113/139/141 129/165/141 114/142/141\nf 121/141/142 137/166/142 122/143/142\nf 114/142/143 130/167/143 115/144/143\nf 123/145/144 137/166/144 138/168/144\nf 135/160/145 149/169/145 150/170/145\nf 128/162/146 82/171/146 143/172/146\nf 308/173/147 142/159/147 157/174/147\nf 135/160/148 151/175/148 136/164/148\nf 128/162/149 144/176/149 129/165/149\nf 136/164/150 152/177/150 137/166/150\nf 130/167/151 144/176/151 145/178/151\nf 138/168/152 152/177/152 153/179/152\nf 130/167/153 146/180/153 131/152/153\nf 138/168/154 154/181/154 139/153/154\nf 132/154/155 146/180/155 147/182/155\nf 140/155/156 154/181/156 155/183/156\nf 132/154/157 148/184/157 133/156/157\nf 140/155/158 156/185/158 141/157/158\nf 134/158/159 148/184/159 149/169/159\nf 142/159/160 156/185/160 157/174/160\nf 153/179/161 169/186/161 154/181/161\nf 147/182/162 161/187/162 162/188/162\nf 155/183/163 169/186/163 170/189/163\nf 147/182/164 163/190/164 148/184/164\nf 155/183/165 171/191/165 156/185/165\nf 149/169/166 163/190/166 164/192/166\nf 156/185/167 172/193/167 157/174/167\nf 150/170/168 164/192/168 165/194/168\nf 143/172/169 82/195/169 158/196/169\nf 308/197/170 157/174/170 172/193/170\nf 150/170/171 166/198/171 151/175/171\nf 143/172/172 159/199/172 144/176/172\nf 151/175/173 167/200/173 152/177/173\nf 145/178/174 159/199/174 160/201/174\nf 153/179/175 167/200/175 168/202/175\nf 145/178/176 161/187/176 146/180/176\nf 158/196/177 82/203/177 173/204/177\nf 308/205/178 172/193/178 187/206/178\nf 165/194/179 181/207/179 166/198/179\nf 158/196/180 174/208/180 159/199/180\nf 166/198/181 182/209/181 167/200/181\nf 159/199/182 175/210/182 160/201/182\nf 168/202/183 182/209/183 183/211/183\nf 160/201/184 176/212/184 161/187/184\nf 168/202/185 184/213/185 169/186/185\nf 162/188/186 176/212/186 177/214/186\nf 169/186/187 185/215/187 170/189/187\nf 162/188/188 178/216/188 163/190/188\nf 171/191/189 185/215/189 186/217/189\nf 164/192/190 178/216/190 179/218/190\nf 172/193/191 186/217/191 187/206/191\nf 165/194/192 179/218/192 180/219/192\nf 177/214/193 191/220/193 192/221/193\nf 185/215/194 199/222/194 200/223/194\nf 177/214/195 193/224/195 178/216/195\nf 185/215/196 201/225/196 186/217/196\nf 179/218/197 193/224/197 194/226/197\nf 186/217/198 202/227/198 187/206/198\nf 180/219/199 194/226/199 195/228/199\nf 173/204/200 82/229/200 188/230/200\nf 308/231/201 187/206/201 202/227/201\nf 180/219/202 196/232/202 181/207/202\nf 174/208/203 188/230/203 189/233/203\nf 181/207/204 197/234/204 182/209/204\nf 175/210/205 189/233/205 190/235/205\nf 183/211/206 197/234/206 198/236/206\nf 175/210/207 191/220/207 176/212/207\nf 183/211/208 199/222/208 184/213/208\nf 195/228/209 211/237/209 196/232/209\nf 188/230/210 204/238/210 189/233/210\nf 196/232/211 212/239/211 197/234/211\nf 189/233/212 205/240/212 190/235/212\nf 198/236/213 212/239/213 213/241/213\nf 190/235/214 206/242/214 191/220/214\nf 198/236/215 214/243/215 199/222/215\nf 192/221/216 206/242/216 207/244/216\nf 200/223/217 214/243/217 215/245/217\nf 192/221/218 208/246/218 193/224/218\nf 200/223/219 216/247/219 201/225/219\nf 194/226/220 208/246/220 209/248/220\nf 201/225/221 217/249/221 202/227/221\nf 195/228/222 209/248/222 210/250/222\nf 188/230/223 82/251/223 203/252/223\nf 308/253/224 202/227/224 217/249/224\nf 215/245/225 229/254/225 230/255/225\nf 207/244/226 223/256/226 208/246/226\nf 215/245/227 231/257/227 216/247/227\nf 209/248/228 223/256/228 224/258/228\nf 216/247/229 232/259/229 217/249/229\nf 210/250/230 224/258/230 225/260/230\nf 203/252/231 82/261/231 218/262/231\nf 308/263/232 217/249/232 232/259/232\nf 210/250/233 226/264/233 211/237/233\nf 203/252/234 219/265/234 204/238/234\nf 211/237/235 227/266/235 212/239/235\nf 204/238/236 220/267/236 205/240/236\nf 213/241/237 227/266/237 228/268/237\nf 205/240/238 221/269/238 206/242/238\nf 213/241/239 229/254/239 214/243/239\nf 207/244/240 221/269/240 222/270/240\nf 226/264/241 242/271/241 227/266/241\nf 220/267/242 234/272/242 235/273/242\nf 228/268/243 242/271/243 243/274/243\nf 220/267/244 236/275/244 221/269/244\nf 228/268/245 244/276/245 229/254/245\nf 222/270/246 236/275/246 237/277/246\nf 230/255/247 244/276/247 245/278/247\nf 222/270/248 238/279/248 223/256/248\nf 230/255/249 246/280/249 231/257/249\nf 224/258/250 238/279/250 239/281/250\nf 232/259/251 246/280/251 247/282/251\nf 225/260/252 239/281/252 240/283/252\nf 218/262/253 82/284/253 233/285/253\nf 308/286/254 232/259/254 247/282/254\nf 225/260/255 241/287/255 226/264/255\nf 218/262/256 234/272/256 219/265/256\nf 245/278/257 261/288/257 246/280/257\nf 239/281/258 253/289/258 254/290/258\nf 246/280/259 262/291/259 247/282/259\nf 240/283/260 254/290/260 255/292/260\nf 233/285/261 82/293/261 248/294/261\nf 308/295/262 247/282/262 262/291/262\nf 240/283/263 256/296/263 241/287/263\nf 233/285/264 249/297/264 234/272/264\nf 241/287/265 257/298/265 242/271/265\nf 234/272/266 250/299/266 235/273/266\nf 243/274/267 257/298/267 258/300/267\nf 235/273/268 251/301/268 236/275/268\nf 243/274/269 259/302/269 244/276/269\nf 237/277/270 251/301/270 252/303/270\nf 245/278/271 259/302/271 260/304/271\nf 237/277/272 253/289/272 238/279/272\nf 249/297/273 265/305/273 250/299/273\nf 258/300/274 272/306/274 273/307/274\nf 250/299/275 266/308/275 251/301/275\nf 258/300/276 274/309/276 259/302/276\nf 252/303/277 266/308/277 267/310/277\nf 260/304/278 274/309/278 275/311/278\nf 252/303/279 268/312/279 253/289/279\nf 260/304/280 276/313/280 261/288/280\nf 254/290/281 268/312/281 269/314/281\nf 261/288/282 277/315/282 262/291/282\nf 255/292/283 269/314/283 270/316/283\nf 248/294/284 82/317/284 263/318/284\nf 308/319/285 262/291/285 277/315/285\nf 255/292/286 271/320/286 256/296/286\nf 249/297/287 263/318/287 264/321/287\nf 256/296/288 272/306/288 257/298/288\nf 269/314/289 283/322/289 284/323/289\nf 277/315/290 291/324/290 292/325/290\nf 270/316/291 284/323/291 285/326/291\nf 263/318/292 82/327/292 278/328/292\nf 308/329/293 277/315/293 292/325/293\nf 270/316/294 286/330/294 271/320/294\nf 264/321/295 278/328/295 279/331/295\nf 271/320/296 287/332/296 272/306/296\nf 264/321/297 280/333/297 265/305/297\nf 273/307/298 287/332/298 288/334/298\nf 265/305/299 281/335/299 266/308/299\nf 273/307/300 289/336/300 274/309/300\nf 267/310/301 281/335/301 282/337/301\nf 275/311/302 289/336/302 290/338/302\nf 267/310/303 283/322/303 268/312/303\nf 275/311/304 291/324/304 276/313/304\nf 288/334/305 302/339/305 303/340/305\nf 280/333/306 296/341/306 281/335/306\nf 288/334/307 304/342/307 289/336/307\nf 282/337/308 296/341/308 297/343/308\nf 290/338/309 304/342/309 305/344/309\nf 282/337/310 298/345/310 283/322/310\nf 290/338/311 306/346/311 291/324/311\nf 284/323/312 298/345/312 299/347/312\nf 292/325/313 306/346/313 307/348/313\nf 285/326/314 299/347/314 300/349/314\nf 278/328/315 82/350/315 293/351/315\nf 308/352/316 292/325/316 307/348/316\nf 285/326/317 301/353/317 286/330/317\nf 278/328/318 294/354/318 279/331/318\nf 286/330/319 302/339/319 287/332/319\nf 279/331/320 295/355/320 280/333/320\nf 306/346/321 323/356/321 307/348/321\nf 300/349/322 315/357/322 316/358/322\nf 293/351/323 82/359/323 309/360/323\nf 308/361/324 307/348/324 323/356/324\nf 300/349/325 317/362/325 301/353/325\nf 293/351/326 310/363/326 294/354/326\nf 301/353/327 318/364/327 302/339/327\nf 294/354/328 311/365/328 295/355/328\nf 303/340/329 318/364/329 319/366/329\nf 295/355/330 312/367/330 296/341/330\nf 303/340/331 320/368/331 304/342/331\nf 297/343/332 312/367/332 313/369/332\nf 305/344/333 320/368/333 321/370/333\nf 297/343/334 314/371/334 298/345/334\nf 305/344/335 322/372/335 306/346/335\nf 299/347/336 314/371/336 315/357/336\nf 311/365/337 327/373/337 312/367/337\nf 319/366/338 335/374/338 320/368/338\nf 312/367/339 328/375/339 313/369/339\nf 321/370/340 335/374/340 336/376/340\nf 313/369/341 329/377/341 314/371/341\nf 321/370/342 337/378/342 322/372/342\nf 315/357/343 329/377/343 330/379/343\nf 322/372/344 338/380/344 323/356/344\nf 316/358/345 330/379/345 331/381/345\nf 309/360/346 82/382/346 324/383/346\nf 308/384/347 323/356/347 338/380/347\nf 316/358/348 332/385/348 317/362/348\nf 309/360/349 325/386/349 310/363/349\nf 317/362/350 333/387/350 318/364/350\nf 310/363/351 326/388/351 311/365/351\nf 319/366/352 333/387/352 334/389/352\nf 331/381/353 345/390/353 346/391/353\nf 324/383/354 82/392/354 339/393/354\nf 308/394/355 338/380/355 353/395/355\nf 331/381/356 347/396/356 332/385/356\nf 324/383/357 340/397/357 325/386/357\nf 332/385/358 348/398/358 333/387/358\nf 325/386/359 341/399/359 326/388/359\nf 334/389/360 348/398/360 349/400/360\nf 326/388/361 342/401/361 327/373/361\nf 334/389/362 350/402/362 335/374/362\nf 328/375/363 342/401/363 343/403/363\nf 336/376/364 350/402/364 351/404/364\nf 328/375/365 344/405/365 329/377/365\nf 336/376/366 352/406/366 337/378/366\nf 330/379/367 344/405/367 345/390/367\nf 337/378/368 353/395/368 338/380/368\nf 349/400/369 365/407/369 350/402/369\nf 343/403/370 357/408/370 358/409/370\nf 351/404/371 365/407/371 366/410/371\nf 343/403/372 359/411/372 344/405/372\nf 351/404/373 367/412/373 352/406/373\nf 345/390/374 359/411/374 360/413/374\nf 352/406/375 368/414/375 353/395/375\nf 346/391/376 360/413/376 361/415/376\nf 339/393/377 82/416/377 354/417/377\nf 308/418/378 353/395/378 368/414/378\nf 346/391/379 362/419/379 347/396/379\nf 339/393/380 355/420/380 340/397/380\nf 347/396/381 363/421/381 348/398/381\nf 341/399/382 355/420/382 356/422/382\nf 349/400/383 363/421/383 364/423/383\nf 341/399/384 357/408/384 342/401/384\nf 308/424/385 368/425/385 383/426/385\nf 361/427/386 377/428/386 362/429/386\nf 354/430/387 370/431/387 355/432/387\nf 362/429/388 378/433/388 363/434/388\nf 356/435/389 370/431/389 371/436/389\nf 364/437/390 378/433/390 379/438/390\nf 356/435/391 372/439/391 357/440/391\nf 364/437/392 380/441/392 365/442/392\nf 358/443/393 372/439/393 373/444/393\nf 366/445/394 380/441/394 381/446/394\nf 358/443/395 374/447/395 359/448/395\nf 366/445/396 382/449/396 367/450/396\nf 360/451/397 374/447/397 375/452/397\nf 367/450/398 383/426/398 368/425/398\nf 361/427/399 375/452/399 376/453/399\nf 354/430/400 82/454/400 369/455/400\nf 381/446/401 395/456/401 396/457/401\nf 373/444/402 389/458/402 374/447/402\nf 381/446/403 397/459/403 382/449/403\nf 375/452/404 389/458/404 390/460/404\nf 382/449/405 398/461/405 383/426/405\nf 376/453/406 390/460/406 391/462/406\nf 369/455/407 82/463/407 384/464/407\nf 308/465/408 383/426/408 398/461/408\nf 376/453/409 392/466/409 377/428/409\nf 369/455/410 385/467/410 370/431/410\nf 377/428/411 393/468/411 378/433/411\nf 371/436/412 385/467/412 386/469/412\nf 379/438/413 393/468/413 394/470/413\nf 371/436/414 387/471/414 372/439/414\nf 379/438/415 395/456/415 380/441/415\nf 373/444/416 387/471/416 388/472/416\nf 385/467/417 399/473/417 400/474/417\nf 392/466/418 408/475/418 393/468/418\nf 385/467/419 401/476/419 386/469/419\nf 394/470/420 408/475/420 409/477/420\nf 386/469/421 402/478/421 387/471/421\nf 394/470/422 410/479/422 395/456/422\nf 388/472/423 402/478/423 403/480/423\nf 396/457/424 410/479/424 411/481/424\nf 388/472/425 404/482/425 389/458/425\nf 397/459/426 411/481/426 412/483/426\nf 390/460/427 404/482/427 405/484/427\nf 397/459/428 413/485/428 398/461/428\nf 391/462/429 405/484/429 406/486/429\nf 384/464/430 82/487/430 399/473/430\nf 308/488/431 398/461/431 413/485/431\nf 391/462/432 407/489/432 392/466/432\nf 403/480/433 419/490/433 404/482/433\nf 411/481/434 427/491/434 412/483/434\nf 405/484/435 419/490/435 420/492/435\nf 412/483/436 428/493/436 413/485/436\nf 406/486/437 420/492/437 421/494/437\nf 399/473/438 82/495/438 414/496/438\nf 308/497/439 413/485/439 428/493/439\nf 406/486/440 422/498/440 407/489/440\nf 399/473/441 415/499/441 400/474/441\nf 407/489/442 423/500/442 408/475/442\nf 401/476/443 415/499/443 416/501/443\nf 409/477/444 423/500/444 424/502/444\nf 401/476/445 417/503/445 402/478/445\nf 409/477/446 425/504/446 410/479/446\nf 403/480/447 417/503/447 418/505/447\nf 411/481/448 425/504/448 426/506/448\nf 422/498/449 438/507/449 423/500/449\nf 416/501/450 430/508/450 431/509/450\nf 424/502/451 438/507/451 439/510/451\nf 416/501/452 432/511/452 417/503/452\nf 424/502/453 440/512/453 425/504/453\nf 418/505/454 432/511/454 433/513/454\nf 426/506/455 440/512/455 441/514/455\nf 418/505/456 434/515/456 419/490/456\nf 426/506/457 442/516/457 427/491/457\nf 420/492/458 434/515/458 435/517/458\nf 427/491/459 443/518/459 428/493/459\nf 421/494/460 435/517/460 436/519/460\nf 414/496/461 82/520/461 429/521/461\nf 308/522/462 428/493/462 443/518/462\nf 421/494/463 437/523/463 422/498/463\nf 414/496/464 430/508/464 415/499/464\nf 441/514/465 457/524/465 442/516/465\nf 435/517/466 449/525/466 450/526/466\nf 442/516/467 458/527/467 443/518/467\nf 436/519/468 450/526/468 451/528/468\nf 429/521/469 82/529/469 444/530/469\nf 308/531/470 443/518/470 458/527/470\nf 436/519/471 452/532/471 437/523/471\nf 430/508/472 444/530/472 445/533/472\nf 437/523/473 453/534/473 438/507/473\nf 430/508/474 446/535/474 431/509/474\nf 439/510/475 453/534/475 454/536/475\nf 431/509/476 447/537/476 432/511/476\nf 439/510/477 455/538/477 440/512/477\nf 433/513/478 447/537/478 448/539/478\nf 441/514/479 455/538/479 456/540/479\nf 433/513/480 449/525/480 434/515/480\nf 446/535/481 460/541/481 461/542/481\nf 454/536/482 468/543/482 469/544/482\nf 446/535/483 462/545/483 447/537/483\nf 454/536/484 470/546/484 455/538/484\nf 448/539/485 462/545/485 463/547/485\nf 456/540/486 470/546/486 471/548/486\nf 448/539/487 464/549/487 449/525/487\nf 456/540/488 472/550/488 457/524/488\nf 450/526/489 464/549/489 465/551/489\nf 458/527/490 472/550/490 473/552/490\nf 451/528/491 465/551/491 466/553/491\nf 444/530/492 82/554/492 459/555/492\nf 308/556/493 458/527/493 473/552/493\nf 451/528/494 467/557/494 452/532/494\nf 444/530/495 460/541/495 445/533/495\nf 452/532/496 468/543/496 453/534/496\nf 465/551/497 477/32/497 3/4/497\nf 472/550/498 482/8/498 473/552/498\nf 466/553/499 3/4/499 4/10/499\nf 459/555/500 82/558/500 474/11/500\nf 308/559/501 473/552/501 482/8/501\nf 466/553/502 5/16/502 467/557/502\nf 460/541/503 474/11/503 475/17/503\nf 467/557/504 478/20/504 468/543/504\nf 461/542/505 475/17/505 1/21/505\nf 468/543/506 6/24/506 469/544/506\nf 462/545/507 1/21/507 476/25/507\nf 469/544/508 479/28/508 470/546/508\nf 463/547/509 476/25/509 2/29/509\nf 471/548/510 479/28/510 480/1/510\nf 464/549/511 2/29/511 477/32/511\nf 471/548/512 481/3/512 472/550/512\nf 480/1/1 19/31/1 20/2/1\nf 3/4/2 477/32/2 12/5/2\nf 481/3/3 20/2/3 21/7/3\nf 3/4/513 13/6/513 14/9/513\nf 4/10/514 14/9/514 15/15/514\nf 475/17/8 474/11/8 7/13/8\nf 5/16/9 15/15/9 16/19/9\nf 1/21/10 475/17/10 8/18/10\nf 478/20/11 16/19/11 17/23/11\nf 476/25/12 1/21/12 9/22/12\nf 6/24/13 17/23/13 18/27/13\nf 2/29/14 476/25/14 10/26/14\nf 479/28/15 18/27/15 19/31/15\nf 477/32/16 2/29/16 11/30/16\nf 19/31/17 18/27/17 33/33/17\nf 11/30/18 26/49/18 27/35/18\nf 20/2/19 19/31/19 34/34/19\nf 13/6/20 12/5/20 27/35/20\nf 20/2/21 35/36/21 36/38/21\nf 13/6/22 28/37/22 29/39/22\nf 14/9/25 29/39/25 30/43/25\nf 7/13/26 22/41/26 23/44/26\nf 15/15/27 30/43/27 31/45/27\nf 8/18/28 23/44/28 24/46/28\nf 16/19/29 31/45/29 32/47/29\nf 9/22/30 24/46/30 25/48/30\nf 17/23/31 32/47/31 33/33/31\nf 10/26/32 25/48/32 26/49/32\nf 22/41/33 37/64/33 38/50/33\nf 30/43/34 45/66/34 46/51/34\nf 23/44/515 38/50/515 39/52/515\nf 32/47/36 31/45/36 46/51/36\nf 24/46/37 39/52/37 40/54/37\nf 33/33/38 32/47/38 47/53/38\nf 25/48/39 40/54/39 41/56/39\nf 34/34/40 33/33/40 48/55/40\nf 26/49/41 41/56/41 42/58/41\nf 34/34/516 49/57/516 50/59/516\nf 27/35/43 42/58/43 43/60/43\nf 35/36/44 50/59/44 51/61/44\nf 28/37/45 43/60/45 44/62/45\nf 30/43/48 29/39/48 44/62/48\nf 41/56/49 56/82/49 57/67/49\nf 49/57/50 64/83/50 65/68/50\nf 43/60/51 42/58/51 57/67/51\nf 50/59/52 65/68/52 66/70/52\nf 44/62/53 43/60/53 58/69/53\nf 44/62/56 59/71/56 60/75/56\nf 37/64/57 52/73/57 53/76/57\nf 45/66/58 60/75/58 61/77/58\nf 38/50/59 53/76/59 54/78/59\nf 47/53/60 46/51/60 61/77/60\nf 39/52/61 54/78/61 55/80/61\nf 47/53/62 62/79/62 63/81/62\nf 40/54/63 55/80/63 56/82/63\nf 48/55/64 63/81/64 64/83/64\nf 60/75/65 75/99/65 76/84/65\nf 53/76/66 68/100/66 69/85/66\nf 62/79/67 61/77/67 76/84/67\nf 54/78/68 69/85/68 70/87/68\nf 62/79/69 77/86/69 78/88/69\nf 56/82/70 55/80/70 70/87/70\nf 63/81/71 78/88/71 79/90/71\nf 56/82/72 71/89/72 72/91/72\nf 65/68/73 64/83/73 79/90/73\nf 58/69/74 57/67/74 72/91/74\nf 65/68/75 80/92/75 81/94/75\nf 59/71/517 58/69/517 73/93/517\nf 59/71/518 74/95/518 75/99/518\nf 52/73/80 67/97/80 68/100/80\nf 79/90/81 95/117/81 96/101/81\nf 73/93/82 72/91/82 88/102/82\nf 81/94/83 80/92/83 96/101/83\nf 74/95/84 73/93/84 89/103/84\nf 74/95/87 90/105/87 91/109/87\nf 67/97/88 83/107/88 84/110/88\nf 75/99/89 91/109/89 92/111/89\nf 68/100/519 84/110/519 85/112/519\nf 77/86/91 76/84/91 92/111/91\nf 69/85/92 85/112/92 86/114/92\nf 77/86/93 93/113/93 94/115/93\nf 71/89/94 70/87/94 86/114/94\nf 78/88/95 94/115/95 95/117/95\nf 71/89/96 87/116/96 88/102/96\nf 93/113/97 92/111/97 107/118/97\nf 85/112/98 100/134/98 101/120/98\nf 93/113/99 108/119/99 109/121/99\nf 87/116/100 86/114/100 101/120/100\nf 95/117/101 94/115/101 109/121/101\nf 87/116/102 102/122/102 103/124/102\nf 96/101/103 95/117/103 110/123/103\nf 89/103/104 88/102/104 103/124/104\nf 96/101/105 111/125/105 112/127/105\nf 90/105/106 89/103/106 104/126/106\nf 90/105/109 105/128/109 106/132/109\nf 84/110/110 83/107/110 98/130/110\nf 91/109/111 106/132/111 107/118/111\nf 84/110/112 99/133/112 100/134/112\nf 111/125/113 126/151/113 127/135/113\nf 105/128/520 104/126/520 119/136/520\nf 105/128/521 120/137/521 121/141/521\nf 99/133/118 98/130/118 113/139/118\nf 106/132/119 121/141/119 122/143/119\nf 99/133/120 114/142/120 115/144/120\nf 108/119/121 107/118/121 122/143/121\nf 100/134/122 115/144/122 116/146/122\nf 108/119/123 123/145/123 124/147/123\nf 102/122/124 101/120/124 116/146/124\nf 110/123/125 109/121/125 124/147/125\nf 102/122/126 117/148/126 118/150/126\nf 110/123/127 125/149/127 126/151/127\nf 104/126/128 103/124/128 118/150/128\nf 115/144/129 130/167/129 131/152/129\nf 123/145/130 138/168/130 139/153/130\nf 117/148/131 116/146/131 131/152/131\nf 125/149/132 124/147/132 139/153/132\nf 117/148/133 132/154/133 133/156/133\nf 125/149/134 140/155/134 141/157/134\nf 119/136/135 118/150/135 133/156/135\nf 126/151/136 141/157/136 142/159/136\nf 120/137/522 119/136/522 134/158/522\nf 120/137/523 135/160/523 136/164/523\nf 113/139/141 128/162/141 129/165/141\nf 121/141/142 136/164/142 137/166/142\nf 114/142/143 129/165/143 130/167/143\nf 123/145/144 122/143/144 137/166/144\nf 135/160/145 134/158/145 149/169/145\nf 135/160/148 150/170/148 151/175/148\nf 128/162/149 143/172/149 144/176/149\nf 136/164/150 151/175/150 152/177/150\nf 130/167/151 129/165/151 144/176/151\nf 138/168/152 137/166/152 152/177/152\nf 130/167/153 145/178/153 146/180/153\nf 138/168/154 153/179/154 154/181/154\nf 132/154/155 131/152/155 146/180/155\nf 140/155/156 139/153/156 154/181/156\nf 132/154/157 147/182/157 148/184/157\nf 140/155/158 155/183/158 156/185/158\nf 134/158/159 133/156/159 148/184/159\nf 142/159/160 141/157/160 156/185/160\nf 153/179/161 168/202/161 169/186/161\nf 147/182/162 146/180/162 161/187/162\nf 155/183/163 154/181/163 169/186/163\nf 147/182/164 162/188/164 163/190/164\nf 155/183/524 170/189/524 171/191/524\nf 149/169/166 148/184/166 163/190/166\nf 156/185/167 171/191/167 172/193/167\nf 150/170/168 149/169/168 164/192/168\nf 150/170/171 165/194/171 166/198/171\nf 143/172/172 158/196/172 159/199/172\nf 151/175/173 166/198/173 167/200/173\nf 145/178/525 144/176/525 159/199/525\nf 153/179/175 152/177/175 167/200/175\nf 145/178/176 160/201/176 161/187/176\nf 165/194/179 180/219/179 181/207/179\nf 158/196/526 173/204/526 174/208/526\nf 166/198/181 181/207/181 182/209/181\nf 159/199/182 174/208/182 175/210/182\nf 168/202/183 167/200/183 182/209/183\nf 160/201/184 175/210/184 176/212/184\nf 168/202/185 183/211/185 184/213/185\nf 162/188/186 161/187/186 176/212/186\nf 169/186/187 184/213/187 185/215/187\nf 162/188/188 177/214/188 178/216/188\nf 171/191/189 170/189/189 185/215/189\nf 164/192/190 163/190/190 178/216/190\nf 172/193/527 171/191/527 186/217/527\nf 165/194/192 164/192/192 179/218/192\nf 177/214/193 176/212/193 191/220/193\nf 185/215/194 184/213/194 199/222/194\nf 177/214/195 192/221/195 193/224/195\nf 185/215/196 200/223/196 201/225/196\nf 179/218/197 178/216/197 193/224/197\nf 186/217/198 201/225/198 202/227/198\nf 180/219/199 179/218/199 194/226/199\nf 180/219/202 195/228/202 196/232/202\nf 174/208/203 173/204/203 188/230/203\nf 181/207/204 196/232/204 197/234/204\nf 175/210/205 174/208/205 189/233/205\nf 183/211/206 182/209/206 197/234/206\nf 175/210/207 190/235/207 191/220/207\nf 183/211/208 198/236/208 199/222/208\nf 195/228/209 210/250/209 211/237/209\nf 188/230/210 203/252/210 204/238/210\nf 196/232/211 211/237/211 212/239/211\nf 189/233/212 204/238/212 205/240/212\nf 198/236/213 197/234/213 212/239/213\nf 190/235/214 205/240/214 206/242/214\nf 198/236/215 213/241/215 214/243/215\nf 192/221/216 191/220/216 206/242/216\nf 200/223/217 199/222/217 214/243/217\nf 192/221/218 207/244/218 208/246/218\nf 200/223/219 215/245/219 216/247/219\nf 194/226/220 193/224/220 208/246/220\nf 201/225/221 216/247/221 217/249/221\nf 195/228/222 194/226/222 209/248/222\nf 215/245/225 214/243/225 229/254/225\nf 207/244/226 222/270/226 223/256/226\nf 215/245/227 230/255/227 231/257/227\nf 209/248/228 208/246/228 223/256/228\nf 216/247/229 231/257/229 232/259/229\nf 210/250/230 209/248/230 224/258/230\nf 210/250/233 225/260/233 226/264/233\nf 203/252/234 218/262/234 219/265/234\nf 211/237/235 226/264/235 227/266/235\nf 204/238/236 219/265/236 220/267/236\nf 213/241/237 212/239/237 227/266/237\nf 205/240/238 220/267/238 221/269/238\nf 213/241/239 228/268/239 229/254/239\nf 207/244/240 206/242/240 221/269/240\nf 226/264/241 241/287/241 242/271/241\nf 220/267/242 219/265/242 234/272/242\nf 228/268/243 227/266/243 242/271/243\nf 220/267/244 235/273/244 236/275/244\nf 228/268/245 243/274/245 244/276/245\nf 222/270/246 221/269/246 236/275/246\nf 230/255/247 229/254/247 244/276/247\nf 222/270/248 237/277/248 238/279/248\nf 230/255/249 245/278/249 246/280/249\nf 224/258/250 223/256/250 238/279/250\nf 232/259/251 231/257/251 246/280/251\nf 225/260/528 224/258/528 239/281/528\nf 225/260/529 240/283/529 241/287/529\nf 218/262/256 233/285/256 234/272/256\nf 245/278/257 260/304/257 261/288/257\nf 239/281/258 238/279/258 253/289/258\nf 246/280/259 261/288/259 262/291/259\nf 240/283/530 239/281/530 254/290/530\nf 240/283/531 255/292/531 256/296/531\nf 233/285/264 248/294/264 249/297/264\nf 241/287/265 256/296/265 257/298/265\nf 234/272/266 249/297/266 250/299/266\nf 243/274/267 242/271/267 257/298/267\nf 235/273/268 250/299/268 251/301/268\nf 243/274/269 258/300/269 259/302/269\nf 237/277/270 236/275/270 251/301/270\nf 245/278/271 244/276/271 259/302/271\nf 237/277/272 252/303/272 253/289/272\nf 249/297/273 264/321/273 265/305/273\nf 258/300/274 257/298/274 272/306/274\nf 250/299/275 265/305/275 266/308/275\nf 258/300/276 273/307/276 274/309/276\nf 252/303/277 251/301/277 266/308/277\nf 260/304/278 259/302/278 274/309/278\nf 252/303/279 267/310/279 268/312/279\nf 260/304/280 275/311/280 276/313/280\nf 254/290/281 253/289/281 268/312/281\nf 261/288/282 276/313/282 277/315/282\nf 255/292/283 254/290/283 269/314/283\nf 255/292/286 270/316/286 271/320/286\nf 249/297/287 248/294/287 263/318/287\nf 256/296/288 271/320/288 272/306/288\nf 269/314/289 268/312/289 283/322/289\nf 277/315/532 276/313/532 291/324/532\nf 270/316/291 269/314/291 284/323/291\nf 270/316/294 285/326/294 286/330/294\nf 264/321/295 263/318/295 278/328/295\nf 271/320/296 286/330/296 287/332/296\nf 264/321/297 279/331/297 280/333/297\nf 273/307/298 272/306/298 287/332/298\nf 265/305/299 280/333/299 281/335/299\nf 273/307/300 288/334/300 289/336/300\nf 267/310/301 266/308/301 281/335/301\nf 275/311/302 274/309/302 289/336/302\nf 267/310/303 282/337/303 283/322/303\nf 275/311/533 290/338/533 291/324/533\nf 288/334/305 287/332/305 302/339/305\nf 280/333/306 295/355/306 296/341/306\nf 288/334/307 303/340/307 304/342/307\nf 282/337/308 281/335/308 296/341/308\nf 290/338/309 289/336/309 304/342/309\nf 282/337/310 297/343/310 298/345/310\nf 290/338/311 305/344/311 306/346/311\nf 284/323/312 283/322/312 298/345/312\nf 292/325/313 291/324/313 306/346/313\nf 285/326/314 284/323/314 299/347/314\nf 285/326/317 300/349/317 301/353/317\nf 278/328/318 293/351/318 294/354/318\nf 286/330/319 301/353/319 302/339/319\nf 279/331/320 294/354/320 295/355/320\nf 306/346/321 322/372/321 323/356/321\nf 300/349/322 299/347/322 315/357/322\nf 300/349/325 316/358/325 317/362/325\nf 293/351/326 309/360/326 310/363/326\nf 301/353/327 317/362/327 318/364/327\nf 294/354/328 310/363/328 311/365/328\nf 303/340/329 302/339/329 318/364/329\nf 295/355/330 311/365/330 312/367/330\nf 303/340/331 319/366/331 320/368/331\nf 297/343/332 296/341/332 312/367/332\nf 305/344/333 304/342/333 320/368/333\nf 297/343/334 313/369/334 314/371/334\nf 305/344/335 321/370/335 322/372/335\nf 299/347/336 298/345/336 314/371/336\nf 311/365/337 326/388/337 327/373/337\nf 319/366/338 334/389/338 335/374/338\nf 312/367/339 327/373/339 328/375/339\nf 321/370/340 320/368/340 335/374/340\nf 313/369/341 328/375/341 329/377/341\nf 321/370/534 336/376/534 337/378/534\nf 315/357/343 314/371/343 329/377/343\nf 322/372/344 337/378/344 338/380/344\nf 316/358/345 315/357/345 330/379/345\nf 316/358/348 331/381/348 332/385/348\nf 309/360/349 324/383/349 325/386/349\nf 317/362/350 332/385/350 333/387/350\nf 310/363/535 325/386/535 326/388/535\nf 319/366/352 318/364/352 333/387/352\nf 331/381/353 330/379/353 345/390/353\nf 331/381/356 346/391/356 347/396/356\nf 324/383/357 339/393/357 340/397/357\nf 332/385/358 347/396/358 348/398/358\nf 325/386/359 340/397/359 341/399/359\nf 334/389/360 333/387/360 348/398/360\nf 326/388/361 341/399/361 342/401/361\nf 334/389/362 349/400/362 350/402/362\nf 328/375/363 327/373/363 342/401/363\nf 336/376/364 335/374/364 350/402/364\nf 328/375/365 343/403/365 344/405/365\nf 336/376/366 351/404/366 352/406/366\nf 330/379/367 329/377/367 344/405/367\nf 337/378/368 352/406/368 353/395/368\nf 349/400/369 364/423/369 365/407/369\nf 343/403/370 342/401/370 357/408/370\nf 351/404/371 350/402/371 365/407/371\nf 343/403/372 358/409/372 359/411/372\nf 351/404/373 366/410/373 367/412/373\nf 345/390/374 344/405/374 359/411/374\nf 352/406/375 367/412/375 368/414/375\nf 346/391/376 345/390/376 360/413/376\nf 346/391/379 361/415/379 362/419/379\nf 339/393/380 354/417/380 355/420/380\nf 347/396/381 362/419/381 363/421/381\nf 341/399/382 340/397/382 355/420/382\nf 349/400/383 348/398/383 363/421/383\nf 341/399/384 356/422/384 357/408/384\nf 361/427/386 376/453/386 377/428/386\nf 354/430/387 369/455/387 370/431/387\nf 362/429/388 377/428/388 378/433/388\nf 356/435/389 355/432/389 370/431/389\nf 364/437/390 363/434/390 378/433/390\nf 356/435/391 371/436/391 372/439/391\nf 364/437/392 379/438/392 380/441/392\nf 358/443/393 357/440/393 372/439/393\nf 366/445/394 365/442/394 380/441/394\nf 358/443/395 373/444/395 374/447/395\nf 366/445/396 381/446/396 382/449/396\nf 360/451/397 359/448/397 374/447/397\nf 367/450/398 382/449/398 383/426/398\nf 361/427/399 360/451/399 375/452/399\nf 381/446/401 380/441/401 395/456/401\nf 373/444/402 388/472/402 389/458/402\nf 381/446/403 396/457/403 397/459/403\nf 375/452/404 374/447/404 389/458/404\nf 382/449/405 397/459/405 398/461/405\nf 376/453/406 375/452/406 390/460/406\nf 376/453/409 391/462/409 392/466/409\nf 369/455/410 384/464/410 385/467/410\nf 377/428/411 392/466/411 393/468/411\nf 371/436/412 370/431/412 385/467/412\nf 379/438/413 378/433/413 393/468/413\nf 371/436/414 386/469/414 387/471/414\nf 379/438/415 394/470/415 395/456/415\nf 373/444/416 372/439/416 387/471/416\nf 385/467/417 384/464/417 399/473/417\nf 392/466/418 407/489/418 408/475/418\nf 385/467/536 400/474/536 401/476/536\nf 394/470/420 393/468/420 408/475/420\nf 386/469/421 401/476/421 402/478/421\nf 394/470/422 409/477/422 410/479/422\nf 388/472/423 387/471/423 402/478/423\nf 396/457/424 395/456/424 410/479/424\nf 388/472/425 403/480/425 404/482/425\nf 397/459/537 396/457/537 411/481/537\nf 390/460/427 389/458/427 404/482/427\nf 397/459/428 412/483/428 413/485/428\nf 391/462/429 390/460/429 405/484/429\nf 391/462/432 406/486/432 407/489/432\nf 403/480/433 418/505/433 419/490/433\nf 411/481/434 426/506/434 427/491/434\nf 405/484/435 404/482/435 419/490/435\nf 412/483/436 427/491/436 428/493/436\nf 406/486/437 405/484/437 420/492/437\nf 406/486/440 421/494/440 422/498/440\nf 399/473/538 414/496/538 415/499/538\nf 407/489/442 422/498/442 423/500/442\nf 401/476/443 400/474/443 415/499/443\nf 409/477/444 408/475/444 423/500/444\nf 401/476/445 416/501/445 417/503/445\nf 409/477/446 424/502/446 425/504/446\nf 403/480/447 402/478/447 417/503/447\nf 411/481/448 410/479/448 425/504/448\nf 422/498/449 437/523/449 438/507/449\nf 416/501/450 415/499/450 430/508/450\nf 424/502/451 423/500/451 438/507/451\nf 416/501/452 431/509/452 432/511/452\nf 424/502/453 439/510/453 440/512/453\nf 418/505/454 417/503/454 432/511/454\nf 426/506/455 425/504/455 440/512/455\nf 418/505/456 433/513/456 434/515/456\nf 426/506/457 441/514/457 442/516/457\nf 420/492/458 419/490/458 434/515/458\nf 427/491/459 442/516/459 443/518/459\nf 421/494/460 420/492/460 435/517/460\nf 421/494/463 436/519/463 437/523/463\nf 414/496/464 429/521/464 430/508/464\nf 441/514/465 456/540/465 457/524/465\nf 435/517/466 434/515/466 449/525/466\nf 442/516/467 457/524/467 458/527/467\nf 436/519/468 435/517/468 450/526/468\nf 436/519/471 451/528/471 452/532/471\nf 430/508/472 429/521/472 444/530/472\nf 437/523/473 452/532/473 453/534/473\nf 430/508/539 445/533/539 446/535/539\nf 439/510/475 438/507/475 453/534/475\nf 431/509/476 446/535/476 447/537/476\nf 439/510/477 454/536/477 455/538/477\nf 433/513/478 432/511/478 447/537/478\nf 441/514/479 440/512/479 455/538/479\nf 433/513/480 448/539/480 449/525/480\nf 446/535/481 445/533/481 460/541/481\nf 454/536/482 453/534/482 468/543/482\nf 446/535/483 461/542/483 462/545/483\nf 454/536/484 469/544/484 470/546/484\nf 448/539/485 447/537/485 462/545/485\nf 456/540/486 455/538/486 470/546/486\nf 448/539/487 463/547/487 464/549/487\nf 456/540/488 471/548/488 472/550/488\nf 450/526/489 449/525/489 464/549/489\nf 458/527/490 457/524/490 472/550/490\nf 451/528/491 450/526/491 465/551/491\nf 451/528/494 466/553/494 467/557/494\nf 444/530/495 459/555/495 460/541/495\nf 452/532/496 467/557/496 468/543/496\nf 465/551/497 464/549/497 477/32/497\nf 472/550/498 481/3/498 482/8/498\nf 466/553/499 465/551/499 3/4/499\nf 466/553/502 4/10/502 5/16/502\nf 460/541/503 459/555/503 474/11/503\nf 467/557/504 5/16/504 478/20/504\nf 461/542/505 460/541/505 475/17/505\nf 468/543/506 478/20/506 6/24/506\nf 462/545/507 461/542/507 1/21/507\nf 469/544/508 6/24/508 479/28/508\nf 463/547/509 462/545/509 476/25/509\nf 471/548/510 470/546/510 479/28/510\nf 464/549/511 463/547/511 2/29/511\nf 471/548/512 480/1/512 481/3/512\n";

},{}]},["8qw7y","3rz9v"], "3rz9v", "parcelRequire94c2")

//# sourceMappingURL=index.a2a37aa4.js.map
