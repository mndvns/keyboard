

var bind     = require("bind");
var reactive = require("reactive");
var domify   = require("domify");
var assert   = require("assert");
var keyboard = require("keyboard");

describe("Keyboard", function() {
  it("should exist as a global object", function() {
    assert(keyboard !== null);
  });

  describe("attach", function() {
    var el;
    var attr;
    var reg;
    var attach;

    beforeEach(function(){
      el = domify("<textarea rows='30'>hello</textarea>");
      attr = "rows";
      reg = "textbox";
      attach = keyboard.attach(el, attr, reg);
    });
    it("should take an element, attr, and register", function() {
      assert("object" == typeof attach);
    });
    it("#grab() should return the value of the elemnt attr", function() {
      assert("object" == typeof attach);
    });


    // it("should take an attr", function() {
    //   var el = domify("<textarea rows='30'>hello</textarea>");
    //   var attr = "rows"
    //   var attachment = keyboard.attach(el);
    //   assert(attachment);
    // });
    // it("should take an element", function() {
    //   var el = domify("<textarea>hello</textarea>");
    //   var attachment = keyboard.attach(el);
    //   assert("object" === typeof attachment);
    // });

  });
});


console.log(keyboard);
