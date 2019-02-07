'use strict';

const gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cclean = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    tiny = require('gulp-tinypng'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync"),
    terser = require('gulp-terser'),
    reload = browserSync.reload;

    const path = {
    app: { 
        html: 'app/',
        js: 'app/js/',
        css: 'app/css/',
        img: 'app/images/',
        fonts: 'app/fonts/'
    },
    src: {
        html: 'src/*.html', 
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './app'
};

const config = {
    server: {
        baseDir: "./app"
    },
    // tunnel: true,
    host: 'localhost',
    port: 8081,
    logPrefix: "Frontend_Devil"
};

gulp.task('html', () => {
 return gulp.src(path.src.html) 
        .pipe(rigger()) 
        .pipe(gulp.dest(path.app.html)) 
        .pipe(reload({stream: true})); 
});

gulp.task('js', () => {
return  gulp.src(path.src.js) 
        .pipe(rigger()) 
        .pipe(sourcemaps.init()) 
        .pipe(terser()) 
        .pipe(sourcemaps.write())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(path.app.js)) 
        .pipe(reload({stream: true})); 
});
gulp.task('style', () => {
 return  gulp.src(path.src.style) 
        .pipe(sourcemaps.init()) 
        .pipe(sass()) 
        .pipe(prefixer()) 
        .pipe(cclean()) 
        .pipe(sourcemaps.write())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(path.app.css)) 
        .pipe(reload({stream: true}));
});
gulp.task('image', () => {
 return gulp.src(path.src.img) 
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.app.img))
        .pipe(reload({stream: true}));
});
gulp.task('fonts', () => {
 return  gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.app.fonts))
});

gulp.task('tinypng', function () {
    gulp.src(path.src.img)
        .pipe(tiny('y6vBpNQt3CR2JSBRw1ZFDHpPXR84gKrR'))
        .pipe(gulp.dest(path.app.img));
});


gulp.task('watch', () => {
 gulp.watch('src/style/**/*.scss', gulp.series('style')),
 gulp.watch('src/index.html', gulp.series('html')),
 gulp.watch('src/js/**/*.js', gulp.series('js')),
 gulp.watch('src/img/**/*.*', gulp.series('image')),
 gulp.watch('src/fonts/**/*.*', gulp.series('fonts'))
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('build', gulp.parallel('html', 'js', 'style', 'image', 'fonts'));

gulp.task('default', gulp.parallel('build', 'webserver', 'watch'));
