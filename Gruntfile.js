module.exports = function( grunt )
{
  // Project configuration.
  grunt.initConfig(
  {
    pkg : grunt.file.readJSON( 'package.json' )
    , compass :
    {
      dist :
      {
          options :
          {
            config : 'config/config.rb'
          }
      }
    }
    , postcss :
    {
      options :
      {
        map :
        {
          inline : false
          , prev : 'css/'
          , annotation : 'css/'
        }
        , processors :
        [
          require( 'autoprefixer-core' )( { browsers : 'last 2 version, IE > 7' } )
        ]
      }
      , dist :
      {
        src : [ 'style.css', 'css/*.css' ]
      }
    }
    , watch :
    {
      sass :
      {
        files : [ 'scss/*.scss' ]
        , tasks : [ 'compass', 'postcss' ]
      }
      , livereload :
      {
        options :
        {
          livereload : true
        }
        , files :
          [ 'style.css', 'css/*' ]
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-compass' ); // https://github.com/gruntjs/grunt-contrib-compass
  grunt.loadNpmTasks( 'grunt-contrib-watch' ); // https://github.com/gruntjs/grunt-contrib-watch
  grunt.loadNpmTasks( 'grunt-postcss' ); // https://github.com/nDmitry/grunt-postcss
  grunt.loadNpmTasks( 'grunt-notify' ); // https://github.com/dylang/grunt-notify

  // Default task(s).
  grunt.registerTask( 'default', [ 'watch' ] );
  grunt.registerTask( 'css', [ 'compass', 'postcss' ] );

};
