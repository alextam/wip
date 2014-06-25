enyo.kind({
    name: "Question2",
    kind: "Scroller",
    touch:false, 
    thumb:false,
    classes:"panel-view",
    fit:true,
    global:go.Global,
    strategyKind:"TransitionScrollStrategy",
    components: [
        {
            classes:"scrimCover",
            components:[
                { style:"height:80px" },
                {
                    layoutKind: "FittableColumnsLayout",
                    style:"text-align:center",                    
                    components:[
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Occupation" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtOccupation",
                                            kind:"StandardPicker",
                                            defaultText:"Select Occupation...",
                                            datasource:[
                                                { content:"Professional", value:"Professional", active:true},
                                                { content:"Businessman", value:"Businessman" },
                                                { content:"Manager", value:"Manager" },
                                                { content:"Executive", value:"Executive" },
                                                { content:"Retiree", value:"Retiree" },
                                                { content:"Others", value:"Others" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            classes:"width50",
                            components:[
                               { tag:"h2", content:"Race" },
                               {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtRace",
                                            kind:"StandardPicker",
                                            defaultText:"Select Race...",
                                            datasource:[
                                                { content:"Malay", value:"Malay", active:true},
                                                { content:"Chinese", value:"Chinese" },
                                                { content:"Indian", value:"Indian" },
                                                { content:"Others", value:"Others" }
                                            ]
                                        }
                                    ]
                                }
                            ]

                        }
                    ]
                },
                { style:"height:10px" },
                {
                    layoutKind: "FittableColumnsLayout",
                    style:"text-align:center",                    
                    components:[
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Maritial Status" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtMaritial",
                                            kind:"StandardPicker",
                                            defaultText:"Select Maritial Status...",
                                            datasource:[
                                                { content:"Single", value:"Single", active:true},
                                                { content:"Married", value:"Married" },
                                                { content:"Others", value:"Others" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Nationality" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtNationality",
                                            kind:"StandardPicker",
                                            defaultText:"Select Nationality...",
                                            datasource:[
                                                { content:"Malaysian", value:"Malaysian", active:true},
                                                { content:"Others", value:"Others" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { style:"height:10px" },
                {
                    layoutKind: "FittableColumnsLayout",
                    style:"text-align:center",                    
                    components:[
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Age Group" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtAgeGroup",
                                            kind:"StandardPicker",
                                            defaultText:"Select Age Group...",
                                            datasource:[
                                                { content:"20 - 30 years old", value:"20 - 30", active:true},
                                                { content:"31 - 40 years old", value:"31 - 40" },
                                                { content:"40 - 50 years old", value:"40 - 50" },
                                                { content:"51 years old & above", value:"51 &amp; above" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Source of Financing" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtFinanceGroup",
                                            kind:"StandardPicker",
                                            defaultText:"Select Finance Group...",
                                            datasource:[
                                                { content:"Bank", value:"Bank", active:true},
                                                { content:"Company", value:"Company" },
                                                { content:"Government", value:"Government" },
                                                { content:"Cash", value:"Cash" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                 { style:"height:10px" },
                {
                    layoutKind: "FittableColumnsLayout",
                    style:"text-align:center",                    
                    components:[
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Nature of Business" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtBusinessNature",
                                            kind:"StandardPicker",
                                            defaultText:"Select Business Nature...",
                                            datasource:[
                                                { content:"Accounting / Finance", value:"Accounting / Finance", active:true },
                                                { content:"Admin / Human Resources", value:"Admin / Human Resources" },
                                                { content:"Arts / Media / Communications", value:"Arts / Media / Communications" },
                                                { content:"Building / Construction", value:"Building / Construction" },
                                                { content:"Computer / Information Technology", value:"Computer / Information Technology" },
                                                { content:"Education / Training", value:"Education / Training" },
                                                { content:"Engineering", value:"Engineering" },
                                                { content:"Healthcare", value:"Healthcare" },
                                                { content:"Hotel / Restaurant",value:"Hotel / Restaurant" },
                                                { content:"Manufacturing",value:"Manufacturing" },
                                                { content:"Sales / Marketing",value:"Sales / Marketing" },
                                                { content:"Sciences",value:"Sciences" },
                                                { content:"Service",value:"Service" },
                                                { content:"Others",value:"Others" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Monthly Income" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtIncome",
                                            kind:"StandardPicker",
                                            defaultText:"Select Income...",
                                            datasource:[
                                                { content:"Below RM 4,000", value:"Below RM4,000", active:true},
                                                { content:"RM 4001 - RM 6,000", value:"RM4001 - RM6,000" },
                                                { content:"RM 6001 - RM 8,000", value:"RM6001 - RM8,000" },
                                                { content:"RM 8,001 & above", value:"RM8,001 &amp; above" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { style:"height:40px" },
                {
                    classes:"mct-inputBoxGroup align-right",
                    components:[
                        {
                            kind:"Button",
                            name:"submitButton",
                            classes:"blueButton",
                            onclick:"handleButtonTapped",
                            content:"Next"
                        }
                    ]
                },
                { style:"height:100px" }
            ]
        }
    ],
    create: function() {
        this.inherited(arguments);
        this.myPayLoad = this.global.getObject("PAYLOAD");
    },
    getFormData:function() {
        /*
        projectinterest
        attendedby
        heardfrom
        notifycall
        notifysms
        notifyemail
        */
        var payLoad = {};
        payLoad.occupation = this.$.txtOccupation.getValue();
        payLoad.maritial = this.$.txtMaritial.getValue();
        payLoad.nationality = this.$.txtNationality.getValue();
        payLoad.race = this.$.txtRace.getValue();
        payLoad.naturebusiness = this.$.txtBusinessNature.getValue();
        payLoad.nricpassport = this.$.txtFinanceGroup.getValue();
        payLoad.agegroup = this.$.txtAgeGroup.getValue();
        payLoad.incomegroup = this.$.txtIncome.getValue();
        payLoad.finance = this.$.txtFinanceGroup.getValue();
        return payLoad;
    },
    handleButtonTapped:function(inSender,inEvent) {
        this.myPayLoad = this.global.getObject("PAYLOAD");
        var formData = this.getFormData();
        this.myPayLoad.occupation = formData.occupation;
        this.myPayLoad.maritial = formData.maritial;
        this.myPayLoad.nationality = formData.nationality;
        this.myPayLoad.race = formData.race;
        this.myPayLoad.naturebusiness = formData.naturebusiness;
        this.myPayLoad.nricpassport = formData.nricpassport;
        this.myPayLoad.agegroup = formData.agegroup;
        this.myPayLoad.incomegroup = formData.incomegroup;
        this.myPayLoad.finance = formData.finance;
        
        console.log(this.myPayLoad);
        this.global.setObject("PAYLOAD",this.myPayLoad);
    	this.bubble("onHandleButtonTapped");
        //this.resetForm();
    },
    resetForm:function() {
        this.$.txtIncome.setValue("Below RM 4,000");
        this.$.txtRace.setValue("Malay");
        this.$.txtNationality.setValue("Malaysian");
        this.$.txtOccupation.setValue("Professional");
        this.$.txtMaritial.setValue("Single");
        this.$.txtFinanceGroup.setValue("Bank");
        this.$.txtAgeGroup.setValue("20 - 30");
        this.$.txtBusinessNature.setValue("Accounting / Finance");
    }
});