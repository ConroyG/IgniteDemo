/// <binding AfterBuild='compile-ts, copy-html, copy-css' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');

var config = {
    allTypeScript: './App/**/*.ts',
    libraryTypeScriptDefinitions: './typings/**/*.ts',
    appTypeScriptReferences: './typings/tsd.d.ts',
    tsOutputPath: './wwwroot/js',
    allHtml: './App/**/*.html',
    allHtmlOutput: './wwwroot/html',
    allCss: './App/**/*.css',
    allCssOutput: './wwwroot/css'
};

gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                
                         config.libraryTypeScriptDefinitions, 
                         config.appTypeScriptReferences];     

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true
                       }));
    
    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
                    .pipe(sourcemaps.write('.'))
                    .pipe(gulp.dest(config.tsOutputPath));
});


gulp.task('copy-html', function () {
    gulp.src(config.allHtml)
        .pipe(gulp.dest(config.allHtmlOutput));
});

gulp.task('copy-css', function () {
    gulp.src(config.allCss)
        .pipe(gulp.dest(config.allCssOutput));
});