/**
	_enyo.canvas.Image_ is a canvas control that draws an image, stretched to
	fit the rectangle specified	by the _bounds_ property.
*/
enyo.kind({
	name: "enyo.canvas.Image",
	kind: enyo.canvas.Control,
	published: {
		//* Source URL for the image
		src: "",
		width:"",
		height:"",
		context:""
	},
	//* @protected
	create: function() {
		this.image = new Image();
		this.inherited(arguments);
		this.srcChanged();
		
	},
	
	srcChanged: function() {
		if (this.src) {
			this.image.src = this.src;
		}

		this.setHeight(this.bounds.h);
		this.setWidth(this.bounds.w);
	},
	scale:function(ctx, scaleX, scaleY) {
		// console.log("Scale : "+ctx);

		ctx.translate(this.getWidth()/2, this.getHeight()/2,0);
        //if ((scaleX <= 1.2) && (scaleX > 0.9)){

        ctx.scale(scaleX,scaleY);
        //}
        ctx.translate(-(this.getWidth()/2), -(this.getHeight()/2),0);
        this.renderSelf(ctx);
	},

	renderSelf: function(ctx) {
		this.setContext(ctx);
		ctx.drawImage(this.image, this.bounds.l, this.bounds.t);
	}
});