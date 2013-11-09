module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        watch: {
            css: {
                files: 'country.styl',
                tasks: 'stylus'
            }
        },
        stylus: {
            compile: {
                options: {
                    linenos: false,
                    compress: true,
                    banner: '\/* Zhengzheng ZHANG [tychio@yeahmobi.com]\n * 2013.9.6\n *\/\n'
                },
                files: {
                    'country.css': 'country.styl'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['stylus', 'watch']);
};