enyo.kind({
    name: "Preloader",
    kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable greatEasternWhite",
    components: [
        {
        	classes:"padding10px",
		    components: [
		        {
		        	style:"height:145px"
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
		        	components:[
						{ 
							tag:"div",
							classes:"centerDiv",
							style:"width:120px;height:30px;",
							components:[
								{
									kind:"Image", 
									style:"width:20px;height:20px;margin:5px",
									classes:"floatLeft",
		 							src:"assets/img/preloader.gif"
								},
								{
									classes:"floatLeft",
									style:"width:80px; margin:5px",
 									content:"Loading ... " 
								}
							]
							
						}
					]
				}
		    ]
		}
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
		enyo.job("delay", enyo.bind(this, this.gotoMainPanel) , 1200);
	}, 

	gotoMainPanel:function(){
		//this.nav.gotoPage("MainPanels");
		new MasterPanel().renderInto(document.body);
	}
});