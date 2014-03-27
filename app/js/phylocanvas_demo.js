(function(){
    "use strict";

    var PC = PhyloCanvas;

    function init(){
        var phylo = new PC.Tree('phylo');
        phylo.load('data/EARSS.nwk');
    }


    document.body.onload = init();
}());
