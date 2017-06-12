'use strict'

const gulp = require('gulp')
const argv = require('yargs').argv
const requireDir = require('require-dir')

// Require all tasks.
requireDir('./tasks', { recurse: true })

function setProductionEnv(done) {
  process.env.NODE_ENV = 'production'

  return done()
}

function watch() {
  gulp.watch('assets/**/*', gulp.parallel('build:assets', 'build:html'))
  gulp.watch('styles/**/*', gulp.parallel(
    'build:styles:homepage'
  ))
  gulp.watch([
    'server/**/*',
    'config/keys/**/*',
    'config/database.js',
    'config/server.js'
  ], gulp.series('server'))
}
watch.description = 'Watch variable folders for changes and rebuild if necessary.'
gulp.task(watch)

// Build for production (include minification, revs, etc.).
const buildProduction = gulp.series(
  'clean',
  setProductionEnv,
  gulp.parallel(
    'build:scripts:ga',
    'build:styles:homepage',
    'build:assets',
    'build:html'
  ),
  // 'rev:assets',
  // gulp.parallel('rev:js', 'rev:css'),
  // 'rev:html'
)

// Build for development (include React dev, no revs, no minification, etc.).
const buildDevelopment = gulp.series(
  'clean',
  gulp.parallel(
    'build:scripts:ga',
    'build:styles:homepage',
    'build:assets',
    'build:html'
  )
)

// Choose between building for dev or production based on --production flag.
function build(done) {
  if (argv.production) {
    buildProduction()
  } else {
    buildDevelopment()
  }

  return done()
}
build.description = 'Build all the things!'
build.flags = {
  '--production': 'Builds in production mode (minification, revs, etc.).'
};
gulp.task(build)

gulp.task('default', gulp.series(build, 'server', watch))
