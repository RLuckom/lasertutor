test 'test mouseDownCallback', ->
  div = document.createElement 'div'
  div.setAttribute 'style', 'position: fixed; left: 0px; top: 0px;'
  document.body.appendChild div
  navElement = new lasertutor.NavigationUI div
  evt = document.createEvent "MouseEvent"
  evt.initMouseEvent("mousedown", true, true, window,
    1, 0, 0, 0, 0, false, false, false, false, 0, null)
  div.dispatchEvent evt
  ok navElement.interacting, "mousedown doesn't set interacting"
  deepEqual {x: 0, y: 0}, navElement.startPoint

###
COULD NOT GET THIS TO WORK
see http://stackoverflow.com/questions/23597493/how-can-i-trigger-a-touchevent-in-a-grunt-run-qunit-test-with-plain-javascript
test "test TouchStartCallback", ->
  div = document.createElement 'div'
  div.setAttribute 'style', 'position: fixed; left: 0px; top: 0px;'
  div.addEventListener 'touchstart', -> console.log '1ts'
  document.body.appendChild div
  navElement = new lasertutor.NavigationUI div
  evt = document.createEvent "TouchEvent"
  touch1 = document.createTouch window, div, 11211, 0, 0, 0, 0
  touchList = document.createTouchList touch1
  evt.initTouchEvent("touchstart", true, true, window,
    null, 0, 0, 0, 0, false, false, false, false,
    touchList, touchList, touchList, 1, 0)
  console.log div.dispatchEvent evt
  ok navElement.interacting, "touchstart doesn't set interacting"
  deepEqual {x: 0, y: 0}, navElement.startPoint
###
