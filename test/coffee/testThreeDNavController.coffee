test "testThreeDNavController normalizeMouseTravel", ->
  controller = new lasertutor.ThreeDNavController()
  height = 400
  width = 600
  start = x: 0, y: 0
  end = x: 600, y: 400
  expected = x: 1, y: -1
  actual = controller.normalizeMouseTravel width, height, start, end
  deepEqual actual, expected
  start = end
  end = x: -600, y: -400
  expected = x: -2, y: 2
  actual = controller.normalizeMouseTravel width, height, start, end
  deepEqual actual, expected
  start = end
  end = x: -300, y: -600
  expected = x: 0.5, y: 0.5
  actual = controller.normalizeMouseTravel width, height, start, end
  deepEqual actual, expected

test "testThreeDNavController calculateRotationVector", ->
  controller = new lasertutor.ThreeDNavController()
  zoom = 4
  normalizedTravel = x: 1, y: 0
  expected = yaw: Math.PI / 2, pitch: 0
  actual = controller.calculateRotationVector normalizedTravel, zoom
  deepEqual actual, expected
  zoom = 2
  zoomFactor = 2
  normalizedTravel = x: 1, y: 0
  expected = yaw: Math.PI / 2, pitch: 0
  actual = controller.calculateRotationVector(normalizedTravel, zoom,
                                              null, zoomFactor)
  deepEqual actual, expected

test "testtThreeDNavController clampAngle0_2PI", ->
  controller = new lasertutor.ThreeDNavController()
  epsilon = 0.00001
  expected = Math.PI / 2
  actual = controller.clampAngle0_2PI(Math.PI * 2.5)
  ok Math.abs(expected - actual) < epsilon

test "testThreeDNavController testCameraRotation", ->
  controller = new lasertutor.ThreeDNavController()
  epsilon = 0.00001
  check = (m1, m2) ->
  radiansPerFrameWidth = Math.PI / 2
  frameWidthsOfMouseTravel = 1
  expected = new THREE.Matrix4(
    0, 1, 0, 0,
    -1, 0, 0, 0,
    0, 0, 1, 0
    0, 0, 0, 1
  )
  actual = controller.mouseXYToCameraRotation(
    frameWidthsOfMouseTravel,
    0,
    Math.PI,
    radiansPerFrameWidth
  )
  QUnit.matrixEqual(actual, expected, epsilon)
  
test "testThreeDNavController testCameraRotation", ->
  epsilon = 0.00001
  controller = new lasertutor.ThreeDNavController()
  yaw = Math.PI / 2
  expected = new THREE.Vector3 0, -1, 0
  QUnit.vectorEquals controller.pitchRotationAxis(yaw), expected, epsilon
