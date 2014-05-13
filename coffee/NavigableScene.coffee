class NavigableScene extends NavigationUI

  constructor: (element) ->
    this.ZOOMFACTOR = -.3
    this.ROTATIONFACTOR = .006
    super element
    this.scene = new THREE.Scene()
    cylGeom = new THREE.CylinderGeometry .4, .4, .2, 16
    cylMat = new THREE.MeshBasicMaterial color: 0xffff00
    this.focalPoint = new THREE.Mesh cylGeom, cylMat
    this.scene.add this.focalPoint
    this.camera = new THREE.PerspectiveCamera 75, 1, 0.1, 1000
    this.camera.position.z = 5
    # this.focalPoint.add this.camera
    this.startCameraMatrix = this.camera.matrix.clone()
    this.renderer = new THREE.WebGLRenderer()
    element.appendChild this.renderer.domElement
    this.renderer.setSize 500, 500
    this.interactionRegime = this.revolveCamera

  mouseDown: (evt) =>
    super evt
    this.startCameraMatrix = this.camera.matrix.clone()
    this.interactionRegime = switch evt.button
      when 0 then (evt) -> this.revolveCamera this.getMouseXY evt
      when 4 then (evt) -> this.translateFocalPoint this.getMouseXY evt

  touchStart: (evt) =>
    super evt
    this.startCameraMatrix = this.camera.matrix.clone()
    this.interactionRegime = switch evt.targetTouches.length
      when 1 then (evt2) -> this.revolveCamera this.getTouchXY evt2
      when 2 then this.zoom
      when 3 then (evt2) -> this.translateFocalPoint this.getTouchXY evt2

  mouseMove: (evt) =>
    if this.interacting then this.interactionRegime evt

  revolveCamera: (xyPoint) =>
    dX = (this.startPoint.x - xyPoint.x)
    dY = (this.startPoint.y - xyPoint.y)
    theta = this.ROTATIONFACTOR * Math.sqrt dX * dX + dY * dY
    rotationVector = new THREE.Vector3 0, dX, dY
    rotationVector.normalize()
    rotationMatrix = new THREE.Matrix4()
    rotationMatrix.makeRotationAxis rotationVector, theta
    rotationMatrix.multiply this.startCameraMatrix
    this.camera.position.setFromMatrixPosition rotationMatrix
    console.log this.camera.position.toSource()
    this.camera.rotation.setFromRotationMatrix rotationMatrix


  mouseWheel: (evt) =>
    evt.preventDefault()
    zoomVector = new THREE.Vector3 0, 0, this.ZOOMFACTOR * evt.deltaY
    this.camera.position = this.camera.localToWorld zoomVector

  render: =>
    requestAnimationFrame this.render
    this.renderer.render this.scene, this.camera

  addObject: (mesh) ->
    this.scene.add mesh

module.NavigableScene = NavigableScene
