enyo.kind({
    name: "ContentControl",
    version: "1.0.0",
    kind: "Control",
    components: [
        {
        	tag:"div",
        	name:"overAllContentWrapper",
        	components:[
        		{
        			tag:"div",
        			classes:"cyan inflatePadding",
        			style:"padding-top:15px;text-align:center !important; height:500px;",
        			components: [
		        		
		        		{
		        			kind:"Image",
		        			src:"assets/img/sample.png"
		        		}
		        	]		

        		},
                {
                    classes:"seperator test",
                    components: [
                        {
                            content:"Here it is..."
                        }
                    ]
                },
        		{
                    classes:"coffee-cup",
        			style:"height:500px;"
        		},
        		{
        			classes:"coffee-napkin",
        			style:"height:500px;"

        		},
        		{
         			classes:"cyan-mat",
        			style:"height:745px;"

        		},
                {
        			classes:"coffee-black txtAlignCenter",
                    style:"height:525px;",
                    components: [
                        {
                            tag:"h1",
                            classes:"goCreamHeader",
                            content:"Let's Get Connected"
                        },
                        {
                            tag:"div",
                            style:"text-align:center",
                            layoutKind: "FittableColumnsLayout",
                            components:[
                                {
                                    tag:"div",
                                    classes:"contact",
                                    allowHtml:true,
                                    components:[
                                        {
                                            tag:"div",
                                            style:"width:420px;padding:15px",
                                            components:[
                                                {
                                                    tag:"p",
                                                    content:"We are based in Malaysia but we work for people all around the world."         
                                                },
                                                {
                                                    tag:"p",
                                                    content:"If you want to share a new project with us, or simply just want to find out how we can help you with mobile development, please send us your info and we will get in in touch with you."         
                                                },
                                                {
                                                    tag:"p",
                                                    content:"If you hate forms for some reason, you can either call us or drop us an email."
                                                },
                                                {
                                                    tag:"div",
                                                    style:"height:45px",
                                                    classes:"marginBottom-15px"
                                                },
                                                {
                                                    tag:"p",
                                                    classes:"smallText",
                                                    content:"Phone : (+60) 7490 2183"
                                                },
                                                {
                                                    tag:"p",
                                                    classes:"smallText",
                                                    content:"Email : contact@goingenious.com"
                                                }
                                            ]
                                        }
                                        
                                    ]
                                },
                                {
                                    tag:"div",
                                    classes:"contact",
                                    components:[
                                        {
                                            classes:"goContactForm",
                                            label:"<h5>Ingenious Lab Sdn Bhd (1023342-X)</h5><small>No. 1, Jalan PJU 5/13, Dataran Sunway, Kota Damansara,<BR>47810 Petaling Jaya, Selangor D.E, Malaysia.</small>",
                                            kind:"go.ContactForm",
                                            onContactSubmitReady:"handleFormSubmit"
                                        }                                        
                                    ]
                                    
                                } 
                            ]
                        }

                    ]
                    
        		},
        		{
        			content:"Section 6",
                    name:"footerControl",
        			classes:"footer",
        			style:"height:70px;"

        		}
        	]
        	
        	
        }
    ],
    handleFormSubmit:function(inSender,inEvent){
        console.log(inEvent);
    }
});