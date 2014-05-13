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
  expected = new THREE.Vector3 Math.PI / 2, 0, 0
  actual = controller.calculateRotationVector normalizedTravel, zoom
  deepEqual actual, expected
  zoom = 2
  zoomFactor = 2
  normalizedTravel = x: 1, y: 0
  expected = new THREE.Vector3 Math.PI / 2, 0, 0
  actual = controller.calculateRotationVector(normalizedTravel, zoom,
                                              null, zoomFactor)
  deepEqual actual, expected
