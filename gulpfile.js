const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
const imagemin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;

// Task for compiling our CSS files using PostCSS
function cssTask(cb) {
	return src("./src/*.css") // read .css files from ./src/ folder
		.pipe(postcss()) // compile using postcss
		.pipe(dest("./dist/css")) // paste them in ./dist/css folder
		.pipe(browserSync.stream());
	cb();
}

function scripts(cb) {
	return src(['src/*.js',])
		.pipe(uglify())
		.pipe(dest('./dist/js'))
		.pipe(browserSync.stream());
	cb();
}

// Task for minifying images
function imageminTask(cb) {
	return src("./dist/images/*")
		.pipe(imagemin())
		.pipe(dest("./dist/images"));
	cb();
}

function browsersyncServe(cb) {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
	cb();
}

function browsersyncReload(cb) {
	browserSync.reload();
	cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
	watch("./**/*.html", browsersyncReload);
	watch(["./src/*.css"], series(cssTask, browsersyncReload));
	watch(["./src/*.js"], series(scripts, browsersyncReload));
}

// Default Gulp Task
exports.default = series(cssTask, browsersyncServe, watchTask);
exports.css = cssTask;
exports.images = imageminTask;
exports.scripts = scripts;

