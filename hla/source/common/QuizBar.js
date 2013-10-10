enyo.kind({
    name: "QuizBar",
    kind: "Control",
    classes:"padding15px",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	tag:"h1",
        	fit:true,
        	name:"txtTitle",
            style:"line-height:40px !important",
        	classes:"standardH1",
        	content: "Set Title..."
        },
        {
        	style:"width:235px;",
        	components:[
        		{
	        		kind:"Group",
                    name:"chkYesNo",
	        		components:[
	        			{kind:"ButtonCheckBox",content:"OK", style:"width:100px !important"},
						{kind:"ButtonCheckBox",content:"Not OK", style:"width:135px !important"}	        					
	        		]
        		}
       		]
        }
    ],
    published:{
    	title:"Set Title..."
    },
    create:function(){
    	this.inherited(arguments);
    	this.titleChanged();
     },
    setValue:function(value) {
        if(value != null) {
            if (value) {
                this.$.chkYesNo.setActive(this.$.chkYesNo.controls[0]); 
                this.$.chkYesNo.controls[0].setValue(value);   
            } else {
                value = !value;
                this.$.chkYesNo.setActive(this.$.chkYesNo.controls[1]);
                this.$.chkYesNo.controls[1].setValue(value);
            }
        } else {
            this.$.chkYesNo.setActive(null);
            this.$.chkYesNo.controls[0].setValue(null);
            this.$.chkYesNo.controls[1].setValue(null);
        }
    },
    getValue:function(inSender,inEvent) {
        if (this.$.chkYesNo.getActive() != null){
            return this.$.chkYesNo.getActive().label;
        } else {
            return null;
        }
    },
    titleChanged:function(){
    	this.$.txtTitle.setContent(this.title);
    }
});