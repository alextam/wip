enyo.kind({
    name: "RaceGroup",
    kind: "Control",
    classes:"mct-inputBoxGroup",
    components:[
        {
            kind:"Group",
            name:"txtGroup",
            components:[
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    active:true,
                    content:"Malay",
                    value:"Malay"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Chinese",
                    value:"Chinese"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Indian",
                    value:"Indian"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Others",
                    value:"Others"
                }
            ]
        }
    ],
    published:{
        active:0		
    },
    create: function() {
        this.inherited(arguments);
        this.activeChanged();
    },
    activeChanged:function() {
    	this.$.txtGroup.setActive(this.$.txtGroup.controls[this.getActive()]);
    	this.$.txtGroup.render();
    },
    getValue:function() {
    	return this.$.txtGroup.getActive().value;
    }
});