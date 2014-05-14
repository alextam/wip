enyo.kind({
    name: "DrawerInputLeft",
    kind: "Control",
    components: [
        {
        	tag:"h1",
        	classes:"headerTxt",
        	content:"Annual Premium"
        },
        {
        	classes:"sliderContainer",
        	components:[
        		{
        			kind:"onyx.Slider",
                    classes:"icon6",
        			increment:10
        		}
        	]
        	
        },
        { style:"height:10px" },
        {
        	tag:"h1",
        	classes:"headerTxt",
        	content:"Sum Insured"
        },
        {
        	classes:"sliderContainer",
        	components:[
        		{
        			kind:"onyx.Slider",
                    classes:"icon7",
        			increment:10
        		}
        	]
        	
        },
        { style:"height:10px" },
        {
        	tag:"h1",
        	classes:"headerTxt",
        	content:"Life Insured"
        },
        {
        	classes:"sliderContainer",
        	components:[
        		{
        			kind:"onyx.Slider",
                    classes:"icon8",
        			increment:10
        		}
        	]
        	
        }
    ]
});