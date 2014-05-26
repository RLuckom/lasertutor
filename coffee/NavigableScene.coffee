class NavigableScene extends NavigationUI

  constructor: (@element) ->
    @ZOOMFACTOR = -.3
    @MIN_ZOOM = 0.01
    @RADIANS_PER_FRAME_UNIT = Math.PI
    super @element
    @yaw = 0
    @pitch = 0
    @scene = new THREE.Scene()
    cylGeom = new THREE.CylinderGeometry .4, .4, .2, 16
    cylMat = new THREE.MeshBasicMaterial color: 0xffff00
    @focalPoint = new THREE.Mesh cylGeom, cylMat
    @view = new TFView model: @focalPoint, name: 'focalPoint', parent: 'world'
    @view.render()
    document.body.appendChild @view.el
    @scene.add @focalPoint
    @camera = new THREE.PerspectiveCamera 75, 1, 0.1, 1000
    @camera.position.z = 5
    @focalPoint.add @camera
    @startCameraMatrix = @camera.matrix.clone()
    @renderer = new THREE.WebGLRenderer()
    @element.appendChild @renderer.domElement
    @renderer.setSize 500, 500
    this.interactionRegime = this.revolveCamera
    @controller = new lasertutor.ThreeDNavController()

  mouseDown: (evt) =>
    super evt
    @startFocalRotation = @focalPoint.rotation.clone()
    this.interactionRegime = switch evt.button
      when 0 then (evt) -> this.revolveCamera this.getMouseXY evt
      when 4 then (evt) -> this.translateFocalPoint this.getMouseXY evt

  touchStart: (evt) =>
    super evt
    @startFocalRotation = @focalPoint.rotation.clone()
    this.interactionRegime = switch evt.targetTouches.length
      when 1 then (evt2) -> this.revolveCamera this.getTouchXY evt2
      when 2 then this.zoom
      when 3 then (evt2) -> this.translateFocalPoint this.getTouchXY evt2

  mouseMove: (evt) =>
    if this.interacting then this.interactionRegime evt

  revolveCamera: (xyPoint) =>
    previous_pitch = @pitch
    previous_yaw = @yaw
    console.log @startPoint.toSource(), xyPoint.toSource()
    console.log @camera.position.toSource()
    mouseTravel = @controller.normalizeMouseTravel(
      @element.offsetWidth, @element.offsetHeight, this.startPoint, xyPoint
    )
    pitch_axis = @controller.pitchRotationAxis @yaw
    @yaw = @controller.clampAngle0_2PI(
      @yaw + @RADIANS_PER_FRAME_UNIT * mouseTravel.x
    )
    @pitch += @RADIANS_PER_FRAME_UNIT * mouseTravel.y
    @pitch = if @pitch > Math.PI then Math.PI else @pitch
    @pitch = if @pitch < 0 then 0 else @pitch
    console.log @yaw, @pitch, pitch_axis.toSource()
    @focalPoint.rotation.x += pitch_axis.x * (@pitch - previous_pitch)
    @focalPoint.rotation.y += pitch_axis.y * (@pitch - previous_pitch)
    @focalPoint.rotation.z -= @yaw - previous_yaw
    rotation = @controller.mouseXYToCameraRotation(
      mouseTravel.x, mouseTravel.y, @yaw, @RADIANS_PER_FRAME_UNIT
    )
    #@focalPoint.applyMatrix rotation
    @startPoint = xyPoint
    @view.render()

  mouseWheel: (evt) =>
    evt.preventDefault()
    console.log evt.deltaY
    new_z = @camera.position.z + @ZOOMFACTOR * -evt.deltaY
    @camera.position.z = if new_z >= @MIN_ZOOM then new_z else @MIN_ZOOM

  render: =>
    requestAnimationFrame this.render
    @renderer.render @scene, @camera

  add: (mesh) ->
    @scene.add mesh

module.NavigableScene = NavigableScene
