module.exports = {
    deploy: {
        options : {
            stdout: true
        },
        command : 'git subtree push --prefix dist gh-pages master'
    },
    save_build: {
        options : {
            stdout: true
        },
        command : 'git commit -a -m "new build"'
    }
}
