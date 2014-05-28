# Float comparison with epsilon.
#
# @param [Number] expected
# @param [Number] actual
# @param [Number] epsilon
almostEqual = (actual, expected, epsilon, message) ->
  message ?= "expected: #{expected}  got: #{actual}"
  QUnit.push(
    (Math.abs(actual - expected) <= epsilon) or (actual is expected),
    actual,
    expected,
    message
  )

# Comparison between THREE.Matrix4 objects with epsilon
#
# @param actual [THREE.Matrix4]
# @param expected [THREE.Matrix4]
# @param epsilon [Number]
matrixEqual = (actual, expected, epsilon) ->
  actual = actual.elements
  expected = expected.elements
  ok actual.length == expected.length, "matrices are different sizes"
  expectedString = ''
  for e in expected
    expectedString += "#{e}, "
  actualString = ''
  for e in actual
    actualString += "#{e}, "
  message = "expected: " + expectedString + " got: " + actualString
  m = (i) ->
    "Element #{i} not equal:\nExpected has #{expected[i]}\n
    Actual has #{actual[i]}\nExpected: #{expectedString}\n
    Actual:#{actualString}"
     
  QUnit.almostEqual(el, expected[i], epsilon, m i) for el, i in actual

# Comparison between two THREE.Vector objects
#
# @param [THREE.Vector] actual
# @param [THREE.Vector] expected
# @param [Number] epsilon
vectorEquals = (actual, expected, epsilon) ->
  actual = actual.toArray()
  expected = expected.toArray()
  ok actual.length == expected.length, "matrices are different sizes"
  expectedString = ''
  for e in expected
    expectedString += "#{e}, "
  actualString = ''
  for e in actual
    actualString += "#{e}, "
  message = "expected: " + expectedString + " got: " + actualString
  m = (i) ->
    "Element #{i} not equal:\nExpected has #{expected[i]}\n
    Actual has #{actual[i]}\nExpected: #{expectedString}\n
    Actual:#{actualString}"
     
  QUnit.almostEqual(el, expected[i], epsilon, m i) for el, i in actual

QUnit.extend QUnit, {
  'almostEqual': almostEqual,
  'matrixEqual': matrixEqual,
  'vectorEquals': vectorEquals
}
