enyo.kind({
    name: "Question3",
    kind: "Scroller",
    touch:true, 
    thumb:true,
    classes:"panel-view",
    fit:true,
    global:go.Global,
    phoneGap : go.PhoneGapSuit,
    strategyKind:"TransitionScrollStrategy",
    components: [
        { style:"height:20px" },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Type of project interested" }
            ]
        },
        {
           name:"txtProjectGroup",
           kind:"ProjectGroup",
           active:0
        },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Attended by" }
            ]
        },
        {
            name:"txtAttendedBy",
            kind:"AttendGroup",
            active:0
        },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Heard about this project from..." }
            ]
        },
        {
            name:"txtKnowAbout",
            kind:"AboutGroup",
            active:0
        },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Please notify me on future property launches by..." }
            ]
        },
        {
                classes:"mct-inputBoxGroup",
                components:[
                {
                    layoutKind: "FittableColumnsLayout",
                    components:[
                        {
                            kind:"onyx.Checkbox",
                            name:"txtNotifyCall",
                            classes:"mct-checkbox"
                        },
                        {
                            tag:"h2",
                            style:"line-height:35px;",
                            content:"Call"
                        },
                        {
                            style:"width:15px"
                        },
                        {
                            kind:"onyx.Checkbox",
                            name:"txtNotifySMS",
                            classes:"mct-checkbox"
                        },
                        {
                            tag:"h2",
                            style:"line-height:35px;",
                            content:"SMS"
                        },
                        {
                            style:"width:15px"
                        },
                        {
                            kind:"onyx.Checkbox",
                            name:"txtNotifyEmail",
                            classes:"mct-checkbox"
                        },
                        {
                            tag:"h2",
                            style:"line-height:35px;",
                            content:"Email"
                        }

                    ]
                }
            ]
        },
        { style:"height:20px" },
        {
            classes:"mct-inputBox",
            components:[
                { tag:"h2", content:"Disclaimer" }
            ]
        },
        {
                classes:"mct-inputBox",
                components:[
                {
                    layoutKind: "FittableColumnsLayout",
                    components:[
                        {
                            kind:"onyx.Checkbox",
                            active:true,
                            name:"txtAgree",
                            classes:"mct-checkbox"
                        },
                        {
                            fit:true,
                            tag:"p",
                            style:"line-height:20px;text-align:justify",
                            content:"* I hereby agree and expressly give consent to MCT Consortium Berhad and its group of companies to collect and process my personal data for their records so as to enable them to keep me informed of any updates/ information with regard to MCT Consortium Berhad’s event and any other future events, promotion, products, services, and marketing related information, provided that the use of my personal data will not breach any applicable data protection legislation."
                        }
                    ]
                }
                ]
        },
        {
            classes:"mct-inputBoxGroup align-right",
            components:[
                {
                    kind:"Button",
                    classes:"blueButton",
                    ontap:"handleButtonTapped",
                    content:"Submit"
                }
            ]
        },
        { style:"height:100px" }
        
    ],
    published:{
        url:"http://www.getright.com.my/mct_ereg/process_form.php"        
    },
    create: function() {
        this.inherited(arguments);
    },
    getFormData:function() {
        /*
        projectinterest
        attendedby
        heardfrom
        notifycall
        notifysms
        notifyemail
        */
        var payLoad = {};
        payLoad.projectinterest = this.$.txtProjectGroup.getValue();
        payLoad.attendedby = this.$.txtAttendedBy.getValue();
        payLoad.heardfrom = this.$.txtKnowAbout.getValue();
        payLoad.notifycall = this.$.txtNotifyCall.getValue();
        payLoad.notifysms = this.$.txtNotifySMS.getValue();
        payLoad.notifyemail = this.$.txtNotifyEmail.getValue();
        return payLoad;
    },
    handleButtonTapped:function(inSender,inEvent) {
        this.myPayLoad = this.global.getObject("PAYLOAD");
        var formData = this.getFormData();
        this.myPayLoad.projectinterest = formData.projectinterest;
        this.myPayLoad.attendedby = formData.attendedby;
        this.myPayLoad.heardfrom = formData.heardfrom;
        this.myPayLoad.notifycall = formData.notifycall;
        this.myPayLoad.notifysms = formData.notifysms;
        this.myPayLoad.notifyemail = formData.notifyemail;
        
        if (this.$.txtAgree.getValue() == false) {
            this.phoneGap.alert("Please agree with the disclaimer before submitting the registration form.");
        } else {
            //this.bubble("onHandleButtonTapped");
            this.submitForm(this.myPayLoad);
        }
    },
    submitForm:function(payload){
        console.log("Submitting Payload...");
        var _this = this;
        var myPostman = new go.Postman();
        myPostman.init(this.getUrl(),80,3000);
        myPostman.postTo("",payload,onSuccess,onError);
        function onSuccess(inEvent,inResponse){
            _this.phoneGap.alert("Registration Successful.");
        }
        function onError(error){
            _this.phoneGap.alert("There's an error connecting to server, try again later.");
        }
    }

});