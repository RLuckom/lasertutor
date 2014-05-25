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
  });;(function() {
  var Axes, NavigableScene, NavigationUI, ThreeDNavController, exports, module, registerGlobal, testHandleBars,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  exports = exports != null ? exports : this;

  registerGlobal = function(uniqueName, objectToRegister) {
    exports[uniqueName] = objectToRegister;
    return window[uniqueName] = objectToRegister;
  };

  module = {};

  registerGlobal('lasertutor', module);

  ThreeDNavController = (function() {
    function ThreeDNavController() {}

    ThreeDNavController.prototype.normalizeMouseTravel = function(width, height, start, end) {
      var dx, dy;
      dx = end.x - start.x;
      dy = start.y - end.y;
      return {
        x: dx / width,
        y: dy / height
      };
    };

    ThreeDNavController.prototype.calculateRotationVector = function(normalizedTravel, zoom, zeroZoomRotation, zoomFactor) {
      var zoomRotation;
      if (zeroZoomRotation == null) {
        zeroZoomRotation = Math.PI * 2;
      }
      if (zoomFactor == null) {
        zoomFactor = 1;
      }
      zoom *= zoomFactor;
      zoomRotation = zoom === 0 ? zeroZoomRotation : zeroZoomRotation / zoom;
      return {
        yaw: normalizedTravel.x * zoomRotation,
        pitch: normalizedTravel.y * zoomRotation
      };
    };

    ThreeDNavController.prototype.clampAngle0_2PI = function(theta) {
      theta = theta % (2 * Math.PI);
      if (theta > 0) {
        return theta;
      } else {
        return (2 * Math.PI) + theta;
      }
    };

    ThreeDNavController.prototype.mouseXYToCameraRotation = function(mouseDX, mouseDY, yaw, radiansPerFrameUnit) {
      var axis, c, mouseTravel, pitch_theta, s, theta, v;
      mouseTravel = Math.sqrt(mouseDX * mouseDX + mouseDY * mouseDY);
      theta = mouseTravel * radiansPerFrameUnit;
      pitch_theta = mouseDY / mouseTravel;
      s = Math.sin(theta);
      c = Math.cos(theta);
      v = 1 - c;
      axis = {
        z: -mouseDX / mouseTravel,
        x: Math.cos(yaw) * pitch_theta,
        y: -Math.sin(yaw) * pitch_theta
      };
      return new THREE.Matrix4(axis.x * axis.x * v + c, axis.x * axis.y * v - axis.z * s, axis.x * axis.z * v + s * axis.y, 0, axis.y * axis.x * v + axis.z * s, axis.y * axis.y * v + c, axis.y * axis.z * v - axis.x * s, 0, axis.z * axis.x * v - axis.y * s, axis.y * axis.z * v + axis.x * s, axis.z * axis.z * v + c, 0, 0, 0, 0, 1);
    };

    ThreeDNavController.prototype.pitchRotationAxis = function(yaw) {
      return new THREE.Vector3(Math.cos(yaw), -Math.sin(yaw), 0);
    };

    return ThreeDNavController;

  })();

  module.ThreeDNavController = ThreeDNavController;

  NavigationUI = (function() {
    function NavigationUI(element) {
      this.element = element;
      this.getMouseXY = __bind(this.getMouseXY, this);
      this.getTouchXY = __bind(this.getTouchXY, this);
      this.touchEnd = __bind(this.touchEnd, this);
      this.touchStart = __bind(this.touchStart, this);
      this.mouseUp = __bind(this.mouseUp, this);
      this.mouseDown = __bind(this.mouseDown, this);
      this.startPoint = {
        x: 50,
        y: 50
      };
      this.interacting = false;
      this.element.addEventListener('mousedown', this.mouseDown);
      window.addEventListener('mouseup', this.mouseUp);
      this.element.addEventListener('mousemove', this.mouseMove);
      this.element.addEventListener('wheel', this.mouseWheel);
      this.element.addEventListener('touchstart', this.touchStart);
      window.addEventListener('touchend', this.touchEnd);
      this.element.addEventListener('touchmove', this.touchMove);
    }

    NavigationUI.prototype.mouseDown = function(evt) {
      this.interacting = true;
      return this.startPoint = this.getMouseXY(evt);
    };

    NavigationUI.prototype.mouseWheel = function(evt) {
      return console.log(evt.deltaX + ' ' + evt.deltaY + ' ' + evt.deltaZ);
    };

    NavigationUI.prototype.mouseUp = function(evt) {
      return this.interacting = false;
    };

    NavigationUI.prototype.touchStart = function(evt) {
      this.interacting = true;
      return this.startPoint = this.getTouchXY(evt);
    };

    NavigationUI.prototype.touchEnd = function(evt) {
      return this.interacting = false;
    };

    NavigationUI.prototype.getTouchXY = function(evt) {
      var rect;
      rect = this.element.getBoundingClientRect();
      return {
        x: evt.targetTouches[0].clientX - rect.left,
        y: evt.targetTouches[0].clientY - rect.top
      };
    };

    NavigationUI.prototype.getMouseXY = function(evt) {
      var rect;
      rect = this.element.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    };

    return NavigationUI;

  })();

  module.NavigationUI = NavigationUI;

  NavigableScene = (function(_super) {
    __extends(NavigableScene, _super);

    function NavigableScene(element) {
      var cylGeom, cylMat;
      this.element = element;
      this.render = __bind(this.render, this);
      this.mouseWheel = __bind(this.mouseWheel, this);
      this.revolveCamera = __bind(this.revolveCamera, this);
      this.mouseMove = __bind(this.mouseMove, this);
      this.touchStart = __bind(this.touchStart, this);
      this.mouseDown = __bind(this.mouseDown, this);
      this.ZOOMFACTOR = -.3;
      this.MIN_ZOOM = 0.01;
      this.RADIANS_PER_FRAME_UNIT = Math.PI;
      NavigableScene.__super__.constructor.call(this, this.element);
      this.yaw = 0;
      this.pitch = 0;
      this.scene = new THREE.Scene();
      cylGeom = new THREE.CylinderGeometry(.4, .4, .2, 16);
      cylMat = new THREE.MeshBasicMaterial({
        color: 0xffff00
      });
      this.focalPoint = new THREE.Mesh(cylGeom, cylMat);
      this.scene.add(this.focalPoint);
      this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      this.camera.position.z = 5;
      this.focalPoint.add(this.camera);
      this.startCameraMatrix = this.camera.matrix.clone();
      this.renderer = new THREE.WebGLRenderer();
      this.element.appendChild(this.renderer.domElement);
      this.renderer.setSize(500, 500);
      this.interactionRegime = this.revolveCamera;
      this.controller = new lasertutor.ThreeDNavController();
    }

    NavigableScene.prototype.mouseDown = function(evt) {
      NavigableScene.__super__.mouseDown.call(this, evt);
      this.startFocalRotation = this.focalPoint.rotation.clone();
      return this.interactionRegime = (function() {
        switch (evt.button) {
          case 0:
            return function(evt) {
              return this.revolveCamera(this.getMouseXY(evt));
            };
          case 4:
            return function(evt) {
              return this.translateFocalPoint(this.getMouseXY(evt));
            };
        }
      })();
    };

    NavigableScene.prototype.touchStart = function(evt) {
      NavigableScene.__super__.touchStart.call(this, evt);
      this.startFocalRotation = this.focalPoint.rotation.clone();
      return this.interactionRegime = (function() {
        switch (evt.targetTouches.length) {
          case 1:
            return function(evt2) {
              return this.revolveCamera(this.getTouchXY(evt2));
            };
          case 2:
            return this.zoom;
          case 3:
            return function(evt2) {
              return this.translateFocalPoint(this.getTouchXY(evt2));
            };
        }
      }).call(this);
    };

    NavigableScene.prototype.mouseMove = function(evt) {
      if (this.interacting) {
        return this.interactionRegime(evt);
      }
    };

    NavigableScene.prototype.revolveCamera = function(xyPoint) {
      var mouseTravel, pitch_axis, previous_pitch, previous_yaw, rotation;
      previous_pitch = this.pitch;
      previous_yaw = this.yaw;
      console.log(this.startPoint.toSource(), xyPoint.toSource());
      console.log(this.camera.position.toSource());
      mouseTravel = this.controller.normalizeMouseTravel(this.element.offsetWidth, this.element.offsetHeight, this.startPoint, xyPoint);
      pitch_axis = this.controller.pitchRotationAxis(this.yaw);
      this.yaw = this.controller.clampAngle0_2PI(this.yaw + this.RADIANS_PER_FRAME_UNIT * mouseTravel.x);
      this.pitch += this.RADIANS_PER_FRAME_UNIT * mouseTravel.y;
      this.pitch = this.pitch > Math.PI ? Math.PI : this.pitch;
      this.pitch = this.pitch < 0 ? 0 : this.pitch;
      console.log(this.yaw, this.pitch, pitch_axis.toSource());
      this.focalPoint.rotation.x += pitch_axis.x * (this.pitch - previous_pitch);
      this.focalPoint.rotation.y += pitch_axis.y * (this.pitch - previous_pitch);
      this.focalPoint.rotation.z -= this.yaw - previous_yaw;
      rotation = this.controller.mouseXYToCameraRotation(mouseTravel.x, mouseTravel.y, this.yaw, this.RADIANS_PER_FRAME_UNIT);
      return this.startPoint = xyPoint;
    };

    NavigableScene.prototype.mouseWheel = function(evt) {
      var new_z;
      evt.preventDefault();
      console.log(evt.deltaY);
      new_z = this.camera.position.z + this.ZOOMFACTOR * -evt.deltaY;
      return this.camera.position.z = new_z >= this.MIN_ZOOM ? new_z : this.MIN_ZOOM;
    };

    NavigableScene.prototype.render = function() {
      requestAnimationFrame(this.render);
      return this.renderer.render(this.scene, this.camera);
    };

    NavigableScene.prototype.add = function(mesh) {
      return this.scene.add(mesh);
    };

    return NavigableScene;

  })(NavigationUI);

  module.NavigableScene = NavigableScene;

  Axes = (function() {
    function Axes() {
      var x_geometry, x_material, y_geometry, y_material, z_geometry, z_material;
      x_material = new THREE.LineBasicMaterial({
        color: 0x0000ff
      });
      x_geometry = new THREE.Geometry();
      x_geometry.vertices.push(new THREE.Vector3(-100, 0, 0));
      x_geometry.vertices.push(new THREE.Vector3(100, 0, 0));
      this.x_axis = new THREE.Line(x_geometry, x_material);
      y_material = new THREE.LineBasicMaterial({
        color: 0x00ff00
      });
      y_geometry = new THREE.Geometry();
      y_geometry.vertices.push(new THREE.Vector3(0, -100, 0));
      y_geometry.vertices.push(new THREE.Vector3(0, 100, 0));
      this.y_axis = new THREE.Line(y_geometry, y_material);
      z_material = new THREE.LineBasicMaterial({
        color: 0xff0000
      });
      z_geometry = new THREE.Geometry();
      z_geometry.vertices.push(new THREE.Vector3(0, 0, -100));
      z_geometry.vertices.push(new THREE.Vector3(0, 0, 100));
      this.z_axis = new THREE.Line(z_geometry, z_material);
    }

    Axes.prototype.addTo = function(scene) {
      var i, _i, _j;
      scene.add(this.x_axis);
      for (i = _i = -100; _i <= 100; i = _i += 10) {
        scene.add(this.xLine(i));
      }
      scene.add(this.y_axis);
      for (i = _j = -100; _j <= 100; i = _j += 10) {
        scene.add(this.yLine(i));
      }
      return scene.add(this.z_axis);
    };

    Axes.prototype.xLine = function(yPos) {
      var x_geometry, x_material;
      x_material = new THREE.LineBasicMaterial({
        color: 0x0000ff
      });
      x_geometry = new THREE.Geometry();
      x_geometry.vertices.push(new THREE.Vector3(-100, yPos, 0));
      x_geometry.vertices.push(new THREE.Vector3(100, yPos, 0));
      return new THREE.Line(x_geometry, x_material);
    };

    Axes.prototype.yLine = function(xPos) {
      var y_geometry, y_material;
      y_material = new THREE.LineBasicMaterial({
        color: 0x00ff00
      });
      y_geometry = new THREE.Geometry();
      y_geometry.vertices.push(new THREE.Vector3(xPos, -100, 0));
      y_geometry.vertices.push(new THREE.Vector3(xPos, 100, 0));
      console.log('yline', xPos);
      return new THREE.Line(y_geometry, y_material);
    };

    return Axes;

  })();

  module.Axes = Axes;

  testHandleBars = function() {
    var context, template, testtf;
    template = JST.tfFrame;
    testtf = {
      position: {
        x: 1.0,
        y: 2.0,
        z: 3.0
      },
      rotation: {
        x: 4.0,
        y: 5.0,
        z: 6.0
      },
      matrix: {
        elements: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0]
      },
      matrixWorld: {
        elements: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.3]
      }
    };
    context = {
      tf: testtf
    };
    return document.body.innerHTML += template(context);
  };

  module.testHandleBars = testHandleBars;

}).call(this);
;this["JST"] = this["JST"] || {};

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