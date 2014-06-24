enyo.kind({
    name: "BusinessNatureGroup",
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
                    content:"Accounting / Finance",
                    value:"Accounting / Finance"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Admin / Human Resources",
                    value:"Admin / Human Resources"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Arts / Media / Communications",
                    value:"Arts / Media / Communications"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Building / Construction",
                    value:"Building / Construction"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Computer / Information Technology",
                    value:"Computer / Information Technology"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Education / Training",
                    value:"Education / Training"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Engineering",
                    value:"Engineering"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Healthcare",
                    value:"Healthcare"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Hotel / Restaurant",
                    value:"Hotel / Restaurant"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Manufacturing",
                    value:"Manufacturing"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Sales / Marketing",
                    value:"Sales / Marketing"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Sciences",
                    value:"Sciences"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Service",
                    value:"Service"
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