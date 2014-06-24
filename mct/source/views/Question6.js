enyo.kind({
    name: "Question6",
    kind: "Control",
    classes:"panel-view",
    components: [
        { style:"height:40px" },
        {
            classes:"mct-inputBoxGroup",
            components:[
                {
                    kind:"Button",
                    classes:"pickerButton",
                    ontap:"handleAgeGroupTapped",
                    components:[
                        {
                            name:"txtAge",
                            content:"Your age group ...", 
                            style:"width:90%;text-align:left"       
                        },
                        {
                            content:"<strong>&gt;</strong>",
                            style:"width:10%;text-align:center;font-size:1.5em;",
                            allowHtml:true
                        }
                    ]
                    
                }
            ]
        },
        { style:"height:10px" },
        {
            classes:"mct-inputBoxGroup",
            components:[
                {
                    kind:"Button",
                    classes:"pickerButton",
                    ontap:"handleOccupationTapped",
                    components:[
                        {
                            name:"txtOccupation",
                            content:"Your occupation ...", 
                            style:"width:90%;text-align:left"       
                        },
                        {
                            content:"<strong>&gt;</strong>",
                            style:"width:10%;text-align:center;font-size:1.5em;",
                            allowHtml:true
                        }
                    ]
                    
                }
            ]
        },
        { style:"height:10px" },
        {
            classes:"mct-inputBoxGroup",
            components:[
                {
                    kind:"Button",
                    classes:"pickerButton",
                    ontap:"handleMonthlyIncomeTapped",
                    components:[
                        {
                            name:"txtMonthlyIncome",
                            content:"Monthly income range ...", 
                            style:"width:90%;text-align:left"       
                        },
                        {
                            content:"<strong>&gt;</strong>",
                            style:"width:10%;text-align:center;font-size:1.5em;",
                            allowHtml:true
                        }
                    ]
                    
                }
            ]
        },
        { style:"height:10px" },
        {
            classes:"mct-inputBoxGroup",
            components:[
                {
                    kind:"Button",
                    classes:"pickerButton",
                    ontap:"handleNatureOfBusinessTapped",
                    components:[
                        {
                            name:"txtNatureOfBusiness",
                            content:"Nature of business ...", 
                            style:"width:90%;text-align:left"       
                        },
                        {
                            content:"<strong>&gt;</strong>",
                            style:"width:10%;text-align:center;font-size:1.5em;",
                            allowHtml:true
                        }
                    ]
                    
                }
            ]
        },
        { style:"height:10px" },
        {
            classes:"mct-inputBoxGroup align-right",
            components:[
                {
                    kind:"Button",
                    classes:"blueButton",
                    ontap:"handleButtonTapped",
                    content:"Next"
                }
            ]
        }
        
    ],
    published:{
        dataAge:null        
    },
    dataAgeChanged: function() {
        this.$.txtAge.setContent(this.dataAge);
    },
    handleAgeGroupTapped:function(inSender,inEvent) {
        this.bubble("onAgeGroupButtonTapped");
    },        
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onHandleButtonTapped");
    }
});