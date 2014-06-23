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
            classes:"scrimCover",
            components:[
                    /*
                    {
                        tag:"h2",
                        classes:'note-text',
                        content:"Please fill up your name below."
                    },
                    */
                    {
                        style:"height:20px;"
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
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Title" }
                        ]
                    },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                name:"txtTitle",
                                kind:"StandardPicker",
                                defaultText:"Select Title...",
                                datasource:[
                                    { content:"Mr",value:"Mr", active:true },
                                    { content:"Mrs", value:"Mrs"},
                                    { content:"Ms", value:"Ms"},
                                    { content:"Dr", value:"Dr"},
                                    { content:"Dato'", value:"Dato'"},
                                    { content:"Datin", value:"Datin"},
                                    { content:"Dato' Seri", value:"Dato' Seri" },
                                    { content:"Tan Sri", value:"Tan Sri"}
                                ]
                            }
                        ]
                    },
                    /*{
                       name:"txtTitle",
                       kind:"TitleGroup",
                       active:0
                    },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Correspondence Address" }
                        ]
                    },
                     */
                    { style:"height:10px" },
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInputTxtArea",
                                kind:"TextArea",
                                name:"txtAddress",
                                validation: "required",
                                placeholder:"Correspondence address...",
                                attributes:{
                                    required: "required",
                                    maxlength:150  
                                }
                            }
                        ]
                    },
                    /*
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Contact Details" }
                        ]
                    },
                    */
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                classes:"mct-realInput",
                                kind:"Input",
                                name:"txtContactNo",
                                placeholder:"Mobile No (60123467890)",
                                attributes:{
                                    required: 'pattern ^601[0-9]{6,8}$|^601[0-9][0-9]{6,8}$ true',
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
                                    maxlength:50  
                                }
                            }
                        ]
                    },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Current Home" }
                        ]
                    },
                    /*
                    {
                        name:"txtCurrentHome",
                        kind:"CurrentHomeGroup",
                        active:0
                    },
                    */
                    {
                        classes:"mct-inputBoxGroup",
                        components:[
                            {
                                kind:"StandardPicker",
                                name:"txtCurrentHome",
                                defaultText:"Select Current Home...",
                                datasource:[
                                    { content:"Owner", value:"Owner", active:true},
                                    { content:"Rented", value:"Rented"},
                                    { content:"Stay with Family", value:"Stay with Family"},
                                    { content:"Others", value:"Others"}
                                ]
                            }
                        ]
                    },
                    { style:"height:10px" },
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
                    { style:"height:50px" } 
                    
                ]
    }],
    create: function() {
        this.inherited(arguments);
    },
    getFormData:function() {
        /*
        //firstname
        //lastname
        //title
        //address
        //contactno
        //email
        //nricpassport
        //currenthome
        occupation
        race
        maritial
        nationality
        agegroup
        incomegroup
        finance
        naturebusiness
        projectinterest
        attendedby
        heardfrom
        notifycall
        notifysms
        notifyemail
        */
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