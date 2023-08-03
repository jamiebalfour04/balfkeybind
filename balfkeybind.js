function BalfKeyBind() {
  this.keys = {};
  this.test = false;

  var _this = this;
  this.Bind = function(keyCode, modifiers, func) {
    var code = "";
    for (var i = 0; i < modifiers.length; i++) {
      code += modifiers[i] + " ";
    }
    code += keyCode;

    _this.keys[code] = func;

    return code;

  };

  this.EnableTest = function(t) {
    _this.test = t;
  }

  document.addEventListener("keyup", function(e) {

    if (_this.test) {
      console.log(e.which || e.keyCode);
      return;
    }

    var code = "";
    if (e.ctrlKey) {
      code += "ctrl ";
    }
    if (e.altKey) {
      code += "alt ";
    }
    if (e.shiftKey) {
      code += "shift ";
    }
    /*var c = String.fromCharCode(e.which || e.keyCode);
    console.log(c);
    if(c.toUpperCase() === c && c.toLowerCase() !== c && !e.shiftKey){
      code += "caps ";
    }*/
    code += e.keyCode;
    if (_this.keys[code] !== undefined) {
      var f = _this.keys[code];
      f(code, e);
    }
  });

  return this;
}
