enyo.kind({
    name: "PromotionBanner",
    kind: "Control",
    components: [
        {
   			kind:"ImageCarousel",
   			name:"imgCarouselControl", 
   			onload:"carouselLoad", 
   			onZoom:"zoom", 
   			onerror:"error", 
   			onTransitionStart: "carouselTransitionStart", 
   			onTransitionFinish: "carouselTransitionFinish",
   			style:"height:186px"
   		},
   		{
   			tag:"div",
   			kind: "FittableColumns",
   			classes: "carouselIndexDiv",
	   			components: [
				{
					tag:"div",
					name:"adSelector0",
					classes:"sliderBullet boxShadow"
					 
				},
				{
					tag:"div",
					name:"adSelector1",
					classes:"sliderBullet boxShadow"
				},
				{
					tag:"div",
					name:"adSelector2",
					classes:"sliderBullet boxShadow"
				}
			]
   		}
    ],
    create:function(){
    	this.inherited(arguments);
    	this.urls = [
			"assets/img/adSample01.png",
			"assets/img/adSample01.png",
			"assets/img/adSample01.png"
		];
		this.$.imgCarouselControl.setImages(this.urls);
		//Starts at 2nd Pic which is the center
		this.$.imgCarouselControl.next();
		this.updateAdSelector(this.$.imgCarouselControl.index);
    },
    updateAdSelector : function(index) {
		this.$.adSelector0.removeClass('bulletSelected');
		this.$.adSelector1.removeClass('bulletSelected');
		this.$.adSelector2.removeClass('bulletSelected');
		switch(index){
			case 0:
				this.$.adSelector0.addClass('bulletSelected');
			break;

			case 1:
				this.$.adSelector1.addClass('bulletSelected');
			break;

			case 2:
				this.$.adSelector2.addClass('bulletSelected');
			break;
		}
 	},
 	carouselLoad: function(inSender, inEvent){
		//Do Nothing
		
  	},
	carouselTransitionStart: function(inSender, inEvent) {
		this.updateAdSelector(inEvent.toIndex);
 	}
});