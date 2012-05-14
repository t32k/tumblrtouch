Ext.define('TumblrTouch.view.ToolBar', {
    extend: 'Ext.Toolbar',
    xtype: 'tt_toolbar',
	
    config: {
		docked: 'bottom',

	    defaults: {
			xtype: 'button',
			iconMask: true,
			ui: 'action-round',
	    },
		items: [{
			xtype:'spacer',
			flex:1
    	},
		{
			id: 'back',
			iconCls: 'arrow_up',
			text: 'BACK'

		},
		{
			id: 'go',
			iconCls: 'arrow_down',
			text: 'GO'
		}]
    }
});