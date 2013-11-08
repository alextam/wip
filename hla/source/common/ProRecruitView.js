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
                    kind:"Button",
                    components:[
                        {
                            classes:"icon-ellipsis-vertical iconicAnchor"
                        }
                    ]
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
                    kind:"SearchableContactList"                                        
                },
                {
                    classes:"contentContainerBox",
                    content:"Content Area..."
                }

            ]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
    	this.inherited(arguments);
    }
    
});