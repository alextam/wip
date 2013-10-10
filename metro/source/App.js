enyo.kind({
	name: "App",
	kind: "FittableRows",
    classes:"enyo-fit enyo-unselectable",
	nav: Navigator,
	components:[
		{
            kind:"Header",
            buttons:[
                {
                    kind:"LogoButton"                     
                },
                {
                    kind:"LogOutButton",
                    position:"right"
                }
            ]
        },
        {
            kind:"ParallaxBG"
        },
        {
            kind:"MenuScroller"
        }
    ],		
	create: function() {
		this.inherited(arguments);
	},
	rendered: function() {
		this.inherited(arguments);
	}
    
});