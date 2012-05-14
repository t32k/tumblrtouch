Ext.define('TumblrTouch.model.FetchData', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['photos'],
        proxy: {
            type: 'ajax',
            url: 'resource/data/posts.json',
            reader: {
                type: 'json',
                rootProperty: 'response.posts'
            }
        }
    }
});