enyo.kind({
    name: "VideoButton",
    kind: "Control",
    classes:"videoButtonBase",
    components: [
        /*
        {
        	tag:"div",
        	name:"picFrame",
        	classes:"pictureFrame"
        },
        */
        {
            tag:"video",
            classes:"pictureFrame",
            ontap:"handlePlayPauseVideo",
            attributes:{
                controls:false,
                poster:"assets/img/posterCEO.jpg",
                src:"assets/video/ceovid.mp4",
                width:300,
                height:220,
                type:"video/mp4"
            }
        },
        {
        	tag:"h1",
        	name:"txtPhotoTitle",
        	classes:"photoH1 seanFont",
        	content:"Set Title..."
        }
    ],
    published:{
        isPlaying:false,
        title:null		
    },
    handlePlayPauseVideo:function(inSender,inEvent) {
        if (this.getIsPlaying()) {
            this.setIsPlaying(false);
            //inSender.hasNode().currentTime = 0;
            inSender.hasNode().pause();
        } else {
            inSender.hasNode().play();
            this.setIsPlaying(true);
            inSender.hasNode().webkitEnterFullscreen();
        }
    },
    create: function() {
        this.inherited(arguments);
      	if (this.title != null) {
      	    this.titleChanged();
      	}  
    },
    titleChanged: function() {
    	this.$.txtPhotoTitle.setContent(this.title);
    }
});