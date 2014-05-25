test "testQUnitExtensions testAlmostEqual", ->
  QUnit.almostEqual 100 / 3, 33.333, .001
  QUnit.almostEqual 9, 9, 0
  QUnit.almostEqual Infinity, Infinity, 1

test "testQUnitExtensions testMatrixEqual", ->
  m1 = new THREE.Matrix4(
    Math.PI / 2, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, Math.sqrt 2,
    0, 0, 0, 0
  )
  m2 = m1.clone()
  QUnit.matrixEqual m1, m2, 0
  m2.elements[0] += 0.0001
  QUnit.matrixEqual m1, m2, 0.001
