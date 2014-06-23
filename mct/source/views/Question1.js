enyo.kind({
    name: "Question1",
    kind: "Scroller",
    touch:true, 
    thumb:true,
    classes:"panel-view",
    fit:true,
    global:go.Global,
    strategyKind:"TransitionScrollStrategy",
    components: [{
            name:"form1Data",
            components:[
                    { style:"height:20px" },
                    {
                        tag:"h2",
                        classes:'note-text',
                        content:"Please fill up your name below."
                    },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInput",
                                kind:"Input",
                                name:"txtFirstName",
                                placeholder:"First Name",
                                attributes:{
                                    required: "required",
                                    maxlength:50  
                                }
                            }
                        ]
                    },
                    { style:"height:5px" },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInput",
                                kind:"Input",
                                name:"txtLastName",
                                placeholder:"Last Name",
                                attributes:{
                                    required: "required",
                                    maxlength:50  
                                }
                            }
                        ]
                    },
                    { style:"height:15px" },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Title" }
                        ]
                    },
                    {
                       name:"txtTitle",
                       kind:"TitleGroup",
                       active:0
                    },
                    { style:"height:15px" },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Correspondence Address" }
                        ]
                    },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInputTxtArea",
                                kind:"TextArea",
                                name:"txtAddress",
                                validation: "required",
                                placeholder:"Insert address...",
                                attributes:{
                                    required: "required",
                                    maxlength:150  
                                }
                            }
                        ]
                    },
                    { style:"height:5px" },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Contact Details" }
                        ]
                    },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInput",
                                kind:"Input",
                                name:"txtContactNo",
                                placeholder:"Mobile No (0123467890)",
                                attributes:{
                                    required: 'pattern ^01[0-9]{6,8}$|^01[0-9][0-9]{6,8}$ true',
                                    maxlength:12  
                                }
                            }
                        ]
                    },
                    { style:"height:5px" },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInput",
                                kind:"Input",
                                name:"txtEmail",
                                placeholder:"Email",
                                attributes:{
                                    required: "email",
                                    maxlength:255  
                                }
                            }
                        ]
                    },
                    { style:"height:5px" },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInput",
                                kind:"Input",
                                name:"txtNRICPassport",
                                placeholder:"NRIC or Passport",
                                attributes:{
                                    required: "required",
                                    maxlength:50  
                                }
                            }
                        ]
                    },
                    { style:"height:5px" },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Current Home" }
                        ]
                    },
                    {
                        name:"txtCurrentHome",
                        kind:"CurrentHomeGroup",
                        active:0
                    },
                    { style:"height:15px" },
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
                    { style:"height:100px" } 
                    
                ]
    }],
    create: function() {
        this.inherited(arguments);
    },
    getFormData:function() {
        var payLoad = {};
        payLoad.firstname = this.$.txtFirstName.getValue();
        payLoad.lastname = this.$.txtLastName.getValue();
        payLoad.title = this.$.txtTitle.getValue();
        payLoad.contactno = this.$.txtContactNo.getValue();
        payLoad.email = this.$.txtEmail.getValue();
        payLoad.nricpassport = this.$.txtNRICPassport.getValue();
        payLoad.address = this.$.txtAddress.getValue();
        payLoad.currenthome = this.$.txtCurrentHome.getValue();
        return payLoad;
    },
    handleButtonTapped:function(inSender,inEvent) {
        var _this = this;
    	var myValidator = new go.Validator();
        myValidator.validate(this.$.form1Data,onSuccessValidate,onFailValidate);
        function onSuccessValidate(response){
            var myPayLoad = _this.getFormData();
            _this.global.setObject("PAYLOAD",myPayLoad);
            console.log("Saving payload for form page one");
            console.log(myPayLoad);
            _this.bubble("onHandleButtonTapped");
        }
        function onFailValidate(error){
            this.feedBackUser = new FeedBackUser();
            this.feedBackUser.handleFormError(error);
        }
        
    }
});