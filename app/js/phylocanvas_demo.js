(function(){
    "use strict";
    var PC = PhyloCanvas,
        $ = document.querySelectorAll.bind(document);

    function init(){
        var phylo = new PC.Tree('phylo');
        phylo.load('data/EARSS.nwk');

        var buttons = $('button.tree-control');

        for( var b = buttons.length; b--; )
        {
            console.debug(buttons.length);

            buttons[b].addEventListener('click', phylo[buttons[b].id].bind(phylo));
        }
    }

    document.body.onload = init();
}());
