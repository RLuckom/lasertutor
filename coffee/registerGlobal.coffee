exports = exports ? this
registerGlobal = (uniqueName, objectToRegister) ->
  exports[uniqueName] = objectToRegister
  window[uniqueName] = objectToRegister
module = {}
registerGlobal 'lasertutor', module
