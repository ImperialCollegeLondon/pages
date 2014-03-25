module.exports = {
    dev: {
        files : [{expand: true, cwd : 'app/pages', src: ['**/*.html'], dest: 'build/'}]
    },
    build: {
        files : [{expand: true, cwd : 'app/pages', src: ['**/*.html'], dest: 'dist/'}]
    }
}
