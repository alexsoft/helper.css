module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		banner: '/*!\n' +
				' * helper.css v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' * Licensed under <%= pkg.license %>\n' +
				' */',
		less: {
			dev: {
				options: {
					cleancss: false
				},
				files: {
					"dist/helper.css": "less/helper.less"
				}
			},
			min: {
				options: {
					cleancss: true
				},
				files: {
					'dist/helper.min.css': 'dist/helper.css'
				}
			}
		},
		usebanner: {
			dist: {
				options: {
					position: 'top',
					banner: '<%= banner %>'
				},
				files: {
					src: [
						'dist/*.css'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-banner');

	grunt.registerTask('default', ['less', 'usebanner']);
};