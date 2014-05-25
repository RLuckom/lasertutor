this["JST"] = this["JST"] || {};

this["JST"]["tfFrame"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tf-grid\">\n    <div class=\"tf-grid-left\">\n	<div class=\"grid-box-name\">\n	    <div class=\"content\"><b>Frame:</b> camera <b>Parent:</b> world</div>\n	</div>\n	<div class=\"grid-box-Vector3\">\n	    <div class=\"grid-box-Vector3-text\">\n		<div class=\"content\">\n		position.x\n		</div>\n	    </div>\n	    <div class=\"grid-box-Vector3-data\">\n		<div class=\"content\">\n		"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.position)),stack1 == null || stack1 === false ? stack1 : stack1.x)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</div>\n	    </div>\n	    <div class=\"grid-box-Vector3-text\">\n		<div class=\"content\">\n		position.y\n		</div>\n	    </div>\n	    <div class=\"grid-box-Vector3-data\">\n		<div class=\"content\">\n		"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.position)),stack1 == null || stack1 === false ? stack1 : stack1.y)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</div>\n	    </div>\n	    <div class=\"grid-box-Vector3-text\">\n		<div class=\"content\">\n		position.z\n		</div>\n	    </div>\n	    <div class=\"grid-box-Vector3-data\">\n		<div class=\"content\">\n		"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.position)),stack1 == null || stack1 === false ? stack1 : stack1.z)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</div>\n	    </div>\n	</div>\n	<div class=\"grid-box-Vector3\">\n	<div class=\"grid-box-Vector3-text\">\n	    <div class=\"content\">\n	    rotation.x\n	    </div>\n	</div>\n	<div class=\"grid-box-Vector3-data\">\n	    <div class=\"content\">\n		"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.rotation)),stack1 == null || stack1 === false ? stack1 : stack1.x)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	    </div>\n	</div>\n	<div class=\"grid-box-Vector3-text\">\n	    <div class=\"content\">\n	    rotation.y\n	    </div>\n	</div>\n	<div class=\"grid-box-Vector3-data\">\n	    <div class=\"content\">\n		"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.rotation)),stack1 == null || stack1 === false ? stack1 : stack1.y)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	    </div>\n	</div>\n	<div class=\"grid-box-Vector3-text\">\n	    <div class=\"content\">\n	    rotation.z\n	    </div>\n	</div>\n	<div class=\"grid-box-Vector3-data\">\n	    <div class=\"content\">\n		"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.rotation)),stack1 == null || stack1 === false ? stack1 : stack1.z)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	    </div>\n	</div>\n    </div>\n</div>\n<div class=\"tf-grid-right\">\n    <div class=\"grid-box-Matrix4\">\n	<div class=\"content\">\n	    <div class=\"Matrix4-text\">.matrix</div>\n	    <table class=\"matrix\">\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[2])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[3])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[4])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[5])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[6])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[7])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[8])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[9])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[10])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[11])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[12])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[13])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[14])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrix)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[15])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n	    </table>\n	</div>\n    </div>\n    <div class=\"grid-box-Matrix4\">\n	<div class=\"content\">\n	    <div class=\"Matrix4-text\">.matrixWorld</div>\n	    <table class=\"matrix\">\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[2])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[3])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[4])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[5])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[6])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[7])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[8])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[9])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[10])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[11])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n		<tr>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[12])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[13])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[14])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.tf)),stack1 == null || stack1 === false ? stack1 : stack1.matrixWorld)),stack1 == null || stack1 === false ? stack1 : stack1.elements)),stack1 == null || stack1 === false ? stack1 : stack1[15])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n		</tr>\n	    </table>\n	</div>\n    </div>\n</div>\n</div>\n";
  return buffer;
  });