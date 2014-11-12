'use strict'

var clearBuildTarget = require('./lib/clear-build-target'),
    mergeTrees = require('broccoli-merge-trees')

clearBuildTarget()

module.exports = mergeTrees([], {
  overwrite: true
})
