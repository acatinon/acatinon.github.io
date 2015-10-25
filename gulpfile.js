var gulp = require('gulp');
var jquery = require('gulp-jquery');
var shell = require('gulp-shell');
var buildSemantic = require('./components/semantic/tasks/build');

gulp.task('default', function() {
    gulp.src("./components/semantic/dist/semantic.min.css")
    .pipe(gulp.dest('css'));
    
    gulp.src("./components/semantic/dist/semantic.min.js")
    .pipe(gulp.dest('js'));
});


gulp.task('jquery', function () {
    return jquery.src({
        release: 2 //jQuery 2 
    })
    .pipe(gulp.dest('./dist/jquery/'));
    // creates ./public/vendor/jquery.custom.js 
});

gulp.task('buildSemantic', buildSemantic);

gulp.task('buildJekyll', shell.task('jekyll build'));