'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
	return src('./components/*.scss')
		.pipe(sass.sync())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['ie > 9', 'last 2 versions'],
				cascade: false
			})
		)
		.pipe(cssmin())
		.pipe(dest('../../lib/styles'));
}

function copyfont() {
	return src('./fonts/**').pipe(dest('../../lib/fonts'));
}

exports.build = series(compile, copyfont);
