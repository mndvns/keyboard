
var bind = require("bind");
var reactive = require("reactive");
var domify   = require("domify");
var dom = require("dom");
var Emitter = require("emitter");
var bindings = require("./bindings");
var attachment = require("./attachments.js");
var Register  = require("./registry.js");
var template = require("../template.js");
var _        = require("underscore");


exports = module.exports = KB;
exports.registry = [];

var inputTmpl = domify("<textarea on-keypress='frog'>{obj.input}</textarea> ");
var boardTmpl = domify(template);

function KB(sel){
  if (!(this instanceof KB)) return new KB(sel);
  this.input = new InputView({ input : "ASDASDASA" });
  this.board = new BoardView({ output: "qeweqqwSA" });
}

function InputView(input){
  this.obj = input;
  this.el = inputTmpl;
  reactive(this.el, input, this);
}

// InputView.prototype.input = function(event) {
//   console.log("DERP", event, this);
// };


function BoardView(board){
  this.obj = board;
  this.el = boardTmpl;
  reactive(this.el, board, this);
}



BoardView.prototype.debug = function(event, a, b){
  console.log("");
  console.log("this", this);
  console.log("event", event);
  var c = event.which;

  if (a) console.log("a", a);
  if (b) console.log("b", b);
  if (c) console.log("c", c);

};


document.body.appendChild(inputTmpl);
document.body.appendChild(boardTmpl);
