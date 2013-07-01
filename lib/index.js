//
// Module dependencies.
//

var bind     = require("bind");
var reactive = require("reactive");
var domify   = require("domify");
var bindings = require("./bindings.js");
var template = require("../template.js");
var _        = require("underscore");

//
// Expose `Keyboard`.
//

exports = module.exports = Keyboard = {};

//
// Create `registry` property to hold
// attachment `registers`.
//

exports.registry = {};

//
// Attach value of `attr` on `el` for `reg`
//
// @param {Element} el
// @param {String} attr
// @param {String} reg
// @api public
//

function attachment(el, attr, reg) {
  if (!(this instanceof attachment)) return new attachment(el, attr, reg);
  this.el = el;
  this.attr = attr || "value";
  exports.registry[reg] = reg || null;
  return this;
}

attachment.prototype.grab = function() {
  return this.el.value;
};

exports.attach = function(el, attr, reg){
  return new attachment(el, attr, reg);
};


