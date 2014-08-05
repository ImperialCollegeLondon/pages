module.exports = {
    dev: {
        files : [
            {expand: true, cwd : 'app/pages', src: ['**/*.html', '**/*.nwk'], dest: 'build/'},
            {expand: true, cwd : 'app', src: ['**/*.js', '**/*.css','./images/*.svg','images/*.png'], dest: 'build/'}
        ]
    },
    build: {
        files : [{expand: true, cwd : 'app/pages', src: ['**/*.html', '**/*.nwk'], dest: 'dist/'},
        {expand: true, cwd : 'app', src: ['images/*.svg','images/*.png'], dest: 'dist/'}]
    }
}
