/* Requires Validator */
enyo.kind({
    name: "go.ContactForm",
    kind: "Control",
    label:"",
    fullURL: "",
    components: [
        {
        	tag:"div",
            name:"contactFormControl",
        	style:"padding:15px;height:280px",
         	components:[
        		{
        			kind:"onyx.Input",
        			style:"padding:10px;",
        			classes:"setWidth90 floatRight marginTop-0px marginBottom-5px",
        			placeholder:"Name",
        			name:"txtName",
                    attributes: { 
                        required:"required" 
                    }
        			
        		},
        		{
        			kind:"onyx.Input",
        			style:"padding:10px;",
        			classes:"setWidth90 floatRight marginTop-0px marginBottom-5px",
        			placeholder:"Phone",
        			name:"txtPhone" 

        		},
        		{
        			kind:"onyx.Input",
        			style:"padding:10px;",
        			classes:"setWidth90 floatRight marginTop-0px marginBottom-5px",
        			placeholder:"Email",
        			name:"txtEmail",
        			attributes: { 
                        required:"email" 
                    }
        			
        		},
        		{
        			kind:"onyx.TextArea",
        			style:"padding:10px;",
        			classes:"setWidth90 floatRight marginTop-0px marginBottom-10px",
        			placeholder:"Message",
        			name:"txtMessage",
        			attributes: { 
                        required:"required" 
                    }
        		},
                {
        			kind:"onyx.Button",
        			content:"Send >",
        			onclick:"handleBtnSend",
        			classes:"setWidth20 floatRight resetCorner",
        			name:"btnSend",
                    attributes: { 
                        required:"required" 
                    }
        		}
            ]
        },
        {
            tag:"div",
            style:"padding:15px;",
            classes:"floatRight setWidth90 txtAlignLeft",
            name:"labelContentControl",
            allowHtml:true,
            content:""
        }
    ],
    create:function(){
        this.inherited(arguments);
        if (this.label != ""){
            this.$.labelContentControl.setContent(this.label);
        }
    },
    setLabel:function(text){
        if (text != ""){
            this.label = text;
            this.$.labelContentControl.setContent(this.label);
        } else {
            console.log("ContactForm control : Please provide content for label.");
        }
    },
    handleBtnSend:function(inSender,inEvent){
        var self = this;
        this.validUtil = new go.Validator();
        this.validUtil.validate(this.$.contactFormControl, onSuccessValidate, onErrorValidate);

        function onSuccessValidate(results){
            var payLoad = { 
                name : self.$.txtName.getValue(),
                phone : self.$.txtPhone.getValue(),
                email : self.$.txtEmail.getValue(),
                message : self.$.txtMessage.getValue()
            };
            self.bubble("onContactSubmitReady",payLoad);  
        }

        function onErrorValidate(results){
            enyo.Signals.send("onRelease");
            this.feedBackUser = new FeedBackUser();
            this.feedBackUser.handleFormError(results);
        }
    }
 });