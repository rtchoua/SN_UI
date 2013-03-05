Ext.require('Ext.tab.*');

Ext.onReady(function(){
    // basic tabs 1, built from existing content
    /*var tabs = Ext.widget('tabpanel', {
        renderTo: 'tabs1',
        width: 450,
        activeTab: 0,
        tabPosition: 'bottom',
        defaults :{
            bodyPadding: 10
        },
        items: [{
            contentEl:'script', 
            title: 'Short Text',
            closable: true
        },{
            contentEl:'markup', 
            title: 'Long Text'
        }]
    });*/
    
    // second tabs built from JS
    var tabs2 = Ext.widget('tabpanel', {
        renderTo: document.body,
        activeTab: 0,
        width: 600,
        height: 250,
        tabPosition: 'bottom',
        plain: true,
        id: 'tabs2',
        defaults :{
            autoScroll: true,
            bodyPadding: 10,
            bodyWidth: 100
        },
        items: [{
                title: 'Home',
                html: "<table border='2'><tr><td>hello</td><td>hi</td></tr></table>My content was added during construction."
            },{
                title: 'Publish New',
//                listeners: {
//                    activate: function(tab){
//                        alert(tab.title + ' was activated.');
//                   }
//                },
                html: "I am the publication page."
            }
        ]
    });
});