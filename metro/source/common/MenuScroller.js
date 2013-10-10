enyo.kind({
    name: "MenuScroller",
    kind: "Control",
    classes:"scrollMenu",
    components: [
        {   	
        	kind: "Scroller",
        	name: "contentControl",
        	fit:true,
        	touch:true, 
        	thumb:true,
        	vertical:"hidden",
         	components:[
        		{
        			tag:"div",
        			style:"width:2048px;height:308px;",
        			components:[
        				{
        					tag:"div",
        					classes:"centerDiv",
        					style:"border:1px dashed red;width:1536px;height:308px;background:#fff;"
        				}
        			]
        		}
        	]
        }
    ]
});