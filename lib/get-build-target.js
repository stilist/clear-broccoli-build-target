'use strict'

function getBuildTarget() {
  var argv = process.argv || []

  var build_offset = argv.indexOf('build')
  if (-1 === build_offset) return null

  var target = argv[build_offset + 1]
  return ('undefined' === typeof target) ? null : target
}

module.exports = getBuildTarget
