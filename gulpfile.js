'use strict'

const gulp = require('gulp')
const argv = require('yargs').argv
const requireDir = require('require-dir')

// Require all tasks.
requireDir('./tasks', { recurse: true })

function watch() {
  gulp.watch([
    'server/**/*',
    'config/**/*'
  ], gulp.series('server'))
}
watch.description = 'Watch variable folders for changes and rebuild if necessary.'
gulp.task(watch)

gulp.task('default', gulp.series('server', watch))
