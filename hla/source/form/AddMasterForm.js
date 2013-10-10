enyo.kind({
	name: "AddMasterForm",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Add Vehicle",
            buttons:[
            	{
			    	name:"btnBack",
			    	visible:true,
			    	content:"Back",
			    	page:"MasterForm",
			    	event:"onBtnBack"
		    	}
            ],
            onBtnBack:"handleBtnBack"
        },
      	{
        	layoutKind: "FittableColumnsLayout",
        	style:"margin:1px",
        	components:[
        		{
        			tag:"div",
        			classes:"breadCrumb1",
        			content:"NEW"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"Vehicle Master"
        		},
        		{ fit:true },
        		{
					classes:"logoPadding",
					style:"width:133px;"
					/*
					components:[
						{
							kind:"Image",
							src:"./assets/img/logo.png",
							style:"width:133px;"
						}
					]
					*/
        		}
        	]
        },
        {
			name:"addMasterForm",
			classes:"setWidthFull inflatePadding",
			components:[
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Registration Number"
						},
						{ 
							name:"txtRegistrationNo",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Vehicle Registration No...",
							fit:true,
							validation:"required",
							maxlength:15
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Chassis Number"
						},
						{ 
							name:"txtChassisNo",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Chassis Number...",
							fit:true,
							validation:"required",
							maxlength:20
						},
						{
							kind:"Button",
							style:"height:52px;width:90px",
							classes:"borderless breadCrumb2",
							content:"Validate",
							ontap:"handleBtnValidate"
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Engine Number"
						},
						{ 
							name:"txtEngineNo",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Engine Number...",
							fit:true,
							validation:"required",
							maxlength:12
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Registration Date"
						},
						{ 
							name:"txtRegistrationDate",
							kind:"InputDateTimeControl",
							type:"date",
							classes:"appFormDeco",
							fit:true,
							validation:"required",
							maxlength:15
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Registration Type"
						},
						{ 
							name:"pckStandardPicker",
							kind:"StandardPicker",
							classes:"whiteForm",
							fit:true,
							data:[
								{content:"Private",active:true},
								{content:"Commercial"}
							]
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Model"
						},
						{ 
							name:"txtModel",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Model Here...",
							fit:true,
							validation:"required",
							maxlength:80
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Model Descripton"
						},
						{ 
							name:"txtDescription",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Model Description Here...",
							fit:true,
							validation:"required",
							maxlength:100
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms last",
							content:"Model Year"
						},
						{ 
							name:"txtYear",
							kind:"InputItemControl",
							classes:"appFormDeco last",
							placeholder:"Enter Year Here...",
							fit:true,
							validation:"integer",
							maxlength:4
						}
					]
				},
				/*
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms last",
							content:"Photo"
						},
						{ 
							components:[
								{
									kind:"Button",
									classes:"borderless",
									style:"width:125px;height:125px;"
								}
							]
							
						}
					]
				},
				*/
				{
					classes:"txtAlignRight",							
					components:[
						{
							name:"btnAddNew",
							kind:"onyx.Button",
							style:"width:250px",
							classes:"blackButton",
							content:"Create Record",
							ontap:"handleBtnCreate"
						}
					]
				}
			]
        } 
         
	],
	published:{
	    data:null		
	},
	create: function() {
		this.inherited(arguments);
		if(this.data != null){
			this.dataChanged();
		}
		this.bubble("onSubPageHide");	
	},
	rendered: function() {
		this.inherited(arguments);
	},
	dataChanged: function() {
		if(this.data != null){
			if(this.data.type == "vehicleno"){
				this.$.txtRegistrationNo.setValue(this.data.value);
				this.$.txtRegistrationNo.setDisabled(true);
			} else {
				this.$.txtChassisNo.setValue(this.data.value);
				this.$.txtChassisNo.setDisabled(true);
			}
		}

	},
	handleBtnBack: function(inSender,inEvent) {
		this.bubble("onBackPage", {page:"MasterForm"});
	},
	handleBtnValidate: function(inSender,inEvent) {
		//alert("validate");
		if (String( this.$.txtChassisNo.getValue() ).trim("") == "" ){
			go.PhoneGapSuit.alert("Chassis Number Needed");
		} else {
			this.service = new Service().getSearchResult("chassis",this.$.txtChassisNo.getValue())
			.done(function(result){
				if (result.length) {
					go.PhoneGapSuit.alert("WARNING: This Chassis Number is invalid!");	
				}
			});
		}
	},
	handleBtnCreate: function(inSender,inEvent) {
		var _this = this;
		var validateUtil = new go.Validator();
		validateUtil.validate(this.$.addMasterForm,onSuccessValidate,onFailValidate);
		function onSuccessValidate(result){
			
			var payLoad = {};
			payLoad.vehicleno = _this.$.txtRegistrationNo.getValue();
			payLoad.chassis = _this.$.txtChassisNo.getValue();
			payLoad.engineno = _this.$.txtEngineNo.getValue();
			payLoad.registrationdate = moment(_this.$.txtRegistrationDate.getValue()).format("DD-MM-YYYY");
			payLoad.type = _this.$.pckStandardPicker.getValue();
			payLoad.model = _this.$.txtModel.getValue();
			payLoad.descripton = _this.$.txtDescription.getValue();
			payLoad.year = _this.$.txtYear.getValue();
			
			console.log(payLoad);
			this.service = new Service().saveRecord(payLoad)
			.done(function(result){
				go.PhoneGapSuit.alert("New Vehicle Record Added.");
				_this.bubble("onBackPage", {page:"MasterForm"});
			});
		}
		function onFailValidate(errorResults){
			var feedBackUser = new FeedBackUser();
			feedBackUser.handleFormError(errorResults);
		}
	}
});