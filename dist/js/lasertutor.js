(function() {
  var Animator, BasicEditableTree, BasicTree, EditableTree, MenuTree, SVGTreeNode, TODOListTree, exports, module, registerGlobal,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  exports = exports != null ? exports : this;

  registerGlobal = function(uniqueName, objectToRegister) {
    if (objectToRegister == null) {
      objectToRegister = module;
    }
    exports[uniqueName] = objectToRegister;
    return window[uniqueName] = objectToRegister;
  };

  module = {};

  registerGlobal('ambigui', module);

  Animator = (function() {
    function Animator() {
      var x, _i, _len, _ref;
      _ref = ['ms', 'moz', 'o', 'webkit'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        x = _ref[_i];
        if (window.requestAnimationFrame == null) {
          window.requestAnimationFrame = window[x + 'RequestAnimationFrame'];
        }
      }
      if (window.requestAnimationFrame == null) {
        this.animation = this.fallbackAnimation;
      }
    }

    Animator.prototype.valAndFormatArrays = function(s) {
      var chars, format_section, formatting, numIndexToFormattingIndex, num_candidate, num_chars, numbers, _ref, _ref1;
      num_chars = '-+.eE0123456789'.split('');
      chars = s.split('');
      chars.reverse();
      format_section = '';
      num_candidate = '';
      numbers = [];
      formatting = [];
      numIndexToFormattingIndex = {};
      while (chars.length !== 0) {
        while ((_ref = chars[chars.length - 1], __indexOf.call(num_chars, _ref) >= 0) && chars.length > 0) {
          num_candidate += chars.pop();
        }
        while ((!(_ref1 = chars[chars.length - 1], __indexOf.call(num_chars, _ref1) >= 0)) && (chars.length > 0)) {
          format_section += chars.pop();
        }
        if ((!isNaN(Number(num_candidate))) && (num_candidate.length > 0)) {
          numIndexToFormattingIndex[numbers.length] = formatting.length;
          numbers.push(parseFloat(num_candidate));
          formatting.push(null);
          num_candidate = '';
        } else if (num_candidate.length > 0) {
          format_section = formatting.pop() + num_candidate + format_section;
          num_candidate = '';
        }
        if (format_section.length > 0) {
          formatting.push(format_section);
          format_section = '';
        }
      }
      return [numbers, formatting, numIndexToFormattingIndex];
    };

    Animator.prototype.makeFormatter = function(formatting, numIndexToFormattingIndex) {
      return function(num_array) {
        var fmt_copy, indx, n, sum, x, _i, _len;
        fmt_copy = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = formatting.length; _i < _len; _i++) {
            x = formatting[_i];
            _results.push(x);
          }
          return _results;
        })();
        for (indx = _i = 0, _len = num_array.length; _i < _len; indx = ++_i) {
          n = num_array[indx];
          fmt_copy[numIndexToFormattingIndex[indx]] = n;
        }
        sum = function(s1, s2) {
          return s1 + s2;
        };
        return fmt_copy.reduce(sum, '');
      };
    };

    Animator.prototype.interpolation = function(fromValues, toValues) {
      var diff, diffs, i, t;
      if ((fromValues instanceof Array) && (toValues instanceof Array)) {
        diffs = (function() {
          var _i, _len, _results;
          _results = [];
          for (i = _i = 0, _len = toValues.length; _i < _len; i = ++_i) {
            t = toValues[i];
            _results.push(t - fromValues[i]);
          }
          return _results;
        })();
        return function(percent) {
          var f, _i, _len, _results;
          _results = [];
          for (i = _i = 0, _len = fromValues.length; _i < _len; i = ++_i) {
            f = fromValues[i];
            _results.push(f + diffs[i] * percent);
          }
          return _results;
        };
      } else {
        diff = toValues - fromValues;
        return function(percent) {
          return fromValues + diff * percent;
        };
      }
    };

    Animator.prototype.transition = function(el, attr, fromValues, toValues, formatter) {
      var interpolator;
      interpolator = this.interpolation(fromValues, toValues);
      return function(percent) {
        return el.setAttribute(attr, formatter(interpolator(percent)));
      };
    };

    Animator.prototype.animation = function(el, attr, from, to, duration, callback) {
      var f, formatter, fromFmt, fromMap, fromVals, startTime, toFmt, toMap, toVals, transition, _ref, _ref1;
      _ref = this.valAndFormatArrays(from), fromVals = _ref[0], fromFmt = _ref[1], fromMap = _ref[2];
      _ref1 = this.valAndFormatArrays(to), toVals = _ref1[0], toFmt = _ref1[1], toMap = _ref1[2];
      formatter = this.makeFormatter(fromFmt, fromMap);
      transition = this.transition(el, attr, fromVals, toVals, formatter);
      startTime = null;
      f = function(t) {
        var dT;
        if (t == null) {
          window.requestAnimationFrame(f);
          return;
        }
        if (startTime == null) {
          startTime = t;
        }
        dT = t - startTime;
        if (dT >= duration) {
          transition(1);
          if (callback != null) {
            return callback();
          }
        } else {
          transition(dT / duration);
          return window.requestAnimationFrame(f);
        }
      };
      return f;
    };

    Animator.prototype.fallbackAnimation = function(el, attr, from, to, duration, callback) {
      var f, formatter, fromFmt, fromMap, fromVals, startTime, toFmt, toMap, toVals, transition, _ref, _ref1;
      _ref = this.valAndFormatArrays(from), fromVals = _ref[0], fromFmt = _ref[1], fromMap = _ref[2];
      _ref1 = this.valAndFormatArrays(to), toVals = _ref1[0], toFmt = _ref1[1], toMap = _ref1[2];
      formatter = this.makeFormatter(fromFmt, fromMap);
      transition = this.transition(el, attr, fromVals, toVals, formatter);
      startTime = null;
      f = function() {
        var dT, t;
        t = new Date().getTime();
        if (startTime == null) {
          startTime = t;
        }
        dT = t - startTime;
        if (dT >= duration) {
          transition(1);
          if (callback != null) {
            return callback();
          }
        } else {
          transition(dT / duration);
          return window.setTimeout(f, 16);
        }
      };
      return f;
    };

    return Animator;

  })();

  module.Animator = Animator;

  module.DOGWOOD = {};

  SVGTreeNode = (function() {
    SVGTreeNode.animator = new module.Animator();

    SVGTreeNode.namespaceElementCreator = function(namespace, version) {
      if (version == null) {
        version = null;
      }
      return function(tag, attributes) {
        var attr, el, value;
        if (attributes == null) {
          attributes = {};
        }
        el = document.createElementNS(namespace, tag);
        if (version != null) {
          if (attributes.version == null) {
            attributes.version = version;
          }
        }
        attributes.xmlns = namespace;
        for (attr in attributes) {
          value = attributes[attr];
          el.setAttribute(attr, value);
        }
        return el;
      };
    };

    SVGTreeNode.prototype.svgElement = SVGTreeNode.namespaceElementCreator("http://www.w3.org/2000/svg", "1.1");

    SVGTreeNode.prototype.htmlElement = SVGTreeNode.namespaceElementCreator("http://www.w3.org/1999/xhtml");

    SVGTreeNode.prototype.toString = function() {
      var child, line, ret, s, _i, _j, _len, _len1, _ref, _ref1;
      s = "name: " + this.name + "\n isHidden: " + this.isHidden + " x: " + this.x + " y: " + this.y;
      s += " contentDX: " + this.contentDX + " ";
      s += "contentX: " + this.contentX + " contentHeight: " + (this.contentHeight());
      s += " textY: " + this.contentY + " linePoints: " + this.linePoints + " circleX: " + this.circleX;
      s += " circleY " + this.circleY + " marginBottom " + this.marginBottom;
      s += " marginTop: " + this.marginTop;
      s += " scale: " + this.scale + " totalHeight: " + (this.totalHeight());
      s += "\n";
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        s += child.toString();
      }
      ret = '';
      _ref1 = s.split("\n");
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        line = _ref1[_j];
        ret += '   ' + line + "\n";
      }
      return ret;
    };

    function SVGTreeNode(options) {
      this.toggleChildrenVisible = __bind(this.toggleChildrenVisible, this);
      this.makeContentGroup = __bind(this.makeContentGroup, this);
      this.animateVisible = __bind(this.animateVisible, this);
      this.visibleChildren = __bind(this.visibleChildren, this);
      this.hide = __bind(this.hide, this);
      this.hideChildren = __bind(this.hideChildren, this);
      this.showChildren = __bind(this.showChildren, this);
      this.animateCircle = __bind(this.animateCircle, this);
      this.makeCircle = __bind(this.makeCircle, this);
      this.animateContent = __bind(this.animateContent, this);
      this.animateLine = __bind(this.animateLine, this);
      this.makeLine = __bind(this.makeLine, this);
      this.getLinePoints = __bind(this.getLinePoints, this);
      this.totalWidth = __bind(this.totalWidth, this);
      this.totalHeight = __bind(this.totalHeight, this);
      this.flagpoleLength = __bind(this.flagpoleLength, this);
      this.moveChildren = __bind(this.moveChildren, this);
      this.updateChildren = __bind(this.updateChildren, this);
      this.contentWidth = __bind(this.contentWidth, this);
      this.contentHeight = __bind(this.contentHeight, this);
      this.move = __bind(this.move, this);
      this.updateOuterFrame = __bind(this.updateOuterFrame, this);
      this.updatePosition = __bind(this.updatePosition, this);
      this.requestUpdate = __bind(this.requestUpdate, this);
      this.newChild = __bind(this.newChild, this);
      this.toString = __bind(this.toString, this);
      var child, model, _i, _len, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      this.children = [];
      model = (_ref = options.parent) != null ? _ref : options;
      this.name = (_ref1 = options.text) != null ? _ref1 : "Root";
      this.autoAdjust = (_ref2 = options.autoAdjust) != null ? _ref2 : true;
      this.indent = (_ref3 = model.indent) != null ? _ref3 : 40;
      this.contentDX = (_ref4 = model.contentDX) != null ? _ref4 : 15;
      this.circleRadius = (_ref5 = model.circleRadius) != null ? _ref5 : 4;
      this.animateDuration = (_ref6 = model.animateDuration) != null ? _ref6 : 400;
      this.isHidden = (_ref7 = options.isHidden) != null ? _ref7 : false;
      this.scale = this.isHidden ? "0 1" : "1 1";
      this.emptyColor = (_ref8 = model.emptyColor) != null ? _ref8 : 'white';
      this.treeColor = (_ref9 = model.treeColor) != null ? _ref9 : 'slateblue';
      this.marginTop = (_ref10 = model.marginTop) != null ? _ref10 : 20;
      this.marginBottom = (_ref11 = model.marginBottom) != null ? _ref11 : 10;
      this.lineWidth = (_ref12 = model.lineWidth) != null ? _ref12 : 2;
      this.outerFramePaddingBottom = (_ref13 = model.outerFramePaddingBottom) != null ? _ref13 : 20;
      this.x = (_ref14 = options.x) != null ? _ref14 : 5;
      this.y = (_ref15 = options.y) != null ? _ref15 : 0;
      if (options.parent != null) {
        this.parent = options.parent;
        this.el = options.el;
      } else {
        this.isRoot = true;
        this.div = options.el;
        this.el = this.svgElement("svg");
        this.div.appendChild(this.el);
      }
      this.contentY = this.y + this.marginTop;
      this.makeContentGroup();
      this.makeContent();
      if (this.parent == null) {
        this.updateOuterFrame(true);
      }
      this.makeLine();
      if (this.isHidden && (options.children != null)) {
        this.circleY = this.y + this.marginTop + this.contentHeight() + this.marginBottom;
        this.circleX = this.indent;
      }
      if (options.children != null) {
        _ref16 = options.children;
        for (_i = 0, _len = _ref16.length; _i < _len; _i++) {
          child = _ref16[_i];
          child.isHidden = true;
          this.newChild(child);
        }
      }
    }

    SVGTreeNode.prototype.newChild = function(options) {
      var child, child_el, scale, spacer_el, transform_spec;
      if (options == null) {
        options = {};
      }
      if (!((this.circle != null) || this.isHidden)) {
        this.makeCircle();
      }
      transform_spec = {
        transform: "translate(" + this.indent + ", 0)"
      };
      spacer_el = this.svgElement("g", transform_spec);
      scale = options.isHidden ? "0 1" : "1 1";
      transform_spec = {
        transform: "scale(" + scale + ")"
      };
      child_el = this.svgElement("g", transform_spec);
      spacer_el.appendChild(child_el);
      this.el.appendChild(spacer_el);
      options.el = child_el;
      options.parent = this;
      if (options.text == null) {
        options.text = 'new';
      }
      options.x = this.x + this.indent;
      if (options.isHidden) {
        options.y = this.y;
      } else {
        options.y = this.y + this.flagpoleLength();
      }
      child = new this.constructor(options);
      return this.children.push(child);
    };

    SVGTreeNode.prototype.requestUpdate = function() {
      if (this.parent != null) {
        return this.parent.requestUpdate();
      } else {
        return this.updatePosition();
      }
    };

    SVGTreeNode.prototype.updatePosition = function(callback) {
      if (callback == null) {
        callback = null;
      }
      this.updateChildren();
      if ((this.parent == null) && this.autoAdjust) {
        this.updateOuterFrame();
      }
      this.moveChildren();
      return this.move();
    };

    SVGTreeNode.prototype.updateOuterFrame = function(instant) {
      var h, n, s1, s2;
      if (instant == null) {
        instant = false;
      }
      n = this.div.offsetHeight;
      console.log(n);
      h = this.totalHeight() + this.contentHeight() + this.outerFramePaddingBottom;
      console.log(h);
      if (instant) {
        this.div.style.height = h + 'px';
        this.el.style.height = h + 'px';
        this.div.style.width = this.totalWidth() + 'px';
        this.el.style.width = this.totalWidth() + 'px';
      } else {
        if (this.width == null) {
          this.width = this.div.offsetWidth;
        }
        s1 = "width: " + this.width + "px; height: " + n + "px";
        s2 = "width: " + (this.totalWidth()) + "px; height: " + h + "px";
        SVGTreeNode.animator.animation(this.div, "style", s1, s2, this.animateDuration, null)();
        SVGTreeNode.animator.animation(this.el, "style", s1, s2, this.animateDuration, null)();
        return this.width = this.totalWidth();
      }
    };

    SVGTreeNode.prototype.move = function() {
      this.animateLine();
      this.animateContent();
      this.animateCircle();
      return this.animateVisible();
    };

    SVGTreeNode.prototype.contentHeight = function() {
      var node, _i, _len, _ref;
      _ref = this.contentGroup.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if (node.offsetHeight != null) {
          return node.offsetHeight;
        }
        if (node.height != null) {
          return node.height.baseVal.value;
        }
      }
    };

    SVGTreeNode.prototype.contentWidth = function() {
      var candidates, node, _i, _len, _ref;
      candidates = [];
      _ref = this.contentGroup.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if (node.offsetWidth != null) {
          candidates.push(node.offsetWidth);
        }
        if (node.width != null) {
          candidates.push(node.width.baseVal.value);
        }
      }
      return Math.max.apply(Math, candidates);
    };

    SVGTreeNode.prototype.updateChildren = function() {
      var child, dY, _i, _len, _ref, _results;
      dY = this.y + this.marginTop + this.contentHeight() + this.marginBottom;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        child.y = !child.isHidden ? dY : this.y;
        child.x = this.x + this.indent;
        _results.push(dY += child.isHidden ? 0 : child.totalHeight());
      }
      return _results;
    };

    SVGTreeNode.prototype.moveChildren = function(callback) {
      var child, _i, _len, _ref, _results;
      if (callback == null) {
        callback = null;
      }
      if (this.children.length === 0 && (callback != null)) {
        callback();
      }
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.updatePosition(callback));
      }
      return _results;
    };

    SVGTreeNode.prototype.flagpoleLength = function() {
      var child, l, visible, _i, _len;
      l = 0;
      visible = this.visibleChildren();
      for (_i = 0, _len = visible.length; _i < _len; _i++) {
        child = visible[_i];
        if (child === visible[visible.length - 1]) {
          l += child.marginTop + child.contentHeight() + child.marginBottom;
        } else {
          l += child.totalHeight();
        }
      }
      return l;
    };

    SVGTreeNode.prototype.totalHeight = function() {
      var child, n, _i, _len, _ref;
      n = this.marginBottom + this.marginTop + this.contentHeight();
      _ref = this.visibleChildren();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        n += child.totalHeight();
      }
      return n;
    };

    SVGTreeNode.prototype.totalWidth = function() {
      var c, candidates, _i, _len, _ref;
      candidates = [Math.max(this.contentWidth() + this.contentDX, 2 * this.indent)];
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        candidates.push(this.indent + c.totalWidth());
      }
      return Math.max.apply(Math, candidates);
    };

    SVGTreeNode.prototype.getLinePoints = function() {
      var y;
      y = this.y + this.marginTop + this.contentHeight() + this.marginBottom;
      return "" + 0 + " " + y + " " + this.indent + " " + y + " " + this.indent + " " + (y + this.flagpoleLength());
    };

    SVGTreeNode.prototype.makeLine = function() {
      this.linePoints = this.getLinePoints();
      this.line = this.svgElement("polyline", {
        fill: "none",
        points: this.linePoints,
        'stroke-width': "" + this.lineWidth + "px",
        stroke: this.treeColor
      });
      return this.el.appendChild(this.line);
    };

    SVGTreeNode.prototype.animateLine = function(callback) {
      var newPoints;
      if (callback == null) {
        callback = null;
      }
      if (this.line == null) {
        if (this.isHidden) {
          this.linePoints = this.getLinePoints();
          return;
        }
        this.makeLine();
      }
      newPoints = this.getLinePoints();
      SVGTreeNode.animator.animation(this.line, "points", this.linePoints, newPoints, this.animateDuration, callback)();
      return this.linePoints = newPoints;
    };

    SVGTreeNode.prototype.animateContent = function(callback) {
      var newY;
      if (callback == null) {
        callback = null;
      }
      newY = this.y + this.marginTop;
      SVGTreeNode.animator.animation(this.content, "y", "" + this.contentY + "px", "" + newY + "px", this.animateDuration, callback)();
      return this.contentY = newY;
    };

    SVGTreeNode.prototype.makeCircle = function() {
      this.circleX = this.indent;
      if (this.circleY == null) {
        this.circleY = this.y + this.marginTop + this.contentHeight() + this.marginBottom;
      }
      this.circle = this.svgElement("circle", {
        fill: this.treeColor,
        cx: this.indent,
        cy: this.circleY,
        r: this.circleRadius,
        "stroke-width": "" + this.lineWidth + "px",
        stroke: this.treeColor
      });
      this.circle.addEventListener("click", this.toggleChildrenVisible);
      return this.el.appendChild(this.circle);
    };

    SVGTreeNode.prototype.animateCircle = function(callback) {
      var color, new_cy;
      if (callback == null) {
        callback = null;
      }
      if (this.circle == null) {
        if ((this.children.length === 0) || this.isHidden) {
          return;
        } else {
          this.makeCircle();
        }
      }
      new_cy = this.y + this.marginTop + this.contentHeight() + this.marginBottom;
      SVGTreeNode.animator.animation(this.circle, "cy", "" + this.circleY + "px", "" + new_cy + "px", this.animateDuration, callback)();
      this.circleY = new_cy;
      color = this.visibleChildren().length === 0 ? this.treeColor : this.emptyColor;
      return this.circle.setAttribute('fill', color);
    };

    SVGTreeNode.prototype.showChildren = function() {
      var child, _i, _len, _ref;
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        child.isHidden = false;
      }
      this.updateChildren();
      return this.requestUpdate();
    };

    SVGTreeNode.prototype.hideChildren = function() {
      var child, f, test, trigger, _i, _len, _ref, _results;
      test = (function(_this) {
        return function() {
          return _this.visibleChildren().length === 0;
        };
      })(this);
      trigger = (function(_this) {
        return function() {
          return _this.requestUpdate();
        };
      })(this);
      f = this.groupActionCallback(trigger, test);
      if (this.isRoot) {
        f = this.groupActionCallback(this.updatePosition, test);
      }
      _ref = this.visibleChildren();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.hide(f));
      }
      return _results;
    };

    SVGTreeNode.prototype.hide = function(callback) {
      var cb, child, hideCallback, test, _i, _len, _ref, _results;
      if (this.visibleChildren().length === 0) {
        this.isHidden = true;
        callback(this);
      }
      hideCallback = (function(_this) {
        return function() {
          _this.isHidden = true;
          return callback(_this);
        };
      })(this);
      test = (function(_this) {
        return function() {
          return _this.visibleChildren().length === 0;
        };
      })(this);
      cb = this.groupActionCallback(hideCallback, test);
      _ref = this.visibleChildren();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.hide(cb));
      }
      return _results;
    };

    SVGTreeNode.prototype.groupActionCallback = function(callback, test) {
      return function(opts) {
        if (test(opts) && (callback != null)) {
          return callback();
        }
      };
    };

    SVGTreeNode.prototype.visibleChildren = function() {
      return this.children.filter(function(x) {
        return !x.isHidden;
      });
    };

    SVGTreeNode.prototype.animateVisible = function(callback) {
      var newScale;
      if (callback == null) {
        callback = null;
      }
      newScale = this.isHidden ? "0 1" : "1 1";
      SVGTreeNode.animator.animation(this.el, "transform", "scale(" + this.scale + ")", "scale(" + newScale + ")", this.animateDuration, callback)();
      return this.scale = newScale;
    };

    SVGTreeNode.prototype.makeContentGroup = function() {
      var transform_spec;
      this.contentX = this.contentDX;
      transform_spec = {
        transform: "translate(" + this.contentX + ", 0)"
      };
      this.contentGroup = this.svgElement("g", transform_spec);
      return this.el.appendChild(this.contentGroup);
    };

    SVGTreeNode.prototype.toggleChildrenVisible = function(evt) {
      if (this.visibleChildren().length !== this.children.length) {
        return this.showChildren();
      } else {
        return this.hideChildren();
      }
    };

    return SVGTreeNode;

  })();

  module.DOGWOOD.SVGTreeNode = SVGTreeNode;

  EditableTree = (function(_super) {
    __extends(EditableTree, _super);

    function EditableTree(options) {
      this.remove = __bind(this.remove, this);
      this.animateStar = __bind(this.animateStar, this);
      this.makeStar = __bind(this.makeStar, this);
      this.getStarLinePoints = __bind(this.getStarLinePoints, this);
      this.getStarTop = __bind(this.getStarTop, this);
      this.totalHeight = __bind(this.totalHeight, this);
      this.move = __bind(this.move, this);
      var model, _ref, _ref1;
      model = options.parent != null ? options.parent : options;
      this.starLength = (_ref = model.starLength) != null ? _ref : 15;
      this.starRadius = (_ref1 = model.starRadius) != null ? _ref1 : 5;
      EditableTree.__super__.constructor.call(this, options);
      this.makeStar();
    }

    EditableTree.prototype.move = function() {
      this.animateStar();
      return EditableTree.__super__.move.call(this);
    };

    EditableTree.prototype.totalHeight = function() {
      var h;
      if (!this.isHidden) {
        h = EditableTree.__super__.totalHeight.call(this);
        if (this.visibleChildren().length === 0) {
          h += this.starLength;
        }
        return h;
      }
      return 0;
    };

    EditableTree.prototype.getStarTop = function() {
      return this.y + this.flagpoleLength() + this.marginTop + this.contentHeight() + this.marginBottom;
    };

    EditableTree.prototype.getStarLinePoints = function() {
      var top;
      top = this.getStarTop();
      return "" + this.indent + ", " + top + ", " + this.indent + ", " + (top + this.starLength);
    };

    EditableTree.prototype.makeStar = function() {
      var c, cross1, cross2;
      if (this.starTop == null) {
        this.starTop = this.getStarTop();
      }
      this.star = this.svgElement('g', {
        transform: "translate(" + this.indent + ", " + (this.starTop + this.starLength) + ")"
      });
      c = {
        cx: 0,
        cy: 0,
        r: this.starRadius,
        fill: this.emptyColor,
        'stroke-width': this.lineWidth,
        stroke: this.treeColor
      };
      this.star.appendChild(this.svgElement("circle", c));
      cross1 = {
        x1: this.starRadius - 2,
        y1: 0,
        x2: -this.starRadius + 2,
        y2: 0,
        fill: "none",
        "stroke-width": "" + this.lineWidth + "px",
        'stroke': this.treeColor
      };
      this.star.appendChild(this.svgElement('line', cross1));
      cross2 = {
        x1: 0,
        y1: this.starRadius - 2,
        x2: 0,
        y2: -this.starRadius + 2,
        fill: "none",
        "stroke-width": "" + this.lineWidth + "px",
        'stroke': this.treeColor
      };
      this.star.appendChild(this.svgElement('line', cross2));
      this.star.addEventListener("click", this.createChild);
      return this.el.appendChild(this.star);
    };

    EditableTree.prototype.animateStar = function(callback) {
      var newStarTop;
      if (callback == null) {
        callback = null;
      }
      if (this.star == null) {
        if (this.isHidden) {
          this.starTop = this.getStarTop();
          return;
        }
        this.makeStar();
      }
      newStarTop = this.getStarTop();
      SVGTreeNode.animator.animation(this.star, "transform", "translate(" + this.indent + " " + (this.starTop + this.starLength) + ")", "translate(" + this.indent + " " + (newStarTop + this.starLength) + ")", this.animateDuration, null)();
      return this.starTop = newStarTop;
    };

    EditableTree.prototype.remove = function() {
      var onhide;
      onhide = (function(_this) {
        return function() {
          if (_this.parent != null) {
            _this.parent.children = _this.parent.children.filter(function(x) {
              return x !== _this;
            });
            if ((_this.parent.children.length === 0) && (_this.parent.circle != null)) {
              _this.parent.circle.parentElement.removeChild(_this.parent.circle);
              _this.parent.circle = null;
            }
          }
          _this.requestUpdate();
          return _this.el.parentElement.removeChild(_this.el);
        };
      })(this);
      return this.hide(onhide);
    };

    return EditableTree;

  })(SVGTreeNode);

  module.DOGWOOD.EditableTree = EditableTree;

  BasicTree = (function(_super) {
    __extends(BasicTree, _super);

    function BasicTree() {
      this.makeDiv = __bind(this.makeDiv, this);
      this.makeContent = __bind(this.makeContent, this);
      this.createChild = __bind(this.createChild, this);
      return BasicTree.__super__.constructor.apply(this, arguments);
    }

    BasicTree.prototype.createChild = function(evt) {
      var options;
      options = {};
      if (this.visibleChildren().length !== this.children.length) {
        options.isHidden = true;
      }
      this.newChild(options);
      return this.showChildren();
    };

    BasicTree.prototype.makeContent = function() {
      var div;
      this.content = this.svgElement('foreignObject');
      this.contentGroup.appendChild(this.content);
      div = this.makeDiv();
      this.content.appendChild(div);
      this.content.setAttribute('width', div.offsetWidth);
      this.content.setAttribute('height', div.offsetHeight);
      this.content.setAttribute('y', this.contentY);
      return this.content.addEventListener("click", this.toggleChildrenVisible);
    };

    BasicTree.prototype.makeDiv = function() {
      var div, s;
      div = this.htmlElement('div');
      s = 'background: red; height: 180px; width: 800px;';
      div.setAttribute('style', s);
      div.innerHTML = this.name;
      return div;
    };

    return BasicTree;

  })(SVGTreeNode);

  module.DOGWOOD.BasicTree = BasicTree;

  BasicEditableTree = (function(_super) {
    __extends(BasicEditableTree, _super);

    function BasicEditableTree(options) {
      this.makeDiv = __bind(this.makeDiv, this);
      this.makeContent = __bind(this.makeContent, this);
      this.createChild = __bind(this.createChild, this);
      var model, _ref;
      model = (_ref = options.parent) != null ? _ref : options;
      if (model.circleRadius == null) {
        model.circleRadius = 10;
      }
      if (model.starRadius == null) {
        model.starRadius = 10;
      }
      if (model.starLength == null) {
        model.starLength = 26;
      }
      BasicEditableTree.__super__.constructor.call(this, options);
    }

    BasicEditableTree.prototype.createChild = function(evt) {
      var options;
      options = {};
      if (this.visibleChildren().length !== this.children.length) {
        options.isHidden = true;
      }
      this.newChild(options);
      return this.showChildren();
    };

    BasicEditableTree.prototype.makeContent = function() {
      var div;
      this.content = this.svgElement('foreignObject');
      this.contentGroup.appendChild(this.content);
      div = this.makeDiv();
      this.content.appendChild(div);
      this.content.setAttribute('width', div.offsetWidth);
      this.content.setAttribute('height', div.offsetHeight);
      return this.content.setAttribute('y', this.contentY);
    };

    BasicEditableTree.prototype.makeDiv = function() {
      var div, s;
      div = this.htmlElement('div');
      s = 'background: red; height: 40px; width: 60px;';
      div.setAttribute('style', s);
      div.innerHTML = this.name;
      return div;
    };

    return BasicEditableTree;

  })(EditableTree);

  module.DOGWOOD.BasicEditableTree = BasicEditableTree;

  TODOListTree = (function(_super) {
    __extends(TODOListTree, _super);

    function TODOListTree() {
      this.setInputActive = __bind(this.setInputActive, this);
      this.setTextToDiv = __bind(this.setTextToDiv, this);
      this.changeFocus = __bind(this.changeFocus, this);
      this.requestFocusChange = __bind(this.requestFocusChange, this);
      this.makeDiv = __bind(this.makeDiv, this);
      return TODOListTree.__super__.constructor.apply(this, arguments);
    }

    TODOListTree.prototype.makeDiv = function() {
      this.contentDiv = this.htmlElement('div', {
        style: 'width: 200px; height: 30px;'
      });
      this.form = this.htmlElement("form");
      this.input = this.htmlElement("input", {
        type: 'text',
        value: this.name,
        size: 10
      });
      this.button = this.htmlElement('input', {
        type: "button",
        value: 'delete'
      });
      this.form.appendChild(this.input);
      this.form.appendChild(this.button);
      this.button.addEventListener('click', this.remove);
      this.contentDiv.innerHTML = this.input.value;
      this.contentDiv.addEventListener('click', this.setInputActive);
      this.inputActive = false;
      return this.contentDiv;
    };

    TODOListTree.prototype.requestFocusChange = function(node) {
      if (this.parent == null) {
        return this.changeFocus(node);
      } else {
        return this.parent.requestFocusChange(node);
      }
    };

    TODOListTree.prototype.changeFocus = function(node) {
      var c, _i, _len, _ref, _results;
      if (this !== node) {
        this.setTextToDiv();
      }
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        _results.push(c.changeFocus(node));
      }
      return _results;
    };

    TODOListTree.prototype.setTextToDiv = function(evt) {
      this.name = this.input.value;
      this.contentDiv.innerHTML = this.input.value;
      return this.inputActive = false;
    };

    TODOListTree.prototype.setInputActive = function(evt) {
      if (!this.inputActive) {
        this.contentDiv.innerHTML = '';
        this.contentDiv.appendChild(this.form);
        this.inputActive = true;
        this.requestFocusChange(this);
        this.input.focus();
      }
      return true;
    };

    return TODOListTree;

  })(BasicEditableTree);

  module.DOGWOOD.TODOListTree = TODOListTree;

  MenuTree = (function(_super) {
    __extends(MenuTree, _super);

    function MenuTree(options) {
      this.makeContent = __bind(this.makeContent, this);
      this.animateVisible = __bind(this.animateVisible, this);
      var height, _ref, _ref1;
      this.link = options.link;
      this["class"] = options["class"];
      this.id = options.id;
      this.tag = options.tag;
      this.width = (_ref = options.width) != null ? _ref : 200;
      this.height = (_ref1 = options.height) != null ? _ref1 : 20;
      if (this.tag == null) {
        if (this.link != null) {
          this.tag = 'a';
        } else {
          this.tag = 'p';
        }
      }
      MenuTree.__super__.constructor.call(this, options);
      if (this.parent == null) {
        height = this.totalHeight() + this.contentHeight() + this.outerFramePaddingBottom;
        this.el.setAttribute("height", "" + height + "px");
        this.div.setAttribute("height", "" + height + "px");
      }
    }

    MenuTree.prototype.animateVisible = function(callback) {
      var newCallback;
      if (callback == null) {
        callback = null;
      }
      if (this.isHidden) {
        newCallback = (function(_this) {
          return function() {
            _this.content.innerHTML = "";
            if (callback != null) {
              return callback();
            }
          };
        })(this);
        return MenuTree.__super__.animateVisible.call(this, newCallback);
      } else {
        this.content.appendChild(this.contentDiv);
        return MenuTree.__super__.animateVisible.call(this, callback);
      }
    };

    MenuTree.prototype.makeContent = function() {
      var conf;
      conf = {};
      if (this.link != null) {
        conf = {
          href: this.link
        };
      }
      if (this["class"] != null) {
        conf["class"] = this["class"];
      }
      if (this.id != null) {
        conf.id = id;
      }
      this.a = this.htmlElement(this.tag, conf);
      this.a.innerHTML = this.name;
      this.contentDiv = this.htmlElement('div', {
        "class": this["class"]
      });
      this.contentDiv.appendChild(this.a);
      this.content = this.svgElement('foreignObject');
      this.contentGroup.appendChild(this.content);
      if (!this.isHidden) {
        this.content.appendChild(this.contentDiv);
      }
      this.contentDiv.style.height = this.height;
      this.contentDiv.style.width = this.width;
      this.content.setAttribute('width', this.width);
      this.content.setAttribute('height', this.height);
      this.content.setAttribute('y', this.contentY);
      if (this.link == null) {
        return this.contentDiv.addEventListener("click", this.toggleChildrenVisible);
      }
    };

    return MenuTree;

  })(SVGTreeNode);

  module.DOGWOOD.MenuTree = MenuTree;

}).call(this);
;this["JST"] = this["JST"] || {};

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
  });;(function() {
  var Axes, NavigableScene, NavigationUI, Object3DView, ObjectViewTree, SceneManager, ThreeDNavController, exports, floatFormat, module, registerGlobal,
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

    NavigationUI.prototype.mouseWheel = function(evt) {};

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

    function NavigableScene() {
      this.mouseWheel = __bind(this.mouseWheel, this);
      this.revolveCamera = __bind(this.revolveCamera, this);
      this.mouseMove = __bind(this.mouseMove, this);
      this.touchStart = __bind(this.touchStart, this);
      this.mouseDown = __bind(this.mouseDown, this);
      this.ZOOMFACTOR = -.3;
      this.MIN_ZOOM = 0.01;
      this.RADIANS_PER_FRAME_UNIT = Math.PI;
      this.yaw = 0;
      this.pitch = 0;
      this.scene = new SceneManager();
      NavigableScene.__super__.constructor.call(this, this.scene.element);
      this.startCameraMatrix = this.scene.camera.matrix.clone();
      this.interactionRegime = this.revolveCamera;
      this.controller = new lasertutor.ThreeDNavController();
    }

    NavigableScene.prototype.mouseDown = function(evt) {
      NavigableScene.__super__.mouseDown.call(this, evt);
      this.startFocalRotation = this.scene.focalPoint.rotation.clone();
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
      this.startFocalRotation = this.scene.focalPoint.rotation.clone();
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
      mouseTravel = this.controller.normalizeMouseTravel(this.scene.element.offsetWidth, this.scene.element.offsetHeight, this.startPoint, xyPoint);
      pitch_axis = this.controller.pitchRotationAxis(this.yaw);
      this.yaw = this.controller.clampAngle0_2PI(this.yaw + this.RADIANS_PER_FRAME_UNIT * mouseTravel.x);
      this.pitch += this.RADIANS_PER_FRAME_UNIT * mouseTravel.y;
      this.pitch = this.pitch > Math.PI ? Math.PI : this.pitch;
      this.pitch = this.pitch < 0 ? 0 : this.pitch;
      this.scene.focalPoint.rotation.x += pitch_axis.x * (this.pitch - previous_pitch);
      this.scene.focalPoint.rotation.y += pitch_axis.y * (this.pitch - previous_pitch);
      this.scene.focalPoint.rotation.z -= this.yaw - previous_yaw;
      rotation = this.controller.mouseXYToCameraRotation(mouseTravel.x, mouseTravel.y, this.yaw, this.RADIANS_PER_FRAME_UNIT);
      this.startPoint = xyPoint;
      return this.scene.updateViews();
    };

    NavigableScene.prototype.mouseWheel = function(evt) {
      var new_z;
      evt.preventDefault();
      new_z = this.scene.camera.position.z + this.ZOOMFACTOR * -evt.deltaY;
      return this.scene.camera.position.z = new_z >= this.MIN_ZOOM ? new_z : this.MIN_ZOOM;
    };

    NavigableScene.prototype.add = function(mesh) {
      return this.scene.add(mesh);
    };

    return NavigableScene;

  })(NavigationUI);

  module.NavigableScene = NavigableScene;

  ObjectViewTree = (function(_super) {
    __extends(ObjectViewTree, _super);

    function ObjectViewTree(options) {
      this.reRender = __bind(this.reRender, this);
      this.makeDiv = __bind(this.makeDiv, this);
      this.object3D = options.object3D;
      this.view = new Object3DView({
        model: this.object3D,
        name: options.text,
        parent: options.parent == null ? 'world' : options.parent.text
      });
      ObjectViewTree.__super__.constructor.call(this, options);
      console.log(this.toString());
      this.move();
    }

    ObjectViewTree.prototype.makeDiv = function() {
      this.contentDiv = this.htmlElement('div', {
        style: 'width: 800px; height: 180px;'
      });
      this.view.render();
      this.contentDiv.appendChild(this.view.el);
      this.view.el.setAttribute('style', 'width: 800px; height: 180px;');
      return this.view.el;
    };

    ObjectViewTree.prototype.reRender = function() {
      var c, _i, _len, _ref, _results;
      this.view.render();
      _ref = this.visibleChildren();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        _results.push(c.reRender());
      }
      return _results;
    };

    return ObjectViewTree;

  })(ambigui.DOGWOOD.BasicTree);

  module.ObjectViewTree = ObjectViewTree;

  SceneManager = (function() {
    function SceneManager(threeElId, infoElId) {
      var cylGeom, cylMat;
      if (threeElId == null) {
        threeElId = 'Three';
      }
      if (infoElId == null) {
        infoElId = "Tree";
      }
      this.updateViews = __bind(this.updateViews, this);
      this.add = __bind(this.add, this);
      this.renderTHREE = __bind(this.renderTHREE, this);
      this.element = document.getElementById(threeElId);
      this.scene = new THREE.Scene();
      this.treeUI = new ObjectViewTree({
        object3D: this.scene,
        text: "scene",
        el: document.getElementById(infoElId, {
          marginTop: 25,
          marginBottom: 10
        })
      });
      cylGeom = new THREE.CylinderGeometry(.4, .4, .2, 16);
      cylMat = new THREE.MeshBasicMaterial({
        color: 0xffff00
      });
      this.focalPoint = new THREE.Mesh(cylGeom, cylMat);
      this.scene.add(this.focalPoint);
      this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      this.camera.position.z = 5;
      this.focalPoint.add(this.camera);
      this.treeUI.newChild({
        text: "camera",
        object3D: this.camera,
        isHidden: true
      });
      this.treeUI.newChild({
        text: "focalPoint",
        object3D: this.focalPoint,
        isHidden: true
      });
      this.renderer = new THREE.WebGLRenderer();
      this.element.appendChild(this.renderer.domElement);
      this.renderer.setSize(500, 500);
      this.renderTHREE();
      this.updateViews();
    }

    SceneManager.prototype.renderTHREE = function() {
      requestAnimationFrame(this.renderTHREE);
      return this.renderer.render(this.scene, this.camera);
    };

    SceneManager.prototype.add = function(mesh, name, parent) {
      if (name == null) {
        name = "noName";
      }
      if (parent == null) {
        parent = null;
      }
      this.scene.add(mesh);
      return this.treeUI.newChild({
        text: name,
        object3D: mesh,
        isHidden: true
      });
    };

    SceneManager.prototype.updateViews = function() {
      return this.treeUI.reRender();
    };

    return SceneManager;

  })();

  module.SceneManager = SceneManager;

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
      return new THREE.Line(y_geometry, y_material);
    };

    return Axes;

  })();

  module.Axes = Axes;

  Object3DView = (function(_super) {
    __extends(Object3DView, _super);

    function Object3DView(context) {
      this.render = __bind(this.render, this);
      Object3DView.__super__.constructor.call(this, context);
      this.name = context.name;
      this.parent = context.parent;
      this.template = JST.Object3D;
      this.model.position.name = 'Position';
      this.model.rotation.name = 'Rotation';
      this.model.matrix.name = '.matrix';
      this.model.matrixWorld.name = '.matrixWorld';
    }

    Object3DView.prototype.render = function() {
      return this.el.innerHTML = this.template({
        name: this.name,
        parent: this.parent,
        matrix: JST.Matrix4(this.model.matrix),
        matrixWorld: JST.Matrix4(this.model.matrixWorld),
        position: JST.Vector3(this.model.position),
        rotation: JST.Euler(this.model.rotation)
      });
    };

    return Object3DView;

  })(Backbone.View);

  module.Object3DView = Object3DView;

  floatFormat = function(numDigits, n) {
    return n.toFixed(numDigits);
  };

  Handlebars.registerHelper('sig', floatFormat);

}).call(this);
