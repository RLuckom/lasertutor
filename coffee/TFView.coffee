class TFView extends Backbone.View

  constructor: (context) ->
    super context
    @name = context.name
    @parent = context.parent
    @template = JST.tfFrame


  render: =>
    @el.innerHTML = @template { tf:
      name: @name,
      parent: @parent,
      matrix: @printableMatrix(@model.matrix),
      matrixWorld: @printableMatrix(@model.matrixWorld),
      position: @printablePosition(@model.position),
      rotation: @printableRotation(@model.rotation)
    }

  printableMatrix: (matrix) ->
    a = (x for x in matrix.elements)
    a = (x.toFixed 4 for x in a)
    elements: a

  printableRotation: (vec) ->
    x: vec.x.toFixed(4),
    y: vec.y.toFixed(4),
    z: vec.z.toFixed(4),

  printablePosition: (vec) ->
    x: vec.x.toPrecision(4),
    y: vec.y.toPrecision(4),
    z: vec.z.toPrecision(4),

module.TFView = TFView
