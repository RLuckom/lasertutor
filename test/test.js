(function() {
  test("hello test", function() {
    return ok(lasertutor.s(10) === 100, "passed");
  });

  test('test mouseDownCallback', function() {
    var div, evt, navElement;
    div = document.createElement('div');
    div.setAttribute('style', 'position: fixed; left: 0px; top: 0px;');
    document.body.appendChild(div);
    navElement = new lasertutor.NavigationUI(div);
    evt = document.createEvent("MouseEvent");
    evt.initMouseEvent("mousedown", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    div.dispatchEvent(evt);
    ok(navElement.interacting, "mousedown doesn't set interacting");
    return deepEqual({
      x: 0,
      y: 0
    }, navElement.startPoint);
  });


  /*
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
   */

  test("testThreeDNavController normalizeMouseTravel", function() {
    var actual, controller, end, expected, height, start, width;
    controller = new lasertutor.ThreeDNavController();
    height = 400;
    width = 600;
    start = {
      x: 0,
      y: 0
    };
    end = {
      x: 600,
      y: 400
    };
    expected = {
      x: 1,
      y: -1
    };
    actual = controller.normalizeMouseTravel(width, height, start, end);
    deepEqual(actual, expected);
    start = end;
    end = {
      x: -600,
      y: -400
    };
    expected = {
      x: -2,
      y: 2
    };
    actual = controller.normalizeMouseTravel(width, height, start, end);
    deepEqual(actual, expected);
    start = end;
    end = {
      x: -300,
      y: -600
    };
    expected = {
      x: 0.5,
      y: 0.5
    };
    actual = controller.normalizeMouseTravel(width, height, start, end);
    return deepEqual(actual, expected);
  });

  test("testThreeDNavController calculateRotationVector", function() {
    var actual, controller, expected, normalizedTravel, zoom, zoomFactor;
    controller = new lasertutor.ThreeDNavController();
    zoom = 4;
    normalizedTravel = {
      x: 1,
      y: 0
    };
    expected = new THREE.Vector3(Math.PI / 2, 0, 0);
    actual = controller.calculateRotationVector(normalizedTravel, zoom);
    deepEqual(actual, expected);
    zoom = 2;
    zoomFactor = 2;
    normalizedTravel = {
      x: 1,
      y: 0
    };
    expected = new THREE.Vector3(Math.PI / 2, 0, 0);
    actual = controller.calculateRotationVector(normalizedTravel, zoom, null, zoomFactor);
    return deepEqual(actual, expected);
  });

}).call(this);
