module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        codo: {
                options: {
		    title: "<%= pkg.name %>",
                    output: "dist/docs",
                    inputs: ["coffee"]
	          }
	},


        // use concat to put all the js into one file.
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['./js/templates/*.js', 'js/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            },
	    test: {
	        src: ['test/js/*.js'],
		dest: 'test/test.js'
	    }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        
        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            files: ['js/**/!(*compiled).js'],
            options: {
                globals: {
                    console: true,
                    module: true,
                },
	        force: true
            }
        },

        coffee: {
            compile: {
                options: {
                    join: true,
                },
                files: {
                    'js/<%= pkg.name %>_compiled.js': ['coffee/registerGlobal.coffee',
						       'coffee/createSlider.coffee',
						       'coffee/ThreeDNavController.coffee',
						       'coffee/NavigationUI.coffee',
						       'coffee/NavigableScene.coffee',
						       'coffee/Axes.coffee',
						       'coffee/testHandleBars.coffee'
						      ],
		    'test/js/test_compiled.js' : ['test/coffee/qunitExtensions.coffee',
		                                  'test/coffee/testqunitExtensions.coffee',
		                                  'test/coffee/testThreeDNavController.coffee',
						  'test/coffee/testNavigationUI.coffee']
                }
            }
        },

        compass: {
            dist: {
		options: {
                    cssDir: 'dist/css/',
		    sassDir: 'sass/'
                    }
	    }
        },

	handlebars: {
            compile: {
		 options: {
		   processName: function(filename) {
			   return filename.replace(/.*\/(.*)\.hbs/, '$1');
		   }
		 },
		 files: {
		    "js/templates/<%= pkg.name %>-handlebars-compiled.js": "js/templates/*.hbs"
		 }
	    }
	},


        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['compass']
            },
            coffee: {
                files: ['coffee/**/*.coffee', 'test/coffee/**/*.coffee'],
                tasks: ['coffee', 'codo']
            },
            js: {
                files: ['js/**/*.js', 'test/**/*.js', 'js/templates/*.hbs'],
                tasks: ['handlebars', 'jshint', 'concat', 'uglify', 'qunit']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-codo');

    grunt.registerTask('test', ['coffee', 'jshint', 'qunit']);

    grunt.registerTask('default', ['coffee', 'jshint', 'concat', 'uglify', 'qunit']);

    grunt.registerTask('daemon', ['watch']);

};
