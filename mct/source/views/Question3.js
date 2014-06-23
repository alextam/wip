enyo.kind({
    name: "Question3",
    kind: "Scroller",
    touch:true, 
    thumb:true,
    classes:"panel-view",
    fit:true,
    strategyKind:"TransitionScrollStrategy",
    components: [
        { style:"height:20px" },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Type of project interested" }
            ]
        },
        {
           name:"txtProjectGroup",
           kind:"ProjectGroup",
           active:0
        },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Attended by" }
            ]
        },
        {
            name:"txtAttendedBy",
            kind:"AttendGroup",
            active:0
        },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Heard about this project from..." }
            ]
        },
        {
            name:"txtKnowAbout",
            kind:"AboutGroup",
            active:0
        },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Please notify me on future property launches by..." }
            ]
        },
        {
                classes:"mct-inputBoxGroup",
                components:[
                {
                    layoutKind: "FittableColumnsLayout",
                    components:[
                        {
                            kind:"onyx.Checkbox",
                            classes:"mct-checkbox"
                        },
                        {
                            tag:"h2",
                            style:"line-height:35px;",
                            content:"Call"
                        },
                        {
                            style:"width:15px"
                        },
                        {
                            kind:"onyx.Checkbox",
                            classes:"mct-checkbox"
                        },
                        {
                            tag:"h2",
                            style:"line-height:35px;",
                            content:"SMS"
                        },
                        {
                            style:"width:15px"
                        },
                        {
                            kind:"onyx.Checkbox",
                            classes:"mct-checkbox"
                        },
                        {
                            tag:"h2",
                            style:"line-height:35px;",
                            content:"Email"
                        }

                    ]
                }
            ]
        },
        { style:"height:20px" },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Disclaimer" }
            ]
        },
        {
                classes:"mct-inputBox",
                components:[
                {
                    layoutKind: "FittableColumnsLayout",
                    components:[
                        {
                            kind:"onyx.Checkbox",
                            classes:"mct-checkbox"
                        },
                        {
                            fit:true,
                            tag:"p",
                            style:"line-height:20px;text-align:justify",
                            content:"* I hereby agree and expressly give consent to MCT Consortium Berhad and its group of companies to collect and process my personal data for their records so as to enable them to keep me informed of any updates/ information with regard to MCT Consortium Berhad’s event and any other future events, promotion, products, services, and marketing related information, provided that the use of my personal data will not breach any applicable data protection legislation."
                        }
                    ]
                }
                ]
        },
        {
            classes:"mct-inputBoxGroup align-right",
            components:[
                {
                    kind:"Button",
                    classes:"blueButton",
                    ontap:"handleButtonTapped",
                    content:"Submit"
                }
            ]
        },
        { style:"height:100px" }
        
    ],
    published:{
        data:null        
    },
    create: function() {
        this.inherited(arguments);
    },
    dataChanged: function() {
        console.log(this.data);
        this.$.txtNation.setContent(this.data);
    },
    handleNationTapped:function(inSender,inEvent) {
        this.bubble("onCountryButtonTapped");
    },
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onHandleButtonTapped");
    }
});