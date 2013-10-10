enyo.kind({
	kind: onyx.Popup,
	name: "go.Notification",
	centered: true,
	floating: true,
	statics: {
		notify: function(msg) {
			var alert = new go.Notification({
				message: msg
			});
			alert.render();

			var body = document.body;
			body.appendChild(alert.parentNode);
			alert.show();
		},
		hideIn: 5000,
		animate: true,
		visible: false
	},
	handlers: {
		onHide: "onHide",
		onResize: ""
	},
	create: function() {
		if (go.Notification.visible !== false) {
			go.Notification.visible.destroy();
			go.Notification.visible = false;
		}

		this.inherited(arguments);

		this.autoDismiss = false;
		this.style = "background: black;border:1px solid #333;";

		this.createComponent({
			name: "msgTxt",
			tag:"div",
			classes:"centerDiv",
			style:"background:black;width:226px;color:#ccc;text-align:center;",
			content: this.message,
			ontap: "handleTap"
		});

		this.timer = setTimeout(enyo.bind(this, this.disappear), go.Notification.hideIn || 5000);

		go.Notification.visible = this;
	},
	show: function() {
		this.inherited(arguments);
		
		this.updatePosition();

		this.lightUpText();
	},
	updatePosition: function() {
		var d = this.calcViewportSize();
		var b = this.getBounds();
		var left = Math.max( ( ( d.width - b.width ) / 2 ), 0 );
		this.targetPosition = {
			bottom: 50,
			left: left
		};

		this.inherited(arguments);
	},
	lightUpText: function() {
		if (!go.Notification.animate) {
			return;
		}

		var _this = this;

		var args = arguments;
		this.textAnim = new enyo.Animator({
			duration: 1000,
			startValue: 0,
			endValue: 102,
			node: this.$.msgTxt.hasNode(),
			onStep: enyo.bind(this, this.applyTextHighlight),
			onEnd: enyo.bind(this, function() {
				//_this.inherited(args);
			})
		});
		this.textAnim.play();
	},
	applyTextHighlight: function(data) {
		var color = ''+Math.floor(255 - data.value).toString(16);
		if (color.length === 1) {
			color = '0' + color;
		}
		this.$.msgTxt.applyStyle('color', '#'+color+color+color);

		color = ''+Math.floor(153 - data.value).toString(16);
		if (color.length === 1) {
			color = '0' + color;
		}
		this.applyStyle('border-color', '#'+color+color+color);
	},
	disappear: function() {
		this.hide();
	},
	hide: function(dontAnimate) {
		var _this = this;
		var args = arguments;

		if (this.textAnim) {
			this.textAnim.stop();
		}

		if (!go.Notification.animate) {
			dontAnimate = true;
		}

		if (!dontAnimate) {
			this.hideAnim = new enyo.Animator({
				duration: 500,
				startValue: 1,
				endValue: 0,
				node: this.hasNode(),
				onStep: enyo.bind(this, this.applyFadeOut),
				onEnd: enyo.bind(this, function() {
					_this.inherited(args);
				})
			});
			this.hideAnim.play();
		} else {
			this.inherited(args);
		}
	},
	applyFadeOut: function(data) {
		this.applyStyle('opacity', data.value);
	},
	handleTap: function(inSender, inEvent) {
		this.hide(true);
		inEvent.preventDefault();
		return true;
	},
	onHide: function() {
		this.destroy();
	},
	destroy: function() {
		clearTimeout(this.timer);

		this.inherited(arguments);
	}
});