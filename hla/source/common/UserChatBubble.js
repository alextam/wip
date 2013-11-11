enyo.kind({
    name: "UserChatBubble",
    kind: "Control",
    components: [
        {
        	tag:"div",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			kind:"Image",
        			name:"imgPhoto",
        			style:"width:95px;height:115px;margin:10px;"
        		},
        		{
        			layoutKind: "FittableRowsLayout",
        			components:[
        				{
        					name:"txtChat",
        					classes:'twitterBubble',
        					content:"Set Chat Bubble..."
        				}
        			]
        			
        		}
        	]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
        }
    },
    dataChanged: function() {
    	this.$.imgPhoto.setSrc("assets/img/samples/"+this.data.photo);
    	this.$.txtChat.setContent(this.data.goal);
    }
});