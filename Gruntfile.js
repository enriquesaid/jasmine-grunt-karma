module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    app: {
      dev: {
        path: "app",
        javascripts: "<%= app.dev.path %>/assets/javascripts",
        specs: "specs"
      },
      bower: "<%= app.dev.path %>/vendor/bower"
    },

    watch: {
      livereload: {
        files: ["<%= app.dev.path %>/**/*.html"],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          hostname: "0.0.0.0",
          port: 9001,
          base: process.cwd() + "/<%= app.dev.path %>",
          livereload: true
        }
      }
    },

    karma: {
      options: {
        frameworks: ["jasmine"],

        plugins: [
          "karma-jasmine",
          "karma-phantomjs-launcher",
          "karma-chrome-launcher"
        ],

        files: [
          "<%= app.bower %>/jquery/jquery.js",
          "<%= app.dev.javascripts %>/alarm.js",
          "<%= app.dev.specs %>/alarm.spec.js",
        ],
      },

      run: {
        singleRun: true,
        browsers: ["PhantomJS"],
        logLevel: "ERROR"
      },

      daemon: {
        browsers: ["Chrome"],
        logLevel: "ERROR"
      },

      travis: {
        singleRun: true,
        browsers: ["PhantomJS"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-karma");

  grunt.registerTask("default", [
    "connect:server",
    "watch"
  ]);
};
