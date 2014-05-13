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

  # Calculates how much along which (local) axes the view should rotate about
  # the focal point, based on the number of widths / heights moved by the mouse
  # and the zoom.
  #
  # @param [Object] normalizedTravel {x: Number, y: Number} -- units are width
  #   and height
  # @param [Number] zoom distance between camera and focal point
  # @param [Number] zeroZoomRotation radians rotated per element-worth of mouse
  #   movement when zoom is 0. Defaults to 2 * pi.
  # @param zoomFactor [number] : optional argument to scale the zoom. Defaults
  #   to 1
  # @return [THREE.Vector3] XYZ rotation vector. Z will always be 0.
  calculateRotationVector:
    (normalizedTravel, zoom, zeroZoomRotation = Math.PI * 2, zoomFactor = 1) ->
      zoom *= zoomFactor
      zoomRotation =
        if zoom == 0 then zeroZoomRotation else zeroZoomRotation / zoom

      new THREE.Vector3 normalizedTravel.x * zoomRotation,
                        normalizedTravel.y * zoomRotation,
                        0



module.ThreeDNavController = ThreeDNavController
