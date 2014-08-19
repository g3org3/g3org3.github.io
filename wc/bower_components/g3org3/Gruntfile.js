'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		// 	dist: {
		// 		src: ['css/george.css', 'css/buttons.css'],
		// 		dest: 'dist/css/g3org3.css'
		// 	}
		// },concat: {
		
		bowerInstall: {
            app: {
                src: ['index.html', 'home.html']
            }
        },
		cssmin: {
			compress: {
				files: {
					"dist/css/g3org3.min.css": ['dev/css/g3org3.css'],
					"css/global.min.css": ['dev/css/global.css']
				}
			},
			add_banner: {
				options: {
				    banner: '/*\n\tMy minified css file\n\tAuthor: George \'g3org3\'\n\tBootstrap Theme/Plugin\n*/'
				},
				files: {
			      'dist/css/g3org3.min.css': ['dist/css/g3org3.min.css']
			    }
			}
		},
		uglify: {
		    options: {
		      banner: '/*\n\tMinified js\n\tAuthor: George \'g3org3\'\n\tAngular Plugin\n*/\n'
		    },
		    my_target: {
		      files: {
		        'dist/js/g3org3.min.js': ['dev/js/g3org3.js']
		      }
		    }
		 },
		
		watch: {
			files: ['dev/js/*.js', 'styl/*'],
		 	tasks: ['build-dev']
		},
		exec: {
			styl:{
				command: 'stylus -u nib -o dev/css/ styl/g3org3.styl'
			},
			global: {
				command: 'stylus -u nib -o dev/css/ styl/global.styl'
			},
			clean: {
				command: 'rm -r dist/; rm -r css/;'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('build', ['uglify', 'exec:styl' ]);
	grunt.registerTask('build-dev', ['build', 'exec:global', 'cssmin']);
	grunt.registerTask('install', ['bowerInstall']);
	grunt.registerTask('default', [
		'build'
	]);
	grunt.registerTask('clean', ['exec:clean']);
};