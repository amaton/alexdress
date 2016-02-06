'use strict';

var storeName='alexstuff';

module.exports = function (grunt) {
    grunt.initConfig({
        compass: {
            compile: {
                options: {
                    sassDir: 'skin/frontend/'+storeName+'/default/scss',
                    cssDir: 'skin/frontend/'+storeName+'/default/css',
                    imagesDir: 'skin/frontend/'+storeName+'/default/images',
                    specify: 'skin/frontend/'+storeName+'/default/scss/*.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ['skin/frontend/'+storeName+'/default/scss/**/*.scss'],
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