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
                                    content:"<p>We are based in Malaysia but we work for people all around the world.</p><p>If you want to share a new project with us, or simply just want to find out how we can help you with mobile development, please send us your info and we will get in in touch with you.</p><p>If you hate forms for some reason, you can either call us or drop us an email.</p>"
                                },
                                {
                                    tag:"div",
                                    classes:"contact camo"
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
    ]
});