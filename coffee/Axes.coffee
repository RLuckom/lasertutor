# Draws 3D Axes in a scene so I can get my bearings
class Axes

  # @param [THREE.Scene] scene scene in which to render the axes
  constructor: ->
    x_material = new THREE.LineBasicMaterial color: 0x0000ff
    x_geometry = new THREE.Geometry()
    x_geometry.vertices.push new THREE.Vector3 -100, 0, 0
    x_geometry.vertices.push new THREE.Vector3 100, 0, 0
    @x_axis = new THREE.Line x_geometry, x_material
    y_material = new THREE.LineBasicMaterial color: 0x00ff00
    y_geometry = new THREE.Geometry()
    y_geometry.vertices.push new THREE.Vector3 0, -100, 0
    y_geometry.vertices.push new THREE.Vector3 0, 100, 0
    @y_axis = new THREE.Line y_geometry, y_material
    z_material = new THREE.LineBasicMaterial color: 0xff0000
    z_geometry = new THREE.Geometry()
    z_geometry.vertices.push new THREE.Vector3 0, 0, -100
    z_geometry.vertices.push new THREE.Vector3 0, 0, 100
    @z_axis = new THREE.Line z_geometry, z_material

  # Adds the axes to scene
  #
  # @param [THREE.Scene] scene scene in which to render the axes
  addTo: (scene) ->
    scene.add @x_axis
    scene.add(this.xLine(i)) for i in [-100..100] by 10
    scene.add @y_axis
    scene.add(this.yLine(i)) for i in [-100..100] by 10
    scene.add @z_axis
  
  # Convenience method for generating a line parallel to the x-axis
  # at y = yPos, z = 0
  #
  # @param [Number] yPos
  xLine: (yPos) ->
    x_material = new THREE.LineBasicMaterial color: 0x0000ff
    x_geometry = new THREE.Geometry()
    x_geometry.vertices.push new THREE.Vector3 -100, yPos, 0
    x_geometry.vertices.push new THREE.Vector3 100, yPos, 0
    return new THREE.Line x_geometry, x_material
  
  # Convenience method for generating a line parallel to the y-axis
  # at x = xPos, z = 0
  #
  # @param [Number] xPos
  yLine: (xPos) ->
    y_material = new THREE.LineBasicMaterial color: 0x00ff00
    y_geometry = new THREE.Geometry()
    y_geometry.vertices.push new THREE.Vector3 xPos, -100, 0
    y_geometry.vertices.push new THREE.Vector3 xPos, 100, 0
    return new THREE.Line y_geometry, y_material

module.Axes = Axes
