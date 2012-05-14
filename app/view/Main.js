Ext.define('TumblrTouch.view.Main', {
    extend: 'Ext.Container',
    xtype: 'tt_mainpanel',
    requires: ['TumblrTouch.view.CardPanel', 'TumblrTouch.view.ToolBar'],

    config: {
        fullscreen: true,
        layout: 'fit',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            maxHeight: 3
        },
        {
            xtype: 'tt_cardpanel'
        },
        {
            xtype: 'tt_toolbar'
        }]
    },
});