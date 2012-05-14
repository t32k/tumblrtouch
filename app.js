Ext.application({
    name: 'TumblrTouch',

    glossOnIcon: false,
    icon: 'resource/img/icon.png',
    statusBarStyle: 'black-translucent',
    startupImage: 'resources/img/splash.png',

    models: ['FetchData'],
    views: ['Main'],
    controllers: ['Main'],

    launch: function () {
        // Equall - Ext.create('TumblrTouch.view.Main');
        Ext.Viewport.add({
            xtype: 'tt_mainpanel'
        });
    }
});