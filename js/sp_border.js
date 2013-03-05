Ext.require(['*']);
Ext.onReady(function() {
    var cw;

    var viewport = Ext.create('Ext.Viewport', {
        layout: {
            type: 'border',
            padding: 0
        },
        defaults: {
            split: true
        },
        items: [{
            region: 'west',
            collapsible: true,
            title: 'My SDs',
            split: true,
            width: '30%',
            minWidth: 100,
            minHeight: 140
        },{
            region: 'center',
            title: 'News Feed',
            width: '40%',
            minHeight: 80
        },{
            region: 'east',
            collapsible: true,
            floatable: true,
            split: true,
            width: '30%',
            minWidth: 120,
            minHeight: 140,
            id: 'mygraph',
            title: 'My Graph',
            html: '<iframe id="ifrm" src="my_sn_graph.html"></iframe>',
            //html: '<input type="button" value="test" id="testiframe" onclick="alert(\'hi\')"></input>',
            //html: '<input type="button" value="test" id="testiframe" onclick="alert(document.getElementById(\'testiframe\').offsetWidth+\' & \'+ document.getElementsByTagName(\'body\')[0].offsetHeight);" />
            //html: '<input type="button" value="test" id="testiframe" onclick="alert(document.getElementById(\'mygraph\').offsetHeight);" />',
            	layout: {
                type: 'vbox',
                padding: 5,
                align: 'stretch'
            }
        }]
    });
    loadFrame();
});

function loadFrame(){ 
	// When everything is done, set the size of the graph in the iframe here
	var ifr_id = document.getElementById('mygraph').id;
	var ifr_w = document.getElementById('mygraph').offsetWidth;
	var ifr_h = document.getElementById('mygraph').offsetHeight;
	// alert(ifr_w + ' and ' + ifr_h);
	var ifr = document.getElementById('ifrm');
	//ifr.width = (ifr_w - 5) + 'px';
	ifr.width = "100%";
	ifr.height = (ifr_h - 25) + 'px';
}