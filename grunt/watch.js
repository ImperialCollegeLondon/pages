module.exports = {
//    js: {
//        files : '**/*.js',
//        tasks : ['node_serverOne']
//    },
    css: {
        files: 'app/**/*.less',
        tasks: ['less:dev'],
        options: {
          livereload: true,
        }
    },
    html: {
        files: 'app/**/*.html',
        tasks: ['copy:dev'],
        options: {
          livereload: true,
        }
    },
    livereload: {
        options: {
            livereload: 3579
        },
        files: [
            '**/*.less'
        ]
    }
}
