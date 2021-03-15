/*

Gulp web seed
Made with <3 by Vitor Takara

1) npm start - compila o projeto e serve pelo browserSync para o autoreload

*Caso não funcione, instale o gulp globalmente: npm install gulp -g

*/

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  prefix = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  browserSync = require("browser-sync"),
  notify = require("gulp-notify"),
  runSequence = require("run-sequence"),
  rigger = require("gulp-rigger"),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify-es').default,
  htmlmin = require('gulp-htmlmin'),
  rimraf = require("rimraf");

  
sass.compiler = require('node-sass');

// JS
gulp.task("required-js", function() {
  return gulp
    .src(["app/js/index.js"])
    .pipe(sourcemaps.init()) //ATIVAR SE QUISER SOURCEMAP
    .pipe(rigger())
    .pipe(concat("main.js"))
    .pipe(uglify(/* options */))
    .pipe(sourcemaps.write()) //ATIVAR SE QUISER SOURCEMAP
    .pipe(gulp.dest("dist/js"));
});

// JS
gulp.task("views-js", function() {
  return gulp
    .src(["app/views/**/*.js"])
    .pipe(sourcemaps.init()) //ATIVAR SE QUISER SOURCEMAP
    .pipe(uglify(/* options */))
    .pipe(sourcemaps.write()) //ATIVAR SE QUISER SOURCEMAP
    .pipe(gulp.dest("dist/views"));
});

// BROWSERSYNC
gulp.task("browser-sync", function() {
  browserSync.init({server: {baseDir: "dist",index:"index.html"}});
  gulp.watch("app/**/*").on("change", browserSync.reload);
  gulp.watch("app/**/*.html",  gulp.series(['html', 'views-html']));
  gulp.watch("app/styles/**/*.scss", gulp.series('sass'));
  gulp.watch("app/**/*.js", gulp.series(['required-js', 'views-js']));
  gulp.watch("app/assets/img/**/*.*", gulp.series('img'));
});

// HTML
gulp.task("views-html", function() {
  return gulp.src("app/views/**/*.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("dist/views"));
});

// HTML
gulp.task("html", function() {
  return gulp.src("app/index.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("dist"));
});

// Favicon
gulp.task("favicon", function() {
   return gulp.src("app/favicon.ico").pipe(gulp.dest("dist"));
});

// SASS
gulp.task("sass", function() {
  return gulp
    .src(["app/styles/main.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", notify.onError()))
    .pipe(prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
    .pipe(cssnano({ zindex: false }))
    .pipe(gulp.dest("dist/css"));
});

// IMAGES
gulp.task("img", function() {
  return gulp
    .src("app/assets/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets"));
});

// CLEAR dist
gulp.task("clear", function(cb) {
  rimraf("./dist", cb);
});

// BUILD

gulp.task("finish", function() {
  console.log(
    "\n\n\nBuild Finished\n\n\n"
  );
});

gulp.task('build', gulp.series("clear",
    "html",
    "views-html",
    "sass",
    "required-js",
    "views-js",
    "img",
    "favicon",    
    "browser-sync",
    "finish", function (done) {
    done();
}));