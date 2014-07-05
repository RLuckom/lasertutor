# Base class for navigation through a scene
#
# TODO: management of the scene itself is not properly the responsibility
# of this class. Remove it.
class NavigableScene extends NavigationUI

  # Constructor
  #
  # @param [DOMNode] element Where to draw the THREE canvas
  constructor: () ->
    @ZOOMFACTOR = -.3
    @MIN_ZOOM = 0.01
    @RADIANS_PER_FRAME_UNIT = Math.PI
    @yaw = 0
    @pitch = 0
    @scene = new SceneManager()
    super @scene.element
    @startCameraMatrix = @scene.camera.matrix.clone()
    this.interactionRegime = this.revolveCamera
    @controller = new lasertutor.ThreeDNavController()

  # Mousedown callback
  #
  # @param [onmousedown Event] evt
  mouseDown: (evt) =>
    super evt
    @startFocalRotation = @scene.focalPoint.rotation.clone()
    this.interactionRegime = switch evt.button
      when 0 then (evt) -> this.revolveCamera this.getMouseXY evt
      when 4 then (evt) -> this.translateFocalPoint this.getMouseXY evt

  # touchStart callback
  #
  # @param [ontouchstart Event] evt
  touchStart: (evt) =>
    super evt
    @startFocalRotation = @scene.focalPoint.rotation.clone()
    this.interactionRegime = switch evt.targetTouches.length
      when 1 then (evt2) -> this.revolveCamera this.getTouchXY evt2
      when 2 then this.zoom
      when 3 then (evt2) -> this.translateFocalPoint this.getTouchXY evt2

  # Mousemove callback
  #
  # @param [onmousemove Event] evt
  mouseMove: (evt) =>
    if this.interacting then this.interactionRegime evt

  # Tries to turn mouse movement into sensible perspective movement.
  #
  # TODO: turn mouse movement into sensible perspective movement.
  #
  # @param [onmousedown Event] evt
  revolveCamera: (xyPoint) =>
    previous_pitch = @pitch
    previous_yaw = @yaw
    mouseTravel = @controller.normalizeMouseTravel(
      @scene.element.offsetWidth,
      @scene.element.offsetHeight,
      this.startPoint, xyPoint
    )
    pitch_axis = @controller.pitchRotationAxis @yaw
    @yaw = @controller.clampAngle0_2PI(
      @yaw + @RADIANS_PER_FRAME_UNIT * mouseTravel.x
    )
    @pitch += @RADIANS_PER_FRAME_UNIT * mouseTravel.y
    @pitch = if @pitch > Math.PI then Math.PI else @pitch
    @pitch = if @pitch < 0 then 0 else @pitch
    @scene.focalPoint.rotation.x += pitch_axis.x * (@pitch - previous_pitch)
    @scene.focalPoint.rotation.y += pitch_axis.y * (@pitch - previous_pitch)
    @scene.focalPoint.rotation.z -= @yaw - previous_yaw
    rotation = @controller.mouseXYToCameraRotation(
      mouseTravel.x, mouseTravel.y, @yaw, @RADIANS_PER_FRAME_UNIT
    )
    #@scene.focalPoint.applyMatrix rotation
    @startPoint = xyPoint
    @scene.updateViews()

  # Mousewheel callback. Zooms according to wheel movement.
  #
  # @param [onmousewheel Event] evt
  mouseWheel: (evt) =>
    evt.preventDefault()
    new_z = @scene.camera.position.z + @ZOOMFACTOR * -evt.deltaY
    @scene.camera.position.z = if new_z >= @MIN_ZOOM then new_z else @MIN_ZOOM

  # Adds a mesh to the THREE scene TODO: this belongs elsewhere
  #
  # @param [THREE.Mesh] mesh
  add: (mesh) ->
    @scene.add mesh

module.NavigableScene = NavigableScene


# Tree class to show and hide Object3dViews
class ObjectViewTree extends ambigui.DOGWOOD.BasicTree

  # Makes a node
  #
  # @param {Object3D} options.object3D Object to track
  constructor: (options) ->
    @object3D = options.object3D
    @view = new Object3DView {
      model: @object3D,
      name: options.text,
      parent: if not options.parent? then 'world' else options.parent.text
    }
    super options
    console.log @toString()
    @move()

  # Override this to add custom content.
  #
  # @return {DOMElement} Element to use as content
  makeDiv: =>
    @contentDiv = @htmlElement 'div', {style: 'width: 800px; height: 180px;'}
    @view.render()
    @contentDiv.appendChild @view.el
    @view.el.setAttribute 'style', 'width: 800px; height: 180px;'
    return @view.el

  # refreshes the displayed info.
  reRender: =>
    @view.render()
    c.reRender() for c in @visibleChildren()


module.ObjectViewTree = ObjectViewTree

# Class to manage a scene without directly subclassing it.
class SceneManager

  # set up scene
  #
  # @param {String} elID ID of element in which to draw self
  constructor: (threeElId='Three', infoElId="Tree") ->
    @element = document.getElementById threeElId
    @scene = new THREE.Scene()
    @treeUI = new ObjectViewTree(
      object3D: @scene
      text: "scene"
      el: document.getElementById infoElId,
      marginTop: 25,
      marginBottom: 10
    )
    cylGeom = new THREE.CylinderGeometry .4, .4, .2, 16
    cylMat = new THREE.MeshBasicMaterial color: 0xffff00
    @focalPoint = new THREE.Mesh cylGeom, cylMat
    @scene.add @focalPoint
    @camera = new THREE.PerspectiveCamera 75, 1, 0.1, 1000
    @camera.position.z = 5
    @focalPoint.add @camera
    @treeUI.newChild({text: "camera", object3D: @camera, isHidden: true})
    @treeUI.newChild(
      text: "focalPoint"
      object3D: @focalPoint
      isHidden: true
    )
    @renderer = new THREE.WebGLRenderer()
    @element.appendChild @renderer.domElement
    @renderer.setSize 500, 500
    @renderTHREE()
    @updateViews()

  # THREE's mainloop. TODO: This belongs elsewhere.
  renderTHREE: =>
    requestAnimationFrame this.renderTHREE
    @renderer.render @scene, @camera

  # Adds a mesh to the THREE scene TODO: this belongs elsewhere
  #
  # @param [THREE.Mesh] mesh
  add: (mesh, name="noName", parent=null) =>
    @scene.add mesh
    @treeUI.newChild(
      text: name,
      object3D: mesh,
      isHidden: true,
    )

  # Renders the infotree.
  updateViews: =>
    @treeUI.reRender()

module.SceneManager = SceneManager
