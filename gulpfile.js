const gulp = require('gulp')
const replace = require('gulp-replace')
const gzip = require('gulp-gzip')
const argv = require('yargs').argv

let dir = argv.dir || 'dev'

const gzipOption = {
  threshold: '2kb',
  gzipOptions: {
    level: 9
  }
}

exports.build = function(cb) {
  gulp.src(['page/**/*'])
      .pipe(replace(/(<!-- | -->)/g, ''))
      .pipe(gulp.dest(`./dist`))
      .pipe(gzip({
        deleteMode: `./dist`,
        ...gzipOption
      }))
      .pipe(gulp.dest(`./dist`))
  
    //js
    gulp.src([
      'public/js/*.js',
    ])
      .pipe(gulp.dest(`./dist/js`))
      .pipe(gzip({
        deleteMode: `./dist/js`,
        ...gzipOption
      }))
      .pipe(gulp.dest(`./dist/js`))
  

    //js
    gulp.src([
      'public/common/*.*',
    ])
    .pipe(gulp.dest(`./dist/common`))

    //css
    gulp.src(['public/css/**/*'])
      .pipe(gulp.dest(`./dist/css`))
      .pipe(gzip({
        deleteMode: `./dist/css`,
        ...gzipOption
      }))
      .pipe(gulp.dest(`./dist/css`))
  
    //image
    gulp.src('public/img/*.svg')
      .pipe(gulp.dest(`./dist/img`))
      .pipe(gzip({
        deleteMode: `./dist/img`,
        ...gzipOption
      }))
      .pipe(gulp.dest(`./dist/img`))
  
    gulp.src(['public/img/*.*', '!public/img/*.svg'])
      .pipe(gulp.dest(`./dist/img`))

    cb()
}