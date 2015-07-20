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
		}
	});
  grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default',['compass']);
};