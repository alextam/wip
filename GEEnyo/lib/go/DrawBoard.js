enyo.kind({
    name: "DrawBoard",
    kind: "Control",
    components: [
        {
            name:"canvasControl",
        	kind:"Canvas",
            recording: false,
            points: []
        }
    ],
    handlers: {
        ondown: "startRecord",
        onmove: "record",
        onup: "stopRecord",
        //ontouchdown: "startRecord",
        //ontouchmove: "record",
        //ontouchup: "stopRecord",
        //ongesturestart: "gesturestartHandler",
        //ongestureend: "gestureendHandler",
        ondrag: "startDrag",
        ongesturechange: "gesturechangeHandler"
    },
    published:{
        mode:"draw",
        offSetX:276,
        offSetY:136,
        RGB:"0,0,0",
        lineThickness:5,
        size:{
        	width:708,
        	height:250
       	}		
    },
    create: function() {
        this.inherited(arguments);
    },
    rendered: function(){
        this.inherited(arguments);
        this.sizeChanged();
        //this.modeChanged();
    },
    startDrag: function(inEvent, inEvent) {
        if (this.getMode() == "pan") {
            //console.log(inEvent.ddx);
            //console.log(inEvent.ddy);
            this.bubble("onPanChanged",{event:inEvent});
        }
    },
    gesturechangeHandler: function(inSender, event) {
        //console.log("***** gesturechange: event.scale: " + event.scale + ", event.centerX: " + event.centerX + ", event.centerY: " + event.centerY);
        if (this.getMode() == "zoom") {
            this.bubble("onZoomPinch",{scale:event.scale});
        }
    },
    sizeChanged:function() {
        this.$.canvasControl.setStyle("width:"+this.size.width+"px;height:"+this.size.height+"px;border:1px solid #ccc;");
    	this.$.canvasControl.setAttributes({width:this.size.width,height:this.size.height});
    },   
    startRecord: function(inSender, inEvent) {
        if((this.getMode() == "draw") || (this.getMode() == "erase")) {
            var _this = this;
            var canvasCtrl = this.$.canvasControl;
            this.recording = true;
            if(node = canvasCtrl.hasNode()) {
              canvasCtrl.points.push({
                    x: inEvent.clientX - _this.offSetX,
                    y: inEvent.clientY - _this.offSetY,
                    d: false,
                    p: 1
              });
            }
            this.update();
        }
    },
      
    stopRecord: function() {
        if((this.getMode() == "draw") || (this.getMode() == "erase")) {
            this.recording = false;
        }
    },
      
    record: function(inSender, inEvent) {
        if((this.getMode() == "draw") || (this.getMode() == "erase")) {
            var _this = this;
            var canvasCtrl = this.$.canvasControl;
            if( this.recording ) {
                if(node = canvasCtrl.hasNode()) {
                      canvasCtrl.points.push({
                        x: inEvent.clientX - _this.offSetX,
                        y: inEvent.clientY - _this.offSetY,
                        d: true,
                        p: 1
                      });
                }
                this.update();
            }
        }
    },
      
    update: function() {
        var canvasCtrl = this.$.canvasControl;
        var canvas = canvasCtrl.hasNode();
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            // this.log(ctx.canvas.width);
            ctx.lineJoin = "round";

            ctx.lineWidth = this.getMode() == "erase" ? 15:this.lineThickness;
            var i = canvasCtrl.points.length - 1; 

            ctx.strokeStyle = "rgba("+ this.RGB +","+ canvasCtrl.points[i].p + ")";
            ctx.beginPath();
            if(canvasCtrl.points[i].d && i){
                ctx.moveTo(canvasCtrl.points[i-1].x, canvasCtrl.points[i-1].y);
            }else{
                ctx.moveTo(canvasCtrl.points[i].x-1, canvasCtrl.points[i].y);
            }
            ctx.lineTo(canvasCtrl.points[i].x, canvasCtrl.points[i].y);
            ctx.closePath();
            ctx.stroke();
        }
    },
    clearCanvas: function(){
        var canvasCtrl = this.$.canvasControl;
        var canvas = canvasCtrl.hasNode();
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var b = this.getBounds();
            ctx.clearRect(0, 0, b.width, b.height);
        }
    },
    modeChanged:function() {
        switch(this.mode) {
            case "draw":
                this.switchToPencil();
            break;

            case "erase":
                this.switchToEraser();
            break;
        }    
    },  
    switchToPencil: function(){
        this.setMode("draw");
        if(this.getMode() == "draw") {
            var canvasCtrl = this.$.canvasControl;
            var canvas = canvasCtrl.hasNode();
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                var b = this.getBounds();
                ctx.lineWidth = this.lineThickness;
                ctx.globalCompositeOperation = "source-over";
            }
        }
    },
    switchToEraser: function(){
        this.setMode("erase");
        if (this.getMode() == "erase"){
            var canvasCtrl = this.$.canvasControl;
            var canvas = canvasCtrl.hasNode();
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                var b = this.getBounds();
                ctx.lineWidth = 55;
                ctx.globalCompositeOperation = "destination-out";
            }
        }
    },
    saveImage: function() {
        return  this.$.canvasControl.hasNode().toDataURL();
    },
    pinchMode: function() {
        this.setMode("zoom");
    },
    undoCanvas: function(){
        var canvasCtrl = this.$.canvasControl;
        var canvas = canvasCtrl.hasNode();
        if (canvas.getContext && canvasCtrl.resLength > 1) {
            var ctx = canvas.getContext('2d');
            canvasCtrl.resLength--;
            console.log(canvasCtrl.resLength);
            ctx.putImageData(canvasCtrl.restorePoints[canvasCtrl.resLength],0,0);
        } else if (canvasCtrl.resLength ==1){
            var ctx = canvas.getContext('2d');
            var b = this.getBounds();
            // clear canvas
            ctx.clearRect(0, 0, b.width, b.height);
            canvasCtrl.resLength = 0;
        }
    },
    redoCanvas: function(){
        var canvasCtrl = this.$.canvasControl;
        var canvas = canvasCtrl.hasNode();
        var redoTracker =  canvasCtrl.restorePoints.length - 1;
        console.log(redoTracker);
        if (canvasCtrl.resLength != redoTracker) {

            var ctx = canvas.getContext('2d');
            canvasCtrl.resLength++;
            console.log(canvasCtrl.resLength);
            ctx.putImageData(canvasCtrl.restorePoints[canvasCtrl.resLength],0,0);
           
        }
    }
});