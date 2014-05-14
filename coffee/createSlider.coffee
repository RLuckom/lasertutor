createSlider = (callbackCreator, uniqueName, max, min, step) ->
  sliderInput = document.createElement 'input'
  sliderInput.setAttribute 'type', 'text'
  sliderLabel = document.createElement 'label'
  sliderLabel.setAttribute 'for', uniqueName
  sliderLabel.textContent =  ''
  sliderSpec =
    value: min
    min: min
    max: max
    step: step
    slide: callbackCreator sliderLabel
  sliderDiv = document.createElement 'div'
  labelPar = document.createElement 'p'
  slider = document.createElement 'div'
  $(slider).slider sliderSpec
  sliderDiv.setAttribute 'id', uniqueName
  labelPar.appendChild sliderLabel
  sliderDiv.appendChild labelPar
  sliderDiv.appendChild slider
  return sliderDiv

module.createSlider = createSlider
