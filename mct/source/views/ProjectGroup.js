enyo.kind({
    name: "ProjectGroup",
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
                    content:"Sgl/Double Storey Link",
                    value:"Sgl/Double Storey Link"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Townhouse",
                    value:"Townhouse"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Semi-D/Zero-lot",
                    value:"Semi-D/Zero-lot"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Bungalow/Villa",
                    value:"Bungalow/Villa"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"SOHO",
                    value:"SOHO"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Apt/Condo",
                    value:"Apt/Condo"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Shop Lot",
                    value:"Shop Lot"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Factory Lot",
                    value:"Factory Lot"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Retail Lot",
                    value:"Retail Lot"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Office Suite",
                    value:"Office Suite"
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