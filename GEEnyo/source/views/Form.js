enyo.kind({
    name: "Form",
    kind: "Control",
    components: [
        {
            kind:"TitleSelector",
            name:"txtTitle",
            label:"Title"
        },
        {
        	kind:"FormItem",
        	label:"Name",
        	name:"txtName",
        	maxlength:100,
        	placeholder:"Insert Name Here..."
        },
        {
        	kind:"FormItem",
        	label:"Telephone (house)",
        	name:"txtTelephone",
        	maxlength:12,
        	placeholder:"Insert House No. Here..."
        },
        {
        	kind:"FormItem",
        	label:"Telephone (mobile)",
        	name:"txtMobile",
        	maxlength:12,
        	placeholder:"Insert Mobile No. Here..."
        },
        {
        	kind:"FormItem",
        	label:"Email",
        	name:"txtEmail",
        	maxlength:125,
        	placeholder:"Insert Email Here..."
        },
        {
        	kind:"FormItem",
        	label:"Address",
        	name:"txtAddress",
        	maxlength:200,
        	placeholder:"Insert Address Here..."
        },
        {
            name:"txtRemaining",
            kind:"FormRemainingItem"
        },
        {
            name:"switchBox",
            kind:"SwitchBox"
        },
       
        {
            name:"txtStatus",
            label:"Status",
            kind:"StatusSelector"
        },
        {
            style:"height:10px"
        }
        /*
        {
            layoutKind: "FittableColumnsLayout",
            style:"width:708px",
            components:[
                {
                    fit:true
                },
                {
                    kind:"Button",
                    classes:"stdButton",
                    content:"Update"
                },
                {
                    style:"width:15px;height:40px;"
                },
                {
                    kind:"Button",
                    classes:"stdButton delete",
                    content:"Delete"
                }
            ]
        }
        */

    ],
    published:{
        data:null		
    },
    dataChanged:function() {
    	this.resetValues();
        this.$.txtTitle.setValue(this.data.title);
    	this.$.txtName.setValue(this.data.name);
    	this.$.txtTelephone.setValue(this.data.houseno);
    	this.$.txtMobile.setValue(this.data.mobileno);
    	this.$.txtEmail.setValue(this.data.email);
    	this.$.txtAddress.setValue(this.data.address);
        //console.log(this.data);
        var addressRemaining = {};
        addressRemaining.postcode = this.data.postcode;
        addressRemaining.country = this.data.country;
        this.$.txtRemaining.setData(addressRemaining);
        this.$.txtStatus.setValue(this.data.status);
    },
    resetValues:function(){
    	/*
        for(var i=0;i< this.controls.length;i++){
    		this.controls[i].reset();
    	}
        */
    }
});