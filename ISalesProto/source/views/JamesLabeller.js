enyo.kind({
    name: "JamesLabeller",
    kind: "Control",
    classes:"drawerContentBoxLabel",
    components: [
    	{
            name:"txtLabel",
            classes:"questionBox",
            allowHtml:true,
            content: "Set Question Here..."
        },
        {
        	classes:"labelValue",
        	name:"txtValue",
        	content:"MYR 0.00"
        }
    ],
    published:{
        value:null,
    	sliderData:null,
        label:"",
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        this.dataChanged();
    },
    valueChanged:function() {
        this.$.txtValue.setContent("MYR " + numeral(this.value).format("0,0"));
    },
    labelChanged:function() {
    	this.$.txtValue.setContent(this.label);
    	
    },
    dataChanged: function() {
    	this.$.txtLabel.setContent(this.data);
    }
});