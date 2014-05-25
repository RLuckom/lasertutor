# Class to calculate changes in camera position
# and orientation. Intended as a testable back-end
# to a thin-but-difficult-to-test set of ui elements and
# callbacks.
class ThreeDNavController

  # convert mouse travel into a percentage of the screen or element
  # width and height; using the width and height as normalized units
  # ensures that resizing the window or element doesn't mess up navigation.
  # Note that this function can return x and y values greater than 1.
  #
  # @param [Number] width width of situationally-appropriate container
  # @param [Number] height height of situationally-appropriate container
  # @param [Object] start x: {Number, y: Number}
  # @param [Object] end x: {Number, y: Number}
  # @return [Object] {x: Number, y: Number} -- units are width and height
  normalizeMouseTravel: (width, height, start, end) ->
    dx = end.x - start.x
    dy = start.y - end.y
    x: dx / width, y: dy / height

  # Calculates how much pitch and yaw is called for, based on the number of
  # widths / heights moved by the mouse and the zoom.
  #
  # @param [Object] normalizedTravel {x: Number, y: Number} -- units are width
  #   and height
  # @param [Number] zoom distance between camera and focal point
  # @param [Number] zeroZoomRotation radians rotated per element-worth of mouse
  #   movement when zoom is 0. Defaults to 2 * pi.
  # @param zoomFactor [number] : optional argument to scale the zoom. Defaults
  #   to 1
  # @return [object] {pitch: Number, yaw: Number}
  calculateRotationVector:
    (normalizedTravel, zoom, zeroZoomRotation = Math.PI * 2, zoomFactor = 1) ->
      zoom *= zoomFactor
      zoomRotation =
        if zoom == 0 then zeroZoomRotation else zeroZoomRotation / zoom

      yaw: normalizedTravel.x * zoomRotation,
      pitch: normalizedTravel.y * zoomRotation


  # sets angle to angle mod 2pi
  #
  # @param [Number] theta radians
  clampAngle0_2PI: (theta) ->
    theta = theta % (2 * Math.PI)
    if theta > 0 then theta else (2 * Math.PI) + theta

  # updates the rotation submatrix of the provided matrix based on mouse
  # movement.
  #
  # @param [Number] mouseDX normalized units
  # @param [Number] mouseDY normalized units
  # @param [Number] yaw radians
  # @param [Number] radiansPerFrameUnit
  mouseXYToCameraRotation: (mouseDX, mouseDY, yaw, radiansPerFrameUnit) ->
    mouseTravel = Math.sqrt mouseDX * mouseDX + mouseDY * mouseDY
    theta = mouseTravel * radiansPerFrameUnit
    pitch_theta = mouseDY / mouseTravel
    s = Math.sin theta
    c = Math.cos theta
    v = 1 - c
    axis = {z: -mouseDX / mouseTravel,
    x: Math.cos(yaw) * pitch_theta,
    y: -Math.sin(yaw) * pitch_theta}
    new THREE.Matrix4(
      axis.x * axis.x * v + c, axis.x * axis.y * v - axis.z * s,
      axis.x * axis.z * v + s * axis.y, 0,
      axis.y * axis.x * v + axis.z * s, axis.y * axis.y * v + c,
      axis.y * axis.z * v - axis.x * s, 0,
      axis.z * axis.x * v - axis.y * s, axis.y * axis.z * v + axis.x * s,
      axis.z * axis.z * v + c, 0,
      0, 0, 0, 1
    )

  # As the yaw changes, so does the axis through the xy plane about which pitch
  # should rotate. This takes the yaw and returns that axis
  #
  # @param [Number] yaw radians.
  pitchRotationAxis: (yaw) ->
    new THREE.Vector3 Math.cos(yaw), -Math.sin(yaw), 0
   

module.ThreeDNavController = ThreeDNavController
