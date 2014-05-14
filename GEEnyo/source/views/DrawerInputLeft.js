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
        			increment:10
        		}
        	]
        	
        }
    ]
});