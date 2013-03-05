Ext.require([
    'Ext.window.Window',
    'Ext.tab.*',
    'Ext.toolbar.Spacer',
    'Ext.layout.container.Card',
    'Ext.layout.container.Border'
]);

Ext.onReady(function(){
    
    Ext.util.Region.override({
        colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
        nextColor: 0,
        show: function(){
        	//alert(document.getElementById('center1').offsetWidth+' & '+ document.getElementsByTagName('body')[0].offsetHeight);
            var style = {
                display: 'block',
                position: 'absolute',
                top: this.top + 'px',
                left: this.left + 'px',
                //height: ((this.bottom - this.top) + 1) + 'px',
                height: (document.getElementsByTagName('body')[0].offsetHeight)+'px',
                width: ((this.right - this.left) + 1) + 'px',
                opacity: 0.3,
                'pointer-events': 'none',
                'z-index': 9999999
            };
            if (!win.highlightEl) {
                style['background-color'] = win.colors[win.nextColor];
                Ext.util.Region.prototype.nextColor++;
                win.highlightEl = Ext.getBody().createChild({
                    style: style
                });
                if (win.nextColor >= this.colors.length) {
                    win.nextColor = 0;
                }
            } else {
                win.highlightEl.setStyle(style);
            }
        },
        hide: function(){
            if (win.highlightEl) {
                win.highlightEl.setStyle({
                    display: 'none'
                });
            }
        }
    });

    /*Ext.create('Ext.Window', {
        title: 'Bottom Header, plain: true',
        width: 400,
        height: 200,
        x: 10,
        y: 200,
        id: 'publish_win',
        constrain: true,
        constrainHeader: true,
        plain: true,
        headerPosition: 'bottom',
        layout: 'fit',
        items: {
            border: false
        }
    }).show();*/
});
