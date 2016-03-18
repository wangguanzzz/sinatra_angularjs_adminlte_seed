module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    preprocessors : {
      'app/js/**/*.js': ['coverage']
    },

    autoWatch : false,
    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
 //           'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            ],
    
    reporters : ['junit','coverage','progress'],

    junitReporter : {
      outputFile: 'testout/TESTS-xunit.xml',
      suite: 'unit'
    },
    coverageReporter: {
      type : 'lcov',
      dir : 'testout/'
    },

  });
};
