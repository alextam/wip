enyo.kind({
    name: "Question2",
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
        { style:"height:80px" }
    ],
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onHandleButtonTapped");
    }
});