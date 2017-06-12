'use strict'

const gulp = require('gulp')
const minifycss = require('gulp-cssnano')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

function buildStyles(opts = {
  stylesRoot: './styles/index.scss',
  name: 'application',
  dest: './build/stylesheets'
}) {
  const isProduction = process.env.NODE_ENV === 'production'

  return gulp.src([opts.stylesRoot])
    .pipe(gulpif(!isProduction, sourcemaps.init({ loadMaps: true })))
      .pipe(concat(`${ opts.name }.scss`))
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
      .pipe(gulpif(isProduction, minifycss()))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(opts.dest))
}

gulp.task('build:styles:homepage', function () {
  return buildStyles({
    stylesRoot: process.env.STYLES_ROOT || './styles/homepage/index.scss',
    name: 'homepage',
    dest: './build/stylesheets'
  })
})

gulp.task('build:styles:admin', function () {
  return buildStyles({
    stylesRoot: process.env.STYLES_ROOT || './styles/admin/index.scss',
    name: 'admin',
    dest: './build/stylesheets'
  })
})

gulp.task('build:styles:artwork', function () {
  return buildStyles({
    stylesRoot: process.env.STYLES_ROOT || './styles/artwork/index.scss',
    name: 'artwork',
    dest: './build/stylesheets'
  })
})

gulp.task('build:styles:webwork', function () {
  return buildStyles({
    stylesRoot: process.env.STYLES_ROOT || './styles/webwork/index.scss',
    name: 'webwork',
    dest: './build/stylesheets'
  })
})
