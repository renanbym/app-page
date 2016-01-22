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
          dest: 'assets/js'
          ext: '.min.js'
        }
    }

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : '_src/sass/style.sass'
        }
      }
    },

    watch : {
      js:  { files: '_src/js/**/*.js', tasks: [ 'uglify' ] },
      sass:  { files: 'src/sass/**/*.js', tasks: [ 'sass' ] }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );

  grunt.registerTask( 'w', [ 'watch' ] );

};
