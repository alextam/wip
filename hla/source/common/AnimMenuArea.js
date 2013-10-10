enyo.kind({
    name: "AnimMenuArea",
    kind: "Control",
    fit:true,
    classes:"mainBg",
    style:"position:relative;overflow:hidden",
    components: [
        {
        	name:"btnPhoto05",
        	kind:"PhotoButton",
        	classes:"btn1",
        	endY:196
        },
        {
        	name:"btnPhoto06",
        	kind:"PhotoButton",
        	classes:"btn2",
        	endY:185
        },
     	{
        	name:"btnPhoto07",
        	kind:"PhotoButton",
        	classes:"btn3",
        	endY:210
        },
        {
        	name:"btnPhoto08",
        	kind:"PhotoButton",
        	classes:"btn4",
        	endY:196
        },
        {
        	name:"btnPhoto01",
        	kind:"PhotoButton",
        	classes:"btn5",
        	endY:410
        },
        {
        	name:"btnPhoto02",
        	kind:"PhotoButton",
        	classes:"btn6",
        	endY:407
        },
        {
        	name:"btnPhoto03",
        	kind:"PhotoButton",
        	classes:"btn7",
        	endY:414
        },
        {
        	name:"btnPhoto04",
        	kind:"PhotoButton",
        	classes:"btn8",
        	endY:413
        }
    ],
    published:{
    	maxPhotos:8,
    	photoIndex:1
    },
    create: function() {
        this.inherited(arguments);
        this.startDrop(this.photoIndex);
        
    },
    applyTransition: function(data) {
    	console.log("Animating Card "+this.photoIndex);
    	this.$["btnPhoto0"+this.photoIndex].applyStyle("top", data.value+"px");
  	},

    startDrop:function(photoIndex) {
    	console.log("Dropping Card "+photoIndex);
    	var anim = new enyo.Animator({
		      duration: 520,
		      startValue: 0,
		      endValue: this.$["btnPhoto0"+photoIndex].endY,
		      node: this.$["btnPhoto0"+photoIndex].hasNode(),
		      onStep: enyo.bind(this, this.applyTransition),
		      onEnd: enyo.bind(this, function (data) {
		      	this.applyTransition({value: this.$["btnPhoto0"+photoIndex].endY});
		      	this.setPhotoIndex( this.getPhotoIndex()+1 );
		      })
	    });
	    anim.play();	

    },
    photoIndexChanged:function(){
    	if (this.photoIndex <= this.maxPhotos) {
    		this.startDrop(this.photoIndex);
    	}
    }

    
});