module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target:{
				files:{
					'_/js/script.js': ['_/components/js/*.js'],
				}//files
			}//my target
		},//uglify
		compass: {
			dev:{
				options: {
					config: 'config.rb'
				} //options
			}//dev
		},//compass
		watch: {
			options: {livereload: true},
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			},
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			},//sass
			html: {
				files: ['*.html', '*.php']
			}
		}//watch
	})//initConfig
	grunt.registerTask('default','watch');
	//grunt.loadNpmTasks('grunt-contrib-watch')
	//grunt.loadNpmTasks('grunt-contrib-compass')
	//grunt.loadNpmTasks('matchdep')
} //exports