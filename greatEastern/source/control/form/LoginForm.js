enyo.kind({
    name: "LoginForm",
    kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable greatEasternWhite",
    components: [
        {
        	classes:"padding10px",
        	components:[
        		{
        			tag:"h5",
        			classes:"versionHeader",
        			content:"ver 0.0.1"
        		},
        		{
        			style:"height:30px"
        		},
        		{
        			tag:"div",
        			classes:"centerDiv greatEasternLogo"
        		},
        		{
		        	tag:"h5",
		        	classes:"taglineHeader",
		        	content:"A member of the OCBC Group"
		        },
        		{	
					classes:"formContainerFixed roundedCorner",
					components:[
						{
							title: "Agent A/C Account",
							kind:"InputItemControl",
							maxlength:20
						},
						{
							title: "Password",
							kind:"InputItemControl",
							type:"password",
							maxlength:20
						},
						{
							tag:"hr" 
 						},
						{
							kind:"onyx.Button",
							name:"btnLogin",
							style:"margin-top:5px;margin-bottom:5px;height:45px",
							classes:"setWidthFull geButtonRed roundedCorner",
							content:"Ok",
 							ontap:"handleBtnLogin"
						}
					]
				}
        			
        	]
        }
    ],
    handleBtnLogin:function(inSender,inEvent) {
    	new Preloader().renderInto(document.body);
    }
});