Ext.define('TumblrTouch.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.Anim'],
    config: {
        refs: {
            go: '#go',
            back: '#back',
            card: '#cardpanel'
        },
        control: {
            go: {
                tap: 'goPager'
            },
            back: {
                tap: 'backPager'
            },
            card: {
                painted: 'fetchData'
            }
        }
    },

    goPager: function () {
        var panel = Ext.getCmp('cardpanel');
        var index = Number(panel.getActiveItem().id.replace('ext-image-', '')) - 1;
        console.log(index);
        panel.animateActiveItem(index, {
            type: 'slide',
            direction: 'down'
        });
        panel.setActiveItem(index);
    },
    backPager: function () {
        var panel = Ext.getCmp('cardpanel');
        var index = Number(panel.getActiveItem().id.replace('ext-image-', '')) - 3;
        panel.animateActiveItem(index, {
            type: 'slide',
            direction: 'up'
        });
        panel.setActiveItem(index);
    },
    fetchData: function () {
        var ttdata = Ext.create('Ext.data.Store', {
            model: 'TumblrTouch.model.FetchData',
        });

        ttdata.load({
            callback: function () {
                var tt_items = [];
                this.each(function (json) {
                    var tt_item = {};
                    tt_item.src = json.data.photos[0].alt_sizes[1].url;
                    tt_items.push(tt_item);
                });
                var panel = Ext.getCmp('cardpanel');
                panel.setItems(tt_items);
                panel.animateActiveItem(0, {
                    type: 'pop'
                });
                panel.setActiveItem(0);
            }
        });
    }
});