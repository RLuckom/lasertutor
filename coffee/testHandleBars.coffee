testHandleBars = ->
  template = JST.tfFrame
  testtf =  {
    position: {x: 1.0, y: 2.0, z: 3.0},
    rotation: {x: 4.0, y: 5.0, z: 6.0},
    matrix: {elements: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0,
    10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0]},
    matrixWorld: {elements: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0,
    10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.3]}
  }
  context = tf: testtf
  document.body.innerHTML += template context

module.testHandleBars = testHandleBars
