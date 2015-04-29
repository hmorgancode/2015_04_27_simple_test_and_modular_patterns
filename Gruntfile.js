'use strict';

module.exports = function(grunt) {
  var srcFiles = ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'];

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
        src: srcFiles
      },
      options: {
        jshintrc: '.jshintrc'
      }
    }, //end jshint 

    watch: {
      files: srcFiles,
      tasks: ['test']
    } //end watch
  });//end grunt.initConfig

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['mochaTest', 'jshint:all']);
  grunt.registerTask('default', ['test']);
};