enyo.kind({
    name: "FormRemainingItem",
    kind: "Control",
    classes:"dataBoxRemaining",
    layoutKind: "FittableColumnsLayout",
    components:[
        {
            name:"txtPostCode",
            placeholder:"Postcode Here...",
            kind:"FormItemSmaller",
            label:"Postcode"
        },
        {
            name:"txtCountry",
            placeholder:"Country Here...",
            kind:"FormItemSmaller",
            label:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country"
        }
    ],
    published:{
        data:null        
    },
    dataChanged: function() {
        this.$.txtPostCode.setValue(this.data.postcode);
        this.$.txtCountry.setValue(this.data.country);
    },
    reset:function(){
        this.$.txtPostCode.reset();
        this.$.txtCountry.reset();
    }
});