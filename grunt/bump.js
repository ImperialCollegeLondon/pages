module.exports = {
    options: {
        pushTo : 'origin'
    },
    deploy :{
        options:
        {
            files : ['package.json', 'bower.json'],
            commitFiles : ['dist']
        }
    }
}
