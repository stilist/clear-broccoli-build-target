'use strict'

var buildTarget = require('./get-build-target'),
    fs = require('fs-extra')

function clearBuildTarget() {
  var build_target = buildTarget()

  if (build_target) {
    var build_path = './' + build_target

    fs.removeSync(build_path, function (err) {
      if (err) return console.error(err)
    })
  } else {
    console.error('Unable to determine build target')
  }
}

module.exports = clearBuildTarget
