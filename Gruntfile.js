module.exports = function(grunt) {
	// grunt.loadNpmTasks( all the grunt things )
	// https://github.com/sindresorhus/load-grunt-tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded',
				precision: 5,
			},
			dist: {
				files: {
					'css/style.css' : 'scss/style.scss',
				},
			},
		},
		postcss: {
			options: {
				map: {
					inline: false,
					prev: 'css/',
					annotation: 'css/',
				},
				processors: [
					require('autoprefixer')({
						browsers: 'last 2 version, IE > 7'
					}),
					require('cssnano')(),
				],
			},
			dist: {
				src: [
					'style.css',
					'css/*.css',
				],
			},
		},
		watch: {
			css: {
				files: [
					'scss/*.scss',
				],
				tasks: [
					'sass',
					'postcss',
				],
			},
			livereload: {
				options: {
					livereload: true,
				},
				files: [
					'css/*.css',
				],
			},
		},
	});

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('css', ['sass', 'postcss']);

};
