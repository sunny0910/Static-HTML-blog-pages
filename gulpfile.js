var gulp = require('gulp');
var gs =require('gulp-sass');
var ap= require('autoprefixer')
var ct= require('gulp-concat');
var ug= require('gulp-minify');

gulp.task('default', function() {
	gulp.watch('resources/assets/styles/sass/main.scss',['styles']);
});

gulp.task('scripts', function(){
	gulp.src('js/**/*.js')
		.pipe(ct('output.js'))
		.pipe(ug())
		.pipe(gulp.dest('./minified-js'));
})

gulp.task('styles', function(){
    gulp.src('resources/assets/styles/sass/main.scss ')
		.pipe(gs().on('error',gs.logError))
		
		.pipe(gulp.dest('resources/assets/styles/css'));
});

