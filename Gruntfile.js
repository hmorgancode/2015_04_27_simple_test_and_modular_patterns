'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
        },
        src: ['test/**/*.js']
      }
    }, //end mochaTest

    jshint: {
      all: {
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
      },

      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      }
    } //end jshint 
  });//end grunt.initConfig

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['mochaTest', 'jshint:all']);
  grunt.registerTask('default', ['test']);
};