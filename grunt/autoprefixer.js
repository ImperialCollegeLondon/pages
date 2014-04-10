module.exports = {
    options: {
        browsers: ['last 1 version']
    },
    build: {
        files: [{
            expand: true,
            cwd: 'build/css/',
            src: '**/*.css',
            dest: 'build/css/'
        }]
    }
}
