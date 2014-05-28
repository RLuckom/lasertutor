# Backbone.js View showing position, orientation, and scene graph data about an
# object
class Object3DView extends Backbone.View

  # Constructor.
  #
  # @param [Object] context
  # @param [THREE.Object3D] context.model
  # @param [String] context.name the name of this Object3D
  # @param [String] context.parent this Object3D's parent in the scene graph
  # @param [DOMNode] context.el where to draw the view. Defaults to div.
  # @return [Object3DView]
  constructor: (context) ->
    super context
    @name = context.name
    @parent = context.parent
    @template = JST.Object3D
    @model.position.name = 'Position'
    @model.rotation.name = 'Rotation'
    @model.matrix.name = '.matrix'
    @model.matrixWorld.name = '.matrixWorld'

  # Updates the innerHTML of this View's element.
  render: =>
    @el.innerHTML = @template {
      name: @name,
      parent: @parent,
      matrix: JST.Matrix4(@model.matrix),
      matrixWorld: JST.Matrix4(@model.matrixWorld),
      position: JST.Vector3(@model.position),
      rotation: JST.Euler(@model.rotation)
    }

module.Object3DView = Object3DView
