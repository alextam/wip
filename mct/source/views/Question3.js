enyo.kind({
    name: "Question3",
    kind: "Scroller",
    touch:false, 
    thumb:false,
    classes:"panel-view",
    fit:true,
    global:go.Global,
    phoneGap : go.PhoneGapSuit,
    strategyKind:"TransitionScrollStrategy",
    components: [
        {
            classes:"scrimCover",
            components:[
                { kind:"Header" },
                { style:"height:40px" },
                {
                    layoutKind: "FittableColumnsLayout",
                    style:"text-align:center",                    
                    components:[
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Type of development interested" },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtDevInterest",
                                            kind:"StandardPicker",
                                            defaultText:"Select Project Group...",
                                            datasource:[
                                                { content:"Sgl/Double Storey Link",value:"Sgl/Double Storey Link", active:true },
                                                { content:"Townhouse",value:"Townhouse" },
                                                { content:"Semi-D/Zero-lot",value:"Semi-D/Zero-lot" },
                                                { content:"Bungalow/Villa",value:"Bungalow/Villa" },
                                                { content:"SOHO",value:"SOHO" },
                                                { content:"Apt/Condo",value:"Apt/Condo" },
                                                { content:"Shop Lot",value:"Shop Lot" },
                                                { content:"Factory Lot",value:"Factory Lot" },
                                                { content:"Retail Lot",value:"Retail Lot" },
                                                { content:"Office Suite",value:"Office Suite" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            classes:"width50",
                            components:[
                               { tag:"h2", content:"Attended by" },
                               {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtAttendedBy",
                                            kind:"StandardPicker",
                                            defaultText:"Select Attendee...",
                                            datasource:[
                                                { content:"Adam",value:"1", active:true },
                                                { content:"Ammy",value:"2" },
                                                { content:"Andrew",value:"3" },
                                                { content:"Bryan",value:"4" },
                                                { content:"Claressa",value:"5" },
                                                { content:"Henry",value:"6" },
                                                { content:"Janice",value:"7" },
                                                { content:"Jessly",value:"8" },
                                                { content:"Leon",value:"9" },
                                                { content:"Phoebe",value:"10" },
                                                { content:"Tony",value:"11" },
                                                { content:"Vernon",value:"12" },
                                                { content:"Others",value:"13" }
                                            ]
                                        }
                                    ]
                                }
                            ]

                        }
                    ]
                },
                {
                    layoutKind: "FittableColumnsLayout",
                    style:"text-align:center",                    
                    components:[
                        {
                            classes:"width50",
                            components:[
                               { tag:"h2", content:"Type of project interested" },
                               {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtProjectInterest",
                                            kind:"StandardPicker",
                                            defaultText:"Select Group...",
                                             datasource:[
                                                { content:"Lakefront Residence",value:"1", active:true},
                                                { content:"Lakefront Villa",value:"2" },
                                                { content:"Cyber South",value:"3" },
                                                { content:"MCT Mall",value:"4" }
                                            ]
                                        }
                                    ]
                                }
                            ]

                        },
                        {
                            classes:"width50",
                            components:[
                                { tag:"h2", content:"Heard about this project from..." },
                                {
                                    classes:"mct-inputBoxGroupForSplit",
                                    components:[
                                        {
                                            name:"txtKnowAbout",
                                            kind:"StandardPicker",
                                            defaultText:"Select Group...",
                                            datasource:[
                                                { content:"Internet",value:"Internet", active:true },
                                                { content:"Newspaper",value:"Newspaper" },
                                                { content:"Exhibition",value:"Exhibition" },
                                                { content:"Brochure",value:"Brochure" },
                                                { content:"Word of Mouth",value:"Word of Mouth" },
                                                { content:"Street Bunting",value:"Street Bunting" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        
                    ]
                },
                { style:"height:30px" },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Please notify me on future property launches by...", classes:"checkBoxGroup" }
                    ]
                },
                {
                        classes:"mct-inputBoxGroup",
                        components:[
                        {
                            layoutKind: "FittableColumnsLayout",
                            classes:"checkBoxGroup",
                            components:[
                                {
                                    kind:"onyx.Checkbox",
                                    name:"txtNotifyCall",
                                    active:true,
                                    classes:"mct-checkbox"
                                },
                                {
                                    tag:"h2",
                                    style:"line-height:35px;font-weight:bold !important;",
                                    content:"Call"
                                },
                                {
                                    style:"width:15px"
                                },
                                {
                                    kind:"onyx.Checkbox",
                                    name:"txtNotifySMS",
                                    active:true,
                                    classes:"mct-checkbox"
                                },
                                {
                                    tag:"h2",
                                    style:"line-height:35px;font-weight:bold !important;",
                                    content:"SMS"
                                },
                                {
                                    style:"width:15px"
                                },
                                {
                                    kind:"onyx.Checkbox",
                                    name:"txtNotifyEmail",
                                    active:true,
                                    classes:"mct-checkbox"
                                },
                                {
                                    tag:"h2",
                                    style:"line-height:35px;font-weight:bold !important;",
                                    content:"Email"
                                }

                            ]
                        }
                    ]
                },
                { style:"height:10px" },
                {
                    classes:"mct-inputBox",
                    components:[
                        { tag:"h2", content:"Disclaimer" }
                    ]
                },
                {
                        classes:"mct-inputBox checkBoxGroup",
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
                                    style:"line-height:20px;text-align:justify;padding-right:15px;",
                                    content:"* I hereby agree and expressly give consent to MCT Consortium Berhad and its group of companies to collect and process my personal data for their records so as to enable them to keep me informed of any updates/ information with regard to MCT Consortium Berhad’s event and any other future events, promotion, products, services, and marketing related information, provided that the use of my personal data will not breach any applicable data protection legislation."
                                }
                            ]
                        }
                        ]
                },
                {
                    classes:"mct-inputBoxGroup align-right",
                    layoutKind: "FittableColumnsLayout",
                    components:[
                        {
                            kind:"Button",
                            classes:"blueButton",
                            onclick:"handleBackTapped",
                            content:"Back"
                        },
                        { style:"width:10px" },
                        {
                            kind:"Button",
                            name:"submitButton",
                            classes:"blueButton",
                            onclick:"handleButtonTapped",
                            content:"Submit"
                        }
                    ]
                },
                { style:"height:100px" }
            ]
        }
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
        payLoad.devinterest = this.$.txtDevInterest.getValue();
        payLoad.projectinterest = this.$.txtProjectInterest.getValue();
        payLoad.attendedby = this.$.txtAttendedBy.getValue();
        payLoad.heardfrom = this.$.txtKnowAbout.getValue();
        payLoad.notifycall = this.$.txtNotifyCall.getValue();
        payLoad.notifysms = this.$.txtNotifySMS.getValue();
        payLoad.notifyemail = this.$.txtNotifyEmail.getValue();
        payLoad.secret_key = "eregmct2640e6d";
        return payLoad;
    },
    handleButtonTapped:function(inSender,inEvent) {
        this.myPayLoad = this.global.getObject("PAYLOAD");
        var formData = this.getFormData();
        this.myPayLoad.devinterest = formData.devinterest;
        this.myPayLoad.projectinterest = formData.projectinterest;
        this.myPayLoad.attendedby = formData.attendedby;
        this.myPayLoad.heardfrom = formData.heardfrom;
        this.myPayLoad.notifycall = formData.notifycall;
        this.myPayLoad.notifysms = formData.notifysms;
        this.myPayLoad.notifyemail = formData.notifyemail;
        this.myPayLoad.secret_key = "eregmct2640e6d";
        
        if (this.$.txtAgree.getValue() == false) {
            this.phoneGap.alert("Please agree with the disclaimer before submitting the registration form.");
        } else {
            //this.bubble("onHandleButtonTapped");
            this.submitForm(this.myPayLoad);
        }
    },
    handleBackTapped:function(inSender,inEvent) {
        this.bubble("onBackTapped");
    },
    submitForm:function(payload){
        this.$.submitButton.setDisabled(true);
        console.log("Submitting Payload...");
        var _this = this;
        var myPostman = new go.Postman();
        console.log(this.getUrl());
        myPostman.init(this.getUrl(),80,10000);
        var extraParam = {};
        extraParam.contentType = "form";

        myPostman.postTo("",payload,onPostSuccess,onPostError,extraParam);
        function onPostSuccess(inEvent,inResponse){
            _this.phoneGap.alert("Registration Successful.");
            _this.$.submitButton.setDisabled(false);
            _this.bubble("onHandleButtonTapped");
            console.log(inResponse);
        }
        function onPostError(error){
            _this.$.submitButton.setDisabled(false);
            _this.phoneGap.alert("There's an error connecting to server, try again later.");
        }
    },
    resetForm:function(){
        this.$.txtAgree.setValue(true);
        this.$.txtProjectInterest.setValue("1");
        this.$.txtKnowAbout.setValue("Internet");
        this.$.txtDevInterest.setValue("Sgl/Double Storey Link");
        this.$.txtAttendedBy.setValue("1");
        this.$.txtNotifyEmail.setValue(true);
        this.$.txtNotifySMS.setValue(true);
        this.$.txtNotifyCall.setValue(true);
    }

});