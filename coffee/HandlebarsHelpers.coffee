# Handlebars helper to format a floating-point number to 3 decimal places.
#
# @param [Number] numDigits integer
# @param [Number] n number to be formatted.
floatFormat = (numDigits, n) ->
  n.toFixed(numDigits)

Handlebars.registerHelper('sig', floatFormat)
