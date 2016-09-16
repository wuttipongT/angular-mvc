import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('json', function() {

    return gulp.src(config.json.src)
      .pipe(changed(config.json.dest)) // Ignore unchanged files
      .pipe(gulp.dest(config.json.dest))
      .pipe(browserSync.stream());

});
