module.exports = function(grunt) {
  grunt.initConfig({

    uglify : {
      options : {
        mangle : false,
        sourceMap: true,
        sourceMapName: 'asses/js/main.map'
      },
      files : {
        expand: true,
        flatten: true,
        src: '_src/js/**/*.js',
        dest: 'assets/js',
        ext: '.min.js'
      }
    }

    ,sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : '_src/sass/style.sass'
        }
      }
    }

    ,imagemin: {                          // Task

      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: '_src/images',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'assets/images'                  // Destination path prefix
        }]
      }
    }

    ,watch : {
      js:  { files: '_src/js/**/*.js', tasks: [ 'uglify' ] },
      sass:  { files: '_src/sass/**/*.js', tasks: [ 'sass' ] },
      images:  { files: '_src/images/**/*.{png,jpg,gif}', tasks: [ 'imagemin' ] }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask( 'default', [ 'uglify', 'sass','imagemin'] );

  grunt.registerTask( 'w', [ 'watch' ] );

};
