'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-libsass');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    libsass: {
      dev: {
          src: 'app/index.scss',
          dest: 'app/css/index.css'
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*test.js'],
        dest: 'test/bundleTest.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'app/js/**/*.js', 'test/client/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['Gruntfile.js', 'app/js/**/*.js', 'test/client/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['./test/*.js']
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'libsass', 'copy:dev']);
  grunt.registerTask('build:test', ['browserify:test']);
  grunt.registerTask('test', ['simplemocha', 'jshint', 'jscs']);
};
