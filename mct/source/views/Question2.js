enyo.kind({
    name: "Question2",
    kind: "Scroller",
    touch:true, 
    thumb:true,
    classes:"panel-view",
    fit:true,
    global:go.Global,
    strategyKind:"TransitionScrollStrategy",
    components: [
        {
            classes:"scrimCover",
            components:[
                 { style:"height:20px" },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Occupation" }
                    ]
                },
                {
                    name:"txtOccupation",
                    kind:"OccupationGroup",
                    active:0
                },

                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Race" }
                    ]
                },
                {
                   name:"txtRace",
                   kind:"RaceGroup",
                   active:0
                },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Maritial Status" }
                    ]
                },
                {
                   name:"txtMaritial",
                   kind:"MaritialGroup",
                   active:0
                },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Nationality" }
                    ]
                },
                {
                   name:"txtNationality",
                   kind:"NationalityGroup",
                   active:0
                },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Monthly Income" }
                    ]
                },
                {
                   name:"txtIncome",
                   kind:"IncomeGroup",
                   active:0
                },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Age Group" }
                    ]
                },
                {
                    name:"txtAgeGroup",
                    kind:"AgeGroup",
                    active:0
                },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Source of Financing" }
                    ]
                },
                {
                    name:"txtFinanceGroup",
                    kind:"FinanceGroup",
                    active:0
                },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Nature of Business" }
                    ]
                },
                {
                    name:"txtBusinessNature",
                    kind:"BusinessNatureGroup",
                    active:0
                },
                { style:"height:40px" },
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
    }
});