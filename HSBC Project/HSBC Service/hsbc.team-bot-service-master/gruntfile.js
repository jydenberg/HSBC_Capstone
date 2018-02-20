module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        ts: {
            build: {
                src: ["src/\*\*/\*.ts", "!node_modules/\*\*/\*.ts"],
                outDir: "out",
                options: {
                    module: 'commonjs',
                    fast: 'never',
                    inlineSourceMap: true
                }
            }
        },

        watch: {
            scripts: {
                files: ["src/\*\*/\*.ts", "!node_modules/\*\*/\*.ts"],
                tasks: ["ts:build"],
                options: {spawn: false}
            }
        },

        nodemon: {
            dev: {
                script: 'out/www.js'
            },
            options: {
                ignore: ['node_modules/**', 'gruntfile.js'],
                env: {PORT: '8080'}
            }
        },

        concurrent: {
            watchers: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask("build", ["ts"]);
    grunt.registerTask("serve", ["concurrent:watchers"]);

};