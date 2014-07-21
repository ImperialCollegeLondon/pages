module.exports = {
    predeploy: {
        options : {
            stdout: true,
            execOptions: {
                  cwd: 'dist'
            }
        },
        command : 'git add dist && git commit -m "new build"'
    },
    deploy: {
        options : {
            stdout: true,
            execOptions: {
                  cwd: 'dist'
            }
        },
        command : 'git push'
    },
    save_build: {
        options : {
            stdout: true
        },
        command : 'git add dist && git commit -m "new build"'
    }
}
