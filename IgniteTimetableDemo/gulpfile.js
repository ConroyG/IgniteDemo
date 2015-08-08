/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');

var config = {
    allTypeScript: './wwwroot/js/**/*.js',
    libraryTypeScriptDefinitions: './typings/**/*.ts',
    appTypeScriptReferences: './typings/tsd.d.ts',
    tsOutputPath: './wwwroot/js',
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