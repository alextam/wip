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
                            count:0,
                            style:"height:142px",
                            touch:true,
                            vertical:"hidden", 
                            onSetupItem: "setupItem", 
                            components: [
                                {
                                    name: "item", 
                                    classes:"menuItemList drawerLine",
                                    ontap:'listItemTapped',
                                    kind:"MenuButton" 
                                }
                            ]
                        },
                        { style:"height:30px;" },
                        {
                            name: "menuListSubMenu", 
                            kind: "List", 
                            multiSelect: false, 
                            fit:true, 
                            count:3,
                            touch:true,
                            vertical:"hidden", 
                            onSetupItem: "setupSubMenuItem", 
                            components: [
                                {
                                    name: "itemSubMenu", 
                                    classes:"menuItemList drawerLine",
                                    ontap:'listSubMenuItemTapped',
                                    kind:"MenuButton"
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
                    onChangePage:"handleChangePage",
                    onNextPage:"handleNextPage",
                    onBackPage:"handleBackPage",
            		components:[	
                        { kind:"MasterForm" }
            		]
            	}
            ]	
		},
		{ kind:"Footer" }
	],
	published:{
        activeIndex:0,
        subActiveIndex:0,
        menu:[
            {content:"Search Vehicle",icon:"icon-search", kind:"MasterForm"},
            {content:"Price Guide",icon:"icon-list-ul", kind:"MasterForm"},
            {content:"Settings",icon:"icon-cog", kind:"Step4Form"}
        ],
        submenu:[
            {content:"Step 1: Appraisal",icon:"icon-pencil", kind:"Step1Form"},
            {content:"Step 2: Pricing Information",icon:"icon-usd", kind:"Step2Form"},
            {content:"Step 3: Other Information",icon:"icon-ellipsis-horizontal", kind:"Step3Form"},
            {content:"Step 4: Exterior",icon:"icon-fullscreen", kind:"Step4Form"},
            {content:"Step 5: CheckList",icon:"icon-check", kind:"Step5Form"},
            {content:"Step 6: Mechanical",icon:"icon-cogs", kind:"Step5Form"},
            {content:"Step 7: Report",icon:"icon-file-text", kind:"Step5Form"}
        ],
        data:null
    },
    handlers: {
        onSubPageChange: "handleSubPageChange",
        onSubPageShow: "handleShowSubPage",
        onSubPageHide: "handleHideSubPage"
    },
	create: function() {
		this.inherited(arguments);
        this.service = new Service().initData();
        this.menuChanged();
        this.submenuChanged();
	},
	rendered: function() {
		this.inherited(arguments);
        this.$.menuList.select(this.getActiveIndex());
        this.$.menuListSubMenu.select(this.getSubActiveIndex());
	},
    activeIndexChanged:function() {
        console.log("Change page...");
        if (this.getActiveIndex() != 1) {
            this.$.detailViewScrollerControl.destroyClientControls();
            this.$.detailViewScrollerControl.createComponent({kind:this.menu[ this.getActiveIndex() ].kind});
            this.$.detailViewScrollerControl.render();
        } else {
            alert("popup!");
        }
    },
    loadPage:function(kindName,params){
        if (arguments.length > 1) {
            this.$.detailViewScrollerControl.destroyClientControls();
            this.$.detailViewScrollerControl.createComponent({kind:kindName,data:params});
            this.$.detailViewScrollerControl.render();
        } else {
            this.$.detailViewScrollerControl.destroyClientControls();
            this.$.detailViewScrollerControl.createComponent({kind:kindName});
            this.$.detailViewScrollerControl.render();
        }
    },
    listSubMenuItemTapped:function(inSender,inEvent) {
        this.loadPage(this.submenu[inEvent.index].kind);
    },
    listItemTapped:function(inSender,inEvent) {
        this.setActiveIndex(inEvent.index);
    },
	menuChanged:function() {
        this.$.menuList.setCount(this.menu.length);
    },
    submenuChanged:function() {
        this.$.menuListSubMenu.setCount(this.submenu.length);
    },
    setupItem:function(inSender,inEvent) {
        this.$.item.setTitle(this.menu[inEvent.index].content);
        this.$.item.setIcon(this.menu[inEvent.index].icon);
        this.$.item.setSelected(inSender.isSelected(inEvent.index));
    },
    setupSubMenuItem:function(inSender,inEvent) {
        console.log("Menu data...");
        this.$.itemSubMenu.setTitle(this.submenu[inEvent.index].content);
        this.$.itemSubMenu.setIcon(this.submenu[inEvent.index].icon);
        this.$.itemSubMenu.setSelected(inSender.isSelected(inEvent.index));
    },
    handleShowSubPage:function(inSender,inEvent) {
        this.$.menuListSubMenu.show();
        this.$.menuListSubMenu.render();
        this.$.menuListSubMenu.select(inEvent.subActiveIndex);
    },
    handleHideSubPage:function(inSender,inEvent) {
        this.$.menuListSubMenu.hide();
    },
    handleSubPageChange:function(inSender,inEvent) {
        this.loadPage(inEvent.page);
        this.setSubActiveIndex(inEvent.subIndex);    
    },
	handleBtnSlider:function(inSender,inEvent) {
        this.$.panelControl.setIndex(this.$.panelControl.getIndex() == 0 ? 1:0);
        this.$.indicatorButton.changeMode(this.$.panelControl.getIndex());
    },
    handleChangePage:function(inSender,inEvent) {
        console.log("Load page...");
        this.loadPage(inEvent.page, inEvent.data);
    },
	handleNextPage:function(inSender,inEvent) {
        alert("!!!");
    },
    handleBackPage:function(inSender,inEvent) {
        this.loadPage(inEvent.page);  
    }
});