module.exports = function(grunt) {
  grunt.initConfig({

    uglify : {
      options : {
        mangle : false,
        sourceMap: true,
        sourceMapName: 'assets/js/main.map'
      },

      my_target: {
        files: {
          'assets/js/main.js' : [
            '_src/js/main.js',
            '_src/js/controllers/*.js'
          ]
        }
      }

    }

    ,sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : '_src/sass/style.scss'
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
      sass:  { files: '_src/sass/**/*.scss', tasks: [ 'sass' ] },
      images:  { files: '_src/images/**/*.{png,jpg,gif}', tasks: [ 'imagemin' ] }
    }


    ,connect: {
      server: {
        options: {
          port: 9001,
          base: '/Users/renanbym/workspace/front/wesleys-beer'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask( 'default', ['uglify', 'sass','imagemin'] );

  grunt.registerTask( 'w', [ 'connect', 'watch'] );



};
