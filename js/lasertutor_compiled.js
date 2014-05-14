(function() {
  var NavigableScene, NavigationUI, ThreeDNavController, createSlider, exports, module, registerGlobal, s,
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

  createSlider = function(callbackCreator, uniqueName, max, min, step) {
    var labelPar, slider, sliderDiv, sliderInput, sliderLabel, sliderSpec;
    sliderInput = document.createElement('input');
    sliderInput.setAttribute('type', 'text');
    sliderLabel = document.createElement('label');
    sliderLabel.setAttribute('for', uniqueName);
    sliderLabel.textContent = '';
    sliderSpec = {
      value: min,
      min: min,
      max: max,
      step: step,
      slide: callbackCreator(sliderLabel)
    };
    sliderDiv = document.createElement('div');
    labelPar = document.createElement('p');
    slider = document.createElement('div');
    $(slider).slider(sliderSpec);
    sliderDiv.setAttribute('id', uniqueName);
    labelPar.appendChild(sliderLabel);
    sliderDiv.appendChild(labelPar);
    sliderDiv.appendChild(slider);
    return sliderDiv;
  };

  module.createSlider = createSlider;

  s = function(x) {
    return x * x;
  };

  module.s = s;

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
      console.log('mu');
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
      this.render = __bind(this.render, this);
      this.mouseWheel = __bind(this.mouseWheel, this);
      this.revolveCamera = __bind(this.revolveCamera, this);
      this.mouseMove = __bind(this.mouseMove, this);
      this.touchStart = __bind(this.touchStart, this);
      this.mouseDown = __bind(this.mouseDown, this);
      var cylGeom, cylMat;
      this.ZOOMFACTOR = -.3;
      this.ROTATIONFACTOR = .006;
      NavigableScene.__super__.constructor.call(this, element);
      this.scene = new THREE.Scene();
      cylGeom = new THREE.CylinderGeometry(.4, .4, .2, 16);
      cylMat = new THREE.MeshBasicMaterial({
        color: 0xffff00
      });
      this.focalPoint = new THREE.Mesh(cylGeom, cylMat);
      this.scene.add(this.focalPoint);
      this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      this.camera.position.z = 5;
      this.startCameraMatrix = this.camera.matrix.clone();
      this.renderer = new THREE.WebGLRenderer();
      element.appendChild(this.renderer.domElement);
      this.renderer.setSize(500, 500);
      this.interactionRegime = this.revolveCamera;
    }

    NavigableScene.prototype.mouseDown = function(evt) {
      NavigableScene.__super__.mouseDown.call(this, evt);
      this.startCameraMatrix = this.camera.matrix.clone();
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
      this.startCameraMatrix = this.camera.matrix.clone();
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
      var dX, dY, rotationMatrix, rotationVector, theta;
      dX = this.startPoint.x - xyPoint.x;
      dY = this.startPoint.y - xyPoint.y;
      theta = this.ROTATIONFACTOR * Math.sqrt(dX * dX + dY * dY);
      rotationVector = new THREE.Vector3(0, dX, dY);
      rotationVector.normalize();
      rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeRotationAxis(rotationVector, theta);
      rotationMatrix.multiply(this.startCameraMatrix);
      this.camera.position.setFromMatrixPosition(rotationMatrix);
      console.log(this.camera.position.toSource());
      return this.camera.rotation.setFromRotationMatrix(rotationMatrix);
    };

    NavigableScene.prototype.mouseWheel = function(evt) {
      var zoomVector;
      evt.preventDefault();
      zoomVector = new THREE.Vector3(0, 0, this.ZOOMFACTOR * evt.deltaY);
      return this.camera.position = this.camera.localToWorld(zoomVector);
    };

    NavigableScene.prototype.render = function() {
      requestAnimationFrame(this.render);
      return this.renderer.render(this.scene, this.camera);
    };

    NavigableScene.prototype.addObject = function(mesh) {
      return this.scene.add(mesh);
    };

    return NavigableScene;

  })(NavigationUI);

  module.NavigableScene = NavigableScene;

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
      return new THREE.Vector3(normalizedTravel.x * zoomRotation, normalizedTravel.y * zoomRotation, 0);
    };

    return ThreeDNavController;

  })();

  module.ThreeDNavController = ThreeDNavController;

}).call(this);
