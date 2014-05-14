# Thin, generic wrapper for an interactive canvas / 3D element.
#
# @example customize in a subclass
#   class ThreeDNavUI extends NavigationUI
#     mouseWheel: (evt) ->
#       super evt
#       this.zoomOnWheel(evt)
class NavigationUI
  
  # Constructor
  #
  # Registers callbacks on mousedown, mouseup, mousemove, wheel, touchstart,
  # touchmove, and touchend. Sets listeners for mouseup and touchend on the
  # window object because control gestures may end outside the bounds of the
  # element.
  #
  # @param [DOMNode] element the element to listen on / use to calculate
  #   positions.
  constructor: (@element) ->
    this.startPoint = x: 50, y: 50
    this.interacting = false
    @element.addEventListener 'mousedown', this.mouseDown
    window.addEventListener 'mouseup', this.mouseUp
    @element.addEventListener 'mousemove', this.mouseMove
    @element.addEventListener 'wheel', this.mouseWheel
    @element.addEventListener 'touchstart', this.touchStart
    window.addEventListener 'touchend', this.touchEnd
    @element.addEventListener 'touchmove', this.touchMove

  # mousedown event callback. Sets this.interacting to true and sets
  # this.startPoint to the local (element-frame) x and y coordinates.
  #
  # @param [Event] evt
  mouseDown: (evt) =>
    this.interacting = true
    this.startPoint = this.getMouseXY evt

  # wheel event callback. Logs evt.deltaX, evt.deltaY, evt.deltaZ, otherwise
  # no-op.
  #
  # @param [Event] evt
  mouseWheel: (evt) ->
    console.log evt.deltaX + ' ' + evt.deltaY + ' ' + evt.deltaZ

  # mouseup event callback. Sets this.interacting to false
  #
  # @param [Event] evt
  mouseUp: (evt) =>
    this.interacting = false

  # touchstart event callback. Sets this.interacting to true and sets
  # this.startPoint to the local (element-frame) x and y coordinates.
  #
  # @param [Event] evt
  touchStart: (evt) =>
    this.interacting = true
    this.startPoint = this.getTouchXY evt

  # touchend event callback. Sets this.interacting to false
  #
  # @param [Event] evt
  touchEnd: (evt) =>
    this.interacting = false

  # Gets the local (element-frame) coordinates of the first targetTouch of a
  # TouchEvent.
  #
  # @param [TouchEvent] evt
  # @return [Object] {x: Number, y: Number} coordinates within the element
  getTouchXY: (evt) =>
    rect = @element.getBoundingClientRect()
    x: evt.targetTouches[0].clientX - rect.left,
    y: evt.targetTouches[0].clientY - rect.top


  # Gets the local (element-frame) coordinates of a mouse event
  #
  # @param [Event] evt
  # @return [Object] {x: Number, y: Number} coordinates within the element
  getMouseXY: (evt) =>
    rect = @element.getBoundingClientRect()
    x: evt.clientX - rect.left
    y: evt.clientY - rect.top

module.NavigationUI = NavigationUI
