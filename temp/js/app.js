"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var PIXI = _interopRequireWildcard(require("pixi.min.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//basic test to see if webgl or canvas is being used
var type = "WebGL";

if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

PIXI.utils.sayHello(type); //app is where all the magic happens,
//pixi uses the app object to store the whole graphics scene

var app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
  transparent: false,
  resolution: 1.5
});
app.renderer.backgroundColor = 0x82B681; //I need to figure out what exactly this does, and why we
// need to call load(setup) in order to make it work.
//will check documentation soon.

PIXI.Loader.shared.add("img/frames/wizzard_m_idle_anim_f0.png").load(setup); //loads the image into a sprite object,
//which allows you to add it to the stage later.

function setup() {
  var sprite = new PIXI.Sprite(PIXI.Loader.shared.resources["img/frames/wizzard_m_idle_anim_f0.png"].texture); //the stage is where everything shows up,
  //all sprites will show up here and be
  // added to the stage

  app.stage.addChild(sprite);
}

document.body.appendChild(app.view);