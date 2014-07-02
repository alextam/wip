enyo.kind({
    name: "SelectorCheck",
    kind: "Control",
    style:"padding:5px;",
    classes:"checkBoxGroup",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	kind:"onyx.Checkbox",
        	classes:"mct-checkbox",
        	name:"valueCheck"
        },
        {
        	name:"txtContent",
        	content:"Set Title...",
        	style:"line-height:35px;",
        	ontap:"handleTapCheckBox"
        }
    ],
    published:{
        content:null,
        value:null,
        active:0
    },
    create: function() {
        this.inherited(arguments);
        this.contentChanged();
    },
    contentChanged:function() {
    	this.$.txtContent.setContent(this.content);
    },
    getValue:function() {
    	if(this.$.valueCheck.getChecked()) {
    		return this.value;
    	} else {
    		return 0;
    	}
    },
    resetValue:function(){
    	this.$.valueCheck.setChecked(false);
    },
    handleTapCheckBox:function(inSender,inEvent) {
    	this.$.valueCheck.setChecked(!this.$.valueCheck.getChecked());
    }
});