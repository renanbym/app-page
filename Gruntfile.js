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
            'source/js/main.js',
            'source/js/controllers/*.js',
            'source/js/directives/*.js'
          ],
          'assets/js/chrome.js' : [ 'source/js/chrome.js', ]
        }
      }

    }

    ,sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : 'source/sass/style.scss'
        }
      }
    }

    ,imagemin: {

      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images'
        }]
      }
    }

    ,watch : {
      js:  { files: 'source/js/**/*.js', tasks: [ 'uglify' ] },
      sass:  { files: 'source/sass/**/*.scss', tasks: [ 'sass' ] },
      images:  { files: 'source/images/**/*.{png,jpg,gif}', tasks: [ 'imagemin' ] }
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

  grunt.registerTask( 'default', ['uglify', 'sass','imagemin', 'connect'] );

  grunt.registerTask( 'w', [ 'connect', 'watch'] );



};
