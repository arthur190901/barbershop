import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import fileinclude from 'gulp-file-include'
import cssmin from 'gulp-cssmin'
import image from 'gulp-image'
import jsmin from 'gulp-jsmin'
import clean from 'gulp-clean'
import browsersync from 'browser-sync'

function html() {
  return gulp
    .src(['index.html', 'shop.html', 'product-card.html', 'login.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'))
}
gulp.task(html)

function css() {
  return gulp
    .src('assets/css/style.css')
    .pipe(cssmin())
    .pipe(gulp.dest('build/assets/css'))
}
gulp.task(css)

function font() {
  return gulp.src('assets/fonts/*.ttf').pipe(gulp.dest('build/assets/fonts'))
}
gulp.task(font)

function favicon() {
  return gulp.src('favicon.png').pipe(gulp.dest('build/'))
}
gulp.task(favicon)

function img() {
  return gulp
    .src('assets/img/*')
    .pipe(
      image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true,
      })
    )
    .pipe(gulp.dest('build/assets/img'))
}
gulp.task(img)

function js() {
  return gulp.src(['assets/js/script.js', 'assets/js/login.js'])
    .pipe(jsmin())
    .pipe(gulp.dest('build/assets/js'))
}
gulp.task(js)

function deleteBuild() {
  return gulp.src('build', { read: false, allowEmpty: true }).pipe(clean())
}
gulp.task(deleteBuild)

gulp.task('start', gulp.series(deleteBuild, html, font, favicon, css, img, js))
