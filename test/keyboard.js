

event = require("event");
bind     = require("bind");
reactive = require("reactive");
domify   = require("domify");
assert   = require("assert");
Emitter  = require("emitter");
_ = require("underscore");
dom = require("dom");

kb = require("keyboard");

window.j = kb("textarea", "new1");
window.i = j.input;
window.b = j.board;

console.log("KB: ", kb);
console.log("INSTANCE: ", j);
console.log("INPUT: ", i);
console.log("BOARDK", b);



describe("Keyboard", function() {
  it("should exist as a global object", function() {
    assert(kb !== null);
  });

  describe("attach", function() {

    beforeEach(function(){
    });
    it("should trigger keyups programmatically", function(){
      assert(1 === 1);
    });



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

  // });
});


// console.log(kb);
