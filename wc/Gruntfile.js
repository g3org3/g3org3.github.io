'use strict';

module.exports = function (grunt) {
	grunt.initConfig({		
		bowerInstall: {
            app: {
                src: ['index.html'],
                exclude: [
                	'bower_components/bootstrap/dist/js/bootstrap.js',
                	'bower_components/jquery/dist/jquery.js',
                	'bower_components/firebase-simple-login/firebase-simple-login.js'
                ]
            }
        },
		cssmin: {
			compress: {
				files: {
					"css/global.min.css": ['dev/css/global.css'],
				}
			},
			 add_banner: {
			 	options: {
			 	    banner: '/*\n\tHome Automation CSS\n*/'
			 	},
			 	files: {
			       'css/global.min.css': ['css/global.min.css']
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
			files: ['index.html', 'views/*', 'dev/styl/*', 'dev/js/*', 'dev/js/controllers/*'],
			tasks: ['build','connect'],
			options: {
				livereload: true	
			}
		},
		exec: {
			styl:{
				command: 'stylus -u nib -o dev/css/ dev/styl/global.styl'
			},
			global: {
				command: 'stylus -u nib -o dev/css/ styl/global.styl'
			},
			clean: {
				command: 'rm -r _site/'
			},
			serve: {
				command: 'jekyll serve'
			}
		},
		connect: {
			server: {
		        options: {
		          port: 9000,
		          hostname: '0.0.0.0'
		        }
		    }
		}
	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-exec');
	
	// own
	grunt.registerTask('install', ['bowerInstall']);
	grunt.registerTask('clean', ['exec:clean']);
	grunt.registerTask('serve', ['connect', 'watch']);
	grunt.registerTask('build', ['exec:styl', 'cssmin']);
};

















