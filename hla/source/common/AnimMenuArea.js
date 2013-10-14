enyo.kind({
    name: "AnimMenuArea",
    kind: "Control",
    fit:true,
    global: go.Global,
    nav: Navigator,
    classes:"mainBg",
    style:"position:relative;overflow:hidden",
    components: [
        {
        	name:"btnPhoto05",
        	kind:"PhotoButton",
        	classes:"btn1",
            title:"Company Profile",
            page:null,
            ontap:"handleTap",
        	endY:196
        },
        {
        	name:"btnPhoto06",
        	kind:"PhotoButton",
        	classes:"btn2",
            title:"CEO Message",
            page:"CEOMessagePage",
            ontap:"handleTap",
        	endY:185
        },
     	{
        	name:"btnPhoto07",
        	kind:"PhotoButton",
        	classes:"btn3",
            title:"Career with HLA",
            page:null,
            ontap:"handleTap",
        	endY:210
        },
        {
        	name:"btnPhoto08",
        	kind:"PhotoButton",
        	classes:"btn4",
            title:"Income Potential",
            page:"IncomePage",
            ontap:"handleTap",
        	endY:196
        },
        {
        	name:"btnPhoto01",
        	kind:"PhotoButton",
        	classes:"btn5",
            title:"Our Stories",
            page:"TestimonialPage",
            ontap:"handleTap",
        	endY:410
        },
        {
        	name:"btnPhoto02",
        	kind:"PhotoButton",
        	classes:"btn6",
            title:"",
            page:null,
            ontap:"handleTap",
        	endY:407
        },
        {
        	name:"btnPhoto03",
        	kind:"PhotoButton",
        	classes:"btn7",
            title:"",
            page:null,
            ontap:"handleTap",
        	endY:414
        },
        {
        	name:"btnPhoto04",
        	kind:"PhotoButton",
        	classes:"btn8",
            title:"Sign up now",
            page:null,
            ontap:"handleTap",
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
    	this.$["btnPhoto0"+this.photoIndex].applyStyle("top", data.value+"px");
  	},
    startDrop:function(photoIndex) {
    	var anim = new enyo.Animator({
		      duration: 180,
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
    handleTap:function(inSender,inEvent) {
        //console.log(inSender.title);
        if(inSender.page != null){
            this.nav.gotoPage(inSender.page);
        }
    },
    photoIndexChanged:function(){
    	if (this.photoIndex <= this.maxPhotos) {
    		this.startDrop(this.photoIndex);
    	} 
    }

    
});