enyo.kind({
	name: "App",
	kind: "FittableRows",
    classes:"enyo-fit enyo-unselectable",
	nav: Navigator,
	components:[
		{
			name:"panelControl",
            kind: "Panels", 
            draggable:false,
            peekWidth:60,
            index:1,
            classes: "customPanelSlider", 
            arrangerKind: "CollapsingArranger",
            onTransitionStart:"handlePanelChanged", 
            fit: true, 
            wrap: false,
            components:[
            	{
            		//Left side
            		classes:"customPanelSlider",
                    components:[
                       { 
                       		name:"indicatorButton",
                       		kind:"PanelButton", 
                       		ontap:"handleBtnSlider" 
                       },
                       {
                            name: "menuList", 
                            kind: "List", 
                            multiSelect: false, 
                            fit:true, 
                            count:0,
                            touch:true,
                            vertical:"hidden", 
                            onSetupItem: "setupItem", 
                            components: [
                                {
                                    name: "item", 
                                    classes:"menuItemList drawerLine",
                                    ontap:'listItemTapped', 
                                    components: [
                                        {
                                            name:"itemButton",
                                            kind:"MenuButton"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
            	},
            	{
            		kind: "PageScrollView",
					name: "detailViewScrollerControl",
					vertical:"true",
					classes:"mainBg",
            		components:[	
                        {
            				kind:"MasterForm"
            			}
            		]
            	}
            ]	
		},
		{ kind:"Footer" }
	],
	published:{
        activeIndex:0,
        menu:[
            {content:"Search Vehicle",icon:"icon-search"},
            {content:"Appraisal",icon:"icon-th-list"},
            {content:"Administration",icon:"icon-cog"}
        ],
        data:null
    },
	create: function() {
		this.inherited(arguments);
		this.menuChanged();
	},
	rendered: function() {
		this.inherited(arguments);
	},
	menuChanged:function() {
        this.$.menuList.setCount(this.menu.length);
    },
    setupItem:function(inSender,inEvent) {
        this.$.itemButton.setTitle(this.menu[inEvent.index].content);
        this.$.itemButton.setIcon(this.menu[inEvent.index].icon);
    },
	handleBtnSlider:function(inSender,inEvent) {
        this.$.panelControl.setIndex(this.$.panelControl.getIndex() == 0 ? 1:0);
        this.$.indicatorButton.changeMode(this.$.panelControl.getIndex());
    },
	handleBtnBrowse:function(inSender,inEvent) {
		this.nav.gotoPage("Master");
	},
	handleBtnCreate:function(inSender,inEvent) {
		this.nav.gotoPage("Step1");
	}
});