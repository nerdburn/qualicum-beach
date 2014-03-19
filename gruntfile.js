module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        // directory vars
        baseDir         : 'public/',
        jsDir           : '<%= baseDir %>js/',
        cssDir          : '<%= baseDir %>css/',

        // process less to css
        less: {
            dev: {
                files: {
                    "<%= cssDir %>qb.css": "<%= cssDir %>qb.less"
                }
            }
        },

        // concatenate javascript files
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                files: {
                    '<%= jsDir %>qb.min.js': [
                        '<%= baseDir %>fonts/symbolset/ss-steedicons.js',
                        '<%= jsDir %>qb.js'
                    ]
                }
            }
        },

        // minify javascript
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %>' +
                        ' - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            js: {
                files: {
                    '<%= jsDir %>app.min.js': ['<%= jsDir %>app.min.js']
                }
            }
        },

        // listen for changes
        watch: {
            options: {
                nospawn: true
            },
            dev: {
                files: ['<%= jsDir %>**/*.js', '<%= cssDir %>**/*.less'],
                tasks: ['less:dev', 'concat'] // todo - add uglify here
            }
        }

    });

    // grunt plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default', ['concat:js', 'less:dev', 'watch:dev']); // todo - 'uglify:js'
};
