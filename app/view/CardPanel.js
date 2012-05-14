Ext.define('TumblrTouch.view.CardPanel', {
    extend: 'Ext.Panel',
    xtype: 'tt_cardpanel',

    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'down'
            }
        },
        id: 'cardpanel',
        defaults: {
            xtype: 'img',
            style: 'background-position:center; background-color:#111; background-size:contain;',
        },
        items: [{
            src: 'resource/img/loading.png'
        }]
    }
});