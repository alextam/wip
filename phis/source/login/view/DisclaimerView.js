enyo.kind({
    name: "DisclaimerView",
    kind: "Control",
    classes:"inflatePadding",
    components: [
	    {
	        layoutKind: "FittableColumnsLayout",
	        classes:"setWidthFull",
	    	components:[
		        {
		        	tag:"div",
		        	classes:"setWidth30",
		        	components:[
		        		{
		        			kind:"go.IconButton",
                            name:"btnConfiguration",
                            icon:"icon-cog icon-2x",
                            ontap:"handleBtnConfiguration",
                            classes:"whiteConfigurationButton"
		        		}

		        	]
		        },
		        {
		        	tag:"div",
		        	fit:true,
		        	allowHtml:true,
		        	classes:"txtAlignCenter",
		        	content: "<h1 class='disclaimer'>Disclaimer:</h1><small class='whiteLabel'>You are getting logged in. You are accepting the terms and MOH guidelines maintaining the security and confidentiality of the patient information.</small>"
		        },
		        {
		        	tag:"div",
		        	classes:"setWidth30"
		        }
	        ]
	    }
    ]
});