enyo.kind({
    name: "ProRecruitView",
    kind: "FittableRows",
    nav: Navigator,
    classes:"proPage enyo-unselectable",
    components: [
        {
            name:"headerControl",
            kind:"Header",
            title:"My Clients",
            buttons: [
                {
                    name:"btn1",
                    visible:true,
                    content:"Main Menu",
                    page:"DashboardPage"
                },
                {
                    name:"btn5",
                    visible:true,
                    classes:"contextButton",
                    position:"right",
                    kind:"ContextMenu"
                }
            ],
            onHeaderButtonTapped:"handleHeaderButtonTapped"
        },
        {
            name:"panelControl",
            kind: "Panels", 
            draggable:false,
            classes: "panelSlider", 
            arrangerKind: "CollapsingArranger",
            onTransitionStart:"handlePanelChanged", 
            fit: true, 
            wrap: false,
            components:[
                {
                    kind:"SearchableContactList",
                    onDataTap:"handleOnDataTap"                                        
                },
                {
                    classes:"contentContainerBox",
                    name:"profileView",
                    kind:"ProfileView"
                }
            ]
        },
        {
            name:"popUpChart",
            kind:"GenericPopup",
            btnLeft:"",
            btnRight:"Done",
            contentPage:"ConversionChartView",
            contentClass:"whiteBg",
            onControlButtonTapped:"handleControlPopupButtonTapped",
            title:"Conversion Chart"
        }
    ],
    handlers:{
        onContextMenuSelected:"handleContextSelected"
    },
    published:{
        data:null		
    },
    create: function() {
    	this.inherited(arguments);
    },
    handleOnDataTap: function(inSender,inEvent) {
        this.$.profileView.setData(inEvent.data);
    },
    handleControlPopupButtonTapped: function(inSender,inEvent) {
        this.$.popUpChart.hide();
    },
    handleHeaderButtonTapped: function(inSender,inEvent) {
        this.nav.gotoPage("App");
    },
    handleContextSelected: function(inSender,inEvent) {
        if (inEvent.page == "Conversion Chart") {
            this.$.popUpChart.show();
        }
    }
    
});