this["JST"] = this["JST"] || {};

this["JST"]["Euler"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"Euler\">\n    <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <div class=\"Euler-element\">\n        <span class=\"Euler-label\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._order)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</span>\n        <span class=\"Euler-data\">"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0._x), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0._x), options)))
    + "</span>\n    </div>\n    <div class=\"Euler-element\">\n        <span class=\"Euler-label\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._order)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</span>\n        <span class=\"Euler-data\">"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0._z), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0._z), options)))
    + "</span>\n    </div>\n    <div class=\"Euler-element\">\n        <span class=\"Euler-label\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._order)),stack1 == null || stack1 === false ? stack1 : stack1[2])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</span>\n        <span class=\"Euler-data\">"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0._z), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0._z), options)))
    + "</span>\n    </div>\n</div>\n\n";
  return buffer;
  });

this["JST"]["Matrix4"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        <tr>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[0]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[0]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[4]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[4]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[8]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[8]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[12]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[12]), options)))
    + "</td>\n        </tr>\n        <tr>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[1]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[1]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[5]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[5]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[9]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[9]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[13]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[13]), options)))
    + "</td>\n        </tr>\n        <tr>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[2]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[2]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[6]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[6]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[10]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[10]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[14]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[14]), options)))
    + "</td>\n        </tr>\n        <tr>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[3]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[3]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[7]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[7]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[11]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[11]), options)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0[15]), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0[15]), options)))
    + "</td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<div class=\"Matrix4\">\n    <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <table class=\"matrix\">\n        ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.elements), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n</div>\n";
  return buffer;
  });

this["JST"]["Object3D"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n            <span class=\"name\">Object3D</span>\n            ";
  }

  buffer += "<div class=\"Object3D-grid\">\n    <div class=\"left\">\n        <div class=\"title\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <br /><span class=\"parent\">Parent: ";
  if (helper = helpers.parent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.parent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"vectors\">\n            <div class=\"grid-box-Vector3\">\n                ";
  if (helper = helpers.position) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.position); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"grid-box-Euler\">\n                ";
  if (helper = helpers.rotation) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rotation); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n    <div class=\"grid-box-Matrix4\">\n        ";
  if (helper = helpers.matrix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.matrix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"grid-box-Matrix4\">\n        ";
  if (helper = helpers.matrixWorld) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.matrixWorld); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["Vector3"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"Vector3\">\n    <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <div class=\"Vector3-element\">\n        <span class=\"Vector3-label\">X:</span>\n        <span class=\"Vector3-data\">"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0.x), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0.x), options)))
    + "</span>\n    </div>\n    <div class=\"Vector3-element\">\n        <span class=\"Vector3-label\">Y:</span>\n        <span class=\"Vector3-data\">"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0.y), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0.y), options)))
    + "</span>\n    </div>\n    <div class=\"Vector3-element\">\n        <span class=\"Vector3-label\">Z:</span>\n        <span class=\"Vector3-data\">"
    + escapeExpression((helper = helpers.sig || (depth0 && depth0.sig),options={hash:{},data:data},helper ? helper.call(depth0, 4, (depth0 && depth0.z), options) : helperMissing.call(depth0, "sig", 4, (depth0 && depth0.z), options)))
    + "</span>\n    </div>\n</div>\n";
  return buffer;
  });