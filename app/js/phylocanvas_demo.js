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

            buttons[b].addEventListener('click', function(evt){
                for(var f = evt.target.parentNode; f && f.tagName !== 'FORM'; f = f.parentNode) {}

                phylo[this.id].apply(phylo);
            });
        }

        buttons = $('button.tree-type-control');

        for( var b = buttons.length; b--; )
        {
            buttons[b].addEventListener('click', function(evt){
                phylo.setTreeType(this.getAttribute('pc-tree-type'));
            });
        }

        phylo.history.resizeTree();
    }

    document.body.onload = init();
}());
