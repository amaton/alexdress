'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        compass: {
            compile: {
                options: {
                    sassDir: 'skin/frontend/alexdress/default/scss',
                    cssDir: 'skin/frontend/alexdress/default/css',
                    imagesDir: 'skin/frontend/alexdress/default/images',
                    specify: 'skin/frontend/alexdress/default/scss/*.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ['skin/frontend/alexdress/default/scss/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['compass']);
};