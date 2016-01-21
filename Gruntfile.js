module.exports = function(grunt) {
  grunt.initConfig({

    uglify : {
     options : {
       mangle : false
     },

     my_target : {
       files : {
         'assets/js/main.js' : [ '_src/js/**/*' ]
       }
     }
   }

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : '_src/_sass/style.sass'
        }
      }
    },

    watch : {
      dist : {
        files : [
          '_src/js/**/*',
          '_src/sass/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch' );

  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );

  grunt.registerTask( 'w', [ 'watch' ] );

};
