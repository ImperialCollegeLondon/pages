module.exports = {
    dev: {
        files : [
            {expand: true, cwd : 'app/pages', src: ['**/*.html', '**/*.nwk'], dest: 'build/'},
            {expand: true, cwd : 'app', src: ['**/*.js', '**/*.css','images/*.svg'], dest: 'build/'}
        ]
    },
    build: {
        files : [{expand: true, cwd : 'app/pages', src: ['**/*.html', '**/*.nwk'], dest: 'dist/'}]
    }
}
