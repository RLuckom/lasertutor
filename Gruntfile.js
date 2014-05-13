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
                src: ['js/**/*.js'],
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
						       'coffee/NavigationUI.coffee',
						       'coffee/NavigableScene.coffee',
						       'coffee/ThreeDNavController.coffee'
						      ],
		    'test/js/test_compiled.js' : 'test/coffee/**/*.coffee'
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/css/style.css' : 'sass/*.scss'
                }
            }
        },

        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass']
            },
            coffee: {
                files: ['coffee/**/*.coffee', 'test/coffee/**/*.coffee'],
                tasks: ['coffee', 'codo']
            },
            js: {
                files: ['js/**/*.js', 'test/**/*.js'],
                tasks: ['jshint', 'concat', 'uglify', 'qunit']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-codo');

    grunt.registerTask('test', ['coffee', 'jshint', 'qunit']);

    grunt.registerTask('default', ['coffee', 'jshint', 'concat', 'uglify', 'qunit']);

    grunt.registerTask('daemon', ['watch']);

};
