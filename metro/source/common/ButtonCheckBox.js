enyo.kind({
    name: "ButtonCheckBox",
    kind: "Button",
    classes:"btnCheckBox",
    value:false,
    published:{
    	content:"OK",
        disabled: false
    },
    handlers:{
        ontap:"handleButtonCheck"
    },
    components: [
       {name:"labelChk",kind:"onyx.Checkbox", onchange:"handleChecked"},
       {name:"Label", content:"", style:"padding-left:5px;padding-right:5px;font-weight:bold"}
    ],
    events: {
        onChecked: ""
    },
    create: function() {
        this.inherited(arguments);
        this.contentChanged();

        this.disabledChanged();
    },
    contentChanged:function(){
    	this.$.Label.setContent(this.content);
        if (this.content == "OK"){
            this.$.labelChk.label = true;    
        } else {
            this.$.labelChk.label = false;
        }
        
    },
    getValue:function(){
        return this.$.labelChk.getChecked();
    },
    setValue:function(value){
        this.value = value;
        this.$.labelChk.setChecked(this.value);
    },
    disabledChanged: function() {
        this.inherited(arguments);

        this.$.labelChk.setDisabled(this.disabled);
    },
    handleChecked:function(inSender,inEvent) {
        this.doChecked({value:this.$.labelChk.getValue()});
    },
    handleButtonCheck: function(inSender,inEvent) {
        if (!this.disabled) {
        	this.setValue(!this.$.labelChk.getChecked());
        	this.doChecked({value:this.$.labelChk.getValue()});
        }
    }
});