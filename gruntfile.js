module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.initConfig({
		uglify: {
			my_target:{
				files:{
					'_/js/script.js': ['_/components/js/script.js']
				}//files
			}
		}
	})
	//grunt.loadNpmTasks('grunt-contrib-watch')
	//grunt.loadNpmTasks('grunt-contrib-compass')
	//grunt.loadNpmTasks('matchdep')
} //exports