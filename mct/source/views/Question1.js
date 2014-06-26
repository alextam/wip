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
            //onclick:"handleZoomBack",
            components:[
                    { kind:"Header" },
                    {
                        style:"height:25px;"
                    },
                    {
                        tag:"h2",
                        classes:'note-text',
                        content:"Please fill up the form below."
                    },
                    {
                        layoutKind: "FittableColumnsLayout",
                        style:"text-align:center",
                        components:[
                            {
                                style:"width:24%;",
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
                            { style:"width:1%" },
                            {
                                style:"width:30%",
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
                            { style:"width:1%" },
                            {
                                style:"width:30%",
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
                            }
                        ]
                    },
                    
                    { style:"height:10px" },
                    {
                        style:"text-align:center",
                        layoutKind: "FittableColumnsLayout",
                        components:[
                            {
                                classes:"mct-inputBoxGroup",
                                components:[
                                    {
                                        classes:"mct-realInputTxtArea",
                                        kind:"TextArea",
                                        name:"txtAddress",
                                        validation: "required",
                                        placeholder:"Correspondence Address",
                                        onfocus:"handleZoom",
                                        attributes:{
                                            required: "required",
                                            maxlength:150  
                                        }
                                    }
                                ]        
                            }
                        ]
                        
                    },
                    { style:"height:5px" },
                    {
                        style:"text-align:center",
                        layoutKind: "FittableColumnsLayout",
                        components:[
                            {
                                classes:"mct-inputBoxGroup55pc",
                                components:[
                                    {
                                        classes:"mct-realInput",
                                        kind:"Input",
                                        name:"txtContactNo",
                                        onfocus:"handleZoom",
                                        placeholder:"Mobile No (60123467890)",
                                        attributes:{
                                            type:'tel',
                                            required: 'pattern ^601[0-9]{6,8}$|^601[0-9][0-9]{6,8}$ true',
                                            maxlength:12  
                                        }
                                    }
                                ]
                            },
                            { 
                                classes:"mct-inputRemaining",
                                content:"E.g. 60123467890"
                            }
                        ]
                        
                    },
                    { style:"height:5px" },
                    {
                        style:"text-align:center",
                        layoutKind: "FittableColumnsLayout",
                        components:[
                            {
                                classes:"mct-inputBoxGroup55pc",
                                //classes:"mct-inputBoxGroup",
                                components:[
                                    {
                                        classes:"mct-realInput",
                                        kind:"Input",
                                        name:"txtEmail",
                                        placeholder:"Email",
                                        onfocus:"handleZoom",
                                        attributes:{
                                            required: "email",
                                            maxlength:255  
                                        }
                                    }
                                ]
                            },
                            { 
                                classes:"mct-inputRemaining",
                                content:"E.g. johndoe@email.com" 
                            }
                        ]
                    },
                    { style:"height:5px" },
                    {
                        style:"text-align:center",
                        layoutKind: "FittableColumnsLayout",
                        components:[
                            {
                                classes:"mct-inputBoxGroup55pc",
                                //classes:"mct-realInput",
                                components:[
                                    {
                                        classes:"mct-realInput",
                                        kind:"Input",
                                        name:"txtNRICPassport",
                                        onfocus:"handleZoom",
                                        placeholder:"NRIC or Passport",
                                        attributes:{
                                            maxlength:50  
                                        }
                                    }
                                ]
                            },
                            { classes:"mct-inputRemaining" }
                        ]
                    },
                    {
                        classes:"mct-inputBox",
                        components:[
                            { tag:"h2", content:"Current Home" }
                        ]
                    },
                   
                    {
                        style:"text-align:center",
                        layoutKind: "FittableColumnsLayout",
                        components:[
                            {
                                classes:"mct-inputBoxGroup55pc",
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
                            { classes:"mct-inputRemaining" }
                        ]
                    },
                    { style:"height:10px" },
                    {
                        classes:"mct-inputBoxGroup align-right",
                        layoutKind: "FittableColumnsLayout",
                        components:[
                            { style:"width:5px" },
                            {
                                kind:"Button",
                                classes:"blueButton",
                                onclick:"handleButtonTapped",
                                content:"Next"
                            }
                        ]
                    },
                    { style:"height:0px" } 
                    
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
    handleZoomBack:function(inSender,inEvent) {
        this.scrollToTop();
    },
    resetForm:function(){
        this.scrollToTop();
        this.$.txtTitle.setValue("Mr");
        this.$.txtFirstName.setValue("");
        this.$.txtLastName.setValue("");
        this.$.txtContactNo.setValue("");
        this.$.txtEmail.setValue("");
        this.$.txtNRICPassport.setValue("");
        this.$.txtAddress.setValue("");
        this.$.txtCurrentHome.setValue("Owner");
    },
    handleZoom:function(inSender,inEvent) {
        switch(inSender.name) {
            case "txtAddress" :
                this.setScrollTop(100);
                return true;
            break;

            case "txtContactNo" :
                this.setScrollTop(150);
                return true;
            break;

            case "txtEmail" :
                this.setScrollTop(200);
                return true;
            break;

            case "txtNRICPassport" :
                this.setScrollTop(250);
                return true;
            break;
        }
        
    },
    handleButtonTapped:function(inSender,inEvent) {
        var _this = this;
        var myValidator = new go.Validator();
        myValidator.validate(this.$.form1Data,onSuccessValidate,onFailValidate);
        this.scrollToTop();
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