enyo.kind({
	kind: onyx.Popup,
	name: "go.Alert",
	classes:"goAlert",
	centered: true,
	floating: true,
	scrim: true,
	statics: {
		alert: function(msg, title, fn) {
			if (typeof title == 'function') {
				fn = title;
				title = undefined;
			}
			var alert = new go.Alert({
				message: msg,
				title: title,
				fn: fn
			});
			alert.render();

			var body = document.body;
			body.appendChild(alert.parentNode);
			alert.show();
		}
	},
	handlers: {
		onHide: "onHide"
	},
	create: function() {
		this.inherited(arguments);

		if (this.title) {
			this.createComponent({
				tag: "h1",
				content: this.title,
				classes: "title"
			});
		}

		var control = new enyo.Control({
			tag:"div",
			classes:"centerDiv roundedCorner alertContent",
			components:[
				{
					kind: "Scroller",
					name: "contentControl",
					touch:true, 
					thumb:true,
					style:"max-height:125px !important",
					horizontal: "hidden",
					vertical: "true",
					components:[
						{
							allowHtml:true,
		 					content: this.message
		 				}
		 			]
		 		}
		 	]
		});
		this.addControl(control);

		this.createComponent({
			classes: "setWidthFull",
			components: [
				{
					classes:"inflatePadding roundedBottom",
 					components:[ 
						{
							kind: go.StateButton,
							content: "OK",
							classes: 'setWidthFull alertButtonOK',
							onclick: "handleOk"
						} 
					]
				}
			]
		});
	},
	show: function() {
		this.inherited(arguments);
		
		this.updatePosition();
	},
	updatePosition: function() {
		var d = this.calcViewportSize();
		var b = this.getBounds();
		var left = Math.max( ( ( d.width - b.width ) / 2 ), 0 );
		var top = Math.max( ( ( d.height - b.height ) / 2 ), 0 );
		this.targetPosition = {
			bottom: top,
			left: left
		};

		this.inherited(arguments);
	},
	handleOk: function(inSender,inEvent) {
		inEvent.preventDefault();
		document.activeElement.blur();
		this.hide();
		
	},
	onHide: function() {
		if (this.fn) {
			this.fn.call();
		}
		enyo.Signals.send('onRelease');
		return true;
		this.destroy();
	}
});