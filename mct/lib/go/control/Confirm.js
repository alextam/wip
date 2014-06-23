enyo.kind({
	kind: onyx.Popup,
	name: "go.Confirm",
	classes:"goAlert",
	centered: true,
	floating: true,
	scrim: true,
	autoDismiss: false,
	confirmValue: false,
	statics: {
		confirm: function(msg, title, fn) {
			if (typeof title == 'function') {
				fn = title;
				title = undefined;
			}
			if (!fn || typeof fn != 'function') {
				new Error("Callback is required for confirm");
			}
			var alert = new go.Confirm({
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
			content: this.message
		});
		this.addControl(control);

		this.createComponent({
			classes: "setWidthFull",
			components: [
				{
					classes:"inflatePadding roundedBottom",
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							kind: onyx.Button,
							content: "Cancel",
							classes: 'setWidth48 alertButtonCancel',
							onclick: "handleCancel"
						},
						{
							fit:true 
						},
						{
							kind: onyx.Button,
							content: "OK",
							classes: 'setWidth48 alertButtonOK',
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
		
		this.confirmValue = true;
		this.hide();

		return true;
	},
	handleCancel: function(inSender,inEvent) {
		inEvent.preventDefault();
		this.hide();

		return true;
	},
	onHide: function() {
		if (this.fn) {
			this.fn.call(null, this.confirmValue);
		}
		
		this.destroy();
	}
});