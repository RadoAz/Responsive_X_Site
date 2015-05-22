module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        sass: {
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: ['sass']
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['watch']);

};
